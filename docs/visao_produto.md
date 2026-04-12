# Visao do produto

## 1. Cenário Atual do Cliente e do Negócio

### __1.1 Identificação do Cliente/Parceiro__

**Nome: Profª. María del Pilar Tobar Acosta.**

**Tipo**: Cliente individual — professora de Língua Portuguesa do Instituto Federal de Brasília (IFB), pesquisadora na área de ensino de morfologia e idealizadora do jogo didático Morfologia em Blocos (MorfoBlocos).

**Representante**: a própria professora María del Pilar Tobar Acosta, autora do jogo físico e principal parte interessada no desenvolvimento da versão digital.

**Forma de contato**: reuniões presenciais e por videoconferência, e-mail e canal de mensagens instantâneas para alinhamentos rápidos.

**Vínculo com o projeto**: cliente real e Product Owner (PO). Será responsável por fornecer o conteúdo didático (morfemas, categorias e processos de formação de palavras), validar as decisões de design e conteúdo e avaliar as entregas realizadas ao longo do desenvolvimento.

### __1.2 Introdução ao Negócio e Contexto__

O MorfoBlocos é uma ferramenta didática para o ensino de morfologia. Atualmente, a operação é analógica, baseada em blocos físicos. O propósito aqui é a entrega de feedback pedagógico sobre a estrutura das palavras. O gargalo atual reside na baixa escalabilidade do modelo físico e na latência do feedback, já que a validação depende 100% da disponibilidade síncrona do professor.

O jogo é composto por peças coloridas que representam morfemas — raízes (ou radicais), prefixos, sufixos e desinências — que podem ser combinadas pelos estudantes para formar diferentes vocábulos. Cada peça traz, de um lado, o morfema em si e, do outro, a classificação do elemento e o processo de formação envolvido (flexão, derivação, derivação parassintética, composição, derivação regressiva e reduplicação). Dessa forma, ao montar palavras, o estudante visualiza não apenas o resultado, mas o processo morfológico que o gerou.

O jogo já foi aplicado em turmas do ensino médio integrado, licenciatura e tecnólogo do IFB Campus São Sebastião, com resultados positivos relatados pela equipe e pelos estudantes participantes. No relatório final do projeto original, a própria idealizadora manifestou a intenção de desenvolver uma versão digital do jogo como forma de ampliar seu alcance e viabilizar seu uso em um número significativo de escolas.

Apesar de seu valor pedagógico, o uso do jogo apresenta limitações operacionais e financeiras. Sua aplicação depende da presença do professor para orientação e validação manual das respostas, o que reduz a autonomia dos estudantes. Além disso, o custo do jogo físico pode dificultar sua ampla adoção por estudantes e instituições de ensino. Nesse contexto, a solução digital proposta não substitui o recurso físico, mas atua como um complemento, ampliando seu alcance e possibilidades de uso.

O público-alvo principal são estudantes do ensino fundamental II e do ensino médio, mas o material também vem sendo utilizado com estudantes de licenciatura em Letras e Pedagogia, como recurso para formação de professores de língua materna.

### __1.3 Rich Picture__

![Rich Picture](/img/rich_picture.jpeg)

<p style="text-align:center;font-size:10px;font-weight:bold">Imagem 1 - Fonte: Autoria Própria via IA</p>

O diagrama representa o funcionamento atual do projeto MorfoBlocos, no qual professores de Língua Portuguesa como a professora Pilar, apresentam o conteúdo de morfologia e os estudantes do ensino médio utilizam o jogo físico para manipular blocos com morfemas, formando palavras e analisando sua estrutura. As atividades são corrigidas manualmente pelo professor, sem registro ou acompanhamento do desempenho. Esse modelo apresenta limitações como a ausência de feedback imediato, a dependência do professor e a restrição do uso ao ambiente de sala de aula, o que dificulta a prática contínua dos alunos. Como proposta de melhoria, o diagrama indica a transição para uma solução digital baseada em uma base estruturada de morfemas, permitindo a realização de exercícios variados, correção automática, acesso fora da sala de aula e acompanhamento do desempenho dos estudantes.

