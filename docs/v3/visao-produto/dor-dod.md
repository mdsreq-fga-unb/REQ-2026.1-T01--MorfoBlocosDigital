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

* **Operações Administrativas na Interface Cliente**: As operações de manutenção, curadoria de catálogo (CRUD) e gestão de turmas devem ser implementadas e disponibilizadas diretamente na interface gráfica do próprio sistema (frontend React integrado ao ecossistema via Vercel), respeitando as travas de segurança, consistência relacional e controle de acesso baseado em funções (RBAC).

* **Validação dos Critérios de Aceitação**: Todos os Critérios de Aceitação (CAs) específicos da User Story, declarados na subseção 10.1.5, foram testados e validados com sucesso.

* **Garantia das Regras de Negócio**: O comportamento do sistema atende às políticas invariantes declaradas (ex: persistência de histórico - RN08; pontuação automática - RN06; restrição de acesso - RN01, RN02).

* **Validação de RNFs Transversais**: Os requisitos não funcionais aplicáveis foram verificados, incluindo usabilidade móvel (RNF11), performance (RNF03) e compatibilidade cross-browser (RNF10).

* **Integração Contínua**: O código foi integrado à branch principal sem gerar regressões, falhas de compilação ou quebras nos fluxos já existentes.

* **Homologação**: A funcionalidade está operando perfeitamente em ambiente de homologação, pronta para ser demonstrada e validada pela cliente (Profª Pilar) na cerimônia de Sprint Review.

## **Observação:** 

O DoR e DoD aplicados às USs, se encontram na página [User Stories](../userstories.md).
