📅 Daily 01 — Sprint 3 (13/05) | Foco: Setup Inicial e Estruturação
Artur: Ontem entregamos a Unidade 2. Hoje faço o setup do repositório do backend com Django e crio o ambiente virtual. Impedimentos: Nenhum.
Bruno: Ontem validamos o MVP. Hoje instalo o PostgreSQL e crio o banco de dados inicial do projeto localmente. Impedimentos: Nenhum.
Luiz: Ontem finalizei os diagramas antigos. Hoje começo a desenhar os protótipos de alta fidelidade da tela de login no Figma, já com as cores e tipografia finais. Impedimentos: Nenhum.
Ana: Ontem fechei a documentação do DoD. Hoje inicializo o projeto frontend usando React com Vite e TypeScript. Impedimentos: Nenhum.
Carlos: Ontem submetemos o relatório da U2. Hoje preparo o quadro ágil para mapearmos os Épicos e Histórias de Usuário do sistema. Impedimentos: Nenhum.

📅 Daily 02 — Sprint 3 (14/05) | Foco: Estruturação de Base e UI
Artur: Ontem fiz o setup do repositório. Hoje instalo o Django REST Framework (DRF) e configuro as variáveis de ambiente (.env). Impedimentos: Nenhum.
Bruno: Ontem criei o banco local. Hoje escrevo o código dos models de Usuário e Morfema no Django. Impedimentos: Nenhum.
Luiz: Ontem iniciei o login. Hoje crio os protótipos de alta fidelidade da tela principal do tabuleiro do jogo, definindo os espaços de drag and drop. Impedimentos: Nenhum.
Ana: Ontem inicializei o React. Hoje instalo o Tailwind CSS e configuro as rotas base com React Router. Impedimentos: Nenhum.
Carlos: Ontem preparei o quadro ágil. Hoje facilito o refinamento das Personas (Professor e Aluno) e da Jornada do Usuário com a equipe. Impedimentos: Nenhum.

📅 Daily 03 — Sprint 3 (15/05) | Foco: Modelagem e Autenticação Inicial
Artur: Ontem configurei o DRF. Hoje instalo o SimpleJWT e crio o serializer base para autenticação de usuários. Impedimentos: Nenhum.
Bruno: Ontem codifiquei os models. Hoje rodo as primeiras migrations e configuro o Django Admin. Impedimentos: Nenhum.
Luiz: Ontem desenhei o tabuleiro no Figma. Hoje elaboro os protótipos de alta fidelidade dos modais de feedback visual (acerto e erro de palavra). Impedimentos: Nenhum.
Ana: Ontem configurei as rotas. Hoje começo a codificar a estrutura HTML/Tailwind da tela de login no React. Impedimentos: Nenhum.
Carlos: Ontem refinamos as Personas. Hoje levanto os Problemas e Expectativas gerais para rascunhar o Product Backlog. Impedimentos: Nenhum.

📅 Daily 04 — Sprint 3 (16/05) | Foco: Integração de Histórias de Usuário
Artur: Ontem criei os serializers. Hoje estruturo as views de Login e Register no backend. Impedimentos: Nenhum.
Bruno: Ontem rodei as migrations. Hoje testo a criação de usuários diretamente pelo painel do Django Admin. Impedimentos: Nenhum.
Luiz: Ontem finalizei os modais no Figma. Hoje reviso os protótipos de alta fidelidade com a Ana para garantir viabilidade técnica na implementação. Impedimentos: Nenhum.
Ana: Ontem fiz a tela de login no React. Hoje construo o layout da tela de cadastro. Impedimentos: Nenhum.
Carlos: Ontem levantei as expectativas. Hoje transformo esses itens diretamente em User Stories priorizadas no nosso board. Impedimentos: Nenhum.

📅 Daily 05 — Sprint 3 (17/05) | Foco: Comunicação Front e Back
Artur: Ontem fiz as views de auth. Hoje configuro o CORS headers para o frontend conseguir acessar a API localmente. Impedimentos: Nenhum.
Bruno: Ontem testei o Admin. Hoje começo a popular a tabela de Morfemas com os prefixos e sufixos da documentação. Impedimentos: Nenhum.
Luiz: Ontem revisei os protótipos. Hoje configuro o Axios no frontend para centralizar as requisições HTTP. Impedimentos: Nenhum.
Ana: Ontem fiz a tela de cadastro. Hoje vinculo os inputs do React aos estados (useState) para capturar os dados do usuário. Impedimentos: Nenhum.
Carlos: Ontem criei as User Stories. Hoje detalho os fluxos básicos dentro de cada história mapeada. Impedimentos: Nenhum.

