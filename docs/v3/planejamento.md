# Planejamento Estratégico

Esta página apresenta o acompanhamento do planejamento estratégico do projeto **MorfoBlocos Digital**.

## **Sprints, Entregas de US e Evidências**

| Sprint | Período | Histórias de Usuário Planejadas (Status) | Técnicas e Atividades de ER | Evidências / Desvios Registrados |
| :---: | :---: | :--- | :--- | :--- |
| **Sprint 1** | 14/04 a 28/04 <br> **[CONCLUÍDA]** | **Nenhuma (Fase de Concepção)** <br> 🟢 Concluído | • Elicitação inicial de escopo e Backlog preliminar. <br> • **Técnicas:** Brainstorming, Rich Picture. | **Desvios:** Nenhum. Planejado em conformidade com o cronograma inicial. <br> 🔗 **Evidências:** [Rich Picture](visao-produto/cenario-atual.md#13-rich-picture) \| [Backlog](visao-produto/backlog.md) |
| **Sprint 2** | 29/04 a 12/05 <br> **[CONCLUÍDA]** | **Nenhuma (Fase de Design)** <br> 🟢 Concluído | • Definição do MVP, classificação URPS+ e DoR/DoD. <br> • **Técnicas:** Prototipagem Rápida, Storyboarding. | **Desvios:** A validação final do protótipo atrasou 2 dias por agenda da PO, sem impactar o início da Sprint 3. <br> 🔗 **Evidências:** [Figma Protótipo](https://www.figma.com/make/EBTEYFh2jYDZIHaP7TKqir/prototipo-morfoblocos-digital?code-node-id=0-9&p=f&t=ItH40BYrfFT630N5-0&fullscreen=1) \| [Documento DoR/DoD](visao-produto/dor-dod.md) |
| **Sprint 3** | 13/05 a 26/05 <br> **[CONCLUÍDA]** | **CP1 — Controle de Acesso e Atividades:** <br> 🟢 [US01](userstories.md#us01) – Cadastro (Concluído) <br> 🟢 [US02](userstories.md#us02) – Login/JWT (Concluído) <br> 🟢 [US21](userstories.md#us21) – Explicação morfológica (Concluído) <br> 🟡 [US03](userstories.md#us03) – Recuperar senha (Retirada) | • Análise, Consenso e Refinamento de User Stories. <br> • **Técnicas:** Detalhamento de Critérios de Aceitação. | **Desvios (DoD Real):** A [US03](userstories.md#us03) teve o backend finalizado, mas o frontend ficou pendente por problemas de envio de e-mail no servidor de testes. Removida do escopo do MVP por consenso. <br> 🔗 **Evidências:** [Refinamento das US](visao-produto/backlog.md#1014-user-stories-derivadas-dos-requisitos-funcionais) \| [Reunião #02 com Cliente para alguns alinhamentos.](reunioes/cliente.md#reunião-com-cliente-02-alinhamento-para-início-do-desenvolvimento-do-backlog) |
| **Sprint 4** | 27/05 a 09/06 <br> **[CONCLUÍDA]** | **Core do Jogo e Motor de Validação:** <br> 🟢 [US16](userstories.md#us16), [US17](userstories.md#us17), [US18](userstories.md#us18) – Espaço de Construção (Concluído), [US22](userstories.md#us22) - Portfólio de Progresso. <br> 🟢 [US19](userstories.md#us19), [US20](userstories.md#us20) – Validador de Estruturas (Concluído) <br> 🟢 [US23](userstories.md#us23) – Desempenho do Aluno (Concluído) <br> | • Verificação e Validação (V&V) da base linguística. <br> • **Técnicas:** [Matriz de Rastreabilidade](#rastreabilidade) e Teste Funcional com PO. | **Desvios (DoD Real):** A [US17](userstories.md#us17) apresentou instabilidade temporária de scroll em telas menores que 360px (RNF11), mas foi devidamente mitigada e refatorada nas sprints seguintes para homologação final. <br> 🔗 **Evidências:** [Feedback/Validação do Protótipo](reunioes/cliente.md) |
| **Sprint 5** | 10/06 a 23/06 <br> **[CONCLUÍDA]** | **CP2 — Administração de Conteúdo (Base):** <br> 🟢 [US04](userstories.md#us04), [US06](userstories.md#us06), [US08](userstories.md#us08)– Criação/Exclusão de Morfemas e Palavras (Concluído) <br> 🟢 [US10](userstories.md#us10), [US12](userstories.md#us12), [US14](userstories.md#us14) – Criação/Exclusão de Atividades (Concluído) | • Refinamento do Backlog pós-testes da versão jogável. <br> | **Desvios:** Integração inicial da carga de dados via Django Admin concluída com sucesso para acelerar a liberação dos formulários React na Sprint 6. <br> 🔗 **Evidências:** [Apresentação Unidade III (YouTube)](https://www.youtube.com/embed/9_Mh7zA5Qlc) |
| **Sprint 6** | 24/06 a 07/07 <br> **[CONCLUÍDA]** | **CP2 — Fechamento do CRUD e Estabilização:** <br> 🟢 [US05](userstories.md#us05), [US07](userstories.md#us07) – Edição/Listagem de Morfemas (Concluído) <br> 🟢 [US09](userstories.md#us09), [US11](userstories.md#us11) – Edição/Listagem de Palavras (Concluído) <br> 🟢 [US13](userstories.md#us13), [US15](userstories.md#us15) – Edição/Listagem de Atividades (Concluído), [US25](userstories.md#us25) - Análise de Erros <br>  Deploy via Vercel concluído. | • Homologação final do MVP e aplicação rigorosa do DoD. <br> • **Técnicas:** Teste de aceitação final com a PO.  | **Desvios:** Nenhum. Carga final de mais de 100 morfemas integrada e interface web validada pela PO em 30/06. <br> 🔗 **Evidências:** [Homologação Final (Google Drive)](https://drive.google.com/file/d/18bTOFZvCwoyXtdKJIO5x6UVfeFijIVDb/view?usp=sharing) |

## Rastreabilidade

[Matriz de Rastreabilidade](https://www.figma.com/board/LOM1iccAAlhb0DHHsTQohH/Unidade-4---Matriz-de-Rastreabilidade?node-id=0-1&t=7DiAK8qbN9krcz2w-1)

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/board/LOM1iccAAlhb0DHHsTQohH/Unidade-4---Matriz-de-Rastreabilidade?node-id=0-1&embed-host=share" allowfullscreen></iframe>

---

## Acompanhamento do Cronograma, Execução e Evidências Unificadas

A tabela a seguir apresenta a visão consolidada do cronograma planejado para o MorfoBlocos Digital. Ela unifica os objetivos de cada iteração, o status final de cumprimento e as evidências práticas geradas tanto em Engenharia de Requisitos (ER) quanto em Engenharia de Software (ESW).

| Sprint / Período | Objetivo Principal & Status | Evidências Práticas de Engenharia de Requisitos (ER) | Evidências Técnicas de Engenharia de Software (ESW) |
| :--- | :--- | :--- | :--- |
| **Sprint 1**<br>14/04 - 28/04 | Definição do MVP, levantamento inicial de escopo e arquitetura.<br><br>Status: Cumprido ✅ | • **Análise Documental:** Estudo do manual de regras do jogo analógico original.<br>• **Elicitação:** Sessão de *Brainstorming* inicial com a PO.<br>• **Modelagem Visual:** Criação do [Rich Picture](visao-produto/cenario-atual.md#13-rich-picture). | • **Scrum:** Definição e abertura do Product Backlog inicial.<br>• **Atas de Reunião:** Homologação da [Ata da Reunião com Cliente #01](reunioes/cliente.md) com gravação de vídeo inclusa. |
| **Sprint 2**<br>29/04 - 12/05 | Refinamento do backlog com RFs atômicos, DoR/DoD e prototipação.<br><br>Status: Cumprido ✅ | • **Prototipagem:** Fluxo de telas de alta fidelidade construído no Figma.<br>• **Consenso e Negociação:** Aplicação da técnica **MoSCoW** para o corte de escopo do MVP 1.0.<br>• **Especificação:** Escrita das matrizes formais de [DoR e DoD](visao-produto/dor-dod.md). | • **Arquitetura:** Definição da Stack (React, Django, PostgreSQL).<br>• **Modelagem de Dados:** Criação dos [modelos](https://github.com/mdsreq-fga-unb/REQ-2026.1-T01--MorfoBlocosDigital/tree/develop/backend/core/migrations) de dados que irão popular o banco nas próximas sprints.<br>• **Ambiente:** Configuração inicial do ambiente do repositório para início do desenvolvimento do projeto. |
| **Sprint 3**<br>13/05 - 26/05 | Implementação do Controle de Acesso ([US01](userstories.md#us01)/[US02](userstories.md#us002)) e exibição morfológica [(US21)](userstories.mc#us21).<br><br>Status: Cumprido ✅ | • **Refinamento:** Atomização e divisão estrutural dos requisitos funcionais de acesso ([RF01](visao-produto/requisitos.md#81-lista-de-requisitos-funcionais) e [RF02](visao-produto/requisitos.md#81-lista-de-requisitos-funcionais)).<br>• **Validação:** Escrita e revisão dos Critérios de Aceitação das histórias de autenticação ([US01, US02 e US21](userstories.md)). | • **Segurança:** Implementação de autenticação síncrona via tokens **JWT** (expiração de 1 hora conforme RNF13).<br>• **Gestão de Mudança:** Exclusão técnica da [US03](userstories.md#us03) (Recuperação de senha) por restrições de SMTP no servidor de testes. |
| **Sprint 4**<br>27/05 - 09/06 | Construção do Core do Jogo (Espaço de Construção e Validador) e progresso.<br><br>Status: Cumprido ✅ | • **V&V:** Execução de testes funcionais orientados pelos cenários dos critérios de aceitação com a PO.<br>• **Rastreabilidade:** Atualização da [Matriz de Rastreabilidade](#rastreabilidade) vinculando o jogo (US16 a US20) aos RFs. | • **Práticas XP (TDD):** Escrita de testes unitários automatizados ([tests.py](https://github.com/mdsreq-fga-unb/REQ-2026.1-T01--MorfoBlocosDigital/blob/develop/backend/core/tests.py)) para o motor lógico de gramática [(RF20)](visao-produto/requisitos.md#81-lista-de-requisitos-funcionais).<br>• **CI/CD:** Configuração de pipeline ativa via [**GitHub Actions**](https://github.com/mdsreq-fga-unb/REQ-2026.1-T01--MorfoBlocosDigital/actions) (`ci.yml`) automatizando a validação de Pull Requests. |
| **Sprint 5**<br>10/06 - 23/06 | Desenvolvimento das APIs base de criação/remoção para Administração de Conteúdo.<br><br>Status: Cumprido ✅ | • **Abstração:** Detalhamento das regras de negócio de integridade relacional para proteção contra exclusão em cascata ([RN03](visao-produto/backlog.md#1013-catálogo-de-regras-de-negócio)).<br>• **Escopo:** Decisão de expor a carga de dados inicial no Django Admin para acelerar as telas em React. | • **Desenvolvimento API:** Construção dos endpoints REST (`POST`, `DELETE`) para o gerenciamento de Morfemas e Atividades.<br>• **Refatoração (XP):** Isolamento da lógica de consultas complexas de views para camadas de `services` no Django. |
| **Sprint 6**<br>24/06 - 07/07 | Finalização de Edição/Listagem (React), carga de dados e Homologação Final.<br><br>Status: Cumprido ✅ | • **Aceite Final:** Condução de testes de aceitação (UAT) com a PO simulando fluxos de professor e aluno.<br>• **Massa de Dados:** Importação e persistência de planilha oficial com **100+ morfemas** integrados ao banco. | • **Fechamento do CRUD:** Acoplamento total do frontend React aos endpoints de escrita (`PUT/PATCH`).<br>• **Acompanhamento de RNF:** Auditoria de contraste de cores sob o nível AA da WCAG ([RNF15](visao-produto/requisitos.md#82-lista-de-requisitos-não-funcionais)).<br>• **Deploy:** Geração da build estável em produção na **Vercel**. <br> • [Homologação Final](https://drive.google.com/file/d/18bTOFZvCwoyXtdKJIO5x6UVfeFijIVDb/view?usp=sharing) |

---

---

## Quadro MVP

> Legenda: Impl. = Implementado

| RF | US | Critérios de Aceitação (CA) | Status | Sprint | Evidência | Status DoD / PO |
| :---: | :---: | ----- | :---: | :---: | :---: | :---: |
| RF01 | [US01](userstories.md#us01) | CA-US01-01 a 03 | Impl. | S3 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF02 | [US02](userstories.md#us02)| CA-US02-01 a 05 | Impl. | S3 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF04 | [US04](userstories.md#us04) | CA-US04-01 | Impl. | S5 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF05 | [US05](userstories.md#us05) | CA-US05-01 | Impl. | S6 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF06 | [US06](userstories.md#us06)| CA-US06-01 | Impl. | S5 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF07 | [US07](userstories.md#us07) | CA-US07-01 | Impl. | S6 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF08 | [US08](userstories.md#us08) | CA-US08-01 | Impl. | S5 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF09 | [US09](userstories.md#us09) | CA-US09-01 | Impl. | S5 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF10 | [US10](userstories.md#us10) | CA-US10-01 | Impl. | S5 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF11 | [US11](userstories.md#us11) | CA-US11-01 | Impl. | S6 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF12 | [US12](userstories.md#us12) | CA-US12-01 | Impl. | S5 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF13 | [US13](userstories.md#us13) | CA-US13-01 | Impl. | S6 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF14 | [US14](userstories.md#us14) | CA-US14-01 | Impl. | S5 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF15 | [US15](userstories.md#us15) | CA-US15-01 | Impl. | S6 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF16 | [US16](userstories.md#us16) | CA-US16-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF17 | [US17](userstories.md#us17) | CA-US17-01 a 04 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF18 | [US18](userstories.md#us18) | CA-US18-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF19 | [US19](userstories.md#us19) | CA-US19-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF20 | [US20](userstories.md#us20) | CA-US20-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF21 | [US21](userstories.md#us21) | CA-US21-01 | Impl. | S3 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF22 | [US22](userstories.md#us22) | CA-US22-01 e 02 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF23 | [US23](userstories.md#us23) | CA-US23-01 | Impl. | S4 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |
| RF25 | [US25](userstories.md#us25) | CA-US25-01 | Impl. | S6 | [Acessar Vercel](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/) | Concluído / Validado |


**Relatório de Conclusão do MVP e Resolução de Pendências**

Para assegurar a transparência do processo de Engenharia de Requisitos e o cumprimento rigoroso da Definition of Done (DoD), o status dos antigos impedimentos foi atualizado pós-homologação:

* **Gestão de Conteúdo (RF04 ao RF15) e Telas de Edição/Listagem (US05, US07, US09, US11, US13, US15)** - **Status**: CONCLUÍDO.
  Todas as interfaces gráficas integradas no frontend React foram finalizadas e homologadas na Sprint 6, operando de forma síncrona com os endpoints do backend.

* **Responsividade do Tabuleiro (US17 - Montagem de Palavras)** - **Status**: RESOLVIDO.
  A quebra de layout em viewports de 360px (RNF11) foi totalmente corrigida utilizando CSS Grid reativo, eliminando a rolagem lateral indesejada.

* **Alomorfia e Especificidades Avançadas** - **Status**: MAPEADO PARA V2.0.
  Conforme alinhamento e feedback final da PO (Profª Pilar), regras complexas de desinências verbais e alomorfia profunda foram documentadas como melhorias futuras para a próxima versão do produto, garantindo a aprovação do escopo atual do MVP.

---

## Tabela Consolidada de Feedback da PO

| Reunião / Status | Detalhamento dos Alinhamentos e Ajustes |
| :--- | :--- |
| **Data:** 08/04/2026<br>**Sprint:** Sprint 1<br>**US/RF:** Visão do Produto / Plataforma<br><br>Status: ✅ **Aprovado** | • **Feedback da PO:** O app deve ser complemento do jogo físico, focado em mobile-first (público escolar). Acessibilidade para deficientes visuais fica fora do MVP.<br>• **Ajuste Realizado:** Adequação do MoSCoW (Acessibilidade como *Won't Have*). Definição do RNF11 (responsividade a partir de 360px com React/Tailwind). |
| **Data:** 07/05/2026<br>**Sprint:** Sprint 2<br>**US/RF:** US16, US17, US19, US20, US21<br><br>Status: ⚠️ **Com Ressalvas** | • **Feedback da PO:** Blocos coloridos por categoria ("caixa de lego"); nível de dificuldade escolhido livremente pelo aluno; regras de validação são únicas, mas a profundidade da explicação muda por nível. Ficou de enviar carga de dados.<br>• **Ajuste Realizado:** CAs das US16, US17 e US21 reescritos. Validador focado em padrões regulares (Alomorfia para V2.0). Banco inicial populado temporariamente com 10 morfemas. |
| **Data:** 30/06/2026<br>**Sprint:** Sprint 6<br>**US/RF:** MVP Completo (US01-US25)<br><br>Status: ✅ **Homologado** | • **Feedback da PO:** Elogiou a interface e a velocidade de entrega. Sentiu falta de desinências verbais avançadas. Solicitou manuais do produto e demonstrou interesse na versão 2.0.<br>• **Ajuste Realizado:** MVP validado. Carga final de 100+ morfemas integrada com sucesso. Especificidades linguísticas avançadas movidas para o escopo da V2.0 junto com o planejamento de transição. |

---

**Registros e Evidências**

| Reunião | Data | Registro |
| :---- | :---- | :---- |
| Reunião com Cliente \#01 | 08/04/2026 | [🎥 Vídeo no YouTube](https://www.youtube.com/embed/C7Dr-yUB4tE) |
| Reunião com Cliente \#02 | 07/05/2026 | [🔊 Áudios no Google Drive](https://drive.google.com/drive/folders/1PRefVJaY94p-EKgPtUDB_b8X0BNzP0hr) |
| Homologação Final — Unidade 4 | 30/06/2026 | [🎥 Gravação no Google Drive](https://drive.google.com/file/d/18bTOFZvCwoyXtdKJIO5x6UVfeFijIVDb/view?usp=sharing) |

---

**Legenda de Status**

| Símbolo | Significado |
| :---- | :---- |
| ✅ Aprovado | PO aprovou sem ressalvas |
| ⚠️ Aprovado com ressalvas | PO aprovou com pendências a resolver |
| ❌ Rejeitado | PO rejeitou — requer revisão completa |




