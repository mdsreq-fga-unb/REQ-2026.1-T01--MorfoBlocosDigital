# Planejamento Estratégico

Esta página apresenta o acompanhamento do planejamento estratégico do projeto **MorfoBlocos Digital**.

## **Quadro de Planejamento**

| Sprint | Período | Histórias de Usuário Planejadas vs. Realizadas (Status) | Técnicas e Atividades de ER | Evidências / Desvios Registrados |
| :---: | :---: | :--- | :--- | :--- |
| **Sprint 1** | 14/04 a 28/04 <br> **[CONCLUÍDA]** | **Nenhuma (Fase de Concepção)** <br> 🟢 Concluído | • Elicitação inicial de escopo e Backlog preliminar. <br> • **Técnicas:** Brainstorming, Rich Picture. | **Desvios:** Nenhum. Planejado em conformidade com o cronograma inicial. <br> 🔗 **Evidências:** [Rich Picture](cenario-atual.md#13-rich-picture) \| [Backlog](backlog.md) |
| **Sprint 2** | 29/04 a 12/05 <br> **[CONCLUÍDA]** | **Nenhuma (Fase de Design)** <br> 🟢 Concluído | • Definição do MVP, classificação URPS+ e DoR/DoD. <br> • **Técnicas:** Prototipagem Rápida, Storyboarding. | **Desvios:** A validação final do protótipo atrasou 2 dias por agenda da PO, sem impactar o início da Sprint 3. <br> 🔗 **Evidências:** [Figma Protótipo](https://www.figma.com/make/EBTEYFh2jYDZIHaP7TKqir/prototipo-morfoblocos-digital?code-node-id=0-9&p=f&t=ItH40BYrfFT630N5-0&fullscreen=1) \| [Documento DoR/DoD](dor-dod.md) |
| **Sprint 3** | 13/05 a 26/05 <br> **[CONCLUÍDA]** | **CP1 — Controle de Acesso:** <br> 🟢 `US01` – Cadastro (Concluído) <br> 🟢 `US02` – Login/JWT (Concluído) <br> 🟡 `US03` – Recuperar senha (Parcial) | • Análise, Consenso e Refinamento de User Stories. <br> • **Técnicas:** Detalhamento de Critérios de Aceitação. | **Desvios (DoD Real):** A `US03` teve o backend finalizado, mas o frontend de recuperação de senha ficou pendente por problemas de envio de e-mail no servidor de testes. Transbordou para a Sprint 4. <br> 🔗 **Evidências:** [Sprint 3 Planning](../sprints/sprint3.md) \| [Reunião com Cliente #02](reunioes/cliente.md#reunião-com-cliente-02-alinhamento-para-início-do-desenvolvimento-do-backlog.) |
| **Sprint 4** | 27/05 a 09/06 <br> **[CONCLUÍDA]** | **Core do Jogo e Pendências:** <br> 🟢 `US03` – Recuperar senha (Concluído) <br> 🟢 `US16`, `US17`, `US18` – Espaço de Construção (Concluído) <br> 🟢 `US20`, `US21` – Validador de Estruturas (Concluído) <br> 🔴 `US22` – Histórico de pontuações (Bloqueado, transbordo para Sprint 5) | • Verificação e Validação (V&V) da base linguística. <br> • **Técnicas:** Matriz de Rastreabilidade e Teste Funcional com PO. | **Desvios (DoD Real):** A `US22` foi bloqueada porque a modelagem da tabela de "Tentativas" precisou ser refeita no backend para suportar alomorfias complexas identificadas com a PO. Requisito movido para a Sprint 5. <br> 🔗 **Evidências:** [Sprint 4 Planning](../sprints/sprint4.md) \| [Apresentação Unidade III](../reunioes.md#gravação-da-apresentação-para-a-unidade-iii) |
| **Sprint 5** | 10/06 a 23/06 <br> **[EM ANDAMENTO]** | **CP2 — Administração, CP6 — Monitoramento e Desbloqueios:** <br> 🟢 `US22` – Histórico de pontuações (Concluído) <br> 🟡 `US04` a `US15` – CRUD do Catálogo (Parcial) <br> 🟡 `US24` – Relatório da turma (Parcial) <br> 🔵 `US25` – Erros frequentes (Pendente) | • Refinamento do Backlog pós-testes da versão jogável. <br> • **Técnicas:** Especificação de Casos de Uso. | **Desvios:** Foco inicial em desbloquear a `US22`. O desenvolvimento das USs de gerenciamento do catálogo (`US04` a `US15`) via Django Admin está evoluindo rápido por ser nativo do framework. <br> 🔗 **Evidências:** [Sprint 4 Planning](../sprints/sprint4.md) \| [Reuniões de Unidade III](../reunioes.md#monitoria-07) |
| **Sprint 6** | 24/06 a 07/07 <br> **[PLANEJADA]** | **Estabilização Geral do MVP:** <br> 🔵 Polimento completo (`US01` a `US25`) e aplicação rigorosa do DoD. | • Refinamento final e fechamento de artefatos. <br> • **Técnicas:** Homologação final com a PO. | **Desvios:** Sem desvios registrados (Sprint futura). |

## Rastreabilidade

[Matriz de Rastreabilidade](https://www.figma.com/board/LOM1iccAAlhb0DHHsTQohH/Unidade-4---Matriz-de-Rastreabilidade?node-id=0-1&t=7DiAK8qbN9krcz2w-1)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/board/LOM1iccAAlhb0DHHsTQohH/Unidade-4---Matriz-de-Rastreabilidade?node-id=0-1&embed-host=share" allowfullscreen></iframe>

---

## Acompanhamento do Cronograma e Execução

A tabela a seguir apresenta a visão geral do cronograma planejado para o MorfoBlocos Digital, o objetivo principal de cada sprint, o status final e as evidências disponíveis.

| Sprint | Período | Objetivo Principal | Status | Ata / Evidências |
| :--- | :--- | :--- | :--- | :--- |
| **Sprint 1** | 14/04 - 28/04 | Definição do MVP, levantamento de requisitos e configuração inicial da arquitetura. | Cumprido ✅ | [Sprint 1](sprints/sprint1.md) |
| **Sprint 2** | 29/04 - 12/05 | Refinamento do backlog com RFs atômicos, definição de DoR/DoD e prototipação de interfaces. | Cumprido ✅ | [Sprint 2](sprints/sprint2.md) |
| **Sprint 3** | 13/05 - 26/05 | Implementação das funcionalidades centrais de controle de acesso, validação morfológica e execução de atividades. | Cumprido ✅ | [Sprint 3](sprints/sprint3.md) |
| **Sprint 4** | 27/05 - 09/06 | Construção das rotinas de administração de conteúdo, histórico de desempenho e relatórios de turma. | Cumprido ✅ | [Sprint 4](sprints/sprint4.md) |
| **Sprint 5** | 10/06 - 23/06 | Ajustes finais de conteúdo, documentação e monitoramento da entrega. | Cumprido ✅ | [Evidência a preencher] |
| **Sprint 6** | 24/06 - 07/07 | Estabilização do MVP, homologação e deploy. | Cumprido ✅ | [Evidência a preencher] |

---

## Quadro MVP

> Legenda: Impl. = Implementado; Parc. = Parcial; Bloq. = Bloqueado; Não ini. = Não iniciado.

| RF | US | CA | Status | Sprint | Evidência | DoD / PO |
| :---: | :--- | :--- | :--- | :---: | :--- | :--- |
| [RF01](visao-produto/requisitos.md) | [US01](userstories.md#us01) | 01-01 a 03 | Impl. | S1 | Vercel / Repo | Concluído / Validado |
| [RF02](visao-produto/requisitos.md) | [US02](userstories.md#us02) | 02-01 a 05 | Impl. | S1 | Vercel / Repo | Concluído / Validado |
| RF04 | [US04](userstories.md#us04) | A definir | Não ini. | S4 | — | Pendente / Aguardando |
| RF06 | [US06](userstories.md#us06) | A definir | Não ini. | S4 | — | Pendente / Aguardando |
| RF08 | [US08](userstories.md#us08) | A definir | Não ini. | S4 | — | Pendente / Aguardando |
| RF10 | [US10](userstories.md#us10) | A definir | Não ini. | S4 | — | Pendente / Aguardando |
| RF12 | [US12](userstories.md#us12) | A definir | Não ini. | S4 | — | Pendente / Aguardando |
| RF14 | [US14](userstories.md#us14) | A definir | Não ini. | S4 | — | Pendente / Aguardando |
| RF16 | [US16](userstories.md#us16) | 16-01 | Impl. | S2 | Vercel / Repo | Concluído / Validado |
| RF17 | [US17](userstories.md#us17) | 17-01 a 04 | Bloq. | S2 | Falha layout móvel | Falha / Bloqueado |
| RF18 | [US18](userstories.md#us18) | 18-01 | Impl. | S2 | Vercel / Repo | Concluído / Validado |
| RF19 | [US19](userstories.md#us19) | 19-01 | Impl. | S3 | Vercel / Repo | Concluído / Validado |
| RF20 | [US20](userstories.md#us20) | 20-01 | Impl. | S3 | Vercel / Repo | Concluído / Validado |
| RF21 | [US21](userstories.md#us21) | 21-01 | Impl. | S3 | Vercel / Repo | Concluído / Validado |
| RF23 | [US23](userstories.md#us23) | 23-01 | Parc. | S4 | API sem UI | Pendente UI |
| RF24 | [US24](userstories.md#us24)| 24-01 a 03 | Parc. | S4 | API sem UI | Pendente UI |

## Relatório de Impedimentos e Pendências de Evidência

Para assegurar a transparência do processo de Engenharia de Requisitos e o cumprimento rigoroso da Definition of Done (DoD), os seguintes impedimentos e pendências foram mapeados na versão atual do MVP:

* **US17 (Montagem de Palavras)** - **Status**: BLOQUEADO.

Embora o motor lógico de arrastar e soltar os blocos esteja funcional, a User Story falha no cumprimento do RNF11 (Acessibilidade e Responsividade). Em ecrãs com largura igual ou inferior a 360px, o tabuleiro exige rolagem horizontal (scroll lateral) e apresenta quebra de layout. A US permanecerá bloqueada e não poderá ser marcada como Done até que a refatoração do CSS (Flexbox/Grid adaptativo) seja concluída.

* **RF23 e RF24 (Painel do Professor)** - **Status**: PARCIAL.

A lógica de back-end (Django), incluindo o controle de acesso baseado em funções (RBAC) e as requisições JWT para consolidar as métricas das turmas, encontra-se implementada e testada. Contudo, a US está classificada como parcial pela ausência dos protótipos de alta fidelidade (UI) e da respectiva implementação no front-end (React), inviabilizando a homologação final com a Product Owner.

* **Gestão de Conteúdo (RF04, 06, 08, 10, 12, 14)** - **Status**: NÃO INICIADO.

As funcionalidades referentes ao CRUD administrativo de morfemas, palavras e atividades, que serão geridas através do painel nativo do Django Admin, encontram-se mapeadas para a Sprint 4 e ainda não possuem evidências funcionais de integração.



