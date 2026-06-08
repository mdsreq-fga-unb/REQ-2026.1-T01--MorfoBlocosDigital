📌 Ata de Reunião - MorfoBlocos (Sprint 01)
Data: 22/05/2026

Participantes:
Artur Fernandes
Luiz Henrique Pallavicini
Bruno Souza
Carlos Eduardo
Ana Beatriz

🎯 Objetivo(s) da Reunião
Estabelecer a fundação inicial do sistema MorfoBlocos Digital, garantindo a configuração dos ambientes de desenvolvimento, a modelagem inicial do banco de dados, o fluxo de autenticação e a integração inicial entre o frontend e o backend.

📋 Pautas e Definições
Pauta 1: Setup do Projeto e Arquitetura Inicial (Backend e Banco de Dados)
Definição: Ficou definido o setup estrutural utilizando Django com PostgreSQL. Serão configuradas as variáveis de ambiente (.env) e instaladas as dependências essenciais: Django REST Framework (DRF), SimpleJWT para segurança, e corsheaders para permitir a comunicação com o frontend.

Pauta 2: Modelagem do Banco e Autenticação
Definição: Definiu-se o modelo inicial contendo as tabelas Usuário, Morfema, PalavraValida e Tentativa. O fluxo de autenticação contará com os endpoints de login e register gerando tokens JWT válidos. O Django Admin será utilizado imediatamente para o cadastro rápido e testes de CRUD de morfemas e palavras válidas.

Pauta 3: Estrutura do Frontend e Integração Base
Definição: O ambiente frontend será iniciado utilizando React + Vite + TypeScript, com estilização em Tailwind CSS e gerenciamento de rotas via React Router. A comunicação com a API será feita via Axios, priorizando o desenvolvimento das telas de Login, Cadastro e um Dashboard básico capaz de armazenar o JWT e realizar o redirecionamento do usuário.

Pauta 4: Processo ScrumXP
Definição: Realização do Sprint Planning para divisão clara das tarefas e estimativas de esforço. Dailies serão adotadas para acompanhamento de impedimentos, e o fluxo de desenvolvimento exigirá a abertura de Pull Requests (PRs) obrigatórios com code review simplificado antes de qualquer merge na branch principal.

✅ Ações / Próximos Passos
[Artur Fernandes & Bruno Souza]: Realizar o setup do Django, configuração do PostgreSQL, migrações iniciais e estruturação dos endpoints de autenticação e tabelas base.
[Luiz Henrique & Ana Beatriz]: Criar a estrutura do projeto em React com Vite/TS, implementar o Tailwind, criar as telas de login/cadastro e integrar a retenção do JWT via Axios.
[Carlos Eduardo]: Validar os relacionamentos, constraints e tipos das tabelas do banco de dados, além de organizar o quadro de tarefas do ScrumXP.
[Todos]: Garantir o funcionamento integrado de ponta a ponta (login injetando token e frontend respondendo) até o término da sprint.

📝 Observações

A integração total precisa estar funcional até o dia 28/05. Caso o fluxo básico de login e banco não esteja operável nesta data, o cronograma geral do projeto entrará em risco.