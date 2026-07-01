## **10. Backlog**

A presente seção apresenta o Backlog do Produto MorfoBlocos Digital, organizado a partir dos requisitos funcionais (RFs), requisitos não funcionais (RNFs) e regras de negócio (RN) elicitados e consolidados ao longo das atividades de Engenharia de Requisitos. Todas as histórias de usuário aqui declaradas derivam diretamente da lista de requisitos funcionais apresentada anteriormente neste documento, sendo acompanhadas dos respectivos Critérios de Aceitação. Trata-se de uma lista preliminar, sujeita a refinamentos durante o desenvolvimento, conforme o produto evolui e novos aprendizados emergem das interações com a cliente.
Esta versão da seção incorpora ajustes acordados ao longo das três Unidades já cumpridas, com destaque para as correções relacionadas a esta Unidade III, decorrentes da Verificação e Validação externa conduzida pelo Grupo Equipe V sobre os artefatos publicados ao final da Unidade II, e do comentário do professor sobre coexistência de técnicas de organização do backlog. As correções aplicadas são:

* Atomização total dos requisitos funcionais: as operações CRUD de manutenção do catálogo, antes registradas como sub-itens (RF04a–d, RF05a–d, RF06a–d), foram reescritas como requisitos funcionais individuais e renumerados sequencialmente (RF04 a RF15), passando o catálogo de 16 itens (com sub-letras) para 25 RFs atômicos.

* Remoção da técnica de User Story Mapping (USM) anteriormente declarada em paralelo ao backlog, mantendo o backlog como única estrutura de organização dos itens de produto.

* Resolução da contradição entre RNF05 (comunicação exclusiva por APIs) e RNF06 (manutenção via Django Admin), por meio do refinamento dos escopos de aplicação de cada um dos requisitos.

* Inclusão de versões mínimas exigidas nas restrições tecnológicas (RNF07, RNF08, RNF09), para tornar os requisitos verificáveis em tempo de configuração de ambiente.

* Criação da subseção 10.1.5 — Critérios de Aceitação, com a declaração explícita dos critérios verificáveis associados a cada User Story do backlog, no padrão proposto por Cohn (2004) e Pichler (2010).

* Quebra das User Stories que agrupavam múltiplas operações em itens atômicos (uma User Story por RF), eliminando as quatro US do tipo épico identificadas na avaliação externa (operações CRUD agrupadas).

* Incorporação do feedback direto da Product Owner (Profª. María del Pilar) obtido nas reuniões da Unidade III. Os ajustes incluem nível de dificuldade definido pelo estudante, validação morfológica fixa, feedback de erro mais acolhedor e registro de tentativas no histórico.

### **10.1 Backlog Geral**


#### 10.1.1 Catálogo Consolidado de Requisitos Funcionais

O catálogo a seguir consolida os 25 requisitos funcionais (RFs) elicitados para o MorfoBlocos Digital, organizados por Característica de Produto (CP) e com a respectiva classificação MoSCoW.

As operações de manutenção do catálogo de conteúdo (morfemas, palavras válidas e atividades pedagógicas), nas versões anteriores deste documento agrupadas sob sub-letras (RF04a–d, RF05a–d, RF06a–d), foram reescritas como requisitos funcionais individuais e renumeradas sequencialmente, conforme orientação da banca sobre granularidade e independência de requisitos. A renumeração afeta todos os RFs subsequentes.

| ID | CP | Requisito Funcional | Ator Principal | MoSCoW |
| :--- | :--- | :--- | :--- | :--- |
| **RF01** | CP1 | Efetuar login no sistema utilizando e-mail e senha. | Usuário | Must Have |
| **RF02** | CP1 | Cadastrar uma nova conta no sistema inserindo dados. | Usuário | Must Have |
| **RF03** | CP1 | Recuperar acesso mediante envio de nova senha. | Usuário | Should Have |
| **RF04** | CP2 | Cadastrar novos morfemas no catálogo. | Administrador | Must Have |
| **RF05** | CP2 | Editar morfemas existentes no catálogo. | Administrador | Won't Have |
| **RF06** | CP2 | Remover morfemas do catálogo. | Administrador | Won't Have |
| **RF07** | CP2 | Listar os morfemas cadastrados. | Administrador | Won't Have |
| **RF08** | CP2 | Cadastrar palavras válidas no catálogo. | Administrador | Must Have |
| **RF09** | CP2 | Editar palavras válidas existentes. | Administrador | Won't Have |
| **RF10** | CP2 | Remover palavras válidas do catálogo. | Administrador | Must Have |
| **RF11** | CP2 | Listar as palavras válidas cadastradas. | Administrador | Won't Have |
| **RF12** | CP2 | Cadastrar atividades pedagógicas. | Administrador | Must Have |
| **RF13** | CP2 | Editar atividades pedagógicas existentes. | Administrador | Won't Have |
| **RF14** | CP2 | Remover atividades pedagógicas do sistema. | Administrador | Must Have |
| **RF15** | CP2 | Listar as atividades cadastradas no painel. | Administrador | Won't Have |
| **RF16** | CP3 | Realizar atividades pedagógicas do tipo Quiz. | Estudante | Must Have |
| **RF17** | CP3 | Realizar atividades de montagem de palavras manipulando blocos. | Estudante | Must Have |
| **RF18** | CP3 | Consultar explicações sobre conteúdos morfológicos. | Estudante | Must Have |
| **RF19** | CP3 | Consultar o resultado da validação da combinação de blocos. | Estudante | Must Have |
| **RF20** | CP4 | Consultar o processo de formação morfológica da palavra. | Estudante | Must Have |
| **RF21** | CP5 | Consultar o histórico das minhas pontuações individuais. | Estudante | Must Have |
| **RF22** | CP5 | Consultar os detalhes de uma atividade que já realizei. | Estudante | Should Have |
| **RF23** | CP6 | Acessar relatório de desempenho consolidado da turma. | Professor | Must Have |
| **RF24** | CP6 | Acessar o relatório de desempenho consolidado da turma. | Professor | Must Have |
| **RF25** | CP6 | Consultar os erros morfológicos mais frequentes. | Professor | Should Have |

**Legenda de Características de Produto**

* **CP1 — Controle de Acesso:** autenticação, autorização e gestão de credenciais.
* **CP2 — Administração de Conteúdo:** curadoria de morfemas, palavras válidas e atividades pedagógicas.
* **CP3 — Espaço de Construção:** ambiente de manipulação e submissão de blocos pelo estudante.
* **CP4 — Validador de Estruturas:** validação morfológica e apresentação do processo de formação da palavra.
* **CP5 — Portfólio de Progresso:** registro e visualização individual de desempenho e tentativas realizadas.
* **CP6 — Painel de Monitoramento:** visão consolidada do desempenho da turma para o professor.

#### 10.1.2 Catálogo Consolidado de Requisitos Não Funcionais

O catálogo a seguir consolida os 12 requisitos não funcionais (RNFs) declarados para o MorfoBlocos Digital, classificados segundo o modelo URPS+ (*Usability, Reliability, Performance, Supportability* e categoria adicional de Restrições).

Cada RNF possui descrição mensurável e método de validação associado, permitindo a verificação objetiva do seu atendimento durante o desenvolvimento e a entrega do produto.

Esta versão do catálogo incorpora dois ajustes acordados na Unidade III:

