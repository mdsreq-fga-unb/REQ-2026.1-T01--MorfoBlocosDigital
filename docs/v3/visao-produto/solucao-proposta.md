## **2. Solução Proposta**

### **2.1 Objetivo Geral do Produto**

Desenvolver uma plataforma web interativa (MorfoBlocos Digital) que viabilize a construção autônoma de palavras a partir de morfemas, fornecendo feedback pedagógico automatizado para os estudantes e garantindo o registro e a rastreabilidade do aprendizado para auxiliar o acompanhamento pelos professores.

### **2.2 Objetivos Específicos (OEs) do Produto**

* (OE1) Proporcionar um ambiente digital interativo que permita aos estudantes a manipulação autônoma e a combinação livre de blocos de morfemas.

* (OE2) Estruturar e disponibilizar um catálogo digital gerenciável de morfemas, palavras válidas e atividades pedagógicas.

* (OE3) Fornecer feedback pedagógico imediato e automatizado sobre a validade morfológica e os processos de formação das combinações realizadas pelo estudante.

* (OE4) Viabilizar o acompanhamento contínuo do aprendizado por meio do registro, consolidação e rastreabilidade do desempenho individual e coletivo dos estudantes.



### **2.3 Características de Produto (Mapeadas com os Objetivos Específicos)**

A solução proposta para o MorfoBlocos Digital deverá contemplar, de forma preliminar, as seguintes características de produto (CP), mapeadas aos objetivos específicos (OE) da seção 2.2 e aos valores de negócio (VN) identificados:

| ID  | Característica de Produto (CP)                         | Descrição resumida   | Contribuição Principal |
|-----|--------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------|
| CP1 | Controle de Acesso e Perfis de Usuário  | Mecanismo que garante que professores e estudantes acessem ambientes, ferramentas e dados adequados aos seus respectivos papéis no processo de aprendizagem.          | OE4                    |
| CP2 | Administração de Conteúdo Pedagógico     | Ambiente administrativo para que a professora possa gerenciar o catálogo de morfemas de forma autônoma, além de cadastrar e estruturar as atividades.  | OE2                    |
| CP3 | Espaço de Construção Morfológica      | O "tabuleiro" digital: área visual e intuitiva onde o estudante seleciona, arrasta e combina os blocos para explorar e formar palavras livremente.    | OE1                  |
| CP4 | Validador de Estruturas e Feedback em Tempo Real | Sistema que avalia instantaneamente a combinação formada, informando ao estudante se a palavra é válida e qual processo morfológico foi utilizado.   | OE3                    |
| CP5 | Portfólio de Progresso do Estudante        | Painel individualizado para que o aluno consulte suas próprias conquistas, histórico de tentativas e palavras já descobertas.                | OE4                    |
| CP6 | Painel de Monitoramento de Turmas (Dashboard)           | Área exclusiva da docência para visualização de relatórios consolidados, permitindo a identificação ágil de dificuldades recorrentes e padrões de erro das turmas.     | OE4                    |


### **2.4 Tecnologias a Serem Utilizadas**

A solução será desenvolvida com base em uma arquitetura cliente-servidor, garantindo organização e separação das responsabilidades do sistema.

Serão utilizadas as tecnologias React, TypeScript e Tailwind CSS no frontend, permitindo a construção de uma interface interativa, especialmente para a funcionalidade de arrastar blocos.

No backend, será utilizado Python com o framework Django, responsável pela lógica do sistema e validação das palavras. Para o armazenamento de dados, será utilizado o PostgreSQL, para garantir estrutura e confiabilidade.

As tecnologias foram escolhidas por serem simples de utilizar, bem documentadas e adequadas ao tempo da disciplina, permitindo o desenvolvimento de um MVP funcional de forma organizada.

| Camada | Tecnologias |
| :--- | :--- |
| **Frontend** | React + TypeScript + Tailwind CSS |
| **Backend** | Django (Python) |
| **Banco de Dados** | PostgreSQL |

### **2.5 Pesquisa de Mercado e Análise Competitiva**

Existem hoje algumas soluções digitais voltadas ao ensino de língua portuguesa, principalmente baseadas em exercícios e jogos educativos. Um exemplo é o Gramatikê, desenvolvido pela Universidade de Brasília, que funciona offline e propõe o ensino de gramática por meio de atividades interativas e jogos, com conteúdos adaptados a diferentes níveis de aprendizagem.

De modo geral, essas soluções seguem uma lógica baseada em exercícios estruturados, como responder perguntas, completar frases ou escolher alternativas. Esse modelo contribui para a prática e fixação do conteúdo, mas tende a focar mais no reconhecimento de respostas corretas, com menor ênfase na exploração ativa da formação das palavras. Outras plataformas educacionais seguem um padrão semelhante, com forte uso de repetição e memorização, especialmente no ensino de vocabulário e regras gramaticais.