### __1.4 Identificação da Oportunidade ou Problema__

O projeto surge da necessidade de superar o gargalo operacional no ensino de morfologia causado pelo uso exclusivo do jogo físico MorfoBlocos. No cenário atual, a dinâmica pedagógica apresenta uma dependência crítica da mediação do professor, responsável pela orientação e correção manual das atividades, o que impede o acompanhamento individualizado e limita a escalabilidade das práticas em sala de aula.

O fluxo de informação atual é marcado pelo feedback tardio, uma vez que o estudante não recebe validação imediata sobre a classificação de morfemas ou os processos de formação de palavras, como derivação e flexão. Além disso, a ausência de registro sistemático das respostas gera falta de rastreabilidade do aprendizado, impossibilitando que o professor identifique padrões de erro em conceitos como alomorfia e derivação parassintética ao longo do tempo.

A infraestrutura baseada no jogo físico impõe restrições de uso, limitando a prática ao ambiente escolar e à disponibilidade de blocos. Soma-se a isso o custo do material, que dificulta sua aquisição e reduz o acesso por parte dos estudantes. Como consequência, há prejuízo na continuidade do aprendizado e na consolidação dos conceitos morfológicos.

![Diagrama de Ishikawa](/img/diagrama_ishikawa.jpeg)

<p style="text-align:center;font-size:10px;font-weight:bold">Imagem 2</p>

### __1.5 Desafios do Projeto__

O principal desafio do projeto está na transição de um modelo de ensino baseado na manipulação de blocos físicos e na correção manual para uma solução digital estruturada e integrada. Atualmente, esse processo limita a rastreabilidade das respostas e dificulta o acompanhamento do desempenho dos alunos, devido à ausência de registro sistematizado e à centralização da validação no professor. Outro ponto a ser observado está na estruturação dos dados linguísticos. O sistema deve organizar morfemas, suas variações e relações, incluindo casos como alomorfes e processos de derivação, permitindo a validação automática das respostas de forma consistente.

Além disso, há o desafio relacionado à coleta e análise de dados educacionais. A solução deve registrar as respostas dos alunos, possibilitando a identificação de padrões de erro e o acompanhamento da evolução individual. A usabilidade também é um fator crítico, exigindo uma interface intuitiva e de fácil utilização, sem necessidade de treinamento. Por fim, o sistema deve garantir confiabilidade, permitindo o uso em diferentes contextos e assegurando o armazenamento correto dos dados mesmo com o aumento do volume de informações.

### __1.6 Mapa de Stakeholders__

Os principais stakeholders do projeto são: a professora María del Pilar Tobar Acosta, como cliente, idealizadora do jogo físico e responsável por validar as decisões de conteúdo e pedagógicas; os estudantes do ensino básico e superior, como usuários finais do jogo digital; os professores de Língua Portuguesa que poderão adotar a solução em suas aulas; as instituições de ensino (IFB, escolas públicas e privadas) como potenciais adotantes da solução; e a equipe de desenvolvimento, responsável por construir tecnicamente a solução no contexto da disciplina.

A seguir, é apresentado o quadro-resumo dos stakeholders.

| **Stakeholder**       | **Relação com a solução** | **Interesse Principal**                                         | **Influência**              |
| ---------- | ------ | --------------------------------------------------- | ------------------ |
| Profª. María del Pilar Tobar Acosta | Cliente e idealizadora do jogo físico    | Validar conteúdo, proposta pedagógica, escopo e entregas                |    Alta   |
| Estudantes do ensino básico | Usuários finais do jogo digital    | Aprender morfologia de forma lúdica, visual e engajadora                |    Alta   |
| Professores de Língua Portuguesa | Usuários que aplicam o jogo em sala    | Dispor de recurso didático de fácil acesso e com acompanhamento do aluno                |    Média       |
| Estudantes de Licenciatura em Letras | Usuários em contexto de formação de professores    | Utilizar o jogo como recurso pedagógico em sua formação                |    Média   |
| Instituições de ensino (IFB e escolas) | Potenciais adotantes da solução    | Ampliar recursos didáticos disponíveis sem custo adicional de material físico                |    Baixa   |
| Equipe de desenvolvimento | Responsável pela construção do produto    | Entregar uma solução viável, funcional e alinhada aos objetivos da disciplina               |    Alta   |




