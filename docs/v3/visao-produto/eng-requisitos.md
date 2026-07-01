## __5. Engenharia de Requisitos__

### __5.1 Atividades  e Técnicas de ER__

## **5.1 Atividades e Técnicas de ER**

O processo de Engenharia de Requisitos (ER) para o desenvolvimento do MorfoBlocos Digital foi conduzido de forma iterativa e incremental. A tabela a seguir detalha cada técnica proposta ou executada no projeto, seu respectivo status de execução ao final da Unidade 3 e os links de evidências ou justificativas de engenharia.

| Atividade de ER | Técnica Proposta / Aplicada | Status | Evidência Técnica / Justificativa de Engenharia |
| :---- | :---- | :---- | :---- |
| Elicitação e Descoberta | Entrevistas semiestruturadas | Realizada | Reuniões síncronas gravadas e registradas nas atas de alinhamento com a cliente (PO) para mapeamento do jogo físico. |
| Elicitação e Descoberta | Análise documental | Realizada | Estudo detalhado das regras e do manual do jogo físico original para extração do catálogo base de morfemas. |
| Elicitação e Descoberta | Observação de contexto real | Não realizada | Justificativa: Retirada do escopo executado devido à incompatibilidade de horários escolares e restrições de tempo do semestre letivo. |
| Elicitação e Descoberta | Triangulação de fontes | Parcial | Executada através do cruzamento entre a análise documental das regras físicas e as entrevistas de validação com a PO. |
| Análise e Consenso | Priorização MoSCoW | Realizada | Matriz de Priorização do MVP utilizada para blindar o escopo das histórias da Unidade 3\. |
| Análise e Consenso | Matriz Técnica × Valor | Realizada | Ferramenta utilizada e atualizada em conjunto com a cliente para estruturar o plano de sustentabilidade a longo prazo. |
| Análise e Consenso | Negociação de conflitos | Realizada | Registro de decisão técnica de arquitetura que optou por adiar os CRUDs visuais para focar no motor de jogo. |
| Declaração de Requisitos | Histórias de Usuário | Realizada | Mapeamento de User Stories estruturadas nos eixos de Persona, Intenção e Valor de Negócio. |
| Declaração de Requisitos | Critérios Given/When/Then | Não realizada | Justificativa: Retirada do escopo por decisão metodológica da equipe, optando por critérios de aceitação tradicionais/descritivos para melhor adequação ao modelo de validação adotado. |
| Declaração de Requisitos | Catálogos de RFs e RNFs | Realizada | Especificação de Requisitos URPS+ padronizada segundo as diretrizes de Engenharia da disciplina. |
| Representação de Requisitos | Rich Picture | Realizada | Rich Picture do Fluxo de Trabalhocontrastando o ambiente físico com o tabuleiro digital na Vercel. |
| Representação de Requisitos | Diagrama de Ishikawa  | Realizada | Diagrama de Causa e Efeito detalhando as perdas pedagógicas e limitações do material impresso. |
| Representação de Requisitos | Mapa de Stakeholders | Realizada | Mapa de stakeholders homologada para gerenciamento de expectativas da cliente. |
| Representação de Requisitos | Protótipos e Storyboards | Parcial | Protótipos do Figma homologados para US. |
| Verificação e Validação | Revisão interna da equipe | Realizada | Sprints plannings e reuniões técnicas semanais de checagem de consistência de código das USs. |
| Verificação e Validação | Validação com a cliente | Realizada | Demonstrações homologadas de incremento de software rodando em produção ao final de cada ciclo de Sprint. |
| Verificação e Validação | Filtros DoR e DoD | Realizada | Aplicação dos critérios de **DoR** (Definition of Ready) e **DoD** (Definition of Done) para mapear a prontidão das US e validar a qualidade dos incrementos entregues.  |
| Verificação e Validação | Testes de aceitação (G/W/T) | Não realizada | Justificativa: Não aplicável, dado que a equipe não adotou a abordagem BDD. As validações de entrega foram realizadas por meio de testes funcionais manuais descritivos. |
| Organização e Atualização | Product Backlog Único | Realizada | Utilização de um Product Backlog unificado, onde as histórias de usuário e os débitos técnicos foram centralizados em uma única lista priorizada para evitar a dispersão de requisitos.  |
| Organização e Atualização | Refinamento contínuo | Realizada | Reuniões de Refinamento realizadas no meio de cada Sprint para quebra de complexidade. |
| Organização e Atualização | Princípio DEEP | Realizada | Backlog mantido dinâmico, estimado em Story Points e com as tarefas do topo detalhadas de forma adequada. |
| Organização e Atualização | Controle de versões | Realizada | Histórico de Commits e Versionamento de Artefatos mantidos sob controle no Git do projeto. |
| Organização e Atualização | Matriz de Rastreabilidade | Realizada | Mapeamento estruturado cruzando as metas de negócio aos IDs das histórias desenvolvidas. |

