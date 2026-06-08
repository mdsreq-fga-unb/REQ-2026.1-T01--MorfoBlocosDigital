📌 Ata de Reunião - MorfoBlocos (Sprint 02)
Data: 29/05/2026

Participantes:
Artur Fernandes
Luiz Henrique Pallavicini
Bruno Souza
Carlos Eduardo
Ana Beatriz

🎯 Objetivo(s) da Reunião
Desenvolver e consolidar o núcleo funcional (core) do jogo MorfoBlocos, focando na mecânica de movimentação de blocos (drag and drop), lógica do validador morfológico no backend e integração completa dos componentes.

📋 Pautas e Definições
Pauta 1: Lógica do Validador Morfológico e Alomorfia
Definição: O backend disponibilizará o endpoint /morfemas (listagem) e o endpoint /validar-palavra. A lógica consistirá em receber a sequência de blocos do frontend, concatenar as grafias na ordem recebida e consultar a tabela PalavraValida. Para a alomorfia, adotou-se uma abordagem simplificada de cadastro direto no banco (ex: "in-" e "im-" como registros independentes). Toda a equipe deve estar alinhada e apta a explicar essa arquitetura de consulta.

Pauta 2: Área de Montagem e Feedback Visual (Frontend)
Definição: O frontend focará na implementação da área de jogo contendo a mecânica de drag and drop para manipulação dos blocos, com cores distintas baseadas no tipo de morfema. Após a ação de envio da combinação para a API, um modal de feedback deve exibir de forma clara se a palavra é válida ou inválida, exibindo o processo morfológico correspondente retornado pelo backend.

Pauta 3: Testes Automatizados e Qualidade
Definição: Tornou-se obrigatória a criação de testes iniciais no backend para validar o fluxo de login, o registro de novos usuários e, principalmente, o comportamento do validador de palavras sob cenários de sucesso e falha.

Pauta 4: Rituais de Fechamento ScrumXP
Definição: Condução da Sprint Review com foco na validação do protótipo funcional e Sprint Retrospective para levantar gargalos de desenvolvimento e refatorar trechos de código duplicados identificados durante o desenvolvimento da mecânica central.

✅ Ações / Próximos Passos
[Artur Fernandes & Bruno Souza]: Construir os endpoints de listagem e validação morfológica, implementar o suporte simplificado a alomorfia via banco e escrever os testes automatizados obrigatórios.
[Luiz Henrique & Ana Beatriz]: Implementar a biblioteca de drag and drop no front, renderizar os blocos coloridos por tipo e construir os modais de feedback integrados aos retornos da API.
[Carlos Eduardo]: Apoiar na revisão das rotas da API, garantir a execução dos testes e documentar os pontos levantados na retrospectiva.
[Todos]: Manter o foco estrito na entrega funcional da mecânica do jogo, priorizando o funcionamento correto da lógica sobre o refinamento estético visual nesta etapa.

📝 Observações

O lema desta sprint é "funcionar primeiro, ficar bonito depois". Ao final deste ciclo, o jogo precisa estar totalmente integrado e validando palavras de forma consistente.

