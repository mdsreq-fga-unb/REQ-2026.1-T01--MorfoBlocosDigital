from rest_framework import status
from rest_framework.test import APITestCase

from core.models import Usuario, Morfema, PalavraValida, Tentativa, Atividade, Pergunta


def criar_usuario(email, tipo=Usuario.ALUNO, senha="senha123", nome=""):
    usuario = Usuario(email=email, username=email, tipo=tipo, first_name=nome)
    usuario.set_password(senha)
    usuario.save()
    return usuario


class RegistroTests(APITestCase):
    """RF02 / US01 — cadastro de usuários."""

    def test_cadastro_com_nome_composto_salva_nome_real(self):
        resp = self.client.post(
            "/api/auth/registro/",
            {
                "email": "ana@x.com",
                "username": "ana@x.com",
                "first_name": "Ana Maria Souza",
                "password": "senha123",
                "tipo": "aluno",
            },
            format="json",
        )
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
        usuario = Usuario.objects.get(email="ana@x.com")
        self.assertEqual(usuario.first_name, "Ana Maria Souza")

    def test_email_duplicado_e_recusado(self):
        criar_usuario("dup@x.com")
        resp = self.client.post(
            "/api/auth/registro/",
            {
                "email": "dup@x.com",
                "username": "dup@x.com",
                "first_name": "Duplicado",
                "password": "senha123",
                "tipo": "aluno",
            },
            format="json",
        )
        self.assertEqual(resp.status_code, status.HTTP_400_BAD_REQUEST)


class LoginTests(APITestCase):
    """RF01 / US02 — autenticação e identificação do usuário."""

    def test_login_retorna_token_e_me_traz_tipo_e_nome(self):
        criar_usuario("prof@x.com", tipo=Usuario.PROFESSOR, nome="Prof Carlos")

        resp = self.client.post(
            "/api/token/", {"email": "prof@x.com", "password": "senha123"}, format="json"
        )
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        token = resp.data["access"]

        me = self.client.get("/api/auth/me/", HTTP_AUTHORIZATION=f"Bearer {token}")
        self.assertEqual(me.status_code, status.HTTP_200_OK)
        self.assertEqual(me.data["tipo"], "professor")
        self.assertEqual(me.data["first_name"], "Prof Carlos")

    def test_credenciais_invalidas_retorna_401(self):
        criar_usuario("aluno@x.com")
        resp = self.client.post(
            "/api/token/", {"email": "aluno@x.com", "password": "errada"}, format="json"
        )
        self.assertEqual(resp.status_code, status.HTTP_401_UNAUTHORIZED)


class ValidadorTests(APITestCase):
    """RF19/RF20 — validação da combinação de blocos e registro da tentativa."""

    def setUp(self):
        self.aluno = criar_usuario("al@x.com")
        PalavraValida.objects.get_or_create(
            texto="infelizmente",
            defaults={"processo_morfologico": "Prefixação + Sufixação (in + feliz + mente)"},
        )
        self.client.force_authenticate(self.aluno)

    def test_combinacao_valida_retorna_sucesso_e_registra_tentativa(self):
        resp = self.client.post(
            "/api/validar-palavra/",
            {
                "blocos": [
                    {"texto": "in", "tipo": "prefixo"},
                    {"texto": "feliz", "tipo": "radical"},
                    {"texto": "mente", "tipo": "sufixo"},
                ]
            },
            format="json",
        )
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertTrue(resp.data["valida"])
        self.assertEqual(resp.data["palavra"], "infelizmente")
        self.assertTrue(
            Tentativa.objects.filter(usuario=self.aluno, palavra="infelizmente", acertou=True).exists()
        )

    def test_combinacao_invalida_retorna_falha(self):
        resp = self.client.post(
            "/api/validar-palavra/",
            {"blocos": [{"texto": "xyz", "tipo": "radical"}]},
            format="json",
        )
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertFalse(resp.data["valida"])
        self.assertTrue(
            Tentativa.objects.filter(usuario=self.aluno, palavra="xyz", acertou=False).exists()
        )