Além do quadro-resumo, será elaborada uma matriz Poder × Interesse para classificar os stakeholders nas categorias Gerenciar de Perto, Manter Satisfeito, Manter Informado e Monitorar, orientando a estratégia de comunicação e engajamento da equipe ao longo do projeto. 

![Mapa de stakweholders](/img/mapa_stakeholders.jpeg)



### __1.7 Segmentação de Clientes__

Embora o projeto tenha um cliente único e real (a professora María del Pilar), a solução atenderá a diferentes perfis de usuários finais, que podem ser segmentados da seguinte forma:

* Estudantes do Ensino Fundamental II (11 a 14 anos): têm seu primeiro contato mais formal com conteúdos de morfologia. Precisam de uma experiência altamente visual, lúdica e guiada, com linguagem simples e feedback imediato;

* Estudantes do Ensino Médio (15 a 18 anos): já possuem alguma familiaridade com os conceitos morfológicos e podem ser desafiados com atividades mais complexas, envolvendo diferentes processos de formação de palavras e análise de vocábulos mais sofisticados;

* Estudantes de Licenciatura em Letras e Pedagogia: utilizam o jogo tanto como recurso de estudo quanto como referência para sua futura prática docente, demandando explicações teóricas mais aprofundadas e exemplos relacionados ao ensino;

* Professores de Língua Portuguesa: atuam como mediadores do uso do jogo em sala de aula, necessitando de recursos para aplicar o material, propor atividades e, futuramente, acompanhar o desempenho dos estudantes.

## __2. Solução Proposta__

### __2.1 Objetivo Geral do Produto__

Desenvolver a versão digital do jogo didático MorfoBlocos como uma plataforma interativa, com o propósito central de solucionar a baixa eficiência e a falta de rastreabilidade no ensino prático de morfologia. A solução visa proporcionar aos estudantes uma experiência de aprendizagem lúdica e autônoma por meio de feedback automatizado, viabilizando aos professores o acompanhamento contínuo do desempenho e superando as restrições operacionais do modelo físico.

### __2.2 Objetivos Específicos (OEs) do Produto__

* (OE1) Digitalizar a mecânica e a identidade visual do MorfoBlocos.

* (OE2) Viabilizar a formação autônoma de palavras com feedback automático.

* (OE3) Estruturar um catálogo de morfemas e exercícios com progressão de dificuldade.

* (OE4) Registrar o histórico de interações do usuário para rastreabilidade de aprendizado.

* (OE5) Garantir a usabilidade móvel e a adequação da interface ao público do ensino básico.

### __2.3 Características de Produto (Mapeadas com os Objetivos Específicos)__

A solução proposta para o MorfoBlocos Digital deverá contemplar, de forma preliminar, as seguintes características de produto (CP), mapeadas aos objetivos específicos (OE) da seção 2.2 e aos valores de negócio (VN) identificados:

