## **8. Requisitos de Software**

Esta seção detalha as especificações fundamentais para a concepção e o desenvolvimento do software. O conteúdo está organizado entre requisitos funcionais, que definem as ações e comportamentos que o sistema deve executar, e requisitos não funcionais, que estabelecem os critérios de qualidade, desempenho e restrições técnicas necessários para garantir uma experiência de uso eficiente e segura.

### **8.1 Lista de Requisitos Funcionais**

| ID | Requisito Funcional (Verbo + Objeto) | Rastreabilidade (CP) | Prioridade (MoSCoW) | Justificativa MoSCoW |
| :--- | :--- | :--- | :--- | :--- |
| **RF01** | Efetuar login no sistema utilizando credenciais de acesso. | CP1 - Controle de Acesso | Must Have | Permite que usuários cadastrados acessem o sistema com segurança através da geração do token JWT. |
| **RF02** | Cadastrar novos usuários no sistema. | CP1 - Controle de Acesso | Must Have | Necessário para que novos estudantes ou professores criem seus perfis e possam se autenticar. |
| **RF03** | Permitir a recuperação de acesso mediante envio de nova senha. | CP1 - Controle de Acesso | Should Have | Agrega usabilidade mas o MVP funciona sem recuperação de senha. |
| **RF04** | Cadastrar morfemas no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Sem morfemas cadastrados o jogo não tem conteúdo para funcionar. |
| **RF05** | Editar morfemas existentes no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para correção e atualização de conteúdo cadastrado. |
| **RF06** | Remover morfemas do catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para exclusão de conteúdo incorreto ou obsoleto. |
| **RF07** | Listar morfemas cadastrados no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para que o administrador gerencie o catálogo existente. |
| **RF08** | Cadastrar palavras válidas no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Sem palavras válidas o validador não tem base para funcionar. |
| **RF09** | Editar palavras válidas existentes no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para correção de palavras cadastradas incorretamente. |
| **RF10** | Remover palavras válidas do catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para exclusão de palavras inválidas ou duplicadas. |
| **RF11** | Listar palavras válidas cadastradas no catálogo do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para que o administrador gerencie o catálogo existente. |
| **RF12** | Cadastrar atividades pedagógicas no sistema. | CP2 - Admin de Conteúdo | Must Have | Sem atividades cadastradas o estudante não tem o que realizar. |
| **RF13** | Editar atividades pedagógicas existentes no sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para atualização e correção de atividades já criadas. |
| **RF14** | Remover atividades pedagógicas do sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para exclusão de atividades obsoletas ou incorretas. |
| **RF15** | Listar atividades pedagógicas cadastradas no sistema. | CP2 - Admin de Conteúdo | Must Have | Necessário para que o administrador gerencie as atividades disponíveis. |
| **RF16** | Realizar atividades pedagógicas do tipo Quiz. | CP3 - Espaço de Construção | Must Have | Permite ao estudante responder a questões de múltipla escolha sobre conceitos morfológicos teóricos. |
| **RF17** | Realizar atividades pedagógicas de montagem de palavras. | CP3 - Espaço de Construção | Must Have | É o núcleo interativo do jogo: o estudante manipula os blocos na tela (drag-and-drop) para formar palavras e submete o conjunto para o validador. |
| **RF18** | Consultar explicações sobre conteúdos morfológicos. | CP3 - Espaço de Construção | Could Have | Desejável pedagogicamente mas o MVP funciona sem material de apoio. |
| **RF19** | Consultar o resultado da validação da combinação. | CP4 - Validador de Estruturas | Must Have | Permite ao estudante acompanhar sua própria evolução ao longo do tempo. |
| **RF20** | Consultar o processo de formação morfológica da palavra validada. | CP4 - Validação de Estruturas | Must Have | Garante o objetivo didático do sistema, permitindo que o estudante compreenda a estrutura e a regra por trás da palavra que acabou de validar. |
| **RF21** | Consultar o histórico de pontuações individuais. | CP5 - Portfólio de Progresso | Must Have | Fundamental para a gamificação e engajamento, permitindo que o estudante acompanhe seu próprio progresso ao longo do tempo. |
| **RF22** | Consultar os detalhes de uma atividade realizada. | CP5 - Portfólio de Progresso | Should Have | Importante para que o estudante revise seus erros e acertos passados, mas o MVP funciona apenas com a exibição do histórico de notas/pontos. |
| **RF23** | Cadastrar novas turmas no sistema | CP6 - Painel de Monitoramenteo | Must Have | Necessário para que exista o acesso ao desempenho das turmas e erros frequentes. |
| **RF24** | Acessar relatório de desempenho consolidado da turma. | CP6 - Painel de Monitoramento | Must Have | Permite ao professor identificar dificuldades e orientar intervenções pedagógicas. |
| **RF25** | Consultar os erros morfológicos mais frequentes dos estudantes. | CP6 - Painel de Monitoramento | Should Have | Agrega valor ao monitoramento, mas o painel funciona sem esse detalhamento. |