📅 Daily 06 — Sprint 3 (18/05) | Foco: Testes de Login
Artur: Ontem liberei o CORS. Hoje testo a geração e validação do token JWT via Postman. Impedimentos: Nenhum.
Bruno: Ontem populei o banco. Hoje ajusto as permissões das rotas (IsAuthenticated) para proteger a API. Impedimentos: Nenhum.
Luiz: Ontem configurei o Axios. Hoje conecto a tela de login da Ana com a API que o Artur subiu localmente. Impedimentos: Nenhum.
Ana: Ontem configurei os estados. Hoje crio a lógica de salvar o JWT no LocalStorage do navegador. Impedimentos: Nenhum.
Carlos: Ontem detalhei os fluxos. Hoje aplico a Definição de Preparado (DoR) nas primeiras User Stories de autenticação. Impedimentos: Nenhum.

📅 Daily 07 — Sprint 3 (19/05) | Foco: Refinamento Visual e de Código
Artur: Ontem validei o token. Hoje começo a construir o endpoint GET que lista todos os morfemas do banco. Impedimentos: Nenhum.
Bruno: Ontem ajustei permissões. Hoje padronizo as respostas de erro JSON da API (ex: "usuário não encontrado"). Impedimentos: Nenhum.
Luiz: Ontem conectei o login. Hoje ajusto o redirecionamento automático para a rota privada do tabuleiro após o login de sucesso. Impedimentos: Nenhum.
Ana: Ontem salvei o JWT. Hoje volto ao Figma para desenhar o protótipo de alta fidelidade da tela de histórico de partidas. Impedimentos: Nenhum.
Carlos: Ontem apliquei o DoR. Hoje reviso os protótipos do Luiz e da Ana para vincular os layouts finais às User Stories. Impedimentos: Nenhum.

📅 Daily 08 — Sprint 3 (20/05) | Foco: Consumo de Dados no Front
Artur: Ontem fiz o endpoint GET. Hoje crio filtros para separar os morfemas por tipo (prefixo, radical, sufixo). Impedimentos: Nenhum.
Bruno: Ontem padronizei os erros. Hoje escrevo testes unitários básicos para garantir que o login não quebre no futuro. Impedimentos: Nenhum.
Luiz: Ontem fiz o redirecionamento. Hoje codifico a tela do tabuleiro no React para consumir o endpoint GET de morfemas. Impedimentos: Nenhum.
Ana: Ontem rascunhei o histórico. Hoje auxilio o Luiz estilizando os blocos reais no código usando as referências do nosso Figma. Impedimentos: Nenhum.
Carlos: Ontem vinculei layouts às histórias. Hoje redijo os Critérios de Aceitação rigorosos para as histórias do validador morfológico. Impedimentos: Nenhum.

📅 Daily 09 — Sprint 3 (21/05) | Foco: Critérios de Aceitação e UI
Artur: Ontem criei os filtros GET. Hoje preparo a estrutura da rota POST que vai receber a palavra formada pelo jogador. Impedimentos: Nenhum.
Bruno: Ontem fiz os testes. Hoje ajudo o Artur a mapear como a alomorfia será tratada na estrutura do banco. Impedimentos: Nenhum.
Luiz: Ontem consumi os morfemas. Hoje implemento o esqueleto visual do drag and drop no React, ainda sem a lógica complexa. Impedimentos: Nenhum.
Ana: Ontem estilizei os blocos. Hoje crio os estados de erro visual (alertas vermelhos e animações de tremor) para falhas no formulário. Impedimentos: Nenhum.
Carlos: Ontem redigi os critérios. Hoje passo a limpo o Backlog priorizado com as estimativas revisadas pela equipe. Impedimentos: Nenhum.