| ID | Característica de Produto (CP) | Descrição resumida | ID | Valor de Negócio (VN) principal | Contribuição principal | Contribuição secundária |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **CP1** | Catálogo digital de morfemas | Disponibilizar um catálogo interativo de morfemas classificados por categorias, reproduzindo o sistema de cores do jogo original. | VN1 | Preservação da identidade visual e pedagógica do jogo original em meio digital, assegurando continuidade com a proposta da cliente. | OE1 | OE2 |
| **CP2** | Montagem interativa de palavras por morfemas | O sistema deve permitir a seleção e a combinação de morfemas por meio de uma interface interativa, exibindo em tempo real a palavra formada. | VN2 | Autonomia do estudante no aprendizado de morfologia, eliminando a dependência da presença do professor para orientação e correção. | OE2 | OE1 |
| **CP3** | Feedback automático com classificação do processo morfológico | A solução deverá fornecer feedback automático sobre a validade das palavras formadas pelo estudante, identificando e explicando o processo morfológico envolvido (flexão, derivação, derivação parassintética, composição, derivação regressiva e reduplicação). | VN3 | Aprendizagem autônoma e redução da dependência do professor para correção individual, com apoio direto ao ensino dos processos de formação de palavras. | OE3 | OE2 |
| **CP4** | Registro persistente e rastreabilidade do aprendizado | A solução deverá armazenar de forma persistente as interações e respostas dos estudantes, permitindo identificar padrões de erro em conceitos como alomorfia e derivação parassintética e acompanhar a evolução do aprendizado ao longo do tempo. | VN4 | Rastreabilidade do aprendizado, viabilizando intervenções pedagógicas mais precisas e eficazes por parte do professor. | OE4 | OE3 |
| **CP5** | Atividades didáticas estruturadas e progressivas | A solução deverá oferecer atividades organizadas em níveis crescentes de dificuldade, cobrindo os diferentes processos de formação de palavras e aplicáveis tanto em sala de aula quanto em estudo individual. | VN5 | Experiência de aprendizado estruturada e progressiva, aumentando a retenção do conteúdo e permitindo aplicação em diferentes contextos pedagógicos. | OE5 | OE4 |
| **CP6** | Acesso mobile sem dependência do jogo físico | A solução deverá ser acessível via smartphone, permitindo que qualquer estudante pratique morfologia a qualquer momento e lugar, sem precisar do jogo físico. | VN6 | Ampliação do alcance do MorfoBlocos, democratizando o acesso ao conteúdo de morfologia para além do ambiente escolar. | OE5 | OE1 |
| **CP7** | Interface acessível para o público do ensino básico | A solução deverá apresentar interface adequada ao público-alvo, com linguagem clara, elementos visuais bem dimensionados, navegação simples e boas práticas de acessibilidade, garantindo baixa curva de aprendizado. | VN7 | Adoção efetiva pelo público-alvo e inclusão de estudantes com diferentes necessidades e níveis de familiaridade com tecnologia. | OE5 | OE2 |


### __2.4 Tecnologias a Serem Utilizadas__

A solução será desenvolvida com base em uma arquitetura cliente-servidor, garantindo organização e separação das responsabilidades do sistema.

Serão utilizadas as tecnologias React, TypeScript e Tailwind CSS no frontend, permitindo a construção de uma interface interativa, especialmente para a funcionalidade de arrastar blocos.

No backend, será utilizado Python com o framework Django, responsável pela lógica do sistema e validação das palavras. Para o armazenamento de dados, será utilizado o PostgreSQL, para garantir estrutura e confiabilidade.

As tecnologias foram escolhidas por serem simples de utilizar, bem documentadas e adequadas ao tempo da disciplina, permitindo o desenvolvimento de um MVP funcional de forma organizada.

| Camada | Tecnologias |
| :--- | :--- |
| **Frontend** | React + TypeScript + Tailwind CSS |
| **Backend** | Django (Python) |
| **Banco de Dados** | PostgreSQL |

### __2.5 Pesquisa de Mercado e Análise Competitiva__

Existem hoje algumas soluções digitais voltadas ao ensino de língua portuguesa, principalmente baseadas em exercícios e jogos educativos. Um exemplo é o Gramatikê, desenvolvido pela Universidade de Brasília, que funciona offline e propõe o ensino de gramática por meio de atividades interativas e jogos, com conteúdos adaptados a diferentes níveis de aprendizagem.

De modo geral, essas soluções seguem uma lógica baseada em exercícios estruturados, como responder perguntas, completar frases ou escolher alternativas. Esse modelo contribui para a prática e fixação do conteúdo, mas tende a focar mais no reconhecimento de respostas corretas, com menor ênfase na exploração ativa da formação das palavras. Outras plataformas educacionais seguem um padrão semelhante, com forte uso de repetição e memorização, especialmente no ensino de vocabulário e regras gramaticais.

Nesse cenário, ferramentas como o Gramatikê e outros aplicativos educacionais oferecem boa base para a prática, mas exploram de forma mais limitada a construção das palavras a partir de seus elementos.

