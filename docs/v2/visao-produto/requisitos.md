## **8. Requisitos de Software**

Esta seção detalha as especificações fundamentais para a concepção e o desenvolvimento do software. O conteúdo está organizado entre requisitos funcionais, que definem as ações e comportamentos que o sistema deve executar, e requisitos não funcionais, que estabelecem os critérios de qualidade, desempenho e restrições técnicas necessários para garantir uma experiência de uso eficiente e segura.

### **8.1 Lista de Requisitos Funcionais**

| ID | Requisito Funcional (Verbo + Objeto) | Rastreabilidade (CP) | Prioridade (MoSCoW) | Justificativa MoSCoW |
| :--- | :--- | :--- | :--- | :--- |
| **RF01** | Solicitar credenciais de acesso ao sistema. | CP1 - Controle de Acesso | Must Have | Sem autenticação nenhum usuário consegue acessar o sistema. |
| **RF02** | Autenticar acesso ao sistema utilizando credenciais. | CP1 - Controle de Acesso | Must Have | É o mecanismo central de entrada no sistema para todos os perfis. |
| **RF03** | Permitir a recuperação de acesso mediante envio de nova senha. | CP1 - Controle de Acesso | Should Have | Agrega usabilidade mas o MVP funciona sem recuperação de senha. |
| **RF04** | Cadastrar morfemas no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Sem morfemas cadastrados o jogo não tem conteúdo para funcionar. |
| **RF05** | Editar morfemas existentes no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para correção e atualização de conteúdo cadastrado. |
| **RF06** | Remover morfemas do catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para exclusão de conteúdo incorreto ou obsoleto. |
| **RF07** | Listar morfemas cadastrados no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para que o administrador gerencie o catálogo existente. |
| **RF08** | Cadastrar palavras válidas no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Sem palavras válidas o validador não tem base para funcionar. |
| **RF09** | Editar palavras válidas existentes no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para correção de palavras cadastradas incorretamente. |
| **RF010** | Remover palavras válidas do catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para exclusão de palavras inválidas ou duplicadas. |
| **RF011** | Listar palavras válidas cadastradas no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para que o administrador gerencie o catálogo existente. |
| **RF012** | Cadastrar atividades pedagógicas no sistema. | CP2 - Admin de Conteúdo | Must Have | Sem atividades cadastradas o estudante não tem o que realizar. |
| **RF013** | Editar atividades pedagógicas existentes no sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para atualização e correção de atividades já criadas. |
| **RF14** | Remover atividades pedagógicas do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para exclusão de atividades obsoletas ou incorretas. |
| **RF15** | Listar atividades pedagógicas cadastradas no sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para que o administrador gerencie as atividades disponíveis. |
| **RF16** | Realizar atividades pedagógicas disponíveis no sistema. | CP3 - Espaço de Construção | Must Have | É a funcionalidade central do produto — sem ela o sistema não tem propósito. |
| **RF17** | Movimentar blocos de morfemas na área de montagem. | CP3 - Espaço de Construção | Must Have | É a mecânica principal para a montagem/processo de formação das palavras. |
| **RF18** | Submeter a combinação de blocos para validação. | CP3 - Espaço de Construção | Must Have | Mecânica importante, sem a submissão não há validação, logo o aluno não recebe feedback para evolução nas atividades. |
| **RF19** | Consultar explicações sobre conteúdos morfológicos relacionados às atividades. | CP3 - Espaço de Construção | Could Have | Desejável pedagogicamente mas o MVP funciona sem material de apoio. |
| **RF20** | Consultar o resultado da validação da combinação de blocos submetida. | CP4 - Validador de Estruturas | Must Have | Permite ao estudante acompanhar sua própria evolução ao longo do tempo. |
| **RF21** | Consultar o processo de formação morfológica da palavra validada. | CP4 - Validação de Estruturas | Must Have | Garante o objetivo didático do sistema, permitindo que o estudante compreenda a estrutura e a regra por trás da palavra que acabou de validar. |
| **RF22** | Consultar o histórico de pontuações individuais. | CP5 - Portfólio de Progresso | Must Have | Fundamental para a gamificação e engajamento, permitindo que o estudante acompanhe seu próprio progresso ao longo do tempo.
| **RF23** | Consultar os detalhes de uma atividade realizada. | CP5 - Portfólio de Progresso | Should Have | Importante para que o estudante revise seus erros e acertos passados, mas o MVP funciona apenas com a exibição do histórico de notas/pontos. |
| **RF24** | Acessar relatório de desempenho consolidado da turma. | CP6 - Painel de Monitoramento | Must Have | Permite ao professor identificar dificuldades e orientar intervenções pedagógicas. |
| **RF25** | Consultar os erros morfológicos mais frequentes dos estudantes. | CP6 - Painel de Monitoramento | Should Have | Agrega valor ao monitoramento, mas o painel funciona sem esse detalhamento. |

## **8.2 Lista de Requisitos Não Funcionais**

| ID | Categoria (URPS+) | Descrição Mensurável para Teste | Método de Validação / Teste |
| :--- | :--- | :--- | :--- |
| **RNF01** | Usabilidade | O estudante deve conseguir arrastar, encaixar os blocos e formar sua primeira palavra em menos de 1 minuto em seu primeiro uso, sem auxílio de tutoriais. | Teste de Usabilidade cronometrado com novos usuários. |
| **RNF02** | Usabilidade | A interface deve permitir selecionar, mover e soltar blocos utilizando eventos nativos de mouse (desktop) e touch (mobile) sem falhas de renderização. | Teste de Interface Automático (E2E) e Teste Manual (Touch/Mouse). |
| **RNF03** | Performance | O sistema deve processar a combinação de blocos e exibir o feedback visual na tela em um tempo máximo de 2 segundos. | Monitoramento de Tempo de Resposta (Network Tab / Testes de Performance). |
| **RNF04** | Confiabilidade | O sistema deve preservar a integridade dos dados durante acessos simultâneos. | Teste de Carga e Concorrência no Banco de Dados (verificação ACID). |
| **RNF05** | Suportabilidade | A interface cliente deve comunicar-se com a lógica de negócio exclusivamente por meio de APIs. | Inspeção de Arquitetura e Code Review. |
| **RNF06** | Suportabilidade | O sistema deve permitir a manutenção do catálogo de morfemas via Django Admin, sem telas de cadastro no frontend React. | Teste de Inserção via Django Admin. |
| **RNF07** | Restrições | O frontend deve ser desenvolvido obrigatoriamente utilizando React com TypeScript. | Inspeção de Código / Configuração do Repositório. |
| **RNF08** | Restrições | O backend deve ser desenvolvido obrigatoriamente em Python utilizando o framework Django. | Inspeção de Código / Configuração do Repositório. |
| **RNF09** | Restrições | O banco de dados deve ser implementado utilizando o SGBD PostgreSQL. | Validação da Infraestrutura / Configuração de Banco. |
| **RNF10** | Suportabilidade | O sistema deve operar sem falhas críticas nas duas últimas versões estáveis dos navegadores Chrome, Firefox, Edge e Safari. | Teste de Compatibilidade Cross-browser. |
| **RNF11** | Usabilidade | A interface deve readequar seus elementos sem sobreposição ou scroll horizontal em telas a partir de 360px de largura. | Teste Cross-device (Emuladores mobile / DevTools). |
| **RNF12** | Restrições | O sistema deve ser acessível via HTTP/HTTPS a partir de um navegador web, sem exigir instalação local. | Teste de Implantação e Acesso URL. |