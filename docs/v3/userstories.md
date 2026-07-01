<script>
document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) {
    return;
  }

  const target = document.getElementById(hash);
  if (target && target.tagName === 'DETAILS') {
    target.setAttribute('open', '');
    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }
});

window.addEventListener('hashchange', function () {
  const hash = window.location.hash.replace(/^#/, '');
  document.querySelectorAll('details.us-dropdown').forEach(function (item) {
    item.removeAttribute('open');
  });

  const target = document.getElementById(hash);
  if (target && target.tagName === 'DETAILS') {
    target.setAttribute('open', '');
  }
});
</script>

# Documento de Histórias de Usuário (User Stories) e Critérios de Aceitação

---

<details class="us-dropdown" id="us01" markdown="1">

<summary><strong>US01 — Autenticação de Usuário✅</strong></summary>

### **US01 - Autenticação de Usuário** 

* **Sprint 3**
 
>**Como** usuário, **quero** efetuar login no sistema utilizando e-mail e senha, **para** acessar minha conta na plataforma de forma segura.

**Critérios de Aceitação**:

* **CA-US01-01:** O sistema deve exigir um e-mail válido e a senha correta; o acesso só é liberado se os dados coincidirem exatamente com o banco de dados.
* **CA-US01-02:** Se a senha ou o e-mail estiverem incorretos, o sistema exibe uma mensagem de erro geral (`"E-mail ou senha incorretos"`) por motivos de segurança.
* **CA-US01-03:** Após o login bem-sucedido, o sistema gera uma sessão segura por até 1 hora e direciona o usuário automaticamente para a sua tela inicial.

**Verificação do Definition of Ready (DoR) US01**

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Justificativa Técnica |
| :--- | :---: | :--- |
| **A User Story é atômica e clara?** | Sim | O escopo foi totalmente isolado. A US01 trata exclusivamente do fluxo de autenticação e validação de credenciais de usuários existentes, sem carregar regras de criação de novas contas ou recuperação de acessos. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Foram definidos os critérios CA-US01-01 a CA-US01-03. Eles cobrem tanto o fluxo feliz de sucesso quanto o comportamento defensivo do layout em cenários de dados inválidos. |
| **Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?** | Sim | Mapeamento explícito para respeitar a RN01 (Apenas usuários autenticados acessam o sistema), RNF04 (Criptografia/Segurança), RNF05 (Comunicação via API REST) e RNF12 (Acesso via navegador por HTTP/HTTPS). |
| **A prioridade está coerente e justificada?** | Sim | Classificada como *Must Have* via matriz MoSCoW. Sendo a porta de entrada do sistema e o mecanismo que diferencia as visões de Aluno e Professor, ela foi posicionada no quadrante de prioridade máxima do MVP. |
| **O esforço foi estimado conjuntamente?** | Sim | O esforço de engenharia de software para construir os campos front-end e integrá-los à rota da API foi discutido pelo time de desenvolvimento e pontuado consensualmente em **2 Story Points**. |
| **Resolução de dependências validada?** | Sim | A estrutura de dados para verificação de credenciais e o protótipo de alta fidelidade da interface gráfica já estavam fechados, homologados pela PO e sem impedimentos externos antes do início do código. |

**Status Final:** Done

**Critério de Pronto (DoD V4.0)**

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :--- | :---: | :--- |
| **1. Implementação Arquitetural** | Concluído | Código front-end em React 18+ / TypeScript 5+ e back-end em Python 3.11+ / Django 4.2+ finalizados. |
| **2. Comunicação via API** | Concluído | O React consome exclusivamente os endpoints REST de geração e renovação de token JWT do Django (RNF05). |
| **3. Operações Django Admin** | Não aplicável | Critério não aplicável para esta história (fluxo exclusivo de autenticação de usuários via cliente). |
| **4. Validação de CAs** | Concluído | Critérios CA-US01-01 a CA-US01-03 testados com sucesso, validando credenciais certas e exibição de erro defensivo. |
| **5. Garantia das RNs** | Concluído | O sistema emite o token JWT com as credenciais corretas e aciona a RN01 (apenas usuários autenticados acessam rotas privadas). |
| **6. Validação de RNFs (RNF11)** | Concluído | Interface de login testada e fluida em telas de 360px, sem quebras, sobreposições ou barras de rolagem lateral. |
| **7. Integração Contínua (CI)** | Concluído | Código integrado à branch principal sem gerar regressões ou falhas na esteira automatizada. |
| **8. Homologação e Validação** | Concluído | Funcionalidade operando em ambiente de produção (Vercel) e validada com a cliente (PO). |

**Links de Rastreabilidade e Artefatos da US01**

* **Link no site:** `https://req-2026-1-t01-morfo-blocos-digital.vercel.app/`
* **Fluxo de Acesso:**
  1. Acesse a página inicial da aplicação.
  2. Localize o formulário de autenticação centralizado na interface principal.
  3. Preencha os campos obrigatórios (E-mail e Senha).
  4. Clique no botão de submissão `"Entrar"` para validar as credenciais e iniciar a sessão.

---

</details>

<details class="us-dropdown" id="us02" markdown="1">

<summary><strong>US02 — Cadastro de Nova Conta✅</strong></summary>

### US02 — Cadastro de Nova Conta

* **Sprint 3**

> **Como** usuário, **quero** cadastrar uma nova conta no sistema inserindo meus dados, **para** que meu perfil seja criado e eu possa começar a usar a plataforma.

**Critérios de Aceitação (CA)**

* **CA-US02-01:** O sistema exige obrigatoriamente e-mail, senha e a escolha do perfil (se é Estudante ou Professor), bloqueando o envio de campos vazios.
* **CA-US02-02:** O sistema impede o cadastro de um e-mail que já esteja previamente registrado na base de dados.
* **CA-US02-03:** O sistema deve validar o formato estrutural do e-mail (ex: `nome@dominio.com`), exibindo um alerta visual em caso de erro.
* **CA-US02-04:** O sistema exige que o campo de senha e a confirmação de senha sejam rigorosamente iguais.
* **CA-US02-05:** A interface da tela de cadastro deve ser totalmente responsiva em ecrãs/telas a partir de 360px de largura, sem qualquer sobreposição de textos, campos desalinhados ou surgimento de barra de rolagem horizontal (scroll lateral).



**Verificação do Definition of Ready (DoR)**

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Justificativa Técnica |
| :--- | :--- | :--- |
| **A User Story é atômica e clara?** | Sim | O escopo foi isolado com foco único na criação de credenciais de acesso. O fluxo de autenticação/login ficou restrito à US01, eliminando dependências cruzadas ou a criação de um Épico camuflado. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Foram especificados os critérios de CA-US02-01 a CA-US02-05, cobrindo os fluxos de sucesso, validações obrigatórias de campos e a restrição de tamanho de tela. |
| **Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?** | Sim | Mapeamento explícito para respeitar a RN02 (Unicidade de e-mail no banco), RNF04 (Criptografia de senhas), RNF05 (Comunicação via API REST), RNF11 (Responsividade 360px) e RNF12 (Acesso via navegador por HTTP/HTTPS). |
| **A prioridade está coerente e adequada?** | Sim | Classificada como *Must Have* via matriz MoSCOW, pois a criação de perfis é um pré-requisito fundamental para que os usuários utilizem as demais funcionalidades do ecossistema. |
| **O esforço foi estimado conjuntamente?** | Sim | O esforço técnico para construir o formulário de cadastro, aplicar as validações de input em tempo real e criar a rota de persistência foi discutido pelo time e pontuado em 2 Story Points. |
| **Resolução de dependências validada?** | Sim | Os modelos de dados para criação de usuários e o protótipo de alta fidelidade da tela de cadastro já estavam homologados pela PO e disponíveis antes do início da codificação. |

**Links de Rastreabilidade e Artefatos da US02:**
* Link no site: `https://req-2026-1-101-morfo-blocos-digital.vercel.app/`
* Protótipo de alta fidelidade: Disponível na interface (Tela de Criar Conta)

</details>


<details class="us-dropdown" id="us03" markdown="1">

<summary><strong>US03 — Recuperação de Acesso</strong></summary>

### US03 — Recuperação de Acesso

> **Como** usuário, **quero** recuperar meu acesso mediante envio de link de redefinição de senha, **para** retomar o uso da plataforma em caso de esquecimento.

**Critérios de Aceitação (CA)**

* **CA-US03-01:** O sistema deve enviar um link de redefinição de senha (e não a senha em texto puro) para o e-mail cadastrado do usuário, mediante solicitação na tela de login.
* **CA-US03-02:** O link de redefinição deve ter validade limitada de no máximo 24 horas e ser invalidado após o primeiro uso, exibindo mensagem específica caso o usuário tente reutilizá-lo [RNF04].

**Status:** Pendente. O frontend de recuperação de senha ficou pendente por problemas de envio de e-mail no servidor de testes.

</details>

<details class="us-dropdown" id="us04" markdown="1">

<summary><strong>US04 — Cadastro de Morfemas no Catálogo</strong></summary>

### US04 — Cadastro de Morfemas no Catálogo

> **Como** administrador, **quero** cadastrar novos morfemas no catálogo, **para** disponibilizar peças para a montagem de palavras pelos estudantes.

**Critério de Aceitação (CA)**

* **CA-US04-01:** O cadastro de um morfema deve exigir, obrigatoriamente, a informação da grafia do morfema, seu tipo morfológico (prefixo, radical ou sufixo) e a cor associada ao tipo, recusando o salvamento caso qualquer um desses dados esteja ausente [RN03, RNF06].

**Status no MVP**

* **Status:** Não iniciado

</details>

<details class="us-dropdown" id="us05" markdown="1">

<summary><strong>US05 — Edição de Morfemas</strong></summary>

### US05 — Edição de Morfemas

> **Como** administrador, **quero** editar morfemas existentes no catálogo, **para** corrigir grafias, classificações ou cores associadas.

**Critério de Aceitação (CA)**

* **CA-US05-01:** A edição de um morfema deve permitir alterar sua grafia, tipo morfológico e cor associada, refletindo as alterações imediatamente nas próximas atividades que utilizarem esse morfema [RN03, RNF06].

**Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us06" markdown="1">

<summary><strong>US06 — Remoção de Morfemas</strong></summary>

### US06 — Remoção de Morfemas

> **Como** administrador, **quero** remover morfemas do catálogo, **para** retirar itens que não devem mais ser usados.

**Critério de Aceitação (CA)**

* **CA-US06-01:** O sistema deve impedir a remoção de um morfema que esteja associado a palavras válidas cadastradas, exibindo mensagem explicando a dependência existente e orientando a remoção prévia das associações [RN03, RNF06].

**Status no MVP**

* **Status:** Pendente.
* **Observação:** A regra de proteção contra remoções indevidas foi identificada como relevante, mas ainda não foi entregue.

</details>

<details class="us-dropdown" id="us07" markdown="1">

<summary><strong>US07 — Listagem de Morfemas</strong></summary>

### US07 — Listagem de Morfemas

> **Como** administrador, **quero** listar os morfemas cadastrados, **para** consultar o catálogo atual.

**Critério de Aceitação (CA)**

* **CA-US07-01:** A listagem deve exibir, no mínimo, a grafia do morfema, seu tipo morfológico e a cor associada, permitindo ordenação e busca textual por grafia [RNF06].

* **Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us08" markdown="1">

<summary><strong>US08 — Cadastro de Palavras Válidas</strong></summary>

### US08 — Cadastro de Palavras Válidas

> **Como** administrador, **quero** cadastrar palavras válidas no catálogo, **para** definir combinações reconhecidas pelo validador.

**Critério de Aceitação (CA)**

* **CA-US08-01:** O cadastro de uma palavra válida deve exigir, obrigatoriamente, sua grafia completa, os morfemas que a compõem e a descrição do processo de formação morfológica correspondente, recusando o salvamento caso qualquer uma dessas informações esteja ausente [RN03, RNF04, RNF06].

* **Status:** Pendente
* **Observação:** A estrutura do catálogo de palavras válidas foi contemplada, mas não está entregue como parte do MVP final.

</details>

<details class="us-dropdown" id="us09" markdown="1">

<summary><strong>US09 — Edição de Palavras Válidas</strong></summary>

### US09 — Edição de Palavras Válidas

> **Como** administrador, **quero** editar palavras válidas existentes, **para** corrigir registros ou ajustar processos morfológicos associados.

**Critério de Aceitação (CA)**

* **CA-US09-01:** A edição deve permitir alterar a grafia da palavra, sua composição morfológica e a descrição do processo de formação associado, mantendo a consistência das referências utilizadas pelo validador [RN03, RNF06].

* **Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us10" markdown="1">

<summary><strong>US10 — Remoção de Palavras Válidas</strong></summary>

### US10 — Remoção de Palavras Válida

> **Como** administrador, **quero** remover palavras válidas do catálogo, **para** retirar registros que não devem mais ser aceitos pelo validador.

**Critério de Aceitação (CA)**

* **CA-US10-01:** O sistema deve impedir a exclusão de palavras válidas que estejam vinculadas a atividades pedagógicas ativas, exibindo mensagem informativa sobre a dependência existente [RN03, RNF06].

* **Status:** Pendente
* **Observação:** A regra de dependência para exclusão foi reconhecida, mas a implementação completa ainda está pendente.

</details>

<details class="us-dropdown" id="us11" markdown="1">

<summary><strong>US11 — Listagem de Palavras Válidas</strong></summary>

### US11 — Listagem de Palavras Válidas

> **Como** administrador, **quero** listar as palavras válidas cadastradas, **para** consultar a base utilizada pelo validador morfológico.

**Critério de Aceitação (CA)**

* **CA-US11-01:** A listagem deve exibir, no mínimo, a grafia da palavra, sua composição morfológica e o processo de formação associado, permitindo consulta e busca textual [RNF06].

* **Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us12" markdown="1">

<summary><strong>US12 — Cadastro de Atividades Pedagógicas</strong></summary>

### US12 — Cadastro de Atividades Pedagógicas

> **Como** administrador, **quero** cadastrar atividades pedagógicas, **para** disponibilizar exercícios contextualizados aos estudantes.

**Critério de Aceitação (CA)**

* **CA-US12-01:** O cadastro de uma atividade deve exigir, obrigatoriamente, título, nível de dificuldade, conjunto de morfemas disponíveis para montagem e pontuação mínima para progressão, recusando o salvamento caso qualquer campo obrigatório esteja ausente [RN03, RNF06].

* **Status:** Pendente
* **Observação:** Algumas atividades já estão disponíveis no banco de dados, mas a funcionalidade do cadastro em si não foi implementada.

</details>

<details class="us-dropdown" id="us13" markdown="1">

<summary><strong>US13 — Edição de Atividades Pedagógicas</strong></summary>

### US13 — Edição de Atividades Pedagógicas

> **Como** administrador, **quero** editar atividades pedagógicas existentes, **para** corrigir enunciados, níveis de dificuldade ou conjuntos de morfemas associados.

**Critério de Aceitação (CA)**

* **CA-US13-01:** A edição deve permitir alterar título, nível de dificuldade, conjunto de morfemas disponíveis e pontuação mínima para progressão, preservando o histórico das execuções já realizadas [RN03, RNF06, RNF08].

* **Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us14" markdown="1">

<summary><strong>US14 — Remoção de Atividades Pedagógicas</strong></summary>

### US14 — Remoção de Atividades Pedagógicas

> **Como** administrador, **quero** remover atividades pedagógicas do sistema, **para** retirar exercícios que não devem mais estar disponíveis aos estudantes.

**Critério de Aceitação (CA)**

* **CA-US14-01:** A remoção de uma atividade deve torná-la indisponível para novas execuções, sem excluir os registros históricos de tentativas e pontuações previamente realizadas pelos estudantes [RN08, RNF06].

**Status no MVP**

* **Status:** Pendente
* **Observação:** A lógica de desativação de atividades foi reconhecida como requisito, porém sua entrega completa ainda não foi concluída.


</details>

<details class="us-dropdown" id="us15" markdown="1">

<summary><strong>US15 — Listagem de Atividades Pedagógicas</strong></summary>

### US15 — Listagem de Atividades Pedagógicas

> **Como** administrador, **quero** listar atividades cadastradas no sistema, **para** consultar o catálogo de exercícios disponíveis.

**Critério de Aceitação (CA)**

* **CA-US15-01:** A listagem deve exibir, no mínimo, título da atividade, nível de dificuldade e quantidade de morfemas associados, permitindo ordenação e busca textual [RNF06].

* **Status:** Pendente.
* **Observação:** A visualização do catálogo de atividades foi tratada como parte da administração do conteúdo, mas ainda não está entregue.

</details>

<details class="us-dropdown" id="us16" markdown="1">

<summary><strong>US16 — Atividades Pedagógicas do Tipo Quiz</strong></summary>

### US16 — Atividades Pedagógicas do Tipo Quiz

* **Sprint 4**

> **Como** estudante, **quero** realizar atividades pedagógicas do tipo Quiz, **para** responder a questões de múltipla escolha sobre conceitos morfológicos teóricos.

**Critério de Aceitação (CA)**

* **CA-US16-01:** O sistema deve carregar e exibir sequencialmente as perguntas de múltipla escolha associadas a uma atividade pedagógica teórica, computar a resposta selecionada pelo estudante entre as alternativas disponíveis e exibir o feedback imediato ou pontuação final após a conclusão do envio.


**Status no MVP**

* **Status:** Implementado
* **Observação:** O fluxo de Quiz foi entregue e validado como parte do MVP.


**Verificação do Definition of Ready (DoR)**

| Critério de DoR (Scrum/XP) | Situação | Evidência / Link de Rastreabilidade |
| :--- | :--- | :--- |
| **A User Story é atômica e clara?** | Sim | O escopo está estritamente focado no consumo, interação e submissão de respostas do Quiz pela visão do estudante. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Possui um critério de aceitação (CA-US16-01) explícito e objetivo. |
| **Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?** | Sim | Mapeamento explícito para respeitar a RN01, RNF05 e RNF12. |
| **A prioridade está coerente e adequada?** | Sim | Classificada como *Must Have* no MVP. |
| **O esforço foi estimado conjuntamente?** | Sim | O time de engenharia discutiu a complexidade técnica e pontuou a história em 3 Story Points. |
| **Resolução de dependências validada?** | Sim | O contrato da API e o layout da experiência de resposta foram previamente validados. |

**Links de Rastreabilidade e Artefatos da US16:**

* Link no site: [MorfoBlocos Digital](https://req-2026-1-101-morfo-blocos-digital.vercel.app/)
* Caminho: Criar conta do aluno → Login do aluno → Acessar Quiz.

</details>

<details class="us-dropdown" id="us17" markdown="1">

<summary><strong>US17 — Atividades Pedagógicas de Montagem de Palavras (Interface)</strong></summary>

### US17 — Atividades Pedagógicas de Montagem de Palavras (Interface)

* **Sprint 4** .


> **Como** estudante, **quero** realizar atividades pedagógicas de montagem de palavras, manipulando os blocos na tela, **para** formar palavras e submetê-las para a validação.

**Critérios de Aceitação (CA)**

* **CA-US17-01:** O estudante consegue arrastar, soltar e reordenar livremente os blocos de morfemas na área de construção usando o toque (mobile) ou o mouse.
* **CA-US17-02:** O botão de "Enviar Resposta" (ou "Verificar Palavra") só fica ativo e clicável se houver pelo menos um bloco posicionado na área de montagem.
* **CA-US17-04:** A área de construção e os blocos de morfemas devem adaptar-se dinamicamente ao limite mínimo de 360px de largura. Os blocos devem empilhar-se ou redimensionar-se automaticamente, sendo expressamente proibido que fiquem cortados ou forcem uma barra de rolagem horizontal.


**Status no MVP**

* **Status:** Bloqueado.
* **Observação:** A interface de montagem foi entregue, mas a responsividade móvel ainda não atende ao RNF11, o que bloqueia a homologação completa.

**Links de Rastreabilidade e Artefatos da US17:**

* Link no site: [MorfoBlocos Digital](https://req-2026-1-101-morfo-blocos-digital.vercel.app/)
* Caminho: Criar conta do aluno → Login do aluno → Junção de blocos.

</details>

<details class="us-dropdown" id="us18" markdown="1">

<summary><strong>US18 - Consulta de Conteúdos Morfológicos</strong></summary>

### US18 - Consulta de Conteúdos Morfológicos

* **Sprint 4**

> **Como** estudante, **quero** consultar explicações sobre conteúdos morfológicos relacionados às atividades, **para** aprender enquanto pratico.

**Critério de Aceitação (CA):**

* **CA-US18-01:** O sistema deve fornecer uma aba ou janela modal com textos explicativos rápidos sobre a matéria da questão atual, acessíveis diretamente na tela sem reiniciar ou apagar o progresso da atividade.

**Verificação do Definition of Ready (DoR)**

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :--- | :---: | :--- |
| **A User Story é atômica e clara?** | Sim | O escopo está focado exclusivamente na exibição de conteúdo de apoio teórico sob demanda. A interface visual de arrastar os blocos foi mantida isolada na US17. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Possui um critério de aceitação (CA-US18-01) focado no comportamento do modal de ajuda sem perda de estado local. |
| **Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?** | Sim | Mapeamento direto para consumo assíncrono e suporte fluido em telas responsivas. |
| **Resolução de dependências validada?** | Sim | Depende diretamente da existência da base populada via retaguarda. Os contratos de entrada e saída foram definidos. |

**Critério de Pronto (DoD)**

| Critério de Pronto (DoD) | Status | Evidência de Implementação e Qualidade |
| :--- | :---: | :--- |
| **1. Implementação Arquitetural** | Concluído | Interface da janela suspensa (modal) desenvolvida em React 18+ e TypeScript 5+ de forma isolada e acoplável às atividades. |
| **2. Comunicação via API** | Concluído | O conteúdo teórico e os textos explicativos rápidos são consumidos dinamicamente da API REST com base na matéria selecionada (RNF05). |
| **3. Operações Django Admin** | Concluído | O dicionário de conteúdos morfológicos e as explicações conceituais são cadastrados e atualizados via painel administrativo do Django. |
| **4. Validação de CAs** | Concluído | Critério CA-US18-01 validado com sucesso: a modal abre e fecha sobre a tela atual sem reiniciar o progresso ou apagar as peças da atividade. |
| **5. Garantia das RNs** | Concluído | Preserva o fluxo pedagógico sem quebras de regras de integridade de dados. |
| **6. Validação de RNFs (RNF11)** | Concluído | A modal de explicação foi otimizada com rolagem interna vertical, adaptando-se perfeitamente em telas móveis de 360px de largura. |
| **7. Integração Contínua (CI)** | Concluído | Código integrado à branch principal sem gerar vazamentos de memória ou falhas de compilação na esteira de build automatizado. |
| **8. Homologação & Validação** | Concluído | Funcionalidade testada no ambiente de produção da Vercel através do fluxo de acesso e homologada formalmente com a cliente (PO). |

**Links de Rastreabilidade e Artefatos da US18**

* **Link no site:** `https://req-2026-1-t01-morfo-blocos-digital.vercel.app/`
* **Fluxo de Acesso:**
  1. Efetue login no sistema com uma conta ativa de Estudante.
  2. Na dashboard inicial, clique no botão `"Trilha de Aprendizagem"` ou no ícone de ajuda posicionado na tela da atividade.
  3. Inspecione os textos explicativos rápidos sobre a matéria dentro da janela.

---
</details>

<details class="us-dropdown" id="us19" markdown="1">

<summary><strong>US19 — Resultado da Validação</strong></summary>

### US19 — Resultado da Validação

> **Como** estudante, **quero** consultar o resultado da validação da combinação de blocos submetida, **para** saber se acertei a estrutura da palavra.

**Critério de Aceitação (CA)**
:
* **CA-US19-01:** O motor do sistema testa a sequência de blocos enviada contra o banco de dados de palavras válidas e exibe um feedback instantâneo e claro de `"Palavra Válida"` ou `"Palavra Inválida"`.

**Verificação do Definition of Ready (DoR)**

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :--- | :---: | :--- |
| **A User Story é atômica e clara?** | Sim | Escopo exclusivo para a conferência algorítmica de acertos e erros e o retorno imediato do veredito. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Vinculada ao critério essencial CA-US19-01. |
| **Há rastreabilidade de restrições (RNFs)?** | Sim | Rastreia a integração síncrona com o dicionário de dados e tempo de resposta ágil. |
| **A prioridade está coerente e justificada?** | Sim | *Must Have*. Peça chave para o funcionamento lógico do validador. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em **3 Story Points** devido ao casamento de strings das sequências montadas. |
| **Resolução de dependências validada?** | Sim | Base de dados contendo palavras cadastradas e ordenadas validada para testes. |

**Critério de Pronto (DoD V4.0)**

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :--- | :---: | :--- |
| **1. Implementação Arquitetural** | Concluído | Rotas de validação síncronas implementadas com buscas otimizadas no banco de dados relacional PostgreSQL 15+. |
| **2. Comunicação via API** | Concluído | O front-end envia o arranjo de blocos montados e recebe imediatamente a resposta booleana estruturada da API REST (RNF05). |
| **3. Operações Django Admin** | Concluído | O cadastro de sequências morfológicas e palavras consideradas válidas para os testes é realizado na retaguarda do Django Admin. |
| **4. Validação de CAs** | Concluído | Critério CA-US19-01 validado: o motor testa a sequência enviada contra o banco de dados e emite o aviso instantâneo de "Palavra Válida" ou "Palavra Inválida". |
| **5. Garantia das RNs** | Concluído | Execução direta da RN05; a combinação enviada pelo estudante autenticado só é aceita se constar rigorosamente no dicionário do sistema. |
| **6. Validação de RNFs (RNF11)** | Concluído | O banner visual e as mensagens de feedback de acerto ou erro foram estilizados de forma fluida, sem estourar margens móveis em telas de 360px. |
| **7. Integração Contínua (CI)** | Concluído | Código integrado à branch principal do repositório, com testes síncronos de casamento de strings executados de forma limpa. |

**Links de Rastreabilidade e Artefatos da US19**

* **Link no site:** `https://req-2026-1-t01-morfo-blocos-digital.vercel.app/`
* **Fluxo de Acesso:**
  1. Efetue login no sistema com uma conta ativa de Estudante.
  2. Na dashboard inicial, clique em um exercício do tipo `"Junção de Blocos"`.
  3. Arraste e posicione ordenadamente os blocos na área demarcada de construção central.
  4. Clique no botão `"Verificar Palavra"`.
  5. Observe o aviso visual emitido indicando o resultado (`"Palavra Válida"` ou `"Palavra Inválida"`).

---

</details>

<details class="us-dropdown" id="us20" markdown="1">

<summary><strong>US20 — Feedback Pedagógico Estrutural</strong></summary>

### US20 — Feedback Pedagógico Estrutural

> **Como** estudante, **quero** consultar o processo de formação morfológica da palavra validada, **para** compreender como os morfemas se combinam.

**Critério de Aceitação (CA):**

* **CA-US20-01:** Em caso de acerto na montagem, o sistema abre uma explicação detalhada e textual do processo morfológico daquela palavra específica (ex: prefixação, sufixação).

**Verificação do Definition of Ready (DoR)**

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :--- | :---: | :--- |
| **A User Story é atômica e clara?** | Sim | Escopo focado unicamente na renderização do texto pedagógico atrelado ao sucesso da montagem. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Conforme o critério CA-US20-01 (gatilho condicionado ao cenário de acerto). |
| **Há rastreabilidade de restrições (RNFs)?** | Sim | Garante a exibição correta dos metadados pedagógicos gravados no catálogo. |
| **A prioridade está coerente e justificada?** | Sim | *Should Have*. Consolida o aprendizado morfológico prático através de feedback detalhado. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em **2 Story Points** reaproveitando os componentes visuais de feedback estruturado. |

**Critério de Pronto (DoD V4.0)**

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :--- | :---: | :--- |
| **1. Implementação Arquitetural** | Concluído | Bloco de expansão textual condicional desenvolvido em React 18+ e TypeScript 5+, integrado à tela de resultados do jogo. |
| **2. Comunicação via API** | Concluído | O front-end consome os metadados linguísticos e textuais através de rotas REST de sucesso acionadas após a validação (RNF05). |
| **3. Operações Django Admin** | Concluído | As explicações morfológicas detalhadas (como os processos de prefixação e sufixação) são cadastradas e geridas via Django Admin. |
| **4. Validação de CAs** | Concluído | Critério CA-US20-01 validado: em caso de acerto na montagem, a caixa pedagógica se expande automaticamente mostrando o processo de formação. |
| **5. Garantia das RNs** | Concluído | O gatilho lógico funciona de maneira amarrada ao perfil do estudante autenticado, prevenindo a exibição de dados pedagógicos em cenários de erro ou falha. |
| **6. Validação de RNFs (RNF11)** | Concluído | Caixa de texto configurada com quebra automática de linha de maneira limpa na esteira automática da Vercel. |
| **8. Homologação & Validação** | Concluído | Funcionalidade testada no ambiente de produção da Vercel através do fluxo de acesso e homologada formalmente com a cliente (PO). |

**Links de Rastreabilidade e Artefatos da US20**

* **Link no site:** `https://req-2026-1-t01-morfo-blocos-digital.vercel.app/`
* **Fluxo de Acesso:**
  1. Efetue login no sistema com uma conta ativa de Estudante.
  2. Na dashboard inicial, clique em um exercício do tipo `"Junção de Blocos"`.
  3. Arraste e posicione ordenadamente os blocos na área demarcada de construção central.
  4. Clique no botão `"Verificar Palavra"`.
  5. Examine a caixa de texto pedagógica que se expande automaticamente contendo o detalhamento da formação daquela palavra.

---
</details>

<details class="us-dropdown" id="us21" markdown="1">

<summary><strong>US21 — Histórico de Desempenho do Estudante</strong></summary>

### US21 — Histórico de Desempenho do Estudante

> **Como** estudante, **quero** consultar o histórico de pontuações individuais, **para** acompanhar minha evolução ao longo do tempo.

**Critério de Aceitação (CA):**

* **CA-US21-01:** O ecrã/tela de portfólio deve expor uma listagem cronológica contendo o nome de cada atividade realizada, a data da tentativa e a nota alcançada pelo aluno.

**Verificação do Definition of Ready (DoR)**

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :--- | :---: | :--- |
| **A User Story é atômica e clara?** | Sim | Destinada puramente à leitura e exibição linear do progresso do aluno autenticado. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Mapeada sobre a listagem de colunas obrigatórias definidas no CA-US21-01. |
| **Há rastreabilidade de restrições (RNFs)?** | Sim | Rastreia restrição de privacidade (o aluno lê apenas seus dados). |
| **A prioridade está coerente e justificada?** | Sim | *Should Have*. Atua como o painel agregador de notas do próprio discente. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em **2 Story Points** por requerer uma consulta SQL de seleção simples (`SELECT`). |
| **Resolução de dependências validada?** | Sim | Tabela de logs de notas do banco pronta para gravação e leitura de eventos. |

**Critério de Pronto (DoD)**

| Critério de Pronto (DoD) | Status | Evidência de Implementação e Qualidade |
| :--- | :---: | :--- |
| **1. Implementação Arquitetural** | Concluído | Tela de portfólio estruturada em React 18+ e TypeScript 5+ para listagem cronológica alimentada por consultas relacionais. |
| **2. Comunicação via API** | Concluído | O front-end realiza a requisição GET mapeando o histórico seguro através de interceptores de token JWT para a API REST (RNF05). |
| **3. Operações Django Admin** | Concluído | As tabelas de logs de notas e histórico de tentativas são estruturadas, auditáveis e visíveis na retaguarda do Django Admin. |
| **4. Validação de CAs** | Concluído | Critério CA-US21-01 validado com sucesso: a tela expõe a listagem cronológica com o nome da atividade, data da tentativa e nota alcançada. |
| **5. Garantia das RNs** | Concluído | Cumprimento estrito de restrição de privacidade e segurança; o sistema garante de forma invariante que o aluno autenticado acesse apenas os seus próprios dados. |
| **6. Validação de RNFs (RNF11)** | Concluído | Ajuste de Design: A tabela de notas foi otimizada para se converter automaticamente em blocos verticais legíveis em telas de 360px, evitando rolagem horizontal. |
| **7. Integração Contínua (CI)** | Concluído | Código integrado com sucesso ao repositório principal com testes automatizados executados com sucesso. |

**Links de Rastreabilidade e Artefatos da US21**

* **Link no site:** `https://req-2026-1-t01-morfo-blocos-digital.vercel.app/`
* **Fluxo de Acesso:**
  1. Efetue login no sistema com uma conta ativa de Estudante.
  2. Na dashboard inicial, localize e clique no painel ou botão `"Histórico de Questões"` posicionado na interface principal.

---
</details>

<details class="us-dropdown" id="us22" markdown="1">

<summary><strong>US22 — Histórico de Pontuações do Estudante</strong></summary>

### US22 — Histórico de Pontuações do Estudante

> **Como** estudante, **quero** consultar o histórico das minhas pontuações individuais, **para** acompanhar minha evolução ao longo do tempo.

**Critérios de Aceitação (CA)**

* **CA-US22-01:** O histórico deve apresentar, para cada atividade concluída pelo estudante, no mínimo: nome da atividade, data de realização, pontuação obtida e resultado final da tentativa, ordenados cronologicamente [RNF01, RN08].
* **CA-US22-02:** O estudante deve conseguir filtrar ou navegar pelo histórico para consultar diferentes períodos de utilização, e o sistema deve exibir a pontuação acumulada ou indicadores de progresso correspondentes aos registros apresentados [RN06, RN07].

* **Status:** Pendente.

</details>

<details class="us-dropdown" id="us23" markdown="1">

<summary><strong>US23 — Criação de Turmas (Visão do Professor)</strong></summary>

### US23 — Criação de Turmas (Visão do Professor)

> **Como** professor, **quero** cadastrar novas turmas no sistema, **para** agrupar meus estudantes e gerenciar seus acessos de forma organizada.

**Critério de Aceitação (CA):**

* **CA-US23-01:** O cadastro da turma exige um identificador único (Nome/Código) e o ano letivo corrente, bloqueando o acesso a esta rota para quem tiver perfil de estudante.

**Verificação do Definition of Ready (DoR)**

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :--- | :---: | :--- |
| **A User Story é atômica e clara?** | Sim | Focada nas regras de validação do formulário e travas de perfil. |
| **Possui Critérios de Aceitação explícitos?** | Sim | Atendida de forma direta pelo critério único de segurança CA-US23-01. |
| **Há rastreabilidade de restrições (RNFs)?** | Sim | Mapeia o controle de acesso baseado em funções (RBAC), impedindo perfis de estudantes de acessarem rotas de escrita. |
| **A prioridade está coerente e justificada?** | Sim | *Must Have*. Necessária para viabilizar qualquer agrupamento e posterior monitoramento. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em **2 Story Points** usando middlewares tradicionais de validação de token (JWT). |
| **Resolução de dependências validada?** | Sim | Payload de login estruturado para identificar as claims de permissões de Professor. |

**Critério de Pronto (DoD V4.0)**

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :--- | :---: | :--- |
| **1. Implementação Arquitetural** | Concluído | Estrutura de dados das turmas e models de escrita configurados no banco de dados relacional PostgreSQL 15+. |
| **2. Comunicação via API** | Concluído | Rotas e contratos de payload assinados e prontos para consumo seguro via requisições para a API REST (RNF05). |
| **3. Operações Django Admin** | Concluído | Gerenciamento, auditoria e vínculo manual de turmas e alunos operando de forma nativa no painel do Django Admin. |
| **4. Validação de CAs** | Concluído | Critério CA-US23-01 validado com sucesso: o formulário exige identificador único, ano letivo corrente e bloqueia o acesso para perfis de estudante. |
| **5. Garantia das RNs** | Concluído | Middlewares de segurança baseados em funções (RBAC) e token JWT configurados para isolar os privilégios de escrita ao perfil do Professor (RN01). |
| **6. Validação de RNFs (RNF11)** | Concluído | Interface do formulário de criação de turmas mapeada e validada em design responsivo fluido para telas móveis de 360px. |
| **7. Integração Contínua (CI)** | Concluído | Modelagem de banco e regras de validação integradas à branch principal por meio de Pull Request aprovado sem falhas na pipeline. |

**Links de Rastreabilidade e Artefatos da US23**

* **Fluxo de Acesso:**
  1. Efetue login com uma conta configurada com permissões de **Professor**.
  2. Clique no link `"Gerenciar Turmas"` na barra de ferramentas lateral ou menu principal.
  3. Clique no botão de ação `"Nova Turma"` para carregar o formulário.
  4. Preencha o nome da turma, ano corrente e confirme a operação de escrita.

---

</details>

<details class="us-dropdown" id="us24" markdown="1">

<summary><strong>US24 — Relatório Analítico Consolidado da Turma</strong></summary>

### US24 — Relatório Analítico Consolidado da Turma

> **Como** professor, **quero** acessar o relatório de desempenho consolidado da turma, **para** identificar dificuldades e orientar intervenções pedagógicas.

**Critérios de Aceitação (CA):**

* **CA-US24-01:** O painel deve agregar e exibir de forma visual as médias de pontuação, taxas de acertos e o progresso macro das atividades da turma selecionada.
* **CA-US24-02:** O relatório permite filtrar os dados de desempenho por intervalo de tempo e por tarefas específicas, atualizando a tela de forma dinâmica.
* **CA-US24-03:** Se a turma selecionada for nova e os alunos ainda não tiverem realizado nenhum exercício, os gráficos e tabelas não podem quebrar; o sistema deve exibir uma mensagem clara.

**Verificação do Definition of Ready (DoR)**

* **A prioridade está coerente e justificada?** Sim (*Should Have*). Principal painel analítico para embasamento instrucional do professor.
* **O esforço foi estimado conjuntamente?** Sim. Estimada em **4 Story Points** pelo desenvolvimento de filtros dinâmicos e cálculos complexos de média em tempo real.
* **Resolução de dependências validada?** Sim. Chaves estrangeiras conectando Turmas, Alunos e Notas devidamente mapeadas na arquitetura.

**Critério de Pronto (DoD V4.0)**

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :--- | :---: | :--- |
| **1. Implementação Arquitetural** | Concluído | Consultas e rotas para agregação estatística de médias e taxas de acerto desenvolvidas e otimizadas no banco de dados PostgreSQL 15+. |
| **2. Comunicação via API** | Concluído | Endpoints REST criados para retornar pacotes estruturados de dados analíticos com suporte a parâmetros de filtros (RNF05). |
| **3. Operações Django Admin** | Concluído | Tabelas relacionais que vinculam notas, turmas e históricos permanecem acessíveis e totalmente auditáveis no Django Admin. |
| **4. Validação de CAs** | Concluído | Critérios CA-US24-01 a CA-US24-03 validados nos cenários de preenchimento e dados nulos. |
| **5. Garantia das RNs** | Concluído | O sistema de buscas isola os dados por token JWT, garantindo de forma invariante que um professor autenticado acesse apenas os dados de suas próprias turmas. |
| **6. Validação de RNFs (RNF11)** | Concluído | Painel de indicadores visuais estruturado em grid adaptativo, garantindo o redimensionamento fluido e legibilidade em telas móveis de 360px. |
| **7. Integração Contínua (CI)** | Concluído | Código integrado com sucesso ao repositório principal, com funções matemáticas de cálculo de desempenho validadas na pipeline de testes. |
| **8. Homologação & Validação** | Concluído | Painel analítico testado no ambiente de homologação da Vercel por meio do fluxo de acesso e homologado formalmente com a cliente (PO). |


</details>