O MorfoBlocos Digital se diferencia justamente nesse ponto. Enquanto essas soluções se concentram na resolução de exercícios, a proposta do sistema é permitir que o aluno monte palavras utilizando blocos que representam morfemas. Dessa forma, o aluno pode testar combinações, observar resultados e compreender melhor os processos de formação das palavras. Além disso, o sistema oferece correção automática e feedback imediato, tornando o aprendizado mais dinâmico.

Assim, o principal diferencial da solução está na mudança de abordagem: sair de um modelo centrado em respostas para um modelo que incentiva a construção ativa, com foco específico em morfologia.

### __2.6 Viabilidade da Proposta__

A proposta é viável no **contexto da disciplina**, considerando o acesso direto à cliente, o escopo definido e a possibilidade de entrega incremental de um MVP funcional ao final do semestre. Embora a **equipe seja reduzida** e ainda esteja em processo de consolidação do domínio sobre algumas tecnologias adotadas, o projeto foi estruturado de forma compatível com essa realidade, com entregas incrementais, priorização das funcionalidades essenciais e validações frequentes com a cliente.

O principal **risco técnico** está na estruturação da base de morfemas e na implementação do mecanismo de feedback automático, que exige modelagem cuidadosa das relações entre morfemas, alomorfes e processos de formação de palavras. Esse risco é mitigado pela divisão incremental das entregas, pelo uso de tecnologias amplamente documentadas como Django e PostgreSQL, e pelo acesso contínuo à cliente para validação do conteúdo linguístico.

Assim, a proposta é considerada viável, desde que:

* O escopo do MVP permaneça controlado;
* As prioridades sejam mantidas ao longo das entregas; e
* A equipe preserve a estratégia de aprendizado contínuo e validação com a cliente ao longo do desenvolvimento.

### __2.7 Benefícios Esperados__

* **Para a cliente**: ampliar o alcance pedagógico do MorfoBlocos, superando as limitações do jogo físico e viabilizando seu uso em um número significativo de escolas sem custo adicional de material. A solução permitirá ainda que a professora gerencie o conteúdo de morfemas e exercícios de forma autônoma e acompanhe a evolução do aprendizado dos estudantes ao longo do tempo.

* **Para os estudantes**: uma experiência de aprendizado de morfologia mais autônoma, interativa e acessível, com feedback imediato sobre as palavras formadas, progressão de dificuldade clara e acesso ao conteúdo a qualquer momento e lugar, sem depender do jogo físico ou da presença do professor.

* **Para os professores de Língua Portuguesa**: um recurso didático digital pronto para uso em sala de aula ou como atividade complementar, reduzindo o tempo dedicado à correção manual e oferecendo dados sobre o desempenho dos estudantes para orientar intervenções pedagógicas mais precisas.

* **Para a equipe de desenvolvimento**: a oportunidade de aplicar na prática os conceitos da disciplina de Requisitos de Software, desenvolvendo uma solução real com cliente real, utilizando tecnologias amplamente adotadas no mercado e consolidando competências em desenvolvimento web, modelagem de dados e engenharia de requisitos.

## __3. Estratégias de Engenharia de Software__

Para o desenvolvimento do MorfoBlocos Digital, foram definidas estratégias de engenharia de software que permitam organizar o trabalho da equipe, acompanhar a evolução do sistema e garantir entregas ao longo do semestre, considerando as limitações de tempo e o contexto acadêmico do projeto.

### __3.1 Estratégia Priorizada__

A abordagem de Desenvolvimento de Software adotada será híbrida.

O ciclo de vida será iterativo e incremental.

O processo de engenharia de software escolhido é o Scrum, com utilização de sprints, backlog e reuniões de acompanhamento.

### __3.2 Quadro Comparativo__

A seguir, apresenta-se uma comparação entre processos que poderiam ser utilizados no projeto.