**1. Workshops de Requisitos**

* **Justificativa para não ter feito:** Considerando o tamanho reduzido da equipe de desenvolvimento e a facilidade de comunicação direta com os stakeholders, optou-se por reuniões e entrevistas rápidas em vez de Workshops. Para o escopo de um MVP, dinâmicas de workshop demandariam um tempo de alinhamento que foi otimizado por meio de sessões diretas de alinhamento pedagógico.

**2. Narrativas Descritivas**

* **Justificativa para não ter feito:** Como a equipe adotou as User Stories como padrão oficial para a declaração e especificação de requisitos (seção 10.1.4), o uso de narrativas descritivas longas tornou-se redundante. As histórias de usuário, combinadas com seus critérios de aceitação, cumpriram o papel de detalhar o comportamento do sistema de forma ágil e objetiva.

**3. Catálogo de Regras de Negócio**

* **Justificativa para não ter feito:** As regras de negócio do sistema (como os critérios de validação de morfemas e regras de pontuação) são simples e focadas no núcleo do jogo. Por esse motivo, elas foram mapeadas e documentadas diretamente nas justificativas dos requisitos funcionais e nos critérios de aceitação das User Stories, eliminando a necessidade de manter um documento separado apenas para o catálogo de regras.

**4. Fluxos de Navegação e de Estados Conceituais**

* **Justificativa para não ter feito:** A arquitetura de telas do sistema segue um fluxo linear e direto (Login \-\> Dashboard/Seleção de Atividades \-\> Tela do Jogo/Quiz \-\> Feedback). Por ser uma interface enxuta e de baixa complexidade de navegação, a equipe priorizou o desenvolvimento direto de protótipos de interface, poupando o esforço de modelagem de diagramas de estados conceituais.

### __5.2 Engenharia de Requisitos e o XP__

As atividades da Engenharia de Requisitos, suas práticas e técnicas são mapeadas, a seguir, às cerimônias do Scrum adotadas pela equipe para a condução do projeto MorfoBlocos Digital. Embora o processo escolhido seja o ScrumXP — combinando o framework Scrum para gerenciamento com as práticas técnicas do XP para engenharia —, optou-se por organizar a tabela em torno das cerimônias do Scrum por serem os momentos formais de tomada de decisão e validação no ciclo iterativo, conforme descrito na seção 4.10 do livro-texto. 

_Importante: as atividades da ER não ocorrem de forma estritamente sequencial dentro de cada cerimônia. Conforme apresentado no capítulo 5 do livro-texto, elas são entrelaçadas e se retroalimentam ao longo do projeto, de modo que a ordem das linhas da tabela é apenas de apresentação — não de execução obrigatória._

