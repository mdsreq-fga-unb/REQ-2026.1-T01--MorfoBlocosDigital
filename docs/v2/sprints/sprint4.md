# 📌 Ata de Reunião — MorfoBlocos (Sprint 04)

## Informações Gerais

| Item                | Detalhe         |
| ------------------- | --------------- |
| **Projeto**         | MorfoBlocos     |
| **Tipo de Reunião** | Sprint Planning |
| **Data**            | 27/05/2026      |

### Participantes

* Artur Fernandes
* Luiz Henrique Pallavicini
* Bruno Souza
* Carlos Eduardo
* Ana Beatriz

---

##  Objetivo(s) da Reunião

Planejar as atividades da Sprint 4, unindo a entrega técnica do núcleo do jogo à consolidação da documentação de requisitos. O objetivo central é desenvolver a lógica do validador e a mecânica de movimentação de blocos, garantindo a integração completa entre frontend e backend, e simultaneamente atualizar a rastreabilidade e levantar as evidências do processo.

---

##  Pautas e Definições

### Pauta 1: Lógica do Validador e Alomorfia (Backend)

**Definição:** Prioridade absoluta no backend. O sistema receberá os blocos do front, concatenará as grafias na ordem exata e fará a consulta na tabela PalavraValida. Para a alomorfia, ficou definido um suporte simples via banco (ex: cadastrar "in-" e "im-" separadamente). Serão exigidos testes backend obrigatórios (login, register e validador).

### Pauta 2: Área de Montagem e Modal de Feedback (Frontend)

**Definição:** O frontend focará em implementar a biblioteca de drag and drop para a montagem das palavras. Os blocos devem ser renderizados com cores distintas por tipo. A integração exigirá o envio da combinação via POST e a exibição de um Modal de Feedback dinâmico, mostrando se a palavra é válida ou inválida com base no retorno da API.

### Pauta 3: Documentação e Rastreabilidade (Requisitos)

**Definição:** Em paralelo ao código, a equipe atualizará o Backlog do Produto e refinará os contratos de qualidade (DoR e DoD). Será iniciada a "Rastreabilidade Atualizada", garantindo que a lógica desenvolvida no validador e os testes implementados estejam corretamente mapeados aos Requisitos Funcionais e Não Funcionais originais.

### Pauta 4: Evidências ScrumXP e Foco da Sprint

**Definição:** A regra de ouro desta sprint é: "Funcionar > ficar bonito". Será feito o levantamento formal de evidências de execução do ScrumXP (screenshots do board, commits, PRs obrigatórios e reviews) e as "Evidências do MVP" (prints do sistema operando). O objetivo da Sprint Review será mostrar o protótipo funcional totalmente integrado.

---

##  Ações / Próximos Passos

**Artur Fernandes & Bruno Souza**

* Construir os endpoints `/morfemas` e `/validar-palavra`;
* Implementar a regra de alomorfia simples no banco;
* Escrever a suíte de testes obrigatórios do backend.

**Luiz Henrique & Ana Beatriz**

* Aplicar o drag and drop;
* Integrar o envio da combinação ao backend;
* Acoplar a resposta da API aos estados visuais do Modal de Feedback (verde/vermelho).

**Carlos Eduardo**

* Consolidar o Backlog Atualizado;
* Revisar o texto de DoR e DoD;
* Estruturar a matriz de Rastreabilidade Atualizada;
* Coletar as evidências do processo ScrumXP.

**Todos**

* Garantir a integração completa entre frontend e backend até o encerramento do ciclo;
* Todo o grupo deve saber explicar de cor como a concatenação e a validação funcionam.

---

##  Observações

> Esta é a Sprint mais importante do projeto.
>
> Se o núcleo de validação morfológica e a integração não estiverem funcionando, o sistema trava.
>
> O foco deve ser resolver a comunicação das APIs; o refinamento visual da interface ficará para o próximo ciclo.


## **Dailies**

# Daily 01 — 27/05

## Artur
- **Ontem:** Liberei o CORS.
- **Hoje:** Finalizo os endpoints de login e register com JWT funcionando.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Populei o banco no Admin.
- **Hoje:** Rodo os testes básicos de login no Postman para garantir a API.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Configurei o Axios no front.
- **Hoje:** Testo o consumo da API de login e salvo o JWT recebido.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Terminei a UI de login e cadastro.
- **Hoje:** Crio o dashboard básico para onde o usuário será redirecionado.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Atualizei as estimativas.
- **Hoje:** Cobro de todos as métricas do "login e banco funcionando" para a entrega da Semana 1.
- **Impedimentos:** Nenhum.

---

# Daily 02 — 28/05

## Artur
- **Ontem:** Finalizei endpoints de auth.
- **Hoje:** Faço o code review simples nos PRs obrigatórios da equipe.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Testei no Postman.
- **Hoje:** Reviso tipos, constraints e relacionamentos das tabelas base.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Salvei o JWT.
- **Hoje:** Aplico o redirecionamento pós-login no React Router.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Criei o dashboard base.
- **Hoje:** Garanto que a tela não quebra no redirecionamento.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Cobrei a entrega.
- **Hoje:** Conduzo a Sprint Review comprovando que a integração base está feita e o cronograma não está em risco.
- **Impedimentos:** Nenhum.

---

# Daily 03 — 29/05

## Artur
- **Ontem:** Fechamos a Semana 1.
- **Hoje:** Inicio o endpoint GET /morfemas para listar as peças.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Revisei o banco.
- **Hoje:** Insiro os cadastros da alomorfia separadamente no banco (ex: "in-" e "im-").
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Ajustei o redirect.
- **Hoje:** Inicio a biblioteca de drag and drop na área de montagem.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Estabilizei o dashboard.
- **Hoje:** Renderizo os blocos puxando da API e aplico cores por tipo de morfema.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Fiz a Review.
- **Hoje:** Faço o Sprint Planning focando na prioridade absoluta: o Validador.
- **Impedimentos:** Nenhum.