class ConteudoAdminTests(APITestCase):
    """RF04/06/08/10/12/14 — professor gerencia o catálogo; aluno é bloqueado."""

    def setUp(self):
        self.professor = criar_usuario("prof.adm@x.com", tipo=Usuario.PROFESSOR)
        self.aluno = criar_usuario("aluno.adm@x.com", tipo=Usuario.ALUNO)

    def test_professor_cria_e_remove_morfema(self):
        self.client.force_authenticate(self.professor)
        resp = self.client.post(
            "/api/morfemas/", {"texto": "sub", "tipo": "prefixo", "cor": "bg-red-500"}, format="json"
        )
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
        mid = resp.data["id"]
        self.assertTrue(Morfema.objects.filter(id=mid).exists())

        resp = self.client.delete(f"/api/morfemas/{mid}/")
        self.assertEqual(resp.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Morfema.objects.filter(id=mid).exists())

    def test_aluno_nao_cria_nem_remove_morfema(self):
        self.client.force_authenticate(self.aluno)
        resp = self.client.post(
            "/api/morfemas/", {"texto": "x", "tipo": "prefixo", "cor": "bg-red-500"}, format="json"
        )
        self.assertEqual(resp.status_code, status.HTTP_403_FORBIDDEN)
        # mas o aluno PODE listar (jogo)
        self.assertEqual(self.client.get("/api/morfemas/").status_code, status.HTTP_200_OK)

    def test_professor_gerencia_palavra_valida_e_aluno_bloqueado(self):
        self.client.force_authenticate(self.aluno)
        self.assertEqual(self.client.get("/api/palavras/").status_code, status.HTTP_403_FORBIDDEN)

        self.client.force_authenticate(self.professor)
        resp = self.client.post(
            "/api/palavras/", {"texto": "descristalizar", "processo_morfologico": "des + cristal + iz + ar"}, format="json"
        )
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
        pid = resp.data["id"]
        self.assertEqual(self.client.delete(f"/api/palavras/{pid}/").status_code, status.HTTP_204_NO_CONTENT)

    def test_professor_cria_atividade_com_perguntas_e_remove(self):
        self.client.force_authenticate(self.professor)
        payload = {
            "titulo": "Quiz Teste",
            "tipo": "quiz",
            "nivel": 1,
            "perguntas": [
                {
                    "enunciado": "Prefixo de infeliz?",
                    "alternativas": ["in-", "feliz", "-iz", "fel-"],
                    "correta": 0,
                    "explicacao": "in- indica negação.",
                    "topico": "Prefixos",
                }
            ],
        }
        resp = self.client.post("/api/atividades/", payload, format="json")
        self.assertEqual(resp.status_code, status.HTTP_201_CREATED)
        aid = resp.data["id"]
        self.assertEqual(Pergunta.objects.filter(atividade_id=aid).count(), 1)

        resp = self.client.delete(f"/api/atividades/{aid}/")
        self.assertEqual(resp.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(Atividade.objects.filter(id=aid).exists())

    def test_aluno_nao_cria_atividade(self):
        self.client.force_authenticate(self.aluno)
        resp = self.client.post(
            "/api/atividades/", {"titulo": "x", "tipo": "quiz", "nivel": 1}, format="json"
        )
        self.assertEqual(resp.status_code, status.HTTP_403_FORBIDDEN)


class RelatorioPermissaoTests(APITestCase):
    """RN02 / RNF14 — relatório da turma restrito a professores."""

    def test_aluno_recebe_403_e_professor_recebe_200(self):
        aluno = criar_usuario("a2@x.com", tipo=Usuario.ALUNO)
        professor = criar_usuario("p2@x.com", tipo=Usuario.PROFESSOR)

        self.client.force_authenticate(aluno)
        self.assertEqual(
            self.client.get("/api/professor/relatorio/").status_code,
            status.HTTP_403_FORBIDDEN,
        )

        self.client.force_authenticate(professor)
        self.assertEqual(
            self.client.get("/api/professor/relatorio/").status_code,
            status.HTTP_200_OK,
        )