**Justificativa de Alterações de Requisitos**

A lista de requisitos foi refinada para eliminar redundâncias de interface e comportar de forma clara os diferentes tipos de atividades pedagógicas previstas para o sistema.
 
**Autenticação e Cadastro (RF01 e RF02)**

* Antes:
RF01: Solicitar credenciais de acesso ao sistema.
RF02: Autenticar acesso ao sistema utilizando credenciais.

* Agora:
RF01: Efetuar login no sistema utilizando credenciais de acesso
RF02: Cadastrar novos usuários no sistema.


**Por que mudou**: O texto antigo estava confuso porque o usuário não solicita credenciais para entrar, ele simplesmente digita seus dados de acesso (e-mail e senha) para se autenticar. Além disso, a lista antiga pulava uma etapa pois o sistema não tinha um requisito que previsse a criação de novas contas. Com o novo RF02, corrigimos isso adicionando a funcionalidade para que estudantes e professores criem seus perfis e os dados passem a existir no sistema. 

**Atividades Pedagógicas (RF16, RF17 e RF18)**

* Antes:
RF16: Realizar atividades pedagógicas disponíveis no sistema.
RF17: Movimentar blocos de morfemas na área de montagem.
RF18: Submeter a combinação de blocos para validação.

* Agora:
RF16: Realizar atividades pedagógicas do tipo Quiz.
RF17: Realizar atividades pedagógicas de montagem de palavras 
RF18: EXCLUÍDO

**Por que mudou**: O formato anterior gerava confusão porque misturava e tratava de forma genérica os tipos de atividades da plataforma. Com a mudança, separamos claramente as duas dinâmicas de jogo existentes: a teórica (RF16 - Quiz) e a prática (RF17 - Morfoblocos). Como as mecânicas de "movimentar blocos" e "submeter" pertencem exclusivamente à atividade prática, deletamos o antigo RF18 e embutimos essas ações diretamente no comportamento do RF17, organizando melhor o escopo. 

**Gestão dos Alunos (Inclusão do RF23)**

* Antes: O sistema não possuía um requisito explícito prevendo o agrupamento ou organização de turmas no painel de monitoramento. .
* Agora: RF23: Cadastrar novas turmas no sistema.

**Por que mudou**: A inclusão do RF23 é necessária para dar sustentação lógica aos requisitos de relatórios do professor (RF24 e RF25). Para que o professor possa acessar o desempenho consolidado de uma "turma", o sistema precisa previamente permitir a criação e o gerenciamento dessas turmas, amarrando o fluxo de dados do painel de controle. 


### **8.2 Lista de Requisitos Não Funcionais**

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
| **RNF13** | Segurança | Os dados de identificação e desempenho dos estudantes devem ser armazenados de forma criptografada em repouso, e a sessão ativa do usuário por meio de tokens de autenticação deve expirar em no máximo 1 hora. | Inspeção de Scripts de Migração do Banco de Dados e Code Review da configuração de expiração do JWT no Django. |
| **RNF14** | Segurança | O sistema deve restringir o acesso aos endpoints das áreas administrativa e de relatórios exclusivamente para usuários autenticados com perfis de "Admin" ou "Professor", bloqueando acessos não autorizados. | Testes de Segurança Automatizados de Integração de API (simulação de requisições com tokens de diferentes perfis). |
| **RNF15** | Acessibilidade | A interface visual de realização de atividades deve cumprir as diretrizes da WCAG 2.1 (nível AA), garantindo contraste mínimo de cor de 4.5:1 para elementos de texto, tags descritivas nos blocos e suporte a navegação por teclado. | Execução de ferramenta de auditoria automática (Axe-core / Lighthouse) e teste manual de navegação via tecla TAB.|