| Cerimônia do Scrum | Atividade ER              | Prática                                                                 | Técnica                                                                                                      | Resultado esperado                                                                                  |
|-------------------|---------------------------|-------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------|
| Refinamento do Product Backlog | Elicitação e Descoberta | Levantamento contínuo de requisitos e compreensão do domínio.           | Entrevistas semiestruturadas com a cliente, análise documental do jogo físico, triangulação de fontes.      | Itens do backlog detalhados e compreensão compartilhada do problema com a cliente.                  |
|  | Análise e Consenso      | Priorização contínua e definição de escopo dos próximos itens.          | Priorização MoSCoW, Matriz Avaliação Técnica x Valor de Negócio, workshops com a cliente.    | Backlog priorizado, com trade-offs explicitados e funcionalidades críticas no topo.                 |
|  | Declaração              | Detalhamento dos itens do backlog em diferentes níveis de abstração.    | Histórias de usuário, critérios de aceitação Given/When/Then, catálogos de RFs, RNFs e regras de negócio.   | Itens do backlog declarados em linguagem compreensível, rastreáveis ao problema da seção 1.4.       |
|  | Representação           | Representação sistêmica do contexto e do problema.                      | Rich Picture AS-IS/TO-BE, Mapa de Stakeholders, Matriz Poder x Interesse, Diagrama de Ishikawa.    | Entendimento compartilhado sobre o contexto, os atores e o escopo do sistema.                       |
| Planejamento da Sprint | Análise e Consenso      | Análise de viabilidade e seleção dos itens da sprint.                   | Discussão em equipe, análise de dependências, programação em pares (XP).   | Consenso sobre a meta da sprint e os itens selecionados para o Sprint Backlog.                      |
|  | Declaração              | Refinamento final dos critérios de aceitação dos itens selecionados.    | Definition of Ready (DoR), critérios Given/When/Then.    | Histórias de usuário com critérios verificáveis e prontas para desenvolvimento (Ready).            |
|  | Representação           | Evolução de protótipos para apoiar a implementação.                     | Protótipos de baixa e média fidelidade, fluxos de navegação conceituais.       | Representações que orientam a implementação e antecipam validações com a cliente.                   |
| Daily Scrum       | Elicitação e Descoberta   | Esclarecimento pontual de dúvidas sobre requisitos em desenvolvimento.  | Conversas curtas com a cliente quando necessário, registro de impedimentos relacionados a requisitos.       | Impedimentos de ER identificados e tratados com agilidade durante a sprint.                         |
|   | Organização e Atualização | Atualização incremental do estado dos itens em desenvolvimento.         | Sincronização sobre progresso, registro de descobertas que impactam o backlog.     | Visibilidade contínua do estado dos itens da sprint frente aos requisitos declarados.               |
| Revisão da Sprint | Verificação e Validação   | Validação do incremento entregue com a cliente.      | Demonstração do incremento funcional, revisão contra critérios de aceitação, Definition of Done (DoD).      | Incremento validado pela cliente, com feedback registrado para ajuste de itens futuros.             |
|  | Organização e Atualização | Repriorização do backlog com base no aprendizado da sprint.             | Refinamento do backlog, negociação colaborativa, princípio DEEP.    | Product Backlog repriorizado e atualizado com itens de maior valor para a próxima sprint.           |
| Retrospectiva da Sprint | Organização e Atualização | Reflexão sobre o processo de ER e ajuste de práticas.             | Discussão estruturada da equipe sobre como os requisitos foram tratados, identificação de melhorias.        | Ajustes nas práticas e técnicas de ER para a próxima sprint, artefatos consistentes e rastreáveis.  |
|  | Verificação e Validação | Verificação da qualidade dos artefatos de requisitos produzidos.        | Revisão interna pela equipe dos artefatos da sprint, controle de versões.       | Artefatos de requisitos verificados e versionados ao final de cada sprint.                          |

_O mapeamento apresentado evidencia onde cada atividade da ER tem maior ênfase em cada cerimônia do Scrum, sem sugerir uma ordem rígida de execução. As práticas técnicas do XP — como programação em pares, TDD, integração contínua e refatoração — permeiam a execução da sprint e dão suporte à qualidade dos requisitos implementados, em coerência com os valores de comunicação, feedback, simplicidade e confiança que sustentam a prática da Engenharia de Requisitos descrita no capítulo 5 do livro-texto._
