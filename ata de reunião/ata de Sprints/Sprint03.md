📌 Ata de Reunião - Sprint Planning MorfoBlocos (Sprint 03)
Data: 13/05/2026

Participantes:
Artur Fernandes
Luiz Henrique Pallavicini
Bruno Souza
Carlos Eduardo
Ana Beatriz

🎯 Objetivo(s) da Reunião
Planejar as atividades da Sprint 3, que marca a transição estratégica da engenharia de requisitos documental para o início do desenvolvimento (código) e do design de interface. O foco será realizar o setup dos ambientes (Frontend e Backend), iniciar o fluxo base de autenticação, finalizar os protótipos de alta fidelidade e detalhar as User Stories com seus respectivos Critérios de Aceitação.

📋 Pautas e Definições
Pauta 1: Setup do Ambiente e Arquitetura Base (Código)
Definição: Ficou decidido o início oficial da codificação. O backend será inicializado utilizando Django e PostgreSQL, com a configuração do Django REST Framework (DRF). O frontend será estruturado com React, Vite, TypeScript e Tailwind CSS, garantindo a fundação técnica do projeto.

Pauta 2: Autenticação e Modelagem Inicial
Definição: A equipe de backend priorizará a codificação dos models iniciais (Usuário e Morfema) e a implementação da segurança via SimpleJWT. O frontend configurará o Axios e o React Router para consumir o login e armazenar o token, estabelecendo a primeira comunicação real entre as camadas.

Pauta 3: Protótipos de Alta Fidelidade (UI/UX)
Definição: Como optamos por não utilizar protótipos de baixa fidelidade, a equipe de design irá direto para a construção das telas de alta fidelidade no Figma. Serão desenhadas as telas de Login, o Tabuleiro de jogo (área de montagem) e os Modais de Feedback, já com as cores, tipografia e espaçamentos definitivos.

Pauta 4: User Stories e Critérios de Aceitação
Definição: Os Requisitos Funcionais do MVP serão transformados em Histórias de Usuário ágeis. O foco será redigir Critérios de Aceitação rigorosos para o validador morfológico e aplicar a Definition of Ready (DoR) para garantir que nenhuma task vá para o código com dúvidas de negócio.

✅ Ações / Próximos Passos
[Artur Fernandes & Bruno Souza]: Criar o repositório backend, configurar banco de dados, rodar as migrations iniciais e liberar a primeira rota de login via JWT.
[Luiz Henrique & Ana Beatriz]: Desenhar os protótipos de alta fidelidade no Figma, inicializar o repositório frontend e codificar a estrutura base de UI para a autenticação.
[Carlos Eduardo]: Gerenciar a criação das User Stories no quadro ágil, redigir os Critérios de Aceitação e garantir o vínculo entre as histórias e as telas desenhadas no Figma.
[Todos]: Revisar se o código inicial e os protótipos refletem o MVP e preparar o material para a reunião de validação com a Profª. Pilar (PO) ao final da sprint.

📝 Observações
Esta sprint é o momento de virada de chave do projeto. A sincronia entre a equipe que está codificando a infraestrutura e a equipe que está desenhando o layout de alta fidelidade deve ser diária para não gerar retrabalho nas Sprints seguintes. A validação das telas e das histórias com a cliente ocorrerá no encerramento deste ciclo (26/05).