📅 Daily 10 — Sprint 3 (22/05) | Foco: Estabilidade e Validação de Requisitos
Artur: Ontem preparei a rota POST. Hoje deixo a base do validador pronta para receber a lógica de concatenação na próxima sprint. Impedimentos: Nenhum.
Bruno: Ontem mapeei a alomorfia. Hoje crio a tabela de PalavraValida e insiro os primeiros casos de teste no banco. Impedimentos: Nenhum.
Luiz: Ontem fiz o esqueleto do drag. Hoje adiciono tratamentos no Axios para deslogar o usuário sozinho se o token JWT expirar. Impedimentos: Nenhum.
Ana: Ontem criei os alertas de erro. Hoje fecho o pacote final de protótipos de alta fidelidade e exporto todas as telas para o Carlos. Impedimentos: Nenhum.
Carlos: Ontem priorizei o backlog. Hoje organizo os protótipos de alta fidelidade no documento de Requisitos para apresentar à cliente. Impedimentos: Nenhum.

📅 Daily 11 — Sprint 3 (23/05) | Foco: Revisão do MVP e Qualidade
Artur: Ontem deixei a base pronta. Hoje faço code review dos PRs pendentes do Bruno no backend. Impedimentos: Nenhum.
Bruno: Ontem criei a tabela de palavras. Hoje reviso os PRs de infraestrutura e rotas do Artur. Impedimentos: Nenhum.
Luiz: Ontem tratei a expiração do token. Hoje faço o review do código e da componentização das telas da Ana. Impedimentos: Nenhum.
Ana: Ontem exportei os protótipos. Hoje limpo os componentes inutilizados do React antes de realizarmos o merge. Impedimentos: Nenhum.
Carlos: Ontem organizei o documento. Hoje faço a verificação geral: o código atual e as telas de alta fidelidade refletem exatamente o MVP acordado? Impedimentos: Nenhum.

📅 Daily 12 — Sprint 3 (24/05) | Foco: Documentação Técnica
Artur: Ontem fiz code review. Hoje garanto que o README do backend explica detalhadamente como instalar as dependências locais. Impedimentos: Nenhum.
Bruno: Ontem fiz code review. Hoje gero um diagrama de banco (DER) atualizado com as entidades de autenticação e validação. Impedimentos: Nenhum.
Luiz: Ontem fiz code review do front. Hoje escrevo o README do frontend explicando o uso do Vite, Tailwind e scripts essenciais. Impedimentos: Nenhum.
Ana: Ontem limpei componentes. Hoje confiro se as User Stories respeitam as restrições de acessibilidade visual aplicadas no Figma. Impedimentos: Nenhum.
Carlos: Ontem fiz a verificação do MVP. Hoje finalizo a formatação do documento consolidando as User Stories e os critérios de aceitação. Impedimentos: Nenhum.

📅 Daily 13 — Sprint 3 (25/05) | Foco: Fechamento Técnico da Sprint
Artur: Ontem fiz o README. Hoje fecho a branch principal com o ambiente base, autenticação e listagem de peças operando redondos. Impedimentos: Nenhum.
Bruno: Ontem gerei o diagrama. Hoje crio um script SQL de backup caso precisemos resetar o banco de dados durante os testes da PO. Impedimentos: Nenhum.
Luiz: Ontem fechei o README do front. Hoje rodo um teste end-to-end rápido simulando o login e visualização do tabuleiro pelo navegador. Impedimentos: Nenhum.
Ana: Ontem conferi a acessibilidade. Hoje preparo um protótipo navegável no Figma mostrando o fluxo completo em alta fidelidade. Impedimentos: Nenhum.
Carlos: Ontem consolidei o documento. Hoje preparo a pauta executiva para nossa reunião de amanhã com a cliente. Impedimentos: Nenhum.

📅 Daily 14 — Sprint 3 (26/05) | Foco: Validação com a Profª Pilar (PO)
Artur: Ontem fechei a branch. Hoje fico à disposição na reunião para tirar dúvidas técnicas da professora sobre segurança e login. Impedimentos: Nenhum.
Bruno: Ontem criei o backup SQL. Hoje participo da validação focado em anotar possíveis novas regras de palavras válidas. Impedimentos: Nenhum.
Luiz: Ontem rodei testes manuais. Hoje estarei com o sistema local rodando na minha máquina para caso ela queira ver a base do código funcionando. Impedimentos: Nenhum.
Ana: Ontem preparei o protótipo navegável. Hoje apresento o design de alta fidelidade finalizado para a Profª Pilar aprovar a interface. Impedimentos: Nenhum.
Carlos: Ontem preparei a pauta. Hoje conduzo a reunião com a Profª Pilar para validar oficialmente as User Stories e aprovar os designs finais. Impedimentos: Nenhum.