| Critério | Scrum | Kanban | XP |
| :--- | :--- | :--- | :--- |
| **Organização do trabalho** | Sprints com planejamento definido | Fluxo contínuo visual | Iterações curtas com foco técnico |
| **Acompanhamento do progresso** | Metas e revisão por sprint | Monitoramento contínuo do fluxo | Baseado na execução das práticas |
| **Flexibilidade** | Ajustes ao final de cada sprint | Alta, com mudanças a qualquer momento | Alta, com adaptação constante |
| **Participação do cliente** | Presente nas revisões | Não estruturada | Frequente e integrada |
| **Qualidade técnica** | Dependente da equipe | Variável | Alta (testes automatizados, refatoração) |
| **Adequação ao projeto** | Alta | Média | Média |

### __3.3 Justificativa__

A escolha de uma abordagem híbrida, com o uso do Scrum como processo principal, permite estruturar o desenvolvimento sem comprometer a capacidade de adaptação ao longo do projeto. O planejamento inicial contribui para a definição do escopo e organização das atividades, enquanto o uso de práticas ágeis possibilita ajustes conforme a evolução do sistema.

O Scrum se mostrou adequado por organizar o trabalho em sprints, facilitando a divisão do desenvolvimento em incrementos funcionais. Essa característica é relevante para o projeto, que envolve a implementação progressiva de funcionalidades interativas, como a montagem e validação de palavras, permitindo entregas parciais e validações frequentes.

Em comparação com outras abordagens, o Kanban apresenta menor estrutura de planejamento, o que pode dificultar o acompanhamento em um contexto acadêmico com prazos definidos. Já o XP possui foco mais voltado às práticas de desenvolvimento e qualidade de código, não atendendo de forma completa às necessidades de organização do projeto.

Dessa forma, a combinação entre um planejamento inicial e a execução iterativa com Scrum se mostra adequada ao contexto do projeto, garantindo organização, acompanhamento contínuo e evolução incremental do sistema.

## __6. Interação entre Equipe e Cliente__

### __6.1 Composição da Equipe__

* Ana Beatriz Souza Araújo: Desenvolvedor backend
* Artur Fernandes: Desenvolvedor backend
* Bruno Souza: Desenvolvedor backend
* Carlos Eduardo: Desenvolvedor frontend.
* Luiz Henrique: Desenvolvedor frontend do projeto auxílio na parte de scrum

### __6.2 Comunicação__

**Ferramentas de comunicação**:

* **WhatsApp**: Canal oficial para a troca de mensagens rápidas e comunicação do dia a dia da equipe. Será utilizado para avisos urgentes, envio de links úteis e resolução de dúvidas pontuais que não exigem debates complexos.

* **Google Meet**: Plataforma padrão para todas as chamadas de áudio e vídeo. Diretriz obrigatória: Absolutamente todas as reuniões realizadas no Meet devem ser gravadas. Isso garante a preservação do histórico de decisões e facilita o repasse de informações para membros que porventura não possam participar ao vivo.

**Rituais e Rotinas de Alinhamento**:

* **Dailies**: Reuniões rápidas de alinhamento para que a equipe compartilhe o que foi feito, o que será desenvolvido no dia e levante possíveis bloqueios ou impedimentos técnicos.
Sincronização Acadêmica: Ocorrerão momentos dedicados à comunicação durante o período das aulas e imediatamente após o encerramento das mesmas. Este tempo será aproveitado para consolidar o trabalho, integrar as tarefas dos desenvolvedores e planejar as próximas etapas com toda a equipe reunida.

* **Interações com a Cliente**: A comunicação direta com a cliente seguirá um protocolo rigoroso de rastreabilidade. Todo o contato oficial será feito de forma 100% remota via reuniões online no Google Meet, que serão integralmente gravadas. Essa prática resguarda o projeto, assegurando que todos os requisitos, feedbacks, aprovação e mudanças de escopo solicitadas pela cliente estejam registrados em vídeo e áudio para consulta futura.

### __6.3 Processo de Validação__

Para garantir que o MorfoBlocos Digital construa o produto correto e solucione o problema central de baixa eficiência e falta de rastreabilidade no ensino de morfologia, a equipe de desenvolvimento adotará uma estratégia de validação contínua. Os processos de validação foram estruturados em quatro frentes principais, mapeadas para as características do produto e perfis de _stakeholders_:

__1. Validação de Requisitos e Alinhamento de Negócio__