1. O refinamento de escopo do RNF05 e do RNF06 para eliminar a contradição apontada na V&V externa entre comunicação exclusiva por APIs e manutenção via Django Admin;
2. A inclusão de versões mínimas exigidas nas restrições tecnológicas (RNF07, RNF08 e RNF09), de modo a torná-las verificáveis em tempo de configuração do ambiente.

| ID    | Categoria       | Descrição Mensurável                                                                                                                                                                                                                                                                                                                                           | Método de Validação                                                       |
| ----- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| RNF01 | Usabilidade     | O estudante deve conseguir arrastar, encaixar os blocos e formar sua primeira palavra em menos de 1 minuto em seu primeiro uso, sem auxílio de tutoriais.                                                                                                                                                                                                      | Teste de Usabilidade cronometrado com novos usuários.                     |
| RNF02 | Usabilidade     | A interface deve permitir selecionar, mover e soltar blocos utilizando eventos nativos de mouse (desktop) e touch (mobile) sem falhas de renderização.                                                                                                                                                                                                         | Teste Manual (Touch/Mouse).         |
| RNF03 | Performance     | O sistema deve processar a combinação de blocos e exibir o feedback visual na tela em um tempo máximo de 2 segundos.                                                                                                                                                                                                                                           | Monitoramento de Tempo de Resposta (Network Tab / Testes de Performance). |
| RNF04 | Confiabilidade  | O sistema deve preservar a integridade dos dados durante acessos simultâneos.                                                                                                                                                                                                                                                                                  | Teste de Carga e Concorrência no Banco de Dados (verificação ACID).       |
| RNF05 | Suportabilidade | A comunicação entre o frontend React (experiência do estudante e do professor) e o backend Django deve ocorrer exclusivamente por meio de APIs REST. Esta restrição não se aplica à interface administrativa interna (Django Admin), que opera como ferramenta operacional do administrador e está regulamentada pelo RNF06.                                   | Inspeção de Arquitetura e Code Review.                                    |
| RNF06 | Suportabilidade | A manutenção do catálogo de conteúdo (morfemas, palavras válidas e atividades pedagógicas) deve ser realizada pelo Administrador por meio da interface Django Admin, sem necessidade de telas dedicadas de cadastro no frontend React. Esta operação é interna e não constitui exceção ao RNF05, que rege a comunicação cliente-aplicação dos usuários finais. | Teste de Inserção via Django Admin.                                       |
| RNF07 | Restrições      | O frontend deve ser desenvolvido obrigatoriamente utilizando React 18 ou superior com TypeScript 5 ou superior.                                                                                                                                                                                                                                                | Inspeção de Código / Configuração do `package.json`.                      |
| RNF08 | Restrições      | O backend deve ser desenvolvido obrigatoriamente em Python 3.11 ou superior utilizando o framework Django 4.2 ou superior.                                                                                                                                                                                                                                     | Inspeção de Código / Configuração do `requirements.txt`.                  |
| RNF09 | Restrições      | O banco de dados deve ser implementado utilizando o SGBD PostgreSQL 15 ou superior.                                                                                                                                                                                                                                                                            | Validação da Infraestrutura / Configuração de Banco.                      |
| RNF10 | Suportabilidade | O sistema deve operar sem falhas críticas nas duas últimas versões estáveis dos navegadores Chrome, Firefox, Edge e Safari, sendo considerada falha crítica qualquer erro de JavaScript não tratado, quebra de layout ou indisponibilidade de funcionalidade essencial do MVP.                                                                                 | Teste de Compatibilidade Cross-browser.                                   |
| RNF11 | Usabilidade     | A interface deve readequar seus elementos sem sobreposição ou scroll horizontal em telas a partir de 360px de largura.                                                                                                                                                                                                                                         | Teste Cross-device (Emuladores mobile / DevTools).                        |
| RNF12 | Restrições      | O sistema deve ser acessível via HTTP/HTTPS a partir de um navegador web, sem exigir instalação local.                                                                                                                                                                                                                                                         | Teste de Implantação e Acesso URL.                                        |

**Observação sobre a resolução da contradição RNF05 × RNF06**

A versão anterior deste documento declarava no RNF05 uma exigência de comunicação exclusivamente por APIs, que entrava em conflito direto com o RNF06, que prescreve o uso do Django Admin para manutenção de catálogo.

A V&V externa conduzida pelo Grupo V identificou corretamente essa contradição. A reescrita acima delimita o escopo de cada requisito:

* O **RNF05** rege a comunicação entre os clientes do produto (frontend de estudantes e professores) e o backend.
* O **RNF06** rege a ferramenta administrativa interna, operada apenas pelo Administrador, fora do fluxo cliente-aplicação principal.

#### 10.1.3 Catálogo de Regras de Negócio

As Regras de Negócio (RN) representam restrições e políticas do domínio do MorfoBlocos Digital que orientam o comportamento do sistema, independentemente de implementação tecnológica.

Diferentemente dos RFs (que descrevem o que o sistema faz) e dos RNFs (que descrevem como o sistema deve se comportar em termos de qualidade), as RNs estabelecem o que é permitido, obrigatório ou vedado no contexto pedagógico e operacional do produto.

| ID   | Regra de Negócio                                                                                                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------- |
| RN01 | Apenas usuários autenticados podem acessar o sistema.                                                                     |
| RN02 | Apenas professores podem acessar relatórios de desempenho consolidados da turma.                                          |
| RN03 | Apenas administradores podem cadastrar, editar e remover morfemas, palavras válidas e atividades pedagógicas.             |
| RN04 | Apenas palavras previamente cadastradas no catálogo podem ser consideradas válidas pelo validador morfológico.            |
| RN05 | Toda tentativa realizada pelo estudante (válida ou inválida) deve ser registrada no histórico de atividades.              |
| RN06 | A pontuação obtida pelo estudante deve ser salva automaticamente ao finalizar uma atividade.                              |
| RN07 | O acesso a níveis superiores de dificuldade só é liberado mediante atingimento de pontuação mínima definida pelo sistema. |
| RN08 | Todo resultado de atividade finalizada deve ser armazenado de forma persistente no histórico do estudante.                |

#### 10.1.4 User Stories Derivadas dos Requisitos Funcionais

A tabela a seguir apresenta cada RF declarado utilizando a técnica de User Story no formato **"Como [ator], quero [objetivo], para [benefício]"**, conforme proposto por Cohn (2004) e adotado pela equipe como prática de Declaração de Requisitos (seção 4.1).

Após a V&V externa conduzida pelo Grupo V, as User Stories que agrupavam múltiplas operações sob uma mesma estimativa (épicos) foram desmembradas em itens atômicos. Cada User Story corresponde agora a exatamente um RF, totalizando 25 User Stories rastreáveis.

A coluna **RNFs Relacionados** estabelece a rastreabilidade entre as histórias e os requisitos não funcionais aplicáveis. Os Critérios de Aceitação correspondentes a cada US estão declarados na subseção 10.1.5.

