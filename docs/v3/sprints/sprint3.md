# 📌 Ata de Reunião — Sprint Planning (Sprint 03)

## Informações Gerais

| Item                | Detalhe         |
| ------------------- | --------------- |
| **Projeto**         | MorfoBlocos     |
| **Tipo de Reunião** | Sprint Planning |
| **Data**            | 13/05/2026      |

### Participantes

* Artur Fernandes
* Luiz Henrique Pallavicini
* Bruno Souza
* Carlos Eduardo
* Ana Beatriz

---

##  Objetivo(s) da Reunião

Planejar as atividades da Sprint 3, que marca a transição estratégica da engenharia de requisitos documental para o início do desenvolvimento (código) e do design de interface. O foco será realizar o setup dos ambientes (Frontend e Backend), iniciar o fluxo base de autenticação, finalizar os protótipos de alta fidelidade e detalhar as User Stories com seus respectivos Critérios de Aceitação.

---

##  Pautas e Definições

### Pauta 1: Setup do Ambiente e Arquitetura Base (Código)

**Definição:** Ficou decidido o início oficial da codificação. O backend será inicializado utilizando Django e PostgreSQL, com a configuração do Django REST Framework (DRF). O frontend será estruturado com React, Vite, TypeScript e Tailwind CSS, garantindo a fundação técnica do projeto.

### Pauta 2: Autenticação e Modelagem Inicial

**Definição:** A equipe de backend priorizará a codificação dos models iniciais (Usuário e Morfema) e a implementação da segurança via SimpleJWT. O frontend configurará o Axios e o React Router para consumir o login e armazenar o token, estabelecendo a primeira comunicação real entre as camadas.

### Pauta 3: Protótipos de Alta Fidelidade (UI/UX)

**Definição:** Como optamos por não utilizar protótipos de baixa fidelidade, a equipe de design irá direto para a construção das telas de alta fidelidade no Figma. Serão desenhadas as telas de Login, o Tabuleiro de jogo (área de montagem) e os Modais de Feedback, já com as cores, tipografia e espaçamentos definitivos.

### Pauta 4: User Stories e Critérios de Aceitação

**Definição:** Os Requisitos Funcionais do MVP serão transformados em Histórias de Usuário ágeis. O foco será redigir Critérios de Aceitação rigorosos para o validador morfológico e aplicar a Definition of Ready (DoR) para garantir que nenhuma task vá para o código com dúvidas de negócio.

---

##  Ações / Próximos Passos

**Artur Fernandes & Bruno Souza**

* Criar o repositório backend;
* Configurar banco de dados;
* Rodar as migrations iniciais;
* Liberar a primeira rota de login via JWT.

**Luiz Henrique & Ana Beatriz**

* Desenhar os protótipos de alta fidelidade no Figma;
* Inicializar o repositório frontend;
* Codificar a estrutura base de UI para a autenticação.

**Carlos Eduardo**

* Gerenciar a criação das User Stories no quadro ágil;
* Redigir os Critérios de Aceitação;
* Garantir o vínculo entre as histórias e as telas desenhadas no Figma.

**Todos**

* Revisar se o código inicial e os protótipos refletem o MVP;
* Preparar o material para a reunião de validação com a Profª. Pilar (PO) ao final da sprint.

---

##  Observações

> Esta sprint é o momento de virada de chave do projeto.
>
> A sincronia entre a equipe que está codificando a infraestrutura e a equipe que está desenhando o layout de alta fidelidade deve ser diária para não gerar retrabalho nas Sprints seguintes.
>
> A validação das telas e das histórias com a cliente ocorrerá no encerramento deste ciclo (26/05).

## **Dailies**

# Daily 01 — 13/05

## Artur

* **Ontem:** Ontem entregamos a Unidade 2.
* **Hoje:** Faço o setup do repositório do backend com Django e crio o ambiente virtual.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem validamos o MVP.
* **Hoje:** Instalo o PostgreSQL e crio o banco de dados inicial do projeto localmente.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem finalizei os diagramas antigos.
* **Hoje:** Começo a desenhar os protótipos de alta fidelidade da tela de login no Figma, já com as cores e tipografia finais.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem fechei a documentação do DoD.
* **Hoje:** Inicializo o projeto frontend usando React com Vite e TypeScript.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem submetemos o relatório da U2.
* **Hoje:** Preparo o quadro ágil para mapearmos os Épicos e Histórias de Usuário do sistema.
* **Impedimentos:** Nenhum.

---

# Daily 02 — 14/05

## Artur

* **Ontem:** Ontem fiz o setup do repositório.
* **Hoje:** Instalo o Django REST Framework (DRF) e configuro as variáveis de ambiente (.env).
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem criei o banco local.
* **Hoje:** Escrevo o código dos models de Usuário e Morfema no Django.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem iniciei o login.
* **Hoje:** Crio os protótipos de alta fidelidade da tela principal do tabuleiro do jogo, definindo os espaços de drag and drop.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem inicializei o React.
* **Hoje:** Instalo o Tailwind CSS e configuro as rotas base com React Router.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem preparei o quadro ágil.
* **Hoje:** Facilito o refinamento das Personas (Professor e Aluno) e da Jornada do Usuário com a equipe.
* **Impedimentos:** Nenhum.