* __Objetivo__: Assegurar que a transição do meio físico para o digital preserve a identidade visual e os princípios pedagógicos do jogo original.

* **Stakeholders envolvidos**: Prof.ª María del Pilar Tobar Acosta (Cliente/PO).

* **Método**: Revisões conjuntas da documentação de requisitos, diagramas e, principalmente, validação de protótipos de interface (baixa e alta fidelidade) para garantir a continuidade da proposta idealizada pela autora.

__2. Validação Pedagógica e de Regras de Domínio__

* **Objetivo**: Atestar a precisão técnica e acadêmica do "motor" de correção do jogo, garantindo que o sistema classifique corretamente as construções morfológicas.

* **Stakeholders envolvidos**: Cliente/PO e estudantes de Licenciatura em Letras.

* **Método**: Baterias de testes focadas nas regras de negócio da aplicação. Será validada a exatidão do catálogo digital de morfemas e a precisão do feedback automático diante de casos reais de formação de palavras, incluindo tratamento de exceções morfológicas, ocorrências de alomorfia e derivações parassintéticas.

__3. Validação de Usabilidade e Experiência do Usuário (UX)__

* **Objetivo**: Certificar que a interface gráfica atende aos requisitos de acessibilidade e que a curva de aprendizado é adequada ao público do ensino básico.

* **Stakeholders envolvidos**: Estudantes do Ensino Fundamental II e do Ensino Médio 

* **Método**: Realização de testes de usabilidade com os usuários finais utilizando protótipos navegáveis ou versões preliminares (_releases_). A equipe avaliará, por meio de observação sistemática, a capacidade do estudante de formar palavras de maneira autônoma (seleção e combinação de morfemas) sem a necessidade de mediação externa, mitigando o risco de rejeição tecnológica.

__4. Validação Técnica do Valor de Negócio (Rastreabilidade)__

* **Objetivo**: Confirmar que a solução supera efetivamente a limitação de acompanhamento do modelo físico, gerando dados úteis para intervenções pedagógicas.

* **Stakeholders envolvidos**: Professores de Língua Portuguesa e equipe de desenvolvimento.

* **Método**: Simulação de uso em massa e testes de integração com o banco de dados. O processo validará se as interações, acertos e padrões de erro dos estudantes estão sendo armazenados de forma persistente e se as informações geradas no painel de rastreabilidade são claras e acionáveis para o professor.

## __10. Lições Aprendidas__

### __10.1 Unidade 1__

Nesta primeira unidade, a equipe enfrentou alguns desafios importantes de organização e gestão, que exigiram ajustes no início do projeto para garantir a continuidade das atividades.

* **Reorganização da Liderança**

A saída do líder original da disciplina impactou diretamente a organização do grupo, já que várias tarefas estavam centralizadas nele. Isso gerou um período de desorganização e falta de clareza na distribuição das atividades.

Para resolver essa situação, foi necessário reorganizar a equipe e redistribuir as responsabilidades entre os membros. Um dos integrantes assumiu a coordenação das atividades, ajudando a estruturar novamente o fluxo de trabalho e garantindo que cada pessoa soubesse sua função na entrega da documentação.

* **Comunicação com a cliente e prazos**

Houve dificuldade inicial para conciliar a disponibilidade da cliente com os prazos da disciplina. Além disso, a falta de um fluxo definido de comunicação no começo levou a algumas decisões internas que ainda não tinham sido validadas.

Com a reorganização da equipe, passou-se a priorizar um contato mais frequente com a cliente e o agendamento de momentos específicos para validação. Isso ajudou a alinhar melhor as decisões do projeto com as expectativas da cliente e com os prazos acadêmicos, reduzindo riscos de retrabalho.



















##  Versionamento

| **Data**       | Versão | Descrição                                           | Autor              |
| ---------- | ------ | --------------------------------------------------- | ------------------ |
| 12/04/2026 | 1.0    | Criação, elaboração e repasse do documento           |    Ana Beatriz, Artur Fernandes, [Bruno Souza](https://github.com/youngburny), Carlos Eduardo e Luiz Henrique   |