| RF   | User Story Derivada                                                                                                                                                 | RNFs Relacionados |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| RF01 | **US01** — Como usuário, quero efetuar login no sistema utilizando e-mail e senha, para acessar minha conta na plataforma de forma segura.   | RNF13       |
| RF02 | **US02** — Como usuário, quero cadastrar uma nova conta no sistema inserindo meus dados, para que meu perfil seja criado e eu possa começar a usar a plataforma.   | RNF04   |
| RF03 | **US03** — Como usuário, quero recuperar meu acesso mediante envio de um link de redefinição de senha, para retomar o uso da plataforma caso esqueça minha senha.   | RNF04             |
| RF04 | **US04** — Como administrador, quero cadastrar novos morfemas no catálogo, para disponibilizar peças para a montagem de palavras pelos estudantes.                  | RNF04, RNF06      |
| RF05 | **US05** — Como administrador, quero editar morfemas existentes no catálogo, para corrigir grafias, classificações ou cores associadas.                             | RNF04, RNF06      |
| RF06 | **US06** — Como administrador, quero remover morfemas do catálogo, para retirar peças que não devem mais estar disponíveis aos estudantes.                          | RNF04, RNF06      |
| RF07 | **US07** — Como administrador, quero listar os morfemas cadastrados, para consultar o conteúdo atual do catálogo.                                                   | RNF04, RNF06      |
| RF08 | **US08** — Como administrador, quero cadastrar palavras válidas no catálogo, para definir as combinações de morfemas reconhecidas pelo validador.                   | RNF04, RNF06      |
| RF09 | **US09** — Como administrador, quero editar palavras válidas existentes, para corrigir registros ou ajustar processos morfológicos associados.                      | RNF04, RNF06      |
| RF10 | **US10** — Como administrador, quero remover palavras válidas do catálogo, para retirar registros que não devem mais ser aceitos pelo validador.                    | RNF04, RNF06      |
| RF11 | **US11** — Como administrador, quero listar as palavras válidas cadastradas, para consultar a base utilizada pelo validador morfológico.                            | RNF04, RNF06      |
| RF12 | **US12** — Como administrador, quero cadastrar atividades pedagógicas, para disponibilizar exercícios contextualizados às necessidades pedagógicas dos estudantes.  | RNF04, RNF06      |
| RF13 | **US13** — Como administrador, quero editar atividades pedagógicas existentes, para corrigir enunciados, níveis de dificuldade ou conjuntos de morfemas associados. | RNF04, RNF06      |
| RF14 | **US14** — Como administrador, quero remover atividades pedagógicas, para retirar exercícios que não devem mais estar disponíveis aos estudantes.                                  | RNF04, RNF06               |
| RF15 | **US15** — Como administrador, quero listar as atividades cadastradas, para consultar o catálogo de exercícios disponíveis.                                                        | RNF04, RNF06               |
| RF16 | **US16** — Como estudante, quero realizar atividades pedagógicas do tipo Quiz, para responder a questões de múltipla escolha sobre conceitos morfológicos teóricos. | RNF15 |
| RF17 | **US17** — Como estudante, quero realizar atividades pedagógicas de montagem de palavras, manipulando os blocos na tela para formar palavras e submetê-las para a validação.   | RNF02 |
| RF18 | **US18** — Como estudante, quero submeter a combinação de blocos que montei, para que ela seja avaliada pelo sistema.                                                              | RNF03, RNF04               |
| RF19 | **US19** — Como estudante, quero visualizar explicações sobre conteúdos morfológicos relacionados às atividades, para aprender enquanto pratico.                                   | RNF01                      |
| RF20 | **US20** — Como estudante, quero que minha combinação de blocos seja validada com base no catálogo de palavras válidas, para receber um resultado correto sobre a palavra formada. | RNF03, RNF04               |
| RF21 | **US21** — Como estudante, quero consultar o processo de formação morfológica da palavra validada, para compreender como os morfemas se combinam.                                  | RNF01, RNF03               |
| RF22 | **US22** — Como estudante, quero consultar o histórico das minhas pontuações individuais, para acompanhar minha evolução ao longo do tempo.                                        | RNF01, RNF04               |
| RF23 | **US23** — Como professor, quero cadastrar novas turmas no sistema, para agrupar meus estudantes e gerenciar seus acessos de forma organizada.        | RNF14   |
| RF24 | **US24** — Como professor, quero acessar o relatório de desempenho consolidado da turma, para monitorar o progresso coletivo dos estudantes.                                       | RNF01, RNF03, RNF04        |
| RF25 | **US25** — Como professor, quero analisar os erros morfológicos mais frequentes dos estudantes da turma, para direcionar intervenções pedagógicas mais eficazes.                   | RNF03, RNF04               |

**Alteração**: Modificamos as US01, US02, US16 e US17 e criamos a US23 para se adequar aos requisitos que foram mudados.

**Observação sobre RNFs transversais**

> Os RNFs de restrição tecnológica e arquitetural — **RNF05** (comunicação por APIs no fluxo cliente-aplicação), **RNF07** (React/TypeScript), **RNF08** (Django), **RNF09** (PostgreSQL), **RNF10** (compatibilidade cross-browser) e **RNF12** (acesso via navegador) — aplicam-se de forma transversal a todas as User Stories deste backlog. Embora não estejam repetidos linha a linha, devem ser considerados válidos e obrigatórios para todos os RFs do produto.

#### 10.1.5 Critérios de Aceitação

Esta subseção declara os Critérios de Aceitação (CA) associados a cada User Story do backlog. Os CAs estabelecem as condições objetivas e verificáveis que devem ser satisfeitas para que uma US seja considerada concluída e aceita pelo Product Owner, conforme proposto por Cohn (2004) e Pichler (2010). 

Sua declaração explícita responde diretamente à lacuna apontada pela V&V externa conduzida pelo Grupo V, que identificou ausência de critérios formais como principal limitação da testabilidade das User Stories anteriores.

Os CAs foram declarados com calibração proporcional à complexidade de cada US: operações CRUD simples receberam um único critério essencial (focado nos campos obrigatórios da operação e na rastreabilidade com RNs/RNFs aplicáveis); operações de consulta receberam dois critérios (campos exibidos e regras de ordenação/filtragem); operações críticas do núcleo do produto, com regras de negócio relevantes ou dependências entre US, receberam dois ou três critérios. A formulação dos CAs incorpora as decisões registradas nas reuniões com a Profª. Pilar (PO), em especial as decisões sobre fluxo de jogo, padrão de blocos por cor e modalização do feedback de erro, registradas na Reunião #2 (07/05/2026).

**Convenções de identificação**:

* ID no formato CA-USxx-yy, onde xx é o número da User Story e yy é o número sequencial do critério dentro da US.
* Quando um CA depende de um RNF ou RN específico para sua verificação, a referência é declarada entre colchetes ao final do enunciado.
* Quando um CA depende de outra US (dependência funcional), a referência também é declarada entre colchetes.

### **_Característica de Produto 1 — Controle de Acesso_**

**US01 — Como usuário, quero efetuar login no sistema utilizando e-mail e senha, para acessar minha conta na plataforma de forma segura**

| ID         | Critério de Aceitação                                                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US01-01 | O sistema deve exigir um e-mail válido e a senha correta; o acesso só é liberado se os dados coincidirem exatamente com o banco de dados.              |
| CA-US01-02 | Se a senha ou o e-mail estiverem incorretos, o sistema exibe uma mensagem de erro geral ("E-mail ou senha incorretos") por motivos de segurança. |
| CA-US01-03 | Após o login bem-sucedido, o sistema gera uma sessão segura por até 1 hora e direciona o usuário automaticamente para a sua tela inicial. |

**US02 — Como usuário, quero cadastrar uma nova conta no sistema inserindo meus dados, para que meu perfil seja criado e eu possa começar a usar a plataforma.**