---

# Daily 03 — 15/05

## Artur

* **Ontem:** Ontem configurei o DRF.
* **Hoje:** Instalo o SimpleJWT e crio o serializer base para autenticação de usuários.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem codifiquei os models.
* **Hoje:** Rodo as primeiras migrations e configuro o Django Admin.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem desenhei o tabuleiro no Figma.
* **Hoje:** Elaboro os protótipos de alta fidelidade dos modais de feedback visual (acerto e erro de palavra).
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem configurei as rotas.
* **Hoje:** Começo a codificar a estrutura HTML/Tailwind da tela de login no React.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem refinamos as Personas.
* **Hoje:** Levanto os Problemas e Expectativas gerais para rascunhar o Product Backlog.
* **Impedimentos:** Nenhum.

---

# Daily 04 — 16/05

## Artur

* **Ontem:** Ontem criei os serializers.
* **Hoje:** Estruturo as views de Login e Register no backend.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem rodei as migrations.
* **Hoje:** Testo a criação de usuários diretamente pelo painel do Django Admin.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem finalizei os modais no Figma.
* **Hoje:** Reviso os protótipos de alta fidelidade com a Ana para garantir viabilidade técnica na implementação.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem fiz a tela de login no React.
* **Hoje:** Construo o layout da tela de cadastro.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem levantei as expectativas.
* **Hoje:** Transformo esses itens diretamente em User Stories priorizadas no nosso board.
* **Impedimentos:** Nenhum.

---

# Daily 05 — 17/05

## Artur

* **Ontem:** Ontem fiz as views de auth.
* **Hoje:** Configuro o CORS headers para o frontend conseguir acessar a API localmente.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem testei o Admin.
* **Hoje:** Começo a popular a tabela de Morfemas com os prefixos e sufixos da documentação.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem revisei os protótipos.
* **Hoje:** Configuro o Axios no frontend para centralizar as requisições HTTP.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem fiz a tela de cadastro.
* **Hoje:** Vinculo os inputs do React aos estados (useState) para capturar os dados do usuário.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem criei as User Stories.
* **Hoje:** Detalho os fluxos básicos dentro de cada história mapeada.
* **Impedimentos:** Nenhum.

---

# Daily 06 — 18/05

## Artur

* **Ontem:** Ontem liberei o CORS.
* **Hoje:** Testo a geração e validação do token JWT via Postman.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem populei o banco.
* **Hoje:** Ajusto as permissões das rotas (IsAuthenticated) para proteger a API.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem configurei o Axios.
* **Hoje:** Conecto a tela de login da Ana com a API que o Artur subiu localmente.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem configurei os estados.
* **Hoje:** Crio a lógica de salvar o JWT no LocalStorage do navegador.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem detalhei os fluxos.
* **Hoje:** Aplico a Definição de Preparado (DoR) nas primeiras User Stories de autenticação.
* **Impedimentos:** Nenhum.

---

# Daily 07 — 19/05

## Artur

* **Ontem:** Ontem validei o token.
* **Hoje:** Começo a construir o endpoint GET que lista todos os morfemas do banco.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem ajustei permissões.
* **Hoje:** Padronizo as respostas de erro JSON da API (ex: "usuário não encontrado").
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem conectei o login.
* **Hoje:** Ajusto o redirecionamento automático para a rota privada do tabuleiro após o login de sucesso.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem salvei o JWT.
* **Hoje:** Volto ao Figma para desenhar o protótipo de alta fidelidade da tela de histórico de partidas.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem apliquei o DoR.
* **Hoje:** Reviso os protótipos do Luiz e da Ana para vincular os layouts finais às User Stories.
* **Impedimentos:** Nenhum.

---

# Daily 08 — 20/05

## Artur

* **Ontem:** Ontem fiz o endpoint GET.
* **Hoje:** Crio filtros para separar os morfemas por tipo (prefixo, radical, sufixo).
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem padronizei os erros.
* **Hoje:** Escrevo testes unitários básicos para garantir que o login não quebre no futuro.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem fiz o redirecionamento.
* **Hoje:** Codifico a tela do tabuleiro no React para consumir o endpoint GET de morfemas.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem rascunhei o histórico.
* **Hoje:** Auxilio o Luiz estilizando os blocos reais no código usando as referências do nosso Figma.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem vinculei layouts às histórias.
* **Hoje:** Redijo os Critérios de Aceitação rigorosos para as histórias do validador morfológico.
* **Impedimentos:** Nenhum.

---

# Daily 09 — 21/05

## Artur

