## **9. Definition of Ready (DoR) e Definition of Done (DoD)**

Esta seção apresenta os critérios de Definition of Ready (DoR) e Definition of Done (DoD) adotados pela equipe para o desenvolvimento do MorfoBlocos Digital, atualizados para a Versão 4.0 do Backlog após a Verificação e Validação externa. Alinhados à abordagem ScrumXP, esses critérios funcionam como "contratos de qualidade" que garantem o rigor técnico e a testabilidade do produto. O DoR assegura que uma User Story está madura o suficiente para ser puxada para a Sprint, enquanto o DoD atesta que o incremento atende aos rigorosos padrões de qualidade e negócio antes da entrega.

### **9.1 Definition of Ready (DoR) - Definição de Preparado**

Uma User Story (US) individual e atômica só será selecionada para o Sprint Backlog e puxada para desenvolvimento se cumprir todos os seguintes critérios:

* **Atomicidade e Clareza**: A funcionalidade está descrita no formato de User Story ("Como [ator], quero [objetivo], para [benefício]") e corresponde a exatamente um Requisito Funcional (RF) atômico, sem agrupar múltiplas operações.

* **Critérios de Aceitação Explícitos**: A User Story possui Critérios de Aceitação (CAs) declarados explicitamente na subseção 10.1.5, sendo objetivos, verificáveis e proporcionais à complexidade da história.

* **Rastreabilidade Completa**: Os Requisitos Não Funcionais (RNFs) transversais e específicos, bem como as Regras de Negócio (RN01 a RN08) aplicáveis à história, estão mapeados e compreendidos pela equipe.

* **Contexto de Produto**: A história está associada a uma Característica de Produto (CP) específica.

* **Priorização e Escopo**: O item possui justificativa objetiva de VB e CT, está classificado na matriz e alinhado com o escopo do MVP.

* **Estimativa Conjunta**: O esforço técnico foi discutido e estimado coletivamente pelos desenvolvedores (Ana Beatriz, Artur, Bruno, Carlos e Luiz Henrique).

* **Resolução de Dependências**: Não há bloqueios externos pendentes. Se a história exige validação pedagógica prévia ou ativos visuais, estes já foram fornecidos ou validados pela cliente (Profª. Pilar).


### **9.2 Definition of Done (DoD) - Definição de Pronto**

Uma User Story em desenvolvimento só avança para o status "Concluído" (Done) e compõe o incremento do produto se cumprir absolutamente todos os critérios abaixo:

* **Implementação Arquitetural e Tecnológica**: O código foi finalizado respeitando as restrições transversais e as versões mínimas exigidas (React 18+, TypeScript 5+, Python 3.11+, Django 4.2+, PostgreSQL 15+).

* **Comunicação via API**: A comunicação entre frontend e backend segue exclusivamente o padrão REST por meio de APIs, conforme o escopo refinado do RNF05.

* **Operações Administrativas**: Se aplicável, as operações de manutenção de catálogo (CRUD) foram implementadas via Django Admin, respeitando o escopo do RNF06 e a RN03.

* **Validação dos Critérios de Aceitação**: Todos os Critérios de Aceitação (CAs) específicos da User Story, declarados na subseção 10.1.5, foram testados e validados com sucesso.

* **Garantia das Regras de Negócio**: O comportamento do sistema atende às políticas invariantes declaradas (ex: persistência de histórico - RN08; pontuação automática - RN06; restrição de acesso - RN01, RN02).

* **Validação de RNFs Transversais**: Os requisitos não funcionais aplicáveis foram verificados, incluindo usabilidade móvel (RNF11), performance (RNF03) e compatibilidade cross-browser (RNF10).

* **Integração Contínua**: O código foi integrado à branch principal sem gerar regressões, falhas de compilação ou quebras nos fluxos já existentes.