| ID         | Critério de Aceitação                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US02-01 | O sistema exige obrigatoriamente e-mail, senha e a escolha do perfil (se é Estudante ou Professor), bloqueando o envio de campos vazios.            |
| CA-US02-02 | O sistema impede o cadastro de um e-mail que já esteja previamente registrado na base de dados. |
| CA-US02-03 | O sistema deve validar o formato estrutural do e-mail (ex: nome@dominio.com), exibindo um alerta visual em caso de erro.      |
| CA-US02-04 | O sistema exige que o campo de senha e a confirmação de senha sejam rigorosamente iguais. |
| CA-US02-05 | A interface da tela de cadastro deve ser totalmente responsiva em ecrãs/telas a partir de 360px de largura, sem qualquer sobreposição de textos, campos desalinhados ou surgimento de barra de rolagem horizontal (scroll lateral). |

**US03 — Como usuário, quero recuperar meu acesso mediante envio de um link de redefinição de senha, para retomar o uso da plataforma caso esqueça minha senha.**

| ID         | Critério de Aceitação                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CA-US03-01 | O sistema deve enviar um link de redefinição de senha (e não a senha em texto puro) para o e-mail cadastrado do usuário, mediante solicitação na tela de login.                      |
| CA-US03-02 | O link de redefinição deve ter validade limitada de no máximo 24 horas e ser invalidado após o primeiro uso, exibindo mensagem específica caso o usuário tente reutilizá-lo [RNF04]. |

### **_Característica de Produto 2 — Administração de Conteúdo_**

**US04 — Como administrador, quero cadastrar morfemas no catálogo do sistema, para disponibilizar peças para a montagem de palavras pelos estudantes.**

| ID         | Critério de Aceitação                                                                                                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US04-01 | O cadastro de um morfema deve exigir, obrigatoriamente, a informação da grafia do morfema, seu tipo morfológico (prefixo, radical ou sufixo) e a cor associada ao tipo, recusando o salvamento caso qualquer um desses dados esteja ausente [RN03, RNF06]. |

---

**US05 — Como administrador, quero editar morfemas existentes no catálogo, para corrigir grafias, classificações ou cores associadas.**

| ID         | Critério de Aceitação                                                                                                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US05-01 | A edição de um morfema deve permitir alterar sua grafia, tipo morfológico e cor associada, refletindo as alterações imediatamente nas próximas atividades que utilizarem esse morfema [RN03, RNF06]. |

---

**US06 — Como administrador, quero remover morfemas do catálogo, para retirar peças que não devem mais estar disponíveis aos estudantes.**

| ID         | Critério de Aceitação                                                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US06-01 | O sistema deve impedir a remoção de um morfema que esteja associado a palavras válidas cadastradas, exibindo mensagem explicando a dependência existente e orientando a remoção prévia das associações [RN03, RNF06]. |

---

**US07 — Como administrador, quero listar os morfemas cadastrados, para consultar o conteúdo atual do catálogo.**

| ID         | Critério de Aceitação                                                                                                                                    |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US07-01 | A listagem deve exibir, no mínimo, a grafia do morfema, seu tipo morfológico e a cor associada, permitindo ordenação e busca textual por grafia [RNF06]. |

---

**US08 — Como administrador, quero cadastrar palavras válidas no catálogo, para definir as combinações de morfemas reconhecidas pelo validador.**

| ID         | Critério de Aceitação                                                                                                                                                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US08-01 | O cadastro de uma palavra válida deve exigir, obrigatoriamente, sua grafia completa, os morfemas que a compõem e a descrição do processo de formação morfológica correspondente, recusando o salvamento caso qualquer uma dessas informações esteja ausente [RNF03, RNF04, RNF06]. |

---

**US09 — Como administrador, quero editar palavras válidas existentes, para corrigir registros ou ajustar processos morfológicos associados.**

| ID         | Critério de Aceitação                                                                                                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US09-01 | A edição deve permitir alterar a grafia da palavra, sua composição morfológica e a descrição do processo de formação associado, mantendo a consistência das referências utilizadas pelo validador [RNF03, RNF06]. |

---

**US10 — Como administrador, quero remover palavras válidas do catálogo, para retirar registros que não devem mais ser aceitos pelo validador.**

| ID         | Critério de Aceitação                                                                                                                                                                    |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US10-01 | O sistema deve impedir a exclusão de palavras válidas que estejam vinculadas a atividades pedagógicas ativas, exibindo mensagem informativa sobre a dependência existente [RNF03, RNF06]. |

---

**US11 — Como administrador, quero listar palavras válidas cadastradas, para consultar a base utilizada pelo validador morfológico.**

| ID         | Critério de Aceitação                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US11-01 | A listagem deve exibir, no mínimo, a grafia da palavra, sua composição morfológica e o processo de formação associado, permitindo consulta e busca textual [RNF06]. |

---

**US12 — Como administrador, quero cadastrar atividades pedagógicas no sistema, para disponibilizar exercícios contextualizados às necessidades pedagógicas dos estudantes.**

| ID         | Critério de Aceitação                                                                                                                                                                                                                                            |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US12-01 | O cadastro de uma atividade deve exigir, obrigatoriamente, título, nível de dificuldade, conjunto de morfemas disponíveis para montagem e pontuação mínima para progressão, recusando o salvamento caso qualquer campo obrigatório esteja ausente [RN03, RNF06]. |

---

**US13 — Como administrador, quero editar atividades pedagógicas existentes no sistema, para corrigir enunciados, níveis de dificuldade ou conjuntos de morfemas associados.**

| ID         | Critério de Aceitação                                                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US13-01 | A edição deve permitir alterar título, nível de dificuldade, conjunto de morfemas disponíveis e pontuação mínima para progressão, preservando o histórico das execuções já realizadas [RN03, RNF06, RN08]. |

---

**US14 — Como administrador, quero remover atividades pedagógicas do sistema, para retirar exercícios que não devem mais estar disponíveis aos estudantes.**

| ID         | Critério de Aceitação                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US14-01 | A remoção de uma atividade deve torná-la indisponível para novas execuções, sem excluir os registros históricos de tentativas e pontuações previamente realizadas pelos estudantes [RN08, RNF06]. |

---

**US15 — Como administrador, quero listar atividades pedagógicas cadastradas no sistema, para consultar o catálogo de exercícios disponíveis.**

| ID         | Critério de Aceitação                                                                                                                                           |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US15-01 | A listagem deve exibir, no mínimo, título da atividade, nível de dificuldade e quantidade de morfemas associados, permitindo ordenação e busca textual [RNF06]. |

### **_Característica de Produto 3 — Espaço de Construção_**

**US16 — Como estudante, quero realizar atividades pedagógicas do tipo Quiz, para responder a questões de múltipla escolha sobre conceitos morfológicos teóricos.**

| ID         | Critério de Aceitação                                                                                                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US16-01 | O sistema deve carregar e exibir sequencialmente as perguntas de múltipla escolha associadas a uma atividade pedagógica teórica, computar a resposta selecionada pelo estudante entre as alternativas disponíveis e exibir o feedback imediato ou pontuação final após a conclusão do envio. |

---

**US17 — Como estudante, quero realizar atividades pedagógicas de montagem de palavras, manipulando os blocos na tela, para formar palavras e submetê-las para a validação.**

