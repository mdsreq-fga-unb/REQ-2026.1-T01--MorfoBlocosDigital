# Planejamento Estratégico

Esta página apresenta o acompanhamento do planejamento estratégico do projeto **MorfoBlocos Digital**.

## **Sprints, Entregas e Evidências**

| Sprint | Período | Histórias de Usuário Planejadas (Status) | Técnicas e Atividades de ER | Evidências / Desvios Registrados |
| :---: | :---: | :--- | :--- | :--- |
| **Sprint 1** | 14/04 a 28/04 <br> **[CONCLUÍDA]** | **Nenhuma (Fase de Concepção)** <br> 🟢 Concluído | • Elicitação inicial de escopo e Backlog preliminar. <br> • **Técnicas:** Brainstorming, Rich Picture. | **Desvios:** Nenhum. Planejado em conformidade com o cronograma inicial. <br> 🔗 **Evidências:** [Rich Picture](visao-produto/cenario-atual.md#13-rich-picture) \| [Backlog](visao-produto/backlog.md) |
| **Sprint 2** | 29/04 a 12/05 <br> **[CONCLUÍDA]** | **Nenhuma (Fase de Design)** <br> 🟢 Concluído | • Definição do MVP, classificação URPS+ e DoR/DoD. <br> • **Técnicas:** Prototipagem Rápida, Storyboarding. | **Desvios:** A validação final do protótipo atrasou 2 dias por agenda da PO, sem impactar o início da Sprint 3. <br> 🔗 **Evidências:** [Figma Protótipo](https://www.figma.com/make/EBTEYFh2jYDZIHaP7TKqir/prototipo-morfoblocos-digital?code-node-id=0-9&p=f&t=ItH40BYrfFT630N5-0&fullscreen=1) \| [Documento DoR/DoD](visao-produto/dor-dod.md) |
| **Sprint 3** | 13/05 a 26/05 <br> **[CONCLUÍDA]** | **CP1 — Controle de Acesso:** <br> 🟢 [US01](userstories.md#us01) – Cadastro (Concluído) <br> 🟢 [US02](userstories.md#us02) – Login/JWT (Concluído) <br> 🟡 [US03](userstories.md#us03) – Recuperar senha (Parcial) | • Análise, Consenso e Refinamento de User Stories. <br> • **Técnicas:** Detalhamento de Critérios de Aceitação. | **Desvios (DoD Real):** A [US03](userstories.md#us03) teve o backend finalizado, mas o frontend de recuperação de senha ficou pendente por problemas de envio de e-mail no servidor de testes. Retirada do MVP. <br> 🔗 **Evidências:** [Refinamento das US derivadas de RFs](visao-produto/backlog.md#1014-user-stories-derivadas-dos-requisitos-funcionais) \| [Reunião com Cliente #02](reunioes/cliente.md#reuniao-com-cliente-02-alinhamento-para-inicio-do-desenvolvimento-do-backlog) |
| **Sprint 4** | 27/05 a 09/06 <br> **[CONCLUÍDA]** | **Core do Jogo e Pendências:** <br> 🟢 [US16](userstories.md#us16), [US17](userstories.md#us17), [US18](userstories.md#us18) – Espaço de Construção (Concluído) <br> 🟢 [US19](userstories.md#us19), [US20](userstories.md#us20) – Validador de Estruturas (Concluído) <br> | • Verificação e Validação (V&V) da base linguística. <br> • **Técnicas:** Matriz de Rastreabilidade e Teste Funcional com PO. | **Desvios (DoD Real):** A [US22](userstories.md#us22) foi bloqueada porque a modelagem da tabela de "Tentativas" precisou ser refeita no backend para suportar alomorfias complexas identificadas com a PO. Requisito movido para a Sprint 5. <br> 🔗 **Evidências:** [Feedback/Validação do Protótipo](reunioes/cliente.md#feedback-sobre-o-prototipo-aprovado-para-o-morfoblocos-digital) \|  |
| **Sprint 5** | 10/06 a 23/06 <br> **[CONCLUÍDA]** | **CP2 — Administração, CP6 — Monitoramento e Desbloqueios:** <br> 🟡 [US04](userstories.md#us04) a [US15](userstories.md#us15) – CRUD do Catálogo (Parcial) <br> 🟡 [US24](userstories.md#us24) – Relatório da turma (Parcial) <br> 🔵 [US25](userstories.md#us25) – Erros frequentes (Pendente) | • Refinamento do Backlog pós-testes da versão jogável. <br> • **Técnicas:** Especificação de Casos de Uso. | **Desvios:** O desenvolvimento das USs de gerenciamento do catálogo ([US04](userstories.md#us04) a [US15](userstories.md#us15)) via Django Admin evoluiu rápido por ser nativo do framework. <br> 🔗 **Evidências:** [Reuniões de Unidade III](reunioes/monitorias.md#monitoria-07) |
| **Sprint 6** | 24/06 a 07/07 <br> **[CONCLUÍDA]** | **Estabilização Geral do MVP:** <br> 🔵 Polimento completo (`US01` a [US25](userstories.md#us25)) e aplicação rigorosa do DoD. | • Refinamento final e fechamento de artefatos. <br> • **Técnicas:** Homologação final com a PO. | **Desvios:** Sem desvios registrados (Sprint futura). |

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

## Feedback da PO por Sprint e por US

Esta seção consolida o registro de todos os feedbacks recebidos da Product Owner (Profª. María del Pilar Tobar Acosta — IFB) ao longo das sprints do projeto MorfoBlocos Digital, conforme exigido pelo processo de validação incremental com a cliente.

---

## Tabela Consolidada de Feedback da PO

| Data | Sprint | US/RF Apresentado | Tipo de Feedback | Feedback da PO | Decisão | Ajuste Realizado | Status |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| 08/04/2026 | Sprint 1 — Unidade 2 | Visão do Produto (Seções 1.1–2.3) | Visão | Aprovou o conteúdo geral. Reforçou que o app deve ser **complemento** do jogo físico, não substituto. Destacou a necessidade de tratar Alomorfia no validador. | Manter app como aliado pedagógico do jogo físico. Registrar Alomorfia como requisito técnico a endereçar. | Seção de Visão ajustada para deixar explícita a complementaridade com o jogo físico. Alomorfia registrada como pendência técnica do validador. | ✅ Aprovado com ressalvas |
| 08/04/2026 | Sprint 1 — Unidade 2 | Decisão de plataforma (mobile vs. web) | Visão | Recomendou foco em aplicação mobile, considerando o público (estudantes do ensino básico) e facilidade de acesso. | Direcionar desenvolvimento como app com prioridade mobile-first. | Stack definida com frontend responsivo (React \+ Tailwind); RNF11 estabelece breakpoint mínimo de 360px. | ✅ Aprovado |
| 08/04/2026 | Sprint 1 — Unidade 2 | RNF de Acessibilidade (deficientes visuais) | Visão / Regras pedagógicas | Definiu que recursos de acessibilidade para deficientes visuais ficam para desdobramentos futuros, fora do escopo do MVP. | Excluir do MVP. | RNF de acessibilidade avançada classificado como "Won't Have" no MoSCoW. | ✅ Aprovado |
| 07/05/2026 | Sprint 2 — Unidade 2 | RF16/RF17 — Fluxo de montagem de blocos (US17) | Protótipo / Regras pedagógicas | Confirmou que a interface deve seguir o modelo de blocos do jogo físico ("caixa de lego"), com codificação por cor (prefixo, radical, sufixo) e diferentes níveis de dificuldade. | Manter fidelidade visual ao jogo físico. Implementar codificação por cor nos blocos. | CA-US17-01 redigido para refletir drag-and-drop com codificação de cores. Protótipo de alta fidelidade validado com a PO. | ✅ Aprovado |
| 07/05/2026 | Sprint 2 — Unidade 2 | RF16 — Seleção de nível de dificuldade (US16) | Regras pedagógicas | Definiu que o **estudante deve escolher o nível livremente** (não o sistema com base em desempenho). Nomenclatura: "Iniciante/Básico" e "Avançado/Ensino Superior". | Estudante escolhe o nível sem restrições de desbloqueio. | CA-US16-01 ajustado para refletir escolha livre do nível pelo estudante. | ✅ Aprovado |
| 07/05/2026 | Sprint 2 — Unidade 2 | RF04–RF11 — Catálogo de morfemas e palavras válidas | Software funcional / Dados | Informou que enviaria a carga inicial de dados (lista de morfemas classificada por categoria, em formato de etiquetas a converter em planilha). | Aguardar planilha da PO para popular o catálogo completo. Usar conjunto reduzido inicial para viabilizar testes. | Migration de dados criada com conjunto inicial (10 morfemas, 7 palavras válidas). Expansão para 100+ morfemas em andamento. | ⚠️ Aprovado com ressalvas (dados completos pendentes) |
| 07/05/2026 | Sprint 2 — Unidade 2 | RF20/RF21 — Regras do validador morfológico (US19/US20) | Regras pedagógicas | Esclareceu que não há "exceções" no sentido estrito — há **padrões linguísticos regulares**. Destacou a "pegadinha" da vogal temática alterando o significado. Indicou que a Alomorfia (ex: "in-/im-") é um padrão a tratar. | Modelar o validador por padrões regulares em primeira versão. Alomorfia fica para v2.0. | Validador implementado como: junta blocos → consulta tabela de palavras válidas → retorna resultado e processo morfológico. Alomorfia registrada como pendência para versão 2.0. | ✅ Aprovado com ressalvas |
| 07/05/2026 | Sprint 2 — Unidade 2 | RF19/CA-US21 — Profundidade da explicação morfológica | Regras pedagógicas | Definiu que as **regras de validação NÃO mudam por nível** — o que muda é o grau de explicação (básico: nome do morfema; avançado: explicação teórica com referência bibliográfica). | Regra única de validação para todos os níveis. Profundidade da explicação varia por nível. | CA-US21-01/02 redigidos para refletir validação única com explicação variável. | ✅ Aprovado |
| 30/06/2026 | Sprint 6 — Unidade 4 (Homologação final) | US01, US02, US16, US17, US18, US19, US20, US21, US23, US24 — MVP completo | Software funcional / Homologação | Avaliou **positivamente** a interface e a agilidade do desenvolvimento. Observou que faltam especificidades morfológicas mais avançadas (tipos de sufixos, desinências verbais) em comparação ao jogo analógico original. Consultou sobre continuidade do projeto (versão 2.0) e solicitou documentação/manual do produto. | Equipe se reunirá para discutir compartilhamento de manuais e continuidade com a cliente para versão 2.0. Especificidades morfológicas avançadas ficam para versão 2.0. | MVP homologado com aprovação da PO. Integração de 100+ morfemas em andamento. Documentação/manual a ser preparado para transição à versão 2.0. | ✅ Aprovado com ressalvas (especificidades morfológicas avançadas para v2.0) |

---

## Registros e Evidências

| Reunião | Data | Registro |
| :---- | :---- | :---- |
| Reunião com Cliente \#01 | 08/04/2026 | [🎥 Vídeo no YouTube](https://www.youtube.com/embed/C7Dr-yUB4tE) |
| Reunião com Cliente \#02 | 07/05/2026 | [🔊 Áudios no Google Drive](https://drive.google.com/drive/folders/1PRefVJaY94p-EKgPtUDB_b8X0BNzP0hr) |
| Apresentação Unidade III | 15/06/2026 | [🎥 Vídeo no YouTube](https://www.youtube.com/embed/9_Mh7zA5Qlc) |
| Homologação Final — Unidade 4 | 30/06/2026 | [🎥 Gravação no Google Drive](https://drive.google.com/file/d/18bTOFZvCwoyXtdKJIO5x6UVfeFijIVDb/view?usp=sharing) |

---

## Legenda de Status

| Símbolo | Significado |
| :---- | :---- |
| ✅ Aprovado | PO aprovou sem ressalvas |
| ⚠️ Aprovado com ressalvas | PO aprovou com pendências a resolver |
| ❌ Rejeitado | PO rejeitou — requer revisão completa |