* **Ontem:** Ontem criei os filtros GET.
* **Hoje:** Preparo a estrutura da rota POST que vai receber a palavra formada pelo jogador.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem fiz os testes.
* **Hoje:** Ajudo o Artur a mapear como a alomorfia será tratada na estrutura do banco.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem consumi os morfemas.
* **Hoje:** Implemento o esqueleto visual do drag and drop no React, ainda sem a lógica complexa.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem estilizei os blocos.
* **Hoje:** Crio os estados de erro visual (alertas vermelhos e animações de tremor) para falhas no formulário.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem redigi os critérios.
* **Hoje:** Passo a limpo o Backlog priorizado com as estimativas revisadas pela equipe.
* **Impedimentos:** Nenhum.

---

# Daily 10 — 22/05

## Artur

* **Ontem:** Ontem preparei a rota POST.
* **Hoje:** Deixo a base do validador pronta para receber a lógica de concatenação na próxima sprint.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem mapeei a alomorfia.
* **Hoje:** Crio a tabela de PalavraValida e insiro os primeiros casos de teste no banco.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem fiz o esqueleto do drag.
* **Hoje:** Adiciono tratamentos no Axios para deslogar o usuário sozinho se o token JWT expirar.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem criei os alertas de erro.
* **Hoje:** Fecho o pacote final de protótipos de alta fidelidade e exporto todas as telas para o Carlos.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem priorizei o backlog.
* **Hoje:** Organizo os protótipos de alta fidelidade no documento de Requisitos para apresentar à cliente.
* **Impedimentos:** Nenhum.

---

# Daily 11 — 23/05

## Artur

* **Ontem:** Ontem deixei a base pronta.
* **Hoje:** Faço code review dos PRs pendentes do Bruno no backend.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem criei a tabela de palavras.
* **Hoje:** Reviso os PRs de infraestrutura e rotas do Artur.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem tratei a expiração do token.
* **Hoje:** Faço o review do código e da componentização das telas da Ana.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem exportei os protótipos.
* **Hoje:** Limpo os componentes inutilizados do React antes de realizarmos o merge.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem organizei o documento.
* **Hoje:** Faço a verificação geral: o código atual e as telas de alta fidelidade refletem exatamente o MVP acordado?
* **Impedimentos:** Nenhum.

---

# Daily 12 — 24/05

## Artur

* **Ontem:** Ontem fiz code review.
* **Hoje:** Garanto que o README do backend explica detalhadamente como instalar as dependências locais.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem fiz code review.
* **Hoje:** Gero um diagrama de banco (DER) atualizado com as entidades de autenticação e validação.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem fiz code review do front.
* **Hoje:** Escrevo o README do frontend explicando o uso do Vite, Tailwind e scripts essenciais.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem limpei componentes.
* **Hoje:** Confiro se as User Stories respeitam as restrições de acessibilidade visual aplicadas no Figma.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem fiz a verificação do MVP.
* **Hoje:** Finalizo a formatação do documento consolidando as User Stories e os critérios de aceitação.
* **Impedimentos:** Nenhum.

---

# Daily 13 — 25/05

## Artur

* **Ontem:** Ontem fiz o README.
* **Hoje:** Fecho a branch principal com o ambiente base, autenticação e listagem de peças operando redondos.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem gerei o diagrama.
* **Hoje:** Crio um script SQL de backup caso precisemos resetar o banco de dados durante os testes da PO.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem fechei o README do front.
* **Hoje:** Rodo um teste end-to-end rápido simulando o login e visualização do tabuleiro pelo navegador.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem conferi a acessibilidade.
* **Hoje:** Preparo um protótipo navegável no Figma mostrando o fluxo completo em alta fidelidade.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem consolidei o documento.
* **Hoje:** Preparo a pauta executiva para nossa reunião de amanhã com a cliente.
* **Impedimentos:** Nenhum.

---

# Daily 14 — 26/05

## Artur

* **Ontem:** Ontem fechei a branch.
* **Hoje:** Fico à disposição na reunião para tirar dúvidas técnicas da professora sobre segurança e login.
* **Impedimentos:** Nenhum.

## Bruno

* **Ontem:** Ontem criei o backup SQL.
* **Hoje:** Participo da validação focado em anotar possíveis novas regras de palavras válidas.
* **Impedimentos:** Nenhum.

## Luiz

* **Ontem:** Ontem rodei testes manuais.
* **Hoje:** Estarei com o sistema local rodando na minha máquina para caso ela queira ver a base do código funcionando.
* **Impedimentos:** Nenhum.

## Ana

* **Ontem:** Ontem preparei o protótipo navegável.
* **Hoje:** Apresento o design de alta fidelidade finalizado para a Profª Pilar aprovar a interface.
* **Impedimentos:** Nenhum.

## Carlos

* **Ontem:** Ontem preparei a pauta.
* **Hoje:** Conduzo a reunião com a Profª Pilar para validar oficialmente as User Stories e aprovar os designs finais.
* **Impedimentos:** Nenhum.