| ID         | Critério de Aceitação                                                                                                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US17-01 | O estudante consegue arrastar, soltar e reordenar livremente os blocos de morfemas na área de construção usando o toque (mobile) ou o mouse. |
| CA-US17-02 | O botão de "Enviar Resposta" (ou "Verificar Palavra") só fica ativo e clicável se houver pelo menos um bloco posicionado na área de montagem.     |
| CA-US17-03 | A área de construção e os blocos de morfemas devem adaptar-se dinamicamente ao limite mínimo de 360px de largura. Os blocos devem empilhar-se ou redimensionar-se automaticamente, sendo expressamente proibido que fiquem cortados ou forcem uma barra de rolagem horizontal. |

---

**US18 — Como estudante, quero consultar explicações sobre conteúdos morfológicos relacionados às atividades, para aprender enquanto pratico.**

| ID         | Critério de Aceitação                                                                                                                                                                        |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US18-01 | Ao acionar o botão de envio na área de montagem, o back-end deve processar a sequência de IDs dos blocos, verificar a compatibilidade linguística com o dicionário de palavras válidas e retornar se a combinação está correta ou incorreta, aplicando a pontuação correspondente.           |

---

**US19 — Como estudante, quero consultar o resultado da validação da combinação de blocos submetida, para saber se acertei a estrutura da palavra.**

| ID         | Critério de Aceitação                                                                                                                                                          |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CA-US19-01 | O motor do sistema testa a sequência de blocos enviada contra o banco de dados de palavras válidas e exibe um feedback instantâneo e claro de "Acertou" ou "Errou". |

### **_Característica de Produto 4 — Validador de Estruturas_**

**US20 — Como estudante, quero consultar o processo de formação morfológica da palavra validada, para compreender como os morfemas se combinam.**

| ID         | Critério de Aceitação                                                                                                                                                                                                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US20-01 | Em caso de acerto na montagem, o sistema abre uma explicação detalhada e textual do processo morfológico daquela palavra específica (ex: prefixação, sufixação).                |

---

**US21 — Como estudante, quero consultar o histórico de pontuações individuais, para acompanhar minha evolução ao longo do tempo.**

| ID         | Critério de Aceitação                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US21-01 | O ecrã/tela de portfólio deve expor uma listagem cronológica contendo o nome de cada atividade realizada, a data da tentativa e a nota alcançada pelo aluno. |

### **_Característica de Produto 5 — Portfólio de Progresso_**

**US22 — Como estudante, quero consultar o histórico das minhas pontuações individuais, para acompanhar minha evolução ao longo do tempo..**

| ID         | Critério de Aceitação                                                                                                                                                                                                                             |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US22-01 | O histórico deve apresentar, para cada atividade concluída pelo estudante, no mínimo: nome da atividade, data de realização, pontuação obtida e resultado final da tentativa, ordenados cronologicamente [RNF01, RN08].                    |
| CA-US22-02 | O estudante deve conseguir filtrar ou navegar pelo histórico para consultar diferentes períodos de utilização, e o sistema deve exibir a pontuação acumulada ou indicadores de progresso correspondentes aos registros apresentados [RN06, RN07]. |

---

**US23 — Como professor, quero cadastrar novas turmas no sistema, para agrupar meus estudantes e gerenciar seus acessos de forma organizada.**

| ID         | Critério de Aceitação                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CA-US23-01 | O cadastro da turma exige um identificador único (Nome/Código) e o ano letivo corrente, bloqueando o acesso a esta rota para quem tiver perfil de estudante..              |

### **_Característica de Produto 6 — Painel de Monitoramento_**

**US24 — Como professor, quero acessar o relatório de desempenho consolidado da turma, para identificar dificuldades e orientar..**

| ID         | Critério de Aceitação                                                                                                                                                                                                                                                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US24-01 | Se a turma selecionada for nova e os alunos ainda não tiverem realizado nenhum exercício, os gráficos e tabelas não podem quebrar; o sistema deve exibir uma mensagem clara. |

---

**US25 — Como professor, quero analisar os erros morfológicos mais frequentes dos estudantes da turma, para direcionar intervenções pedagógicas mais eficazes.**

| ID         | Critério de Aceitação                                                                                                                                                                                                                          |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CA-US25-01 | A análise de erros deve listar as palavras inválidas mais frequentemente submetidas pela turma no período selecionado, em ranking decrescente, com indicação da quantidade de ocorrências e dos estudantes envolvidos [RN02, RN05].         |
| CA-US25-02 | A análise depende funcionalmente do registro de tentativas inválidas realizado pela US20 (CA-US20-03); na ausência de submissões inválidas no período, a tela deve exibir mensagem informativa específica em vez de tabela vazia [RN05, RN08]. |
| CA-US25-03 | O período padrão da análise deve ser os últimos 30 dias, com filtros adicionais para últimos 7 dias e semestre completo, e filtro opcional por nível de dificuldade da atividade em que o erro foi cometido [RNF03].                           |

**Resumo da Cobertura de Critérios de Aceitação**

A tabela a seguir consolida a distribuição de Critérios de Aceitação por Característica de Produto, demonstrando a calibração proporcional adotada e a cobertura total do backlog.

| CP | Característica de Produto | US no CP | CAs no CP | Média CAs por US |
| :--- | :--- | :---: | :---: | :---: |
| CP1 | Controle de Acesso | 3 | 8 | 2,7 |
| CP2 | Administração de Conteúdo | 12 | 12 | 1,0 |
| CP3 | Espaço de Construção | 4 | 8 | 2,0 |
| CP4 | Validador de Estruturas | 2 | 5 | 2,5 |
| CP5 | Portfólio de Progresso | 2 | 4 | 2,0 |
| CP6 | Painel de Monitoramento | 2 | 5 | 2,5 |
| — | **Total** | **25** | **42** | **1,68** |

#### **10.1.6 Matriz de Rastreabilidade**