Nesse cenário, ferramentas como o Gramatikê e outros aplicativos educacionais oferecem boa base para a prática, mas exploram de forma mais limitada a construção das palavras a partir de seus elementos.

O MorfoBlocos Digital se diferencia justamente nesse ponto. Enquanto essas soluções se concentram na resolução de exercícios, a proposta do sistema é permitir que o aluno monte palavras utilizando blocos que representam morfemas. Dessa forma, o aluno pode testar combinações, observar resultados e compreender melhor os processos de formação das palavras. Além disso, o sistema oferece correção automática e feedback imediato, tornando o aprendizado mais dinâmico.

Assim, o principal diferencial da solução está na mudança de abordagem: sair de um modelo centrado em respostas para um modelo que incentiva a construção ativa, com foco específico em morfologia.

### **2.6 Viabilidade da Proposta**

A proposta é viável no **contexto da disciplina**, considerando o acesso direto à cliente, o escopo definido e a possibilidade de entrega incremental de um MVP funcional ao final do semestre. Embora a **equipe seja reduzida** e ainda esteja em processo de consolidação do domínio sobre algumas tecnologias adotadas, o projeto foi estruturado de forma compatível com essa realidade, com entregas incrementais, priorização das funcionalidades essenciais e validações frequentes com a cliente.

O principal **risco técnico** está na estruturação da base de morfemas e na implementação do mecanismo de feedback automático, que exige modelagem cuidadosa das relações entre morfemas, alomorfes e processos de formação de palavras. Esse risco é mitigado pela divisão incremental das entregas, pelo uso de tecnologias amplamente documentadas como Django e PostgreSQL, e pelo acesso contínuo à cliente para validação do conteúdo linguístico.

Assim, a proposta é considerada viável, desde que:

* O escopo do MVP permaneça controlado;
* As prioridades sejam mantidas ao longo das entregas; e
* A equipe preserve a estratégia de aprendizado contínuo e validação com a cliente ao longo do desenvolvimento.

#### **2.6.1 Estimativas de custos**

| Categoria | Item | Descrição | Custo Estimado (Comercial) | Custo Efetivo (Projeto Acadêmico) |
| :--- | :--- | :--- | :--- | :--- |
| **Infraestrutura** | Hospedagem Frontend (Vercel / Netlify) | Servidor em nuvem para hospedar a interface em React/TypeScript. | R$ 110,00 ($20 USD) | R$ 0,00 (Hobby Tier) |
| **Infraestrutura** | Hospedagem Backend (Render / DigitalOcean) | Servidor em nuvem (VM) para rodar a API em Django (Python). | R$ 40,00 ($7 USD) | R$ 0,00 (Free Tier) |
| **Infraestrutura** | Banco de Dados (Supabase / Render) | Instância gerenciada do PostgreSQL para salvar catálogo e histórico. | R$ 80,00 ($15 USD) | R$ 0,00 (Free Tier) |
| **Infraestrutura** | Registro de Domínio | Endereço web oficial (ex: morfoblocos.com.br). | R$ 3,33 (R$ 40/ano) | R$ 3,33 (R$ 40/ano) |
| **Ferramentas** | Controle de Versão e CI/CD (GitHub) | Repositório de código e automação de deploys. | R$ 110,00 ($20 USD) | R$ 0,00 (Free/Student) |
| **Ferramentas** | Design e Prototipação (Figma) | Criação de telas e validação visual com a cliente. | R$ 80,00 ($15 USD) | R$ 0,00 (Education) |
| **Ferramentas** | Gestão Ágil (Notion / Trello) | Controle do Backlog, Sprints e documentação. | R$ 55,00 ($10 USD) | R$ 0,00 (Free Tier) |

### **2.7 Benefícios Esperados**

* **Para a cliente**: ampliar o alcance pedagógico do MorfoBlocos, superando as limitações do jogo físico e viabilizando seu uso em um número significativo de escolas sem custo adicional de material. A solução permitirá ainda que a professora gerencie o conteúdo de morfemas e exercícios de forma autônoma e acompanhe a evolução do aprendizado dos estudantes ao longo do tempo.

* **Para os estudantes**: uma experiência de aprendizado de morfologia mais autônoma, interativa e acessível, com feedback imediato sobre as palavras formadas, progressão de dificuldade clara e acesso ao conteúdo a qualquer momento e lugar, sem depender do jogo físico ou da presença do professor.

* **Para os professores de Língua Portuguesa**: um recurso didático digital pronto para uso em sala de aula ou como atividade complementar, reduzindo o tempo dedicado à correção manual e oferecendo dados sobre o desempenho dos estudantes para orientar intervenções pedagógicas mais precisas.

* **Para a equipe de desenvolvimento**: a oportunidade de aplicar na prática os conceitos da disciplina de Requisitos de Software, desenvolvendo uma solução real com cliente real, utilizando tecnologias amplamente adotadas no mercado e consolidando competências em desenvolvimento web, modelagem de dados e engenharia de requisitos.
