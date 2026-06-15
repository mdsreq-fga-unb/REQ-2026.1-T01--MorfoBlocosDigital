## **9. Definition of Ready (DoR) e Definition of Done (DoD)**

Esta seção apresenta os critérios de Definition of Ready (DoR) e Definition of Done (DoD) adotados pela equipe para o desenvolvimento do MorfoBlocos Digital. Alinhados à abordagem ScrumXP e à organização do backlog via User Story Mapping (USM), esses critérios funcionam como "contratos de qualidade". O DoR garante que o trabalho esteja maduro e rastreável antes de entrar na Sprint, enquanto o DoD atesta que o incremento atende aos rigorosos padrões técnicos e de negócio antes da entrega.

### **9.1 Definition of Ready (DoR) - Definição de Preparado**

Um item do Story Map (Épico ou User Story) só será selecionado para o Sprint Backlog e puxado para desenvolvimento se cumprir todos os seguintes critérios:

* **Formato e Clareza**: A funcionalidade está descrita no formato de User Story ("Como [ator], quero [objetivo], para [benefício]") e associada a uma Característica de Produto (CP) específica.

* **Critérios de Aceitação**: A User Story possui critérios de aceitação explícitos e testáveis (ex: formato Given/When/Then), cobrindo os fluxos principais e alternativos (especialmente crucial para RFs atomizados de operações CRUD).

* **Rastreabilidade de Restrições**: Todos os Requisitos Não Funcionais (RNFs) e Regras de Negócio (RN01 a RN08) aplicáveis à história estão mapeados e compreendidos pela equipe.

* **Priorização Consolidada**: O item possui justificativa objetiva de Valor de Negócio (VB) e Complexidade Técnica (CT), está classificado na matriz de priorização e alinhado com o escopo do MVP.

* **Estimativa Conjunta**: O esforço técnico foi discutido e estimado coletivamente pelos desenvolvedores (Ana Beatriz, Artur, Bruno, Carlos e Luiz Henrique).

* **Resolução de Dependências**: Não há bloqueios externos pendentes. Se a história exige validação pedagógica prévia (ex: uma regra morfológica específica) ou ativos visuais, estes já foram fornecidos ou validados pela cliente (Profª. Pilar).

### **9.2 Definition of Done (DoD) - Definição de Pronto**

Uma User Story em desenvolvimento só avança para o status "Concluído" (Done) e compõe o incremento do produto se cumprir absolutamente todos os critérios abaixo:

* **Implementação Arquitetural**: O código foi finalizado respeitando rigorosamente os RNFs de restrição transversal do projeto (Frontend em React/TypeScript, Backend em Django/Python e persistência no PostgreSQL).

* **Garantia das Regras de Negócio**: O comportamento do sistema atende às políticas invariantes declaradas (ex: salvamento automático de pontuação - RN06; restrição de relatórios apenas para professores - RN02).

* **Testes e Qualidade (Práticas XP)**: A lógica implementada passou pelos testes automatizados e/ou testes unitários definidos na etapa de concepção (TDD).

* **Validação de RNFs**: Os requisitos não funcionais mapeados para a história foram validados (ex: tempo de resposta inferior a 2 segundos - RNF03; interface não sobreposta em resoluções a partir de 360px - RNF11).

* **Revisão de Código (Code Review)**: O código fonte passou por inspeção técnica e foi aprovado por pelo menos um membro da equipe diferente do autor original (Pull Request aprovado).

* **Integração Contínua**: O código foi integrado à branch principal sem gerar regressões, falhas de compilação ou quebras nos fluxos já existentes.

* **Homologação**: A funcionalidade está operando perfeitamente em ambiente de homologação, pronta para ser demonstrada e validada pela cliente (Profª Pilar) na cerimônia de Sprint Review.

### **9.3 Verificação do DoR (Definition of Ready) e DoD (Definition of Done)**

#### **9.3.1 Verificação do Definition of Ready (DoR) - Autenticação e Perfis**

Antes de autorizar o início do desenvolvimento desta Sprint, os RF01 (Solicitar credenciais) e RF02 (Autenticar acesso) passaram pela seguinte auditoria da equipe para garantir o refinamento necessário:

| Critério de DoR (Scrum/XP) | Situação | Evidência / Link de Rastreabilidade |
|----------------------------|----------|-------------------------------------|
| O Requisito possui a informação necessária para ser trabalhado? | Concluído | A arquitetura de autenticação foi definida: uso de token JWT com endpoints específicos para gerar e renovar o token. |
| O Requisito está representado no formato de User Story e com clareza? | Concluído | Os requisitos de acesso (RF01 e RF02) estão descritos no formato padrão com o mapeamento dos tipos de usuário (Professor e Aluno). |
| O Requisito está coberto por critérios de aceitação testáveis? | Concluído | Foram definidos os cenários de sucesso (login válido retornando JWT e dados do perfil como id, email e tipo) e falha (credenciais incorretas). |
| Há rastreabilidade de restrições e Regras de Negócio? | Concluído | Mapeado explicitamente para respeitar o RNF05 (comunicação via API), RNF07 (React), RNF08 (Django) e a regra de que sem autenticação não há acesso. |
| A prioridade está coerente com o MoSCoW? | Concluído | Os RF01 e RF02 estão classificados como Must Have (CP1 - Controle de Acesso), sendo essenciais para o MVP. |
| O esforço foi estimado conjuntamente e cabe na Sprint? | Concluído | O esforço para construir os endpoints em Python/Django e as telas em React foi discutido e aceito pelos desenvolvedores da equipe. |

#### **9.3.2 Verificação do Definition of Done (DoD) - Autenticação e Perfis**

Após o fechamento da fase de construção das funcionalidades de login, a entrega foi submetida ao checklist de integridade (DoD). Atenção: Como identificado pela equipe, a responsividade está pendente, o que impacta a aprovação total da entrega:

| Pergunta Fundamental do DoD | Status | Evidência de Implementação e Qualidade |
|-----------------------------|--------|----------------------------------------|
| Entrega um incremento funcional do produto? | Sim | O backend foi concluído com sucesso, entregando os endpoints de geração/renovação de JWT e a rota retornando ID, email e tipo de usuário (Professor/Aluno). |
| A Implementação Arquitetural respeita as restrições transversais? | Sim | O frontend foi integrado utilizando React (RNF07) e a lógica de negócio foi totalmente construída e isolada em Python com Django (RNF08), comunicando-se via APIs. |
| A entrega garante as Regras de Negócio invariantes? | Sim | O sistema bloqueia com sucesso rotas protegidas caso o token JWT não seja fornecido ou esteja expirado, garantindo o acesso apenas a usuários autenticados. |
| Os testes de qualidade (Práticas XP) foram implementados e aprovados? | Sim | Testes automatizados e/ou unitários da geração do token e validação de credenciais foram executados e aprovados no ambiente de desenvolvimento. |
| A entrega foi revisada por toda a equipe (Code Review)? | Sim | O código (Pull Request) dos endpoints e das requisições do frontend foi revisado tecnicamente por outro membro da equipe antes do merge na branch principal. |
| Todos os RNFs mapeados para a história foram validados? | Não (Pendente) | **Bloqueio de DoD:** A interface web funcional foi entregue, porém o RNF11 (Responsividade a partir de 360px) ainda não foi finalizado no frontend. A funcionalidade não pode ser declarada "Pronta" até este ajuste visual ser concluído. |