* **Homologação**: A funcionalidade está operando perfeitamente em ambiente de homologação, pronta para ser demonstrada e validada pela cliente (Profª Pilar) na cerimônia de Sprint Review.


### **9.3 Verificação do DoR (Definition of Ready) e DoD (Definition of Done)**

#### **9.3.1 Verificação do Definition of Ready (DoR) - Autenticação e Perfis**

Antes de autorizar o início do desenvolvimento desta Sprint, as histórias de autenticação passaram pelo novo crivo de qualidade para garantir o refinamento pré-iteração:

| Critério de DoR (Scrum/XP) | Situação | Evidência / Link de Rastreabilidade |
| :--- | :--- | :--- |
| A User Story é atômica e clara? | Concluído | Os requisitos de acesso foram desmembrados em histórias únicas (US01 para cadastro, US02 para login), sem agrupamentos épicos [CP1]. |
| Possui Critérios de Aceitação explícitos? | Concluído | Foram definidos e revisados os critérios `CA-US02-01` a `CA-US02-03` (ex: emissão de JWT, erro genérico de credenciais).  |
| Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)? | Concluído |Mapeado explicitamente para respeitar a `RN01` (Apenas autenticados acessam), `RNF04` (criptografia) e `RNF05` (comunicação exclusiva por API). |
| A prioridade está coerente e justificada? | Concluído | US01 e US02 classificadas como *Must Have* (VB 5, CT 1 e 3), posicionadas nos quadrantes prioritários do MVP. |
| O esforço foi estimado conjuntamente? | Concluído | O esforço para construir os endpoints JWT (Python) e as requisições de login (React) foi discutido coletivamente pelos desenvolvedores.  |
| Resolução de dependências validada? | Concluído |A estrutura do payload do JWT (retornando id, email e tipo prof/aluno) foi definida e não há bloqueios externos. |

#### **9.3.2 Verificação do Definition of Done (DoD) - Autenticação e Perfis**

Após a fase de codificação, a entrega funcional do login foi submetida ao nosso novo checklist de integridade (DoD V4.0). Como identificado pela equipe, a responsividade do frontend está pendente, o que bloqueia o aceite final:

| Pergunta Fundamental do DoD V4.0 | Status | Evidência de Implementação e Qualidade |
| :--- | :--- | :--- |
| **Implementação Arquitetural e Tecnológica:** Respeita as restrições transversais e versões mínimas exigidas? | Sim | O frontend utiliza React 18+ com TypeScript 5+ (`RNF07`), o backend roda em Python 3.11+ com Django 4.2+ (`RNF08`) e persiste no PostgreSQL 15+ (`RNF09`).  |
| **Comunicação via API:** Segue o escopo refinado do RNF05? | Sim | O React consome exclusivamente os endpoints REST de geração e renovação de token JWT do Django, sem acoplamento direto.  |
| **Validação dos Critérios de Aceitação:** Todos os CAs declarados foram testados? | Sim | O `CA-US02-03` foi validado: o sistema emite o token JWT com sucesso e retorna as claims corretas (id, email, tipo de usuário).  |
| **Garantia das Regras de Negócio:** Atende às políticas invariantes? | Sim | O backend bloqueia acessos a rotas privadas caso o token JWT seja inválido ou inexistente, garantindo a `RN01`.  |
| **Validação de RNFs Transversais:** Todos os requisitos de qualidade de tela e usabilidade foram cumpridos? | Não (Pendente) | **Bloqueio de DoD:** A lógica de estado e requisição da interface web está concluída, porém a readequação de layout para telas de 360px (`RNF11`) não foi implementada. A US02 não pode ser movida para "Done". |

#### 9.3.3 Verificação do Definition of Ready (DoR) V4.0 - Catálogo e Espaço de Construção

Antes de a equipe começar a codificar o painel administrativo e a mecânica de arrastar blocos, estas histórias foram auditadas:

| Critério de DoR V4.0 (Scrum/XP) | Situação | Evidência / Link de Rastreabilidade |
|---------------------------------|----------|-------------------------------------|
| A User Story é atômica e clara? | Concluído | As operações de catálogo foram desmembradas (US04 a US11) e a mecânica de movimentar blocos isolada na US17, sem épicos genéricos. |
| Possui Critérios de Aceitação explícitos? | Concluído | Foram definidos os CA-US04-01 e CA-US08-01 (exigindo grafia, tipo e cor no cadastro) e o CA-US17-01 (eventos nativos de mouse/touch). |
| Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)? | Concluído | Mapeado explicitamente para respeitar o RNF06 (uso obrigatório do Django Admin para cadastros) e a RN03 (apenas administradores alteram catálogo). |
| A prioridade está coerente e justificada? | Concluído | Todas classificadas como Must Have. A US17 possui a Complexidade Técnica mais alta do sistema (CT 5), justificando planejamento prévio cuidadoso. |
| O esforço foi estimado conjuntamente? | Concluído | A equipe discutiu os desafios de integração do banco de dados relacional e a escolha da biblioteca de Drag & Drop para o React. |
| Resolução de dependências validada? | Concluído | A paleta de cores dos morfemas (raiz = vermelho, prefixo = verde, etc.) já havia sido aprovada pela Profª Pilar na Reunião #2. |

# 9.3.4 Verificação do Definition of Done (DoD) V4.0 - Catálogo e Espaço de Construção

Após a finalização da integração entre React, Django e PostgreSQL, a entrega foi submetida ao checklist de integridade.

> **Observação Técnica da Auditoria:** O trabalho entregou duas características distintas (CP2 e CP3). O módulo administrativo (CP2) foi totalmente aprovado, pois o Django Admin já é responsivo por natureza. No entanto, o front-end do aluno (CP3) esbarrou na restrição visual.

| Pergunta Fundamental do DoD V4.0 | Status | Evidência de Implementação e Qualidade |
|----------------------------------|--------|----------------------------------------|
| Implementação Arquitetural e Tecnológica: Respeita as restrições transversais e versões mínimas? | Sim | O PostgreSQL 15+ está integrado perfeitamente ao Django 4.2+ (Backend) e ao React 18+ (Frontend), garantindo o fluxo de dados. |
| Operações Administrativas (RNF06): Cadastros foram feitos no local correto? | Sim | As US04 a US11 foram implementadas de forma nativa no Django Admin, cumprindo a restrição de não criar telas de cadastro no React. |
| Garantia das Regras de Negócio e Banco de Dados: Atende às políticas invariantes? | Sim | O catálogo garante que as peças tenham seus atributos obrigatórios e respeita a RN03, além do PostgreSQL manter a integridade (RNF04). |
| Validação dos Critérios de Aceitação: Todos os CAs declarados foram testados? | Sim | O CA-US17-01 foi validado na lógica: os blocos de morfemas carregados do banco podem ser selecionados, arrastados e soltos na área de montagem. |
| Testes e Qualidade (Práticas XP): A lógica passou por testes unitários e de integração? | Sim | A persistência dos morfemas e a mecânica base de concatenação dos blocos no frontend passaram pela validação técnica local da equipe. |
| Revisão de Código e CI: Passou por Code Review e foi integrado sem quebras? | Sim | Todo o código de integração do banco e dos eventos do React foi revisado e consolidado na branch principal sem gerar regressões. |
| Validação de RNFs Transversais: Todos os requisitos de qualidade de tela e usabilidade foram cumpridos? | Não (Pendente) | **Bloqueio Parcial do DoD:** As User Stories do Django Admin (US04 a US11) estão Done. Porém, a US17 (Arrastar blocos) foi retida. A lógica funciona, mas a interface React ainda não adequa seus elementos em telas a partir de 360px (RNF11). A US17 só será liberada para homologação da Profª Pilar após este ajuste visual. |