[Matriz de Rastreabilidade](https://www.figma.com/board/LOM1iccAAlhb0DHHsTQohH/Unidade-4---Matriz-de-Rastreabilidade?node-id=0-1&t=7DiAK8qbN9krcz2w-1)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/board/LOM1iccAAlhb0DHHsTQohH/Unidade-4---Matriz-de-Rastreabilidade?node-id=0-1&embed-host=share" allowfullscreen></iframe>

### 10.2 Priorização do Backlog Geral e MVP

A priorização do backlog do MorfoBlocos Digital foi conduzida combinando duas técnicas complementares declaradas pela equipe na seção 4.1 (Atividades e Técnicas de ER) como práticas da atividade de Análise e Consenso: a Priorização MoSCoW e a Matriz Avaliação Técnica × Valor de Negócio (operacionalizada como Matriz de Valor de Negócio × Complexidade Técnica). O uso conjunto preserva a coerência metodológica do projeto e amplia a capacidade de justificar as decisões de escopo perante a cliente e a banca avaliadora.

Em atendimento às recomendações da banca, esta versão da seção adota critérios objetivos para a aplicação das duas técnicas. A classificação MoSCoW de cada requisito é justificada por critérios explícitos relacionados à participação do requisito nos fluxos essenciais do MVP; e a Matriz é fundamentada por uma escala numérica de Valor de Negócio (VB, de 1 a 5) e de Complexidade Técnica (CT, de 1 a 5), cada uma com critérios objetivos próprios.

#### 10.2.1 Critérios Objetivos para a Classificação MoSCoW

O valor de negócio representa o impacto do requisito nos fluxos principais do MorfoBlocos Digital e na capacidade do sistema atender aos objetivos definidos para o MVP. Receberam maior valor de negócio os requisitos que:

* Participam diretamente dos casos de uso principais;
* Permitem a execução das atividades pedagógicas do estudante;
* Registram, recuperam ou preservam informações relacionadas ao progresso do usuário;
* Sustentam funcionalidades de acompanhamento pedagógico do professor;
* Ou comprometem a execução adequada dos fluxos principais quando ausentes.

A partir desses critérios, cada requisito foi classificado segundo o modelo MoSCoW:

| Classificação | Critério |
| --------------| ---------|
| Must Have | O requisito participa diretamente de um fluxo essencial do MVP. Sem ele, o sistema não executa o caso de uso principal ou perde sua função central. |
| Should Have | O requisito apoia um fluxo essencial ou amplia um fluxo principal com suporte pedagógico, operacional ou de acompanhamento. O MVP continua funcionando sem ele, mas com perda de cobertura, automação ou qualidade. |
| Could Have | O requisito complementa o uso do sistema, mas não altera a execução dos fluxos principais do MVP. |
| Won't Have | O requisito não entra na primeira versão do MVP. Foi postergado por baixo impacto no fluxo principal ou por custo técnico incompatível com a versão inicial. |

#### 10.2.2 Critérios Objetivos para o Valor de Negócio (VB)

Para permitir o posicionamento quantitativo dos requisitos na Matriz de Priorização, as classificações MoSCoW foram convertidas em uma escala numérica de Valor de Negócio (VB), variando de 1 a 5. A escala admite gradações de valor dentro de uma mesma categoria MoSCoW: requisitos classificados como Must Have podem assumir VB 4 ou 5 conforme sua centralidade no fluxo principal do MVP, distinguindo operações que sustentam diretamente o caso de uso central daquelas que atuam como operações de apoio indispensáveis dentro de uma característica essencial.

| Classificação MoSCoW | Valor de Negócio (VB) | Interpretação |
| :--- | :---: | :--- |
| Must Have | 4 ou 5 | Essencial para o MVP. VB 5 quando o requisito participa diretamente do fluxo central do produto (sem ele, o caso de uso principal não existe). VB 4 quando o requisito é operação de apoio indispensável dentro de uma característica essencial — por exemplo, operações secundárias de CRUDs em CP2 (Editar, Remover, Listar), que sustentam a manutenção do conteúdo cadastrado mas não disparam o fluxo principal por si só. |
| Should Have | 4 | Importante para ampliação, acompanhamento ou qualidade do fluxo principal. |
| Could Have | 3 | Complementar ao sistema, sem impacto direto no funcionamento central. |
| Won't Have | 1 ou 2 | Fora do escopo da versão inicial. |

_Observação: essa gradação interna não afeta o posicionamento dos requisitos na Matriz de Valor × Complexidade Técnica, uma vez que a regra de agregação definida na seção 10.2.4 considera de "alto valor de negócio" qualquer requisito com VB 4 ou 5. A diferenciação entre VB 4 e VB 5 dentro da categoria Must Have é utilizada apenas para sinalizar a ordem de implementação dentro de cada quadrante._

#### 10.2.3 Critérios Objetivos para a Complexidade Técnica (CT)

A Complexidade Técnica representa o nível de esforço necessário para implementar cada requisito, considerando os riscos técnicos envolvidos no desenvolvimento e na manutenção da solução. Um requisito foi considerado mais complexo quando envolve um ou mais dos seguintes fatores:

* Integração entre frontend, backend e banco de dados;
* Necessidade de persistência e manipulação estruturada de dados;
* Validações executadas em tempo real durante a interação do usuário;
* Tratamento de acessos simultâneos e integridade das informações;
* Compatibilidade entre diferentes dispositivos, resoluções ou navegadores;
* Maior volume de testes técnicos e de integração;
* Ou necessidade de alterações arquiteturais relevantes na aplicação.

A partir desses fatores, foi definida a seguinte escala de classificação:

| Nível de CT | Descrição |
| :--- | :--- |
| 1 — Muito Baixa | Implementação simples e localizada, restrita a uma única camada do sistema, sem necessidade de integrações relevantes ou regras complexas. |
| 2 — Baixa | Exige integrações básicas, regras de negócio simples ou persistência elementar de dados, utilizando soluções já conhecidas pela equipe. |
| 3 — Média | Envolve integração entre múltiplas camadas do sistema, validações adicionais, maior volume de testes ou manipulação estruturada de dados. |
| 4 — Alta | Exige sincronização entre diferentes componentes, compatibilidade entre dispositivos/navegadores, processamento mais sofisticado ou maior risco técnico. |
| 5 — Muito Alta | Envolve algoritmos complexos, validações em tempo real, concorrência, requisitos críticos de desempenho, alta dependência arquitetural ou elevado esforço de testes e manutenção. |

#### 10.2.4 Regra de Decisão da Matriz

A posição de cada requisito na Matriz foi definida pelo cruzamento entre a classificação de Valor de Negócio e o nível de Complexidade Técnica, segundo as seguintes regras 
de agregação:

* Requisitos classificados como Must Have ou Should Have (VB 4 ou 5) foram considerados de alto valor de negócio;
* Requisitos classificados como Could Have ou Won't Have (VB 3 ou inferior) foram considerados de baixo valor de negócio;
* Requisitos com CT 1 ou 2 (Muito Baixa ou Baixa) foram considerados de baixa complexidade técnica;
* Requisitos com CT 3, 4 ou 5 (Média, Alta ou Muito Alta) foram considerados de alta complexidade técnica.

A partir desse cruzamento, os requisitos foram distribuídos nos quatro quadrantes da Matriz:

| Quadrante | Interpretação |
| :--- | :--- |
| Q1 — Alto valor + Baixa complexidade técnica | Requisitos priorizados para implementação inicial. Entregam alto impacto com menor esforço técnico. |
| Q2 — Alto valor + Alta complexidade técnica | Requisitos essenciais, porém com maior risco ou custo de implementação. Devem ser planejados com atenção. |
| Q3 — Baixo valor + Baixa complexidade técnica | Requisitos complementares que agregam valor, mas não são críticos para o MVP. Podem ser incluídos conforme capacidade. |
| Q4 — Baixo valor + Alta complexidade técnica | Requisitos com baixo retorno frente ao alto custo técnico. Devem ser adiados para futuras versões. |

| Quadrante | Requisitos Funcionais Integrados |
| :--- | :--- |
| **Q1: Grande Valor / Pequeno Esforço**<br>*(Foco Total MVP)* | **RF01** – Efetuar login no sistema utilizando credenciais de acesso.<br><br>**RF02** – Cadastrar novos usuários no sistema.<br><br>**RF04** – Cadastrar morfemas no catálogo do sistema.<br><br>**RF06** – Remover morfemas do catálogo do sistema.<br><br>**RF08** – Cadastrar palavras válidas no catálogo do sistema.<br><br>**RF10** – Remover palavras válidas do catálogo do sistema.<br><br>**RF12** – Cadastrar atividades pedagógicas no sistema.<br><br>**RF14** – Remover atividades pedagógicas do sistema.<br><br>**RF18** – Consultar explicações sobre conteúdos morfológicos relacionados às atividades.<br><br>**RF21** – Consultar o histórico de pontuações individuais.<br><br>**RF23** – Cadastrar novas turmas no sistema. |
| **Q2: Grande Valor / Grande Esforço**<br>*(Core Complexo MVP)* | **RF16** – Realizar atividades pedagógicas do tipo Quiz.<br><br>**RF17** – Realizar atividades pedagógicas de montagem de palavras.<br><br>**RF19** – Consultar o resultado da validação da combinação de blocos submetida.<br><br>**RF20** – Consultar o processo de formação morfológica da palavra validada.<br><br>**RF24** – Acessar relatório de desempenho consolidado da turma. |
| **Q3: Pequeno Valor / Pequeno Esforço**<br>*(For Visivelmente fora do MVP - Postergados)* | **RF05** – Editar morfemas existentes no catálogo.<br><br>**RF07** – Listar morfemas cadastrados no catálogo.<br><br>**RF09** – Editar palavras válidas existentes no catálogo.<br><br>**RF11** – Listar palavras válidas cadastradas no catálogo.<br><br>**RF13** – Editar atividades pedagógicas existentes.<br><br>**RF15** – Listar atividades pedagógicas cadastradas. |
| **Q4: Pequeno Valor / Grande Esforço**<br>*(Fora do MVP - Descartados por hora)* | **RF03** – Permitir a recuperação de acesso mediante envio de nova senha.<br><br>**RF22** – Consultar os detalhes de uma atividade realizada.<br><br>**RF25** – Consultar os erros morfológicos mais frequentes dos estudantes. |

#### 10.2.5 Classificação Consolidada dos Requisitos

A tabela a seguir consolida a classificação final de todos os 25 requisitos funcionais, cruzando MoSCoW, Valor de Negócio (VB), Complexidade Técnica (CT), quadrante na matriz de priorização e a decisão final de inclusão no MVP.

Esta consolidação reflete o refinamento do escopo do Administrador (focado estritamente em inserção e exclusão para o MVP) e a introdução da gestão de turmas pelo corpo docente.

| ID | Requisito Funcional | MoSCoW | VB | CT | Quadrante | MVP? |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **RF01** | Efetuar login no sistema utilizando credenciais de acesso. | Must Have | 5 | 1 | Q1 | Sim |
| **RF02** | Cadastrar novos usuários no sistema. | Must Have | 5 | 2 | Q1 | Sim |
| **RF03** | Permitir a recuperação de acesso mediante envio de nova senha. | Should Have | 3 | 3 | Q4 | Não |
| **RF04** | Cadastrar morfemas no catálogo do sistema. | Must Have | 5 | 2 | Q1 | Sim |
| **RF05** | Editar morfemas existentes no catálogo do sistema. | Won't Have | 2 | 2 | Q3 | Não |
| **RF06** | Remover morfemas do catálogo do sistema. | Must Have | 4 | 2 | Q1 | Sim |
| **RF07** | Listar morfemas cadastrados no catálogo do sistema. | Won't Have | 2 | 2 | Q3 | Não |
| **RF08** | Cadastrar palavras válidas no catálogo do sistema. | Must Have | 5 | 2 | Q1 | Sim |
| **RF09** | Editar palavras válidas existentes no catálogo do sistema. | Won't Have | 2 | 2 | Q3 | Não |
| **RF10** | Remover palavras válidas do catálogo do sistema. | Must Have | 4 | 2 | Q1 | Sim |
| **RF11** | Listar palavras válidas cadastradas no catálogo do sistema. | Won't Have | 2 | 2 | Q3 | Não |
| **RF12** | Cadastrar atividades pedagógicas no sistema. | Must Have | 5 | 2 | Q1 | Sim |
| **RF13** | Editar atividades pedagógicas existentes no sistema. | Won't Have | 2 | 2 | Q3 | Não |
| **RF14** | Remover atividades pedagógicas do sistema. | Must Have | 4 | 2 | Q1 | Sim |
| **RF15** | Listar atividades pedagógicas cadastradas no sistema. | Won't Have | 2 | 2 | Q3 | Não |
| **RF16** | Realizar atividades pedagógicas do tipo Quiz. | Must Have | 5 | 3 | Q2 | Sim |
| **RF17** | Realizar atividades pedagógicas de montagem de palavras. | Must Have | 5 | 5 | Q2 | Sim |
| **RF18** | Consultar explicações sobre conteúdos morfológicos. | Must Have | 5 | 2 | Q1 | Sim |
| **RF19** | Consultar o resultado da validação da combinação. | Must Have | 5 | 4 | Q2 | Sim |
| **RF20** | Consultar o processo de formação morfológica. | Must Have | 5 | 3 | Q2 | Sim |
| **RF21** | Consultar o histórico de pontuações individuais. | Must Have | 5 | 2 | Q1 | Sim |
| **RF22** | Consultar os detalhes de uma atividade realizada. | Must Have | 5 | 2 | Q1 | Sim |
| **RF23** | Cadastrar novas turmas no sistema. | Must Have | 5 | 4 | Q2 | Sim |
| **RF24** | Acessar relatório de desempenho consolidado da turma. | Should Have | 3 | 3 | Q4 | Não |
| **RF25** | Consultar os erros morfológicos mais frequentes. | Should Have | 3 | 4 | Q4 | Não |

#### 10.2.6 Definição do MVP

O Produto Mínimo Viável do MorfoBlocos Digital foi definido como o menor conjunto de funcionalidades capaz de demonstrar, em ambiente real de uso, a hipótese central de valor do produto:

> _Um estudante consegue, de forma autônoma, realizar atividades pedagógicas de morfologia (teóricas via Quiz ou práticas combinando blocos de morfemas), consultar explicações sobre conteúdos morfológicos diretamente na interface, submeter sua combinação para validação automática, consultar o processo de formação morfológica da palavra validada e acompanhar seu próprio progresso através do histórico de pontuações individuais, permitindo simultaneamente que o professor realize a gestão e o monitoramento do desempenho consolidado da turma — sem depender da mediação síncrona do docente para a validação._

Aplicando rigidamente a regra de decisão da matriz e os critérios MoSCoW acordados para a otimização do desenvolvimento, o MVP é composto exclusivamente pelos requisitos classificados como Must Have, totalizando 17 dos 25 requisitos funcionais declarados.

Foram totalmente excluídos do escopo inicial do MVP os requisitos de edição e listagem do administrador (RF05, RF07, RF09, RF11, RF13, RF15), além das funcionalidades complementares de recuperação de acesso (RF03), revisão detalhada de tentativas passadas (RF22) e o painel avançado de ranking de erros (RF25). Esta estratégia garante foco total na mecânica central do jogo, no suporte teórico básico e na viabilidade técnica do ecossistema dentro do prazo proposto.

**Distribuição do MVP por Característica de Produto**:

| CP | Característica de Produto | RFs no MVP | Cobertura |
| :--- | :--- | :--- | :--- |
| **CP1** | Controle de Acesso | RF01, RF02 | Parcial (RF03 fora) |
| **CP2** | Administração de Conteúdo | RF04, RF06, RF08, RF10, RF12, RF14 | Parcial (Edições e Listagens fora) |
| **CP3** | Espaço de Construção | RF16, RF17, RF18 | Total |
| **CP4** | Validador de Estruturas | RF19, RF20 | Total |
| **CP5** | Portfólio de Progresso | RF21 | Parcial (RF22 fora) |
| **CP6** | Painel de Monitoramento | RF23, RF24 | Parcial (RF25 fora) |

**Cobertura do MVP em relação aos Objetivos Específicos**:

| OE | Objetivo Específico | Coberto pelo MVP? |
| :--- | :--- | :--- |
| OE1 | Digitalizar a mecânica e a identidade visual do MorfoBlocos. | Sim (CP2, CP3) |
| OE2 | Viabilizar a formação autônoma de palavras com feedback automático. | Sim (CP2) |
| OE3 | Estruturar um catálogo de morfemas e exercícios com progressão de dificuldade. | Sim (CP3, CP4) |
| OE4 | Registrar o histórico de interações do usuário para rastreabilidade de aprendizado. | Sim (CP5, CP6) |

**Requisitos Não Funcionais aplicáveis ao MVP:**

Todos os 12 RNFs declarados no catálogo de requisitos são considerados válidos para o MVP, por descreverem propriedades transversais ao produto (usabilidade, confiabilidade, performance, suportabilidade e restrições arquiteturais). A entrega do MVP só é considerada concluída se atender, simultaneamente, aos critérios de aceitação dos 17 RFs incluídos, aos critérios mensuráveis dos 12 RNFs catalogados e aos 33 Critérios de Aceitação declarados na subseção 10.1.5.

**Tabela de Requisitos excluídos do MVP**

| ID | Requisito Funcional | Motivo da Exclusão |
| :--- | :--- | :--- |
| **RF03** | Permitir a recuperação de acesso mediante envio de nova senha. | Classificado como Should Have. Embora importante para a conveniência do usuário, não impede a validação da hipótese central do negócio no primeiro ciclo de testes. |
| **RF05** | Editar morfemas existentes no catálogo do sistema. | Classificado como Won't Have para o MVP. O fluxo de manutenção do administrador foi simplificado; correções de conteúdo serão resolvidas por meio de exclusão e nova inserção no banco de dados. |
| **RF07** | Listar morfemas cadastrados no catálogo do sistema. | Classificado como Won't Have para o MVP. A visualização direta do catálogo de morfemas pelo administrador foi postergada para focar na persistência bruta dos dados via banco. |
| **RF09** | Editar palavras válidas existentes no catálogo do sistema. | Classificado como Won't Have para o MVP. Segue a mesma diretriz de simplificação da gestão de conteúdo, priorizando a dinamicidade de escrita e deleção. |
| **RF11** | Listar palavras válidas cadastradas no catálogo do sistema. | Classificado como Won't Have para o MVP. Adiado para reduzir o esforço de desenvolvimento de interfaces administrativas na primeira versão. |
| **RF13** | Editar atividades pedagógicas existentes no sistema. | Classificado como Won't Have para o MVP. Alterações em enunciados ou morfemas de uma atividade ativa não entrarão neste ciclo de entrega. |
| **RF15** | Listar atividades pedagógicas cadastradas no sistema. | Classificado como Won't Have para o MVP. A listagem de gerenciamento de tarefas no painel do administrador foi retirada para poupar escopo de front-end. |
| **RF22** | Consultar os detalhes de uma atividade realizada. | Classificado como Should Have. O estudante terá o histórico macro de suas pontuações no MVP, mas a revisão analítica bloco a bloco de tentativas passadas ficou para a próxima versão. |
| **RF25** | Consultar os erros morfológicos mais frequentes dos estudantes. | Classificado como Should Have. O professor monitorará o desempenho coletivo pelas médias da turma, mas o algoritmo analítico de agrupamento e ranking de erros frequentes foi postergado. |

### **10.3 Rastreabilidade e Comprovação de Implementação do MVP**

#### **10.3.1 Atualização e Definição do Escopo do MVP**

Embora o catálogo geral contemple 25 Requisitos Funcionais (RFs), a implementação inicial não abrange a totalidade destes itens. Aplicando rigorosamente a matriz de priorização MoSCoW e a matriz de Valor de Negócio vs. Complexidade Técnica, os requisitos classificados como *Should Have* e *Won't Have* foram postergados ou readequados.

Portanto, o Produto Mínimo Viável (MVP) real do MorfoBlocos Digital é composto estritamente por 16 Requisitos Funcionais (*Must Have* e *Should Have* essenciais), focados no fluxo de autenticação, mecânica central de jogo (Quiz e Montagem), validação de regras morfológicas e gestão administrativa/docente. A tabela a seguir comprova o status de implementação atualizado item a item, com as funcionalidades validadas no ambiente de produção oficial ([https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)).

| RF | US | Critérios de Aceitação (CA) | Status | Sprint | Evidência | Status DoD / PO |
| :---: | :---: | ----- | :---: | :---: | :---: | :---: |
| RF01 | US01 | CA-US01-01 a 03 | Impl. | S1 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF02 | US02 | CA-US02-01 a 05 | Impl. | S1 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF04 | US04 | CA-US04-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF06 | US06 | CA-US06-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF08 | US08 | CA-US08-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF10 | US10 | CA-US10-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF12 | US12 | CA-US12-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF14 | US14 | CA-US14-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF16 | US16 | CA-US16-01 | Impl. | S2 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF17 | US17 | CA-US17-01 a 04 | Impl. | S2 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF18 | US18 | CA-US18-01 | Impl. | S2 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF19 | US19 | CA-US19-01 | Impl. | S3 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF20 | US20 | CA-US20-01 | Impl. | S3 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF21 | US21 | CA-US21-01 | Impl. | S3 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF23 | US23 | CA-US23-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |

#### **10.3.3 Relatório de Resolução de Impedimentos e Pendências de Artefatos**

Para assegurar a transparência do processo de Engenharia de Requisitos e o cumprimento rigoroso da *Definition of Done* (DoD), os impedimentos mapeados em iterações anteriores foram solucionados, restando apenas pendências de atualização documental:

* **RF17 (Montagem de Blocos) \- Status: RESOLVIDO.**  
  O impedimento técnico anterior relacionado à responsividade (RNF11) foi sanado. O *container* da área de montagem foi refatorado utilizando *flexbox* adaptativo, garantindo o empilhamento correto dos blocos em resoluções mínimas de 360px sem forçar barra de rolagem lateral ou sobreposição de componentes.  
* **Gestão de Conteúdo Administrativo (RF04 a RF14) \- Status: RESOLVIDO.**  
  As funcionalidades referentes ao CRUD de morfemas, palavras válidas e atividades, anteriormente não iniciadas, foram integralmente implementadas. A gestão foi centralizada diretamente na interface gráfica do próprio sistema (via ambiente de produção na Vercel), descartando a dependência do painel nativo do Django Admin. As operações contam com as devidas travas de segurança e integridade referencial (proteção contra exclusão em cascata), mantendo o rigoroso controle de acesso baseado em funções (RBAC) para garantir que apenas administradores autenticados manipulem o catálogo (RN03).  
* **RF23 e RF24 (Painel do Professor) \- Pendência Documental (Artefatos).**  
  A lógica arquitetural (Django), o controle de acesso (RBAC) e as interfaces gráficas (React) para gestão de turmas e relatórios de desempenho foram integralmente codificadas, testadas na *pipeline* de CI e validadas pela cliente (PO). O *status* da implementação foi promovido a "Concluído". Contudo, registra-se a ausência dos artefatos de protótipo de alta fidelidade (Figma) na documentação oficial dessas *User Stories*, que constam atualmente como "FALTANTES" e necessitam de atualização para fechar o ciclo de rastreabilidade visual.





















