<script>
document.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.replace(/^#/, '');
  if (!hash) {
    return;
  }

  const target = document.getElementById(hash);
  if (target && target.tagName === 'DETAILS') {
    target.setAttribute('open', '');
    setTimeout(function () {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }
});

window.addEventListener('hashchange', function () {
  const hash = window.location.hash.replace(/^#/, '');
  document.querySelectorAll('details.us-dropdown').forEach(function (item) {
    item.removeAttribute('open');
  });

  const target = document.getElementById(hash);
  if (target && target.tagName === 'DETAILS') {
    target.setAttribute('open', '');
  }
});
</script>

# Documento de Histórias de Usuário (User Stories) e Critérios de Aceitação

---

<details class="us-dropdown" id="us01" markdown="1">

<summary><strong>US01 — Autenticação de Usuário✅</strong></summary>

### **US01 - Autenticação de Usuário**

* **Sprint 3**

> **Como** usuário, **quero** efetuar login no sistema utilizando e-mail e senha, **para** acessar minha conta na plataforma de forma segura.

**Critérios de Aceitação:**

* **CA-US01-01:** O sistema deve exigir um e-mail válido e a senha correta; o acesso só é liberado se os dados coincidirem exatamente com o banco de dados.
* **CA-US01-02:** Se a senha ou o e-mail estiverem incorretos, o sistema exibe uma mensagem de erro geral ("E-mail ou senha incorretos") por motivos de segurança.
* **CA-US01-03:** Após o login bem-sucedido, o sistema gera uma sessão segura por até 1 hora e direciona o usuário automaticamente para a sua tela inicial.

Verificação do Definition of Ready (DoR) — US01

| Pergunta de Auditoria do DoR (Scrum/XP) | Status | Evidência / Justificativa Técnica |
| :---- | :---- | :---- |
| **A User Story é atômica e clara?** | **Sim** | O escopo foi totalmente isolado. A US01 trata exclusivamente do fluxo de autenticação e validação de credenciais de usuários existentes, sem carregar regras de criação de novas contas ou recuperação de acessos. |
| **Possui Critérios de Aceitação explícitos?** | **Sim** | Foram definidos os critérios CA-US01-01 a CA-US01-03. Eles cobrem tanto o fluxo feliz quanto o comportamento defensivo em cenários de dados inválidos. |
| **Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?** | **Sim** | Mapeamento explícito para respeitar a **RN01**, **RNF04**, **RNF05** e **RNF12**. |
| **A prioridade está coerente e justificada?** | **Sim** | Classificada como **Must Have** via matriz MoSCoW, pois representa a porta de entrada do sistema. |
| **O esforço foi estimado conjuntamente?** | **Sim** | O esforço de engenharia foi discutido e pontuado consensualmente em **2 Story Points**. |
| **Resolução de dependências validada?** | **Sim** | A estrutura de dados para verificação de credenciais e o protótipo da interface já estavam homologados antes do início do código. |

* **Status Final:** 🟢 **Done**

| *Critério de Pronto (DoD V4.0)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1. Implementação Arquitetural*** | ***Concluído*** | *Código front-end em React 18+ / TypeScript 5+ e back-end em Python 3.11+ / Django 4.2+ finalizados.* |
| ***2. Comunicação via API*** | ***Concluído*** | *O React consome exclusivamente os endpoints REST de geração e renovação de token JWT do Django (RNF05).* |
| ***3. Operações Django Admin*** | ***Não aplicável*** | *Critério não aplicável para esta história.* |
| ***4. Validação de CAs*** | ***Concluído*** | *Critérios CA-US01-01 a CA-US01-03 testados com sucesso.* |
| ***5. Garantia das RNs*** | ***Concluído*** | *O sistema emite o token JWT com as credenciais corretas e aciona a RN01.* |
| ***6. Validação de RNFs (RNF11)*** | ***Concluído*** | *Interface de login testada e fluida em telas de 360px.* |
| ***7. Integração Contínua (CI)*** | ***Concluído*** | *Código integrado à branch principal sem regressões.* |
| ***8. Homologação e Validação*** | ***Concluído*** | *Funcionalidade operando em ambiente de produção (Vercel) e validada com a cliente (PO).* |

Links de Rastreabilidade e Artefatos  
Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

**Fluxo de Acesso:**  
a. Acesse a página inicial da aplicação.  
b. Localize o formulário de autenticação centralizado na interface principal.  
c. Preencha os campos obrigatórios (*E-mail* e *Senha*).  
d. Clique no botão de submissão **"Entrar"** para validar as credenciais e iniciar a sessão.

</details>

<details class="us-dropdown" id="us02" markdown="1">

<summary><strong>US02 — Cadastro de Nova Conta✅</strong></summary>

### US02 — Cadastro de Nova Conta

* **Sprint 3**

> **Como** usuário, **quero** cadastrar uma nova conta no sistema inserindo meus dados, **para** que meu perfil seja criado e eu possa começar a usar a plataforma.

**Critérios de Aceitação (CA)**

* **CA-US02-01:** O sistema exige obrigatoriamente e-mail, senha e a escolha do perfil (se é Estudante ou Professor), bloqueando o envio de campos vazios.
* **CA-US02-02:** O sistema impede o cadastro de um e-mail que já esteja previamente registrado na base de dados.
* **CA-US02-03:** O sistema deve validar o formato estrutural do e-mail (ex: nome@dominio.com), exibindo um alerta visual em caso de erro.
* **CA-US02-04:** O sistema exige que o campo de senha e a confirmação de senha sejam rigorosamente iguais.
* **CA-US02-05:** A interface da tela de cadastro deve ser totalmente responsiva em ecrãs/telas a partir de **360px** de largura, sem qualquer sobreposição de textos, campos desalinhados ou surgimento de barra de rolagem horizontal (*scroll* lateral).

Verificação do Definition of Ready (DoR) — US02

| *Pergunta de Auditoria do DoR (Scrum/XP)* | *Status* | *Evidência / Justificativa Técnica* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *O escopo foi isolado com foco único na criação de credenciais de acesso. O fluxo de autenticação/login ficou restrito à US01, eliminando dependências cruzadas ou a criação de um Épico camuflado.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Foram especificados os critérios de CA-US02-01 a CA-US02-05, cobrindo os fluxos de sucesso, validações obrigatórias de campos e a restrição de tamanho de tela.* |
| *Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?* | *Sim* | *Mapeamento explícito para respeitar a RN02 (Unicidade de e-mail no banco), RNF04 (Criptografia de senhas), RNF05 (Comunicação via API REST), RNF11 (Responsividade 360px) e RNF12 (Acesso via navegador por HTTP/HTTPS).* |
| *A prioridade está coerente e justificada?* | *Sim* | *Classificada como Must Have via matriz MoSCoW, pois a criação de perfis é um pré-requisito fundamental para que os usuários utilizem as demais funcionalidades do ecossistema.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *O esforço técnico para construir o formulário de cadastro, aplicar as validações de input em tempo real e criar a rota de persistência foi discutido pelo time e pontuado em 2 Story Points.* |
| *Resolução de dependências validada?* | *Sim* | *Os modelos de dados para criação de usuários e o protótipo de alta fidelidade da tela de cadastro já estavam homologados pela PO e disponíveis antes do início da codificação.* |

| *Critério de Pronto (DoD)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1. Implementação Arquitetural*** | ***Concluído*** | *Componentes do formulário criados e mapeados para persistência no banco de dados PostgreSQL 15+.* |
| ***2. Comunicação via API*** | ***Concluído*** | *Rota de POST consumindo o payload de criação de conta e respondendo com os códigos de status REST corretos.* |
| ***3. Operações Django Admin*** | ***Concluído*** | *Os novos perfis cadastrados pelo usuário são espelhados com sucesso no painel administrativo padrão do Django.* |
| ***4. Validação de CAs*** | ***Concluído*** | *Validação estrutural de inputs obrigatórios, formato de e-mail e checagem de senhas iguais (CA-US02-01 a CA-US02-04).* |
| ***5. Garantia das RNs*** | ***Concluído*** | *O banco de dados rejeita cadastros duplicados, garantindo a política invariante da RN02 (unicidade de e-mail).* |
| ***6. Validação de RNFs (RNF11)*** | ***Concluído*** | ***Resolvido:** O seletor de perfil foi refatorado. Os botões adaptam-se em telas de 360px sem gerar quebras ou scroll lateral (CA-US02-05).* |
| ***7. Integração Contínua (CI)*** | ***Concluído*** | *Código integrado à branch principal sem regressões visuais e build de produção gerado com sucesso.* |
| ***8. Homologação e Validação*** | ***Concluído*** | *Interface testada no ambiente móvel, homologada internamente e validada com sucesso junto à cliente (PO).* |

Links de Rastreabilidade e Artefatos 

Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

Fluxo de Acesso:

 a. Acesse a página inicial da aplicação.  
b. Clique no link ou alternador "Cadastrar-se" presente no cartão de entrada.  
c. Preencha todos os campos obrigatórios (Nome Completo, E-mail, Senha)  
d. Selecione o perfil de uso clicando nos botões seletores ("Estudante" ou "Professor").  
e. Clique no botão de submissão para concluir e persistir o registro.

</details>


<details class="us-dropdown" id="us03" markdown="1">

<summary><strong>US03 — Recuperação de Senha</strong></summary>

info

</details>

<details class="us-dropdown" id="us04" markdown="1">

<summary><strong>US04 — Cadastro de Morfemas no Catálogo✅</strong></summary>


### US04 — Cadastro de Morfemas no Catálogo

> **Como** administrador, **quero** cadastrar novos morfemas no catálogo do sistema, **para** disponibilizar os blocos de construção de palavras aos estudantes.

**Critérios de Aceitação (CA)**

* **CA-US04-01:** O cadastro de morfema deve exigir os campos obrigatórios: grafia (texto do morfema) e tipo (Prefixo, Radical ou Sufixo), sendo o registro persistido no banco de dados ao confirmar a operação.

Verificação do Definition of Ready (DoR) — US04

| Critério de DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :---- | :---- | :---- |
| **A User Story é atômica e clara?** | Sim | Escopo restrito à operação de inserção de novos morfemas. |
| **Possui Critérios de Aceitação explícitos?** | Sim | CA-US04-01 define os campos obrigatórios e o comportamento de persistência. |
| **Há rastreabilidade de RNFs e RNs?** | Sim | Mapeada para RN03 e RNF05. |
| **A prioridade está coerente e justificada?** | Sim | Must Have — sem morfemas cadastrados, o jogo de montagem de blocos não possui peças para funcionar. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em 2 Story Points, envolvendo interface de cadastro e integração com a API REST. |
| **Resolução de dependências validada?** | Sim | Modelo de dados do Morfema e endpoint da API disponíveis antes do início do desenvolvimento. |

***Critério de Pronto (DoD V4.0)***

| *Critério de Pronto (DoD V4.0)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1. Implementação Arquitetural*** | *Concluído* | *Interface de cadastro de morfemas implementada no painel do professor em React 18+ e TypeScript 5+.* |
| ***2. Comunicação via API*** | *Concluído* | *O painel envia o novo morfema via POST para a API REST, persistindo no PostgreSQL 15+ (RNF05).* |
| ***3. Operações Django Admin*** | *Concluído* | *Os morfemas cadastrados pela interface são refletidos e auditáveis no painel Django Admin.* |
| ***4. Validação de CAs*** | *Concluído* | *CA-US04-01 validado: formulário exige texto e tipo; morfema inserido e exibido na listagem após confirmação.* |
| ***5. Garantia das RNs*** | *Concluído* | *RN03 garantida: rota de cadastro exige autenticação com perfil de professor/administrador.* |
| ***6. Validação de RNFs (RNF11)*** | *Concluído* | *Interface validada como responsiva em telas a partir de 360px.* |
| ***7. Integração Contínua (CI)*** | *Concluído* | *Código integrado ao repositório principal sem falhas na pipeline de CI.* |
| ***8. Homologação e Validação*** | *Concluído* | *Funcionalidade testada no ambiente de produção (Vercel) e validada com a cliente (PO).* |

**Links de Rastreabilidade e Artefatos**

Link no site: https://req-2026-1-t01-morfo-blocos-digital.vercel.app/

**Fluxo de Acesso:**

a. Efetue login com uma conta de Professor.

b. Navegue até o Painel de Conteúdo (aba de gerenciamento).

c. Selecione a aba "Morfemas".

d. Preencha o campo Texto (ex: in) e selecione o tipo no dropdown (Prefixo/Radical/Sufixo).

e. Clique no botão "+ Adicionar" para persistir o morfema no banco de dados.

</details>

<details class="us-dropdown" id="us05" markdown="1">

<summary><strong>US05 — Edição de Morfemas</strong></summary>

### US05 — Edição de Morfemas

> **Como** administrador, **quero** editar morfemas existentes no catálogo, **para** corrigir grafias, classificações ou cores associadas.

**Critério de Aceitação (CA)**

* **CA-US05-01:** A edição de um morfema deve permitir alterar sua grafia, tipo morfológico e cor associada, refletindo as alterações imediatamente nas próximas atividades que utilizarem esse morfema [RN03, RNF06].

**Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us06" markdown="1">

<summary><strong>US06 — Remoção de Morfemas</strong></summary>

### US06 — Remoção de Morfemas

> **Como** administrador, **quero** remover morfemas do catálogo do sistema, **para** retirar blocos que não devem mais estar disponíveis aos estudantes.

**Critérios de Aceitação (CA)**

* **CA-US06-01:** O sistema deve exibir a listagem de morfemas cadastrados com opção de remoção individual via ícone de lixeira, sendo o registro excluído do banco de dados ao confirmar a operação.

Verificação do Definition of Ready (DoR) — US06

| Critério de DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :---- | :---- | :---- |
| **A User Story é atômica e clara?** | Sim | Escopo restrito à operação de remoção. |
| **Possui Critérios de Aceitação explícitos?** | Sim | CA-US06-01 define a exibição da listagem e o mecanismo de remoção por ícone de lixeira. |
| **Há rastreabilidade de RNFs e RNs?** | Sim | Mapeada para RN03 e RNF05. |
| **A prioridade está coerente e justificada?** | Sim | Must Have — necessário para manter o catálogo atualizado e íntegro. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em 1 Story Point, aproveitando a mesma interface da US04. |
| **Resolução de dependências validada?** | Sim | Listagem e endpoint de exclusão da API disponíveis antes do desenvolvimento. |

***Critério de Pronto (DoD V4.0)***

| *Critério de Pronto (DoD V4.0)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1. Implementação Arquitetural*** | *Concluído* | *Listagem de morfemas com ícone de lixeira implementada no painel do professor em React 18+ e TypeScript 5+.* |
| ***2. Comunicação via API*** | *Concluído* | *O clique no ícone de lixeira dispara uma requisição DELETE para a API REST, removendo do PostgreSQL 15+ (RNF05).* |
| ***3. Operações Django Admin*** | *Concluído* | *A remoção é refletida imediatamente no Django Admin após a exclusão pela interface.* |
| ***4. Validação de CAs*** | *Concluído* | *CA-US06-01 validado: listagem exibe morfemas com lixeira; ao clicar, morfema removido da lista e do banco.* |
| ***5. Garantia das RNs*** | *Concluído* | *RN03 garantida: rota de exclusão exige autenticação com perfil de professor/administrador.* |
| ***6. Validação de RNFs (RNF11)*** | *Concluído* | *Interface validada como responsiva em telas a partir de 360px.* |
| ***7. Integração Contínua (CI)*** | *Concluído* | *Código integrado ao repositório principal sem falhas na pipeline de CI.* |
| ***8. Homologação e Validação*** | *Concluído* | *Funcionalidade testada no ambiente de produção (Vercel) e validada com a cliente (PO).* |

**Links de Rastreabilidade e Artefatos**

Link no site: https://req-2026-1-t01-morfo-blocos-digital.vercel.app/

**Fluxo de Acesso:**

a. Efetue login com uma conta de Professor.

b. Navegue até o Painel de Conteúdo (aba de gerenciamento).

c. Selecione a aba "Morfemas".

d. Localize na listagem o morfema a ser removido.

e. Clique no ícone de lixeira (vermelho) ao lado do registro para excluí-lo do banco de dados.

</details>

<details class="us-dropdown" id="us07" markdown="1">

<summary><strong>US07 — Listagem de Morfemas</strong></summary>

</details>

<details class="us-dropdown" id="us08" markdown="1">

<summary><strong>US08 — Cadastro de Palavras Válidas</strong></summary>


### US08 — Cadastro de Palavras Válidas

> **Como** administrador, **quero** cadastrar palavras válidas no catálogo do sistema, **para** definir as combinações de morfemas reconhecidas pelo validador.

**Critérios de Aceitação (CA)**

* **CA-US08-01:** O cadastro deve exigir os campos obrigatórios: grafia da palavra e processo morfológico associado (ex: in + feliz + mente), sendo o registro persistido no banco de dados ao confirmar a operação.

Verificação do Definition of Ready (DoR) — US08

| Critério de DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :---- | :---- | :---- |
| **A User Story é atômica e clara?** | Sim | Escopo restrito à inserção de palavras válidas. |
| **Possui Critérios de Aceitação explícitos?** | Sim | CA-US08-01 define os campos obrigatórios e o comportamento de persistência. |
| **Há rastreabilidade de RNFs e RNs?** | Sim | Mapeada para RN03, RN04 e RNF05. |
| **A prioridade está coerente e justificada?** | Sim | Must Have — sem palavras cadastradas, o validador morfológico não possui base de consulta. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em 2 Story Points, envolvendo dois campos de entrada e integração com a API. |
| **Resolução de dependências validada?** | Sim | Modelo PalavraValida e endpoint da API disponíveis antes do início do desenvolvimento. |

***Critério de Pronto (DoD V4.0)***

| *Critério de Pronto (DoD V4.0)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1. Implementação Arquitetural*** | *Concluído* | *Interface de cadastro de palavras válidas implementada no painel do professor em React 18+ e TypeScript 5+.* |
| ***2. Comunicação via API*** | *Concluído* | *O painel envia a nova palavra via POST para a API REST, persistindo no PostgreSQL 15+ (RNF05).* |
| ***3. Operações Django Admin*** | *Concluído* | *As palavras cadastradas pela interface são refletidas e auditáveis no Django Admin.* |
| ***4. Validação de CAs*** | *Concluído* | *CA-US08-01 validado: formulário exige grafia e processo morfológico; registro inserido e exibido na listagem.* |
| ***5. Garantia das RNs*** | *Concluído* | *RN03 e RN04 garantidas: acesso restrito ao professor e validador consulta exclusivamente palavras cadastradas.* |
| ***6. Validação de RNFs (RNF11)*** | *Concluído* | *Interface validada como responsiva em telas a partir de 360px.* |
| ***7. Integração Contínua (CI)*** | *Concluído* | *Código integrado ao repositório principal sem falhas na pipeline de CI.* |
| ***8. Homologação e Validação*** | *Concluído* | *Funcionalidade testada no ambiente de produção (Vercel) e validada com a cliente (PO).* |

**Links de Rastreabilidade e Artefatos**

Link no site: https://req-2026-1-t01-morfo-blocos-digital.vercel.app/

**Fluxo de Acesso:**

a. Efetue login com uma conta de Professor.

b. Navegue até o Painel de Conteúdo (aba de gerenciamento).

c. Selecione a aba "Palavras".

d. Preencha o campo Palavra (ex: infelizmente) e o campo Processo morfológico (ex: in + feliz + mente).

e. Clique no botão "+ Adicionar" para persistir a palavra válida no banco de dados.

</details>

<details class="us-dropdown" id="us09" markdown="1">

<summary><strong>US09 — Edição de Palavras Válidas</strong></summary>

### US09 — Edição de Palavras Válidas

> **Como** administrador, **quero** editar palavras válidas existentes, **para** corrigir registros ou ajustar processos morfológicos associados.

**Critério de Aceitação (CA)**

* **CA-US09-01:** A edição deve permitir alterar a grafia da palavra, sua composição morfológica e a descrição do processo de formação associado, mantendo a consistência das referências utilizadas pelo validador [RN03, RNF06].

* **Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us10" markdown="1">

<summary><strong>US10 — Remoção de Palavras Válidas</strong></summary>

### US10 — Remoção de Palavras Válida

> **Como** administrador, **quero** remover palavras válidas do catálogo do sistema, **para** retirar registros que não devem mais ser aceitos pelo validador.

**Critérios de Aceitação (CA)**

• CA-US10-01: O sistema deve exibir a listagem de palavras válidas cadastradas com opção de remoção individual via ícone de lixeira, sendo o registro excluído do banco de dados ao confirmar a operação.

**Verificação do Definition of Ready (DoR) — US10**

| Critério de DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :---- | :---- | :---- |
| **A User Story é atômica e clara?** | Sim | Escopo restrito à operação de remoção de palavras válidas. O cadastro foi isolado na US08. |
| **Possui Critérios de Aceitação explícitos?** | Sim | CA-US10-01 define a listagem e o mecanismo de remoção por ícone de lixeira. |
| **Há rastreabilidade de RNFs e RNs?** | Sim | Mapeada para RN03 e RNF05. |
| **A prioridade está coerente e justificada?** | Sim | Must Have — necessário para manter a integridade e atualidade do catálogo do validador. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em 1 Story Point, aproveitando a mesma interface da US08. |
| **Resolução de dependências validada?** | Sim | Listagem e endpoint de exclusão da API disponíveis antes do desenvolvimento. |

***Critério de Pronto (DoD V4.0)***

| *Critério de Pronto (DoD V4.0)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1\. Implementação Arquitetural*** | *Concluído* | *Listagem de palavras com ícone de lixeira implementada no painel do professor em React 18+ e TypeScript 5+.* |
| ***2\. Comunicação via API*** | *Concluído* | *O clique no ícone de lixeira dispara uma requisição DELETE para a API REST, removendo do PostgreSQL 15+ (RNF05).* |
| ***3\. Operações Django Admin*** | *Concluído* | *A remoção é refletida imediatamente no Django Admin após a exclusão pela interface.* |
| ***4\. Validação de CAs*** | *Concluído* | *CA-US10-01 validado: listagem exibe palavras com lixeira; ao clicar, palavra removida da lista e do banco.* |
| ***5\. Garantia das RNs*** | *Concluído* | *RN03 garantida: rota de exclusão exige autenticação com perfil de professor/administrador.* |
| ***6\. Validação de RNFs (RNF11)*** | *Concluído* | *Interface validada como responsiva em telas a partir de 360px.* |
| ***7\. Integração Contínua (CI)*** | *Concluído* | *Código integrado ao repositório principal sem falhas na pipeline de CI.* |
| ***8\. Homologação e Validação*** | *Concluído* | *Funcionalidade testada no ambiente de produção (Vercel) e validada com a cliente (PO).* |

**Links de Rastreabilidade e Artefatos**

Link no site: https://req-2026-1-t01-morfo-blocos-digital.vercel.app/

**Fluxo de Acesso:**

a. Efetue login com uma conta de Professor.

b. Navegue até o Painel de Conteúdo (aba de gerenciamento).

c. Selecione a aba "Palavras".

d. Localize na listagem a palavra a ser removida.

e. Clique no ícone de lixeira (vermelho) ao lado do registro para excluí-la do banco de dados.

**Protótipo de alta fidelidade:**

![][image6]

</details>

<details class="us-dropdown" id="us12" markdown="1">

<summary><strong>US12 — Cadastro de Atividades Pedagógicas</strong></summary>

### US12 — Cadastro de Atividades Pedagógicas

> **Como** administrador, **quero** cadastrar atividades pedagógicas no sistema, **para** disponibilizar exercícios aos estudantes.

**Critérios de Aceitação (CA)**

• CA-US12-01: O cadastro de atividade deve exigir os campos obrigatórios: título, tipo (Quiz ou Montagem) e nível de dificuldade, permitindo ainda a definição de perguntas com alternativas para atividades do tipo Quiz.

**Verificação do Definition of Ready (DoR) — US12**

| Critério de DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :---- | :---- | :---- |
| **A User Story é atômica e clara?** | Sim | Escopo restrito à criação de atividades pedagógicas com suas perguntas. A remoção foi isolada na US14. |
| **Possui Critérios de Aceitação explícitos?** | Sim | CA-US12-01 define campos obrigatórios e suporte a perguntas com alternativas para o tipo Quiz. |
| **Há rastreabilidade de RNFs e RNs?** | Sim | Mapeada para RN03 e RNF05. |
| **A prioridade está coerente e justificada?** | Sim | Must Have — sem atividades cadastradas, os estudantes não têm exercícios disponíveis na plataforma. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em 3 Story Points por envolver formulário dinâmico com perguntas e alternativas. |
| **Resolução de dependências validada?** | Sim | Modelos de atividade e perguntas e endpoints disponíveis antes do desenvolvimento. |

***Critério de Pronto (DoD V4.0)***

| *Critério de Pronto (DoD V4.0)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1\. Implementação Arquitetural*** | *Concluído* | *Interface de cadastro de atividades implementada no painel do professor em React 18+ e TypeScript 5+, com formulário dinâmico de perguntas.* |
| ***2\. Comunicação via API*** | *Concluído* | *O painel envia a atividade completa (título, tipo, nível e perguntas) via POST para a API REST, persistindo no PostgreSQL 15+ (RNF05).* |
| ***3\. Operações Django Admin*** | *Concluído* | *As atividades cadastradas são refletidas e auditáveis no Django Admin.* |
| ***4\. Validação de CAs*** | *Concluído* | *CA-US12-01 validado: formulário exige título, tipo e nível; suporta múltiplas perguntas com 4 alternativas; atividade criada e exibida na listagem.* |
| ***5\. Garantia das RNs*** | *Concluído* | *RN03 garantida: rota de criação exige autenticação com perfil de professor.* |
| ***6\. Validação de RNFs (RNF11)*** | *Concluído* | *Interface do formulário validada como responsiva em telas a partir de 360px.* |
| ***7\. Integração Contínua (CI)*** | *Concluído* | *Código integrado ao repositório principal sem falhas na pipeline de CI.* |
| ***8\. Homologação e Validação*** | *Concluído* | *Funcionalidade testada no ambiente de produção (Vercel) e validada com a cliente (PO).* |

**Links de Rastreabilidade e Artefatos**

Link no site: https://req-2026-1-t01-morfo-blocos-digital.vercel.app/

**Fluxo de Acesso:**

a. Efetue login com uma conta de Professor.

b. Navegue até o Painel de Conteúdo (aba de gerenciamento).

c. Selecione a aba "Atividades".

d. Preencha o título, selecione o tipo (Quiz/Montagem) e o nível de dificuldade.

e. Para atividades do tipo Quiz, adicione perguntas clicando em "+ Adicionar pergunta" e preencha o enunciado e as alternativas marcando a correta.

f. Clique em "+ Criar Atividade" para persistir a atividade no banco de dados.

**Protótipo de alta fidelidade:**

![][image7]

</details>

<details class="us-dropdown" id="us13" markdown="1">

<summary><strong>US13 — Edição de Atividades Pedagógicas</strong></summary>

### US13 — Edição de Atividades Pedagógicas

> **Como** administrador, **quero** editar atividades pedagógicas existentes, **para** corrigir enunciados, níveis de dificuldade ou conjuntos de morfemas associados.

**Critério de Aceitação (CA)**

* **CA-US13-01:** A edição deve permitir alterar título, nível de dificuldade, conjunto de morfemas disponíveis e pontuação mínima para progressão, preservando o histórico das execuções já realizadas [RN03, RNF06, RNF08].

* **Status:** Não iniciado.

</details>

<details class="us-dropdown" id="us14" markdown="1">

<summary><strong>US14 — Remoção de Atividades Pedagógicas</strong></summary>

### US14 — Remoção de Atividades Pedagógicas

> **Como** administrador, **quero*** remover atividades pedagógicas do sistema, **para** retirar exercícios que não devem mais estar disponíveis aos estudantes.

**Critérios de Aceitação (CA)**

* **CA-US14-01**: O sistema deve exibir a listagem de atividades cadastradas com opção de remoção individual via ícone de lixeira, sendo o registro excluído do banco de dados ao confirmar a operação.

**Verificação do Definition of Ready (DoR) — US14**

| Critério de DoR (Scrum/XP) | Status | Evidência / Link de Rastreabilidade |
| :---- | :---- | :---- |
| **A User Story é atômica e clara?** | Sim | Escopo restrito à operação de remoção de atividades. O cadastro foi isolado na US12. |
| **Possui Critérios de Aceitação explícitos?** | Sim | CA-US14-01 define a listagem e o mecanismo de remoção por ícone de lixeira. |
| **Há rastreabilidade de RNFs e RNs?** | Sim | Mapeada para RN03 e RNF05. |
| **A prioridade está coerente e justificada?** | Sim | Must Have — necessário para o ciclo de vida das atividades na plataforma. |
| **O esforço foi estimado conjuntamente?** | Sim | Estimado em 1 Story Point, aproveitando a mesma interface da US12. |
| **Resolução de dependências validada?** | Sim | Listagem e endpoint de exclusão disponíveis antes do desenvolvimento. |

***Critério de Pronto (DoD V4.0)***

| *Critério de Pronto (DoD V4.0)* | *Status* | *Evidência de Implementação e Qualidade* |
| :---- | :---- | :---- |
| ***1\. Implementação Arquitetural*** | *Concluído* | *Listagem de atividades com ícone de lixeira implementada no painel do professor em React 18+ e TypeScript 5+.* |
| ***2\. Comunicação via API*** | *Concluído* | *O clique no ícone de lixeira dispara uma requisição DELETE para a API REST, removendo do PostgreSQL 15+ (RNF05).* |
| ***3\. Operações Django Admin*** | *Concluído* | *A remoção é refletida imediatamente no Django Admin após a exclusão pela interface.* |
| ***4\. Validação de CAs*** | *Concluído* | *CA-US14-01 validado: listagem exibe atividades com lixeira; ao clicar, atividade removida da lista e do banco.* |
| ***5\. Garantia das RNs*** | *Concluído* | *RN03 garantida: rota de exclusão exige autenticação com perfil de professor.* |
| ***6\. Validação de RNFs (RNF11)*** | *Concluído* | *Interface validada como responsiva em telas a partir de 360px.* |
| ***7\. Integração Contínua (CI)*** | *Concluído* | *Código integrado ao repositório principal sem falhas na pipeline de CI.* |
| ***8\. Homologação e Validação*** | *Concluído* | *Funcionalidade testada no ambiente de produção (Vercel) e validada com a cliente (PO).* |

**Links de Rastreabilidade e Artefatos**

Link no site: https://req-2026-1-t01-morfo-blocos-digital.vercel.app/

**Fluxo de Acesso:**

a. Efetue login com uma conta de Professor.

b. Navegue até o Painel de Conteúdo (aba de gerenciamento).

c. Selecione a aba "Atividades".

d. Localize na listagem a atividade a ser removida.

e. Clique no ícone de lixeira (vermelho) ao lado do registro para excluí-la do banco de dados.

**Protótipo de alta fidelidade:**

![][image8]


</details>

<details class="us-dropdown" id="us15" markdown="1">

<summary><strong>US15 — Listagem de Atividades Pedagógicas</strong></summary>

### US15 — Listagem de Atividades Pedagógicas

> **Como** administrador, **quero** listar atividades cadastradas no sistema, **para** consultar o catálogo de exercícios disponíveis.

**Critério de Aceitação (CA)**

* **CA-US15-01:** A listagem deve exibir, no mínimo, título da atividade, nível de dificuldade e quantidade de morfemas associados, permitindo ordenação e busca textual [RNF06].

* **Status:** Pendente.
* **Observação:** A visualização do catálogo de atividades foi tratada como parte da administração do conteúdo, mas ainda não está entregue.

</details>

<details class="us-dropdown" id="us16" markdown="1">

<summary><strong>US16 — Atividades Pedagógicas do Tipo Quiz</strong></summary>

### US16 — Atividades Pedagógicas do Tipo Quiz

* **Sprint 4**

> **Como** estudante, **quero** realizar atividades pedagógicas do tipo Quiz, **para** responder a questões de múltipla escolha sobre conceitos morfológicos teóricos.

Critério de Aceitação (CA)

**CA-US16-01:** O sistema deve carregar e exibir sequencialmente as perguntas de múltipla escolha associadas a uma atividade pedagógica teórica, computar a resposta selecionada pelo estudante entre as alternativas disponíveis e exibir o feedback imediato ou pontuação final após a conclusão do envio.

| *Critério de DoR (Scrum/XP)* | *Situação* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *O escopo está estritamente focado no consumo, interação e submissão de respostas do Quiz pela visão do estudante. A criação do banco de questões e o gerenciamento das atividades pelo professor foram desacoplados em outras histórias.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Possui um critério de aceitação (CA-US16-01) explícito e objetivo, que estabelece o fluxo de renderização, captura de clique nas opções de múltipla escolha e computação do resultado.* |
| *Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?* | *Sim* | *Mapeamento explícito para respeitar a RN01 (Acesso restrito a usuários autenticados), garantindo que apenas estudantes logados pontuem, além de herdar o RNF05 (Comunicação via API REST) e RNF12 (Execução 100% via navegador).* |
| *A prioridade está coerente e justificada?* | *Sim* | *Classificada como Must Have via matriz MoSCoW, pois o Quiz teórico compõe um dos dois pilares fundamentais de engajamento pedagógico do MVP do sistema.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *Por envolver controle de estado local e cálculo de acertos, o time de engenharia pontuou a história em 3 Story Points.* |
| *Resolução de dependências validada?* | *Sim* | *O contrato da API que entrega a estrutura do Quiz foi previamente validado e o layout dos cartões de pergunta homologado pela PO.* |

| Critério de Pronto (DoD) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Telas de renderização de perguntas e controle de estado local de respostas construídas em React 18+ e TypeScript 5+. |
| **2. Comunicação via API** | **Concluído** | O front-end captura dinamicamente a estrutura de questões de múltipla escolha e alternativas via requisições à API REST (RNF05). |
| **3. Operações Django Admin** | **Concluído** | O banco de questões, textos e alternativas corretas do Quiz são mantidos e populados via painel administrativo do Django. |
| **4. Validação de CAs** | **Concluído** | O critério CA-US16-01 foi testado com sucesso: o sistema exibe perguntas sequenciais, captura cliques e computa o feedback imediato/pontuação. |
| **5. Garantia das RNs** | **Concluído** | Atendimento estrito à RN01; o sistema exige autenticação ativa via token e vincula a pontuação final unicamente ao perfil do estudante logado. |
| **6. Validação de RNFs (RNF11)** | **Concluído** | Os blocos de múltipla escolha e os cartões de pergunta foram validados em resolução mobile (360px) e executam 100% via navegador (RNF12). |
| **7. Integração Contínua (CI)** | **Concluído** | Código integrado à branch principal, com build automatizado executado com sucesso. |
| **8. Homologação & Validação** | **Concluído** | Sistema operando de forma estável no link de produção da Vercel, homologado pelo fluxo de acesso e validado junto à cliente (PO). |

Links de Rastreabilidade e Artefatos

Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

Fluxo de Acesso:  
a. Efetue login no sistema com uma conta ativa de Estudante.  
b. Na dashboard inicial, localize e selecione um exercício rotulado como "Responder Perguntas".  
c. Responda sequencialmente às questões de múltipla escolha clicando nas alternativas desejadas.  
d. Clique no botão de envio para submeter as respostas e visualizar o resultado final.

</details>

<details class="us-dropdown" id="us17" markdown="1">

<summary><strong>US17 — Atividades Pedagógicas de Montagem de Palavras (Interface)</strong></summary>

### US17 — Atividades Pedagógicas de Montagem de Palavras (Interface)

* **Sprint 4**

> **Como** estudante, **quero** realizar atividades pedagógicas de montagem de palavras, manipulando os blocos na tela, **para** formar palavras e submetê-las para a validação.

Critério de Aceitação (CA)

* **CA-US17-01:** O estudante consegue arrastar, soltar e reordenar livremente os blocos de morfemas na área de construção usando o toque (mobile) ou o rato/mouse.
* **CA-US17-02:** O botão de "Enviar Resposta" só fica ativo e clicável se houver pelo menos um bloco posicionado na área de montagem.
* **CA-US17-04:** A área de construção e os blocos de morfemas devem adaptar-se dinamicamente ao limite mínimo de **360px** de largura. Os blocos devem empilhar-se ou redimensionar-se automaticamente, sendo expressamente proibido que fiquem cortados ou forcem uma barra de rolagem horizontal.

Verificação do Definition of Ready (DoR) — US17

| *Critério de DoR (Scrum/XP)* | *Situação* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *O escopo está focado exclusivamente na mecânica de arrastar, soltar e ordenar os blocos na interface gráfica. A validação linguística da palavra montada foi isolada em outra história do motor de regras.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Possui os critérios CA-US17-01, CA-US17-02 e CA-US17-04 detalhando o comportamento físico dos blocos.* |
| *Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?* | *Sim* | *Mapeamento estrutural homologado para a RN01 e RNF12. O bloqueio anterior do RNF11 foi totalmente sanado através da refatoração do container da mesa de trabalho.* |
| *A prioridade está coerente e justificada?* | *Sim* | *Classificada como Must Have via matriz MoSCoW, pois representa o núcleo da experiência de jogabilidade e o principal diferencial pedagógico do sistema.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *Por exigir manipulação complexa de elementos de interface, a equipe de engenharia pontuou a história em 5 Story Points.* |
| *Resolução de dependências validada?* | *Sim* | *O contrato técnico para carregar o catálogo de morfemas necessários para o tabuleiro já estava fechado.* |

| Critério de Pronto (DoD) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Mesa de trabalho desenvolvida em React 18+ com suporte nativo a eventos de mouse e gestos de toque em dispositivos móveis. |
| **2. Comunicação via API** | **Concluído** | O catálogo de morfemas é alimentado e renderizado na tela dinamicamente via requisições HTTP para a API REST (RNF05). |
| **3. Operações Django Admin** | **Concluído** | A base de blocos, morfemas e suas propriedades pedagógicas são gerenciadas e armazenadas através da retaguarda administrativa do Django. |
| **4. Validação de CAs** | **Concluído** | Critérios CA-US17-01 e CA-US17-02 validados: os blocos movem-se livremente e o botão de envio trava se a área de construção estiver vazia. |
| **5. Garantia das RNs** | **Concluído** | Garante o cumprimento da RN01, protegendo o estado do tabuleiro de jogo e limitando o uso apenas a estudantes devidamente autenticados. |
| **6. Validação de RNFs (RNF11)** | **Concluído** | **Resolvido:** O container foi refatorado com flexbox adaptativo. Os blocos empilham-se automaticamente em 360px sem sofrer cortes ou forçar scroll lateral (CA-US17-04). |
| **7. Integração Contínua (CI)** | **Concluído** | Código integrado com sucesso ao repositório principal, superando os testes de regressão visual sem quebrar as folhas de estilo globais. |
| **8. Homologação & Validação** | **Concluído** | Interface homologada no ambiente móvel da Vercel através do fluxo de acesso e validada formalmente com a cliente (PO). |

Links de Rastreabilidade e Artefatos

Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

Fluxo de Acesso:  
a. Efetue login no sistema com uma conta ativa de **Estudante**.  
b. Na dashboard inicial, clique em um exercício do tipo **"Junção de Blocos"**.  
c. Visualize o tabuleiro interativo e os blocos de morfemas disponíveis na base da tela.  
d. Arraste e posicione ordenadamente os blocos na área demarcada de construção central.

</details>

<details class="us-dropdown" id="us18" markdown="1">

<summary><strong>US18 - Consulta de Conteúdos Morfológicos</strong></summary>

### US18 - Consulta de Conteúdos Morfológicos

* **Sprint 4**

> **Como** estudante, **quero** consultar explicações sobre conteúdos morfológicos relacionados às atividades, **para** aprender enquanto pratico.

Critério de Aceitação (CA)

* **CA-US18-01:** O sistema deve fornecer uma aba ou janela modal com textos explicativos rápidos sobre a matéria da questão atual, acessíveis diretamente na tela sem reiniciar ou apagar o progresso da atividade.

| *Critério de DoR (Scrum/XP)* | *Situação* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *O escopo está focado exclusivamente na exibição de conteúdo de apoio teórico sob demanda. A interface visual de arrastar os blocos foi mantida isolada na US17.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Possui um critério de aceitação (CA-US18-01) focado no comportamento do modal de ajuda sem perda de estado local.* |
| *Há rastreabilidade de restrições (RNFs) e Regras de Negócio (RNs)?* | *Sim* | *Mapeamento direto para consumo assíncrono e suporte fluido em telas responsivas.* |
| *Resolução de dependências validada?* | *Sim* | *Depende diretamente da existência da base populada via retaguarda. Os contratos de entrada e saída foram definidos.* |

| Critério de Pronto (DoD) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Interface da janela suspensa (modal) desenvolvida em React 18+ e TypeScript 5+ de forma isolada e acoplável às atividades. |
| **2. Comunicação via API** | **Concluído** | O conteúdo teórico e os textos explicativos rápidos são consumidos dinamicamente da API REST com base na matéria selecionada (RNF05). |
| **3. Operações Django Admin** | **Concluído** | O dicionário de conteúdos morfológicos e as explicações conceituais são cadastrados e atualizados via painel administrativo do Django. |
| **4. Validação de CAs** | **Concluído** | Critério CA-US18-01 validado com sucesso: a modal abre e fecha sobre a tela atual sem reiniciar o progresso ou apagar as peças da atividade. |
| **5. Garantia das RNs** | **Concluído** | Preserva o fluxo pedagógico sem quebras de regras de integridade de dados. |
| **6. Validação de RNFs (RNF11)** | **Concluído** | A modal de explicação foi otimizada com rolagem interna vertical, adaptando-se perfeitamente em telas móveis de 360px de largura. |
| **7. Integração Contínua (CI)** | **Concluído** | Código integrado à branch principal sem gerar vazamentos de memória ou falhas de compilação na esteira de build automatizado. |
| **8. Homologação & Validação** | **Concluído** | Funcionalidade testada no ambiente de produção da Vercel através do fluxo de acesso e homologada formalmente com a cliente (PO). |

Links de Rastreabilidade e Artefatos

Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

Fluxo de Acesso:  
a. Efetue login no sistema com uma conta ativa de Estudante.  
b. Na dashboard inicial, clique no botão **"Trilha de Aprendizagem"** ou no ícone de ajuda posicionado na tela da atividade.  
c. Inspecione os textos explicativos rápidos sobre a matéria dentro da janela.

</details>

<details class="us-dropdown" id="us19" markdown="1">

<summary><strong>US19 — Resultado da Validação</strong></summary>

### US19 — Resultado da Validação

> **Como** estudante, **quero** consultar o resultado da validação da combinação de blocos submetida, **para** saber se acertei a estrutura da palavra.

Critério de Aceitação (CA)

* **CA-US19-01:** O motor do sistema testa a sequência de blocos enviada contra o banco de dados de palavras válidas e exibe um feedback instantâneo e claro de "Palavra Válida" ou "Palavra Inválida".

| *Critério de DoR (Scrum/XP)* | *Situação* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *Escopo exclusivo para a conferência algorítmica de acertos e erros e o retorno imediato do veredito.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Vinculada ao critério essencial CA-US19-01.* |
| *Há rastreabilidade de restrições (RNFs)?* | *Sim* | *Rastreia a integração síncrona com o dicionário de dados e tempo de resposta ágil.* |
| *A prioridade está coerente e justificada?* | *Sim* | *Must Have. Peça chave para o funcionamento lógico do validador.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *Estimado em 3 Story Points devido ao casamento de strings das sequências montadas.* |
| *Resolução de dependências validada?* | *Sim* | *Base de dados contendo palavras cadastradas e ordenadas validada para testes.* |

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Rotas de validação síncronas implementadas com buscas otimizadas no banco de dados relacional PostgreSQL 15+. |
| **2. Comunicação via API** | **Concluído** | O front-end envia o arranjo de blocos montados e recebe imediatamente a resposta booleana estruturada da API REST (RNF05). |
| **3. Operações Django Admin** | **Concluído** | O cadastro de sequências morfológicas e palavras consideradas válidas para os testes é realizado na retaguarda do Django Admin. |
| **4. Validação de CAs** | **Concluído** | Critério CA-US19-01 validado: o motor testa a sequência enviada contra o banco de dados e emite o aviso instantâneo de "Palavra Válida" ou "Palavra Inválida". |
| **5. Garantia das RNs** | **Concluído** | Execução direta da RN05; a combinação enviada pelo estudante autenticado só é aceita se constar rigorosamente no dicionário do sistema. |
| **6. Validação de RNFs (RNF11)** | **Concluído** | O banner visual e as mensagens de feedback de acerto ou erro foram estilizados de forma fluida, sem estourar margens móveis em telas de 360px. |
| **7. Integração Contínua (CI)** | **Concluído** | Código integrado à branch principal do repositório, com testes síncronos de casamento de strings executados de forma limpa. |

Links de Rastreabilidade e Artefatos

Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

Fluxo de Acesso:  
a. Efetue login no sistema com uma conta ativa de Estudante.  
b. Na dashboard inicial, clique em um exercício do tipo **"Junção de Blocos"**.  
c. Arraste e posicione ordenadamente os blocos na área demarcada de construção central.  
d. Clique no botão **"Verificar Palavra"**.  
e. Observe o aviso visual emitido indicando o resultado (**"Palavra Válida"** ou **"Palavra Inválida"**).

</details>

<details class="us-dropdown" id="us20" markdown="1">

<summary><strong>US20 — Feedback Pedagógico Estrutural</strong></summary>

### US20 — Feedback Pedagógico Estrutural

> **Como** estudante, **quero** consultar o processo de formação morfológica da palavra validada, **para** compreender como os morfemas se combinam.

Critério de Aceitação (CA)

* **CA-US20-01:** Em caso de acerto na montagem, o sistema abre uma explicação detalhada e textual do processo morfológico daquela palavra específica (ex: prefixação, sufixação).

| *Critério de DoR (Scrum/XP)* | *Situação* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *Escopo focado unicamente na renderização do texto pedagógico atrelado ao sucesso da montagem.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Conforme o critério CA-US20-01 (gatilho condicionado ao cenário de acerto).* |
| *Há rastreabilidade de restrições (RNFs)?* | *Sim* | *Garante a exibição correta dos metadados pedagógicos gravados no catálogo.* |
| *A prioridade está coerente e justificada?* | *Sim* | *Should Have. Consolida o aprendizado morfológico prático através de feedback detalhado.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *Estimado em 2 Story Points reaproveitando os componentes visuais de feedback estruturado.* |

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Bloco de expansão textual condicional desenvolvido em React 18+ e TypeScript 5+, integrado à tela de resultados do jogo. |
| **2. Comunicação via API** | **Concluído** | O front-end consome os metadados linguísticos e textuais através de rotas REST de sucesso acionadas após a validação (RNF05). |
| **3. Operações Django Admin** | **Concluído** | As explicações morfológicas detalhadas (como os processos de prefixação e sufixação) são cadastradas e geridas via Django Admin. |
| **4. Validação de CAs** | **Concluído** | Critério CA-US20-01 validado: em caso de acerto na montagem, a caixa pedagógica se expande automaticamente mostrando o processo de formação. |
| **5. Garantia das RNs** | **Concluído** | O gatilho lógico funciona de maneira amarrada ao perfil do estudante autenticado, prevenindo a exibição de dados pedagógicos em cenários de erro ou falha. |
| **6. Validação de RNFs (RNF11)** | **Concluído** | Caixa de texto configurada com quebra automática de linha de maneira limpa. |
| **8. Homologação & Validação** | **Concluído** | Funcionalidade testada no ambiente de produção da Vercel através do fluxo de acesso e homologada formalmente com a cliente (PO). |

Links de Rastreabilidade e Artefatos

Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

Fluxo de Acesso:  
a. Efetue login no sistema com uma conta ativa de Estudante.  
b. Na dashboard inicial, clique em um exercício do tipo **"Junção de Blocos"**.  
c. Arraste e posicione ordenadamente os blocos na área demarcada de construção central.  
d. Clique no botão **"Verificar Palavra"**.  
e. Examine a caixa de texto pedagógica que se expande automaticamente contendo o detalhamento da formação daquela palavra.

</details>

<details class="us-dropdown" id="us21" markdown="1">

<summary><strong>US21 — Histórico de Desempenho do Estudante</strong></summary>

### US21 — Histórico de Desempenho do Estudante

> **Como** estudante, **quero** consultar o histórico de pontuações individuais, **para** acompanhar minha evolução ao longo do tempo.

Critério de Aceitação (CA)

* **CA-US21-01:** O ecrã/tela de portfólio deve expor uma listagem cronológica contendo o nome de cada atividade realizada, a data da tentativa e a nota alcançada pelo aluno.

| *Critério de DoR (Scrum/XP)* | *Situação* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *Destinada puramente à leitura e exibição linear do progresso do aluno autenticado.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Mapeada sobre a listagem de colunas obrigatórias definidas no CA-US21-01.* |
| *Há rastreabilidade de restrições (RNFs)?* | *Sim* | *Rastreia restrição de privacidade (o aluno lê apenas seus dados).* |
| *A prioridade está coerente e justificada?* | *Sim* | *Should Have. Atua como o painel agregador de notas do próprio discente.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *Estimado em 2 Story Points por requerer uma consulta SQL de seleção simples.* |
| *Resolução de dependências validada?* | *Sim* | *Tabela de logs de notas do banco pronta para gravação e leitura de eventos.* |

| Critério de Pronto (DoD) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Tela de portfólio estruturada em React 18+ e TypeScript 5+ para listagem cronológica alimentada por consultas relacionais. |
| **2. Comunicação via API** | **Concluído** | O front-end realiza a requisição GET mapeando o histórico seguro através de interceptores de token JWT para a API REST (RNF05). |
| **3. Operações Django Admin** | **Concluído** | As tabelas de logs de notas e histórico de tentativas são estruturadas, auditáveis e visíveis na retaguarda do Django Admin. |
| **4. Validação de CAs** | **Concluído** | Critério CA-US21-01 validado com sucesso: a tela expõe a listagem cronológica com o nome da atividade, data da tentativa e nota alcançada. |
| **5. Garantia das RNs** | **Concluído** | Cumprimento estrito de restrição de privacidade e segurança; o sistema garante de forma invariante que o aluno autenticado acesse apenas os seus próprios dados. |
| **6. Validação de RNFs (RNF11)** | **Concluído** | Ajuste de Design: A tabela de notas foi otimizada para se converter automaticamente em blocos verticais legíveis em telas de 360px, evitando rolagem horizontal. |
| **7. Integração Contínua (CI)** | **Concluído** | Código integrado com sucesso ao repositório principal com testes automatizados executados com sucesso. |

Links de Rastreabilidade e Artefatos

Link no site: [https://req-2026-1-t01-morfo-blocos-digital.vercel.app/](https://req-2026-1-t01-morfo-blocos-digital.vercel.app/)

Fluxo de Acesso:  
a. Efetue login no sistema com uma conta ativa de Estudante.  
b. Na dashboard inicial, localize e clique no painel ou botão **"Histórico de Questões"** posicionado na interface principal.

</details>

<details class="us-dropdown" id="us22" markdown="1">

<summary><strong>US22 — Histórico de Pontuações do Estudante</strong></summary>

### US22 — Histórico de Pontuações do Estudante

> **Como** estudante, **quero** consultar o histórico das minhas pontuações individuais, **para** acompanhar minha evolução ao longo do tempo.

**Critérios de Aceitação (CA)**

* **CA-US22-01:** O histórico deve apresentar, para cada atividade concluída pelo estudante, no mínimo: nome da atividade, data de realização, pontuação obtida e resultado final da tentativa, ordenados cronologicamente [RNF01, RN08].
* **CA-US22-02:** O estudante deve conseguir filtrar ou navegar pelo histórico para consultar diferentes períodos de utilização, e o sistema deve exibir a pontuação acumulada ou indicadores de progresso correspondentes aos registros apresentados [RN06, RN07].

* **Status:** Pendente.
* **Observação:** A funcionalidade de navegação e agregação do histórico permanece em fase de refinamento para o próximo ciclo de desenvolvimento.

</details>

</details>

<details class="us-dropdown" id="us23" markdown="1">

<summary><strong>US23 — Criação de Turmas (Visão do Professor)</strong></summary>

### US23 — Criação de Turmas (Visão do Professor)

> **Como** professor, **quero** cadastrar novas turmas no sistema, **para** agrupar meus estudantes e gerenciar seus acessos de forma organizada.

Critério de Aceitação (CA)

* **CA-US23-01:** O cadastro da turma exige um identificador único (Nome/Código) e o ano letivo corrente, bloqueando o acesso a esta rota para quem tiver perfil de estudante.

| *Critério de DoR (Scrum/XP)* | *Status* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A User Story é atômica e clara?* | *Sim* | *Focada nas regras de validação do formulário e travas de perfil.* |
| *Possui Critérios de Aceitação explícitos?* | *Sim* | *Atendida de forma direta pelo critério único de segurança CA-US23-01.* |
| *Há rastreabilidade de restrições (RNFs)?* | *Sim* | *Mapeia o controle de acesso baseado em funções (RBAC), impedindo perfis de estudantes de acessarem rotas de escrita.* |
| *A prioridade está coerente e justificada?* | *Sim* | *Must Have. Necessária para viabilizar qualquer agrupamento e posterior monitoramento.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *Estimado em 2 Story Points usando middlewares tradicionais de validação de token (JWT).* |
| *Resolução de dependências validada?* | *Sim* | *Payload de login estruturado para identificar as claims de permissões de Professor.* |

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Estrutura de dados das turmas e models de escrita configurados no banco de dados relacional PostgreSQL 15+. |
| **2. Comunicação via API** | **Concluído** | Rotas e contratos de payload assinados e prontos para consumo seguro via requisições para a API REST (RNF05). |
| **3. Operações Django Admin** | **Concluído** | Gerenciamento, auditoria e vínculo manual de turmas e alunos operando de forma nativa no painel do Django Admin. |
| **4. Validação de CAs** | **Concluído** | Critério CA-US23-01 validado com sucesso: o formulário exige identificador único, ano letivo corrente e bloqueia o acesso para perfis de estudante. |
| **5. Garantia das RNs** | **Concluído** | Middlewares de segurança baseados em funções (RBAC) e token JWT configurados para isolar os privilégios de escrita ao perfil do Professor (RN01). |
| **6. Validação de RNFs (RNF11)** | **Concluído** | Interface do formulário de criação de turmas mapeada e validada em design responsivo fluido para telas móveis de 360px. |
| **7. Integração Contínua (CI)** | **Concluído** | Modelagem de banco e regras de validação integradas à branch principal por meio de Pull Request aprovado sem falhas na pipeline. |

Links de Rastreabilidade e Artefatos

Fluxo de Acesso:  
a. Efetue login com uma conta configurada com permissões de **Professor**.  
b. Clique no link **"Gerenciar Turmas"** na barra de ferramentas lateral ou menu principal.  
c. Clique no botão de ação **"Nova Turma"** para carregar o formulário.  
d. Preencha o nome da turma, ano corrente e confirme a operação de escrita.

</details>

<details class="us-dropdown" id="us24" markdown="1">

<summary><strong>US24 — Relatório Analítico Consolidado da Turma</strong></summary>

### US24 — Relatório Analítico Consolidado da Turma

> **Como** professor, **quero** acessar o relatório de desempenho consolidado da turma, **para** identificar dificuldades e orientar intervenções pedagógicas.

**Critérios de Aceitação (CA):**

* **CA-US24-01:** O painel deve agregar e exibir de forma visual as médias de pontuação, taxas de acertos e o progresso macro das atividades da turma selecionada.
* **CA-US24-02:** O relatório permite filtrar os dados de desempenho por intervalo de tempo e por tarefas específicas, atualizando a tela de forma dinâmica.
* **CA-US24-03:** Se a turma selecionada for nova e os alunos ainda não tiverem realizado nenhum exercício, os gráficos e tabelas não podem quebrar; o sistema deve exibir uma mensagem clara.

| *Critério de DoR (Scrum/XP)* | *Status* | *Evidência / Link de Rastreabilidade* |
| :---- | :---- | :---- |
| *A prioridade está coerente e justificada?* | *Sim* | *Should Have. Principal painel analítico para embasamento instrucional do professor.* |
| *O esforço foi estimado conjuntamente?* | *Sim* | *Estimada em 4 Story Points pelo desenvolvimento de filtros dinâmicos e cálculos complexos de média em tempo real.* |
| *Resolução de dependências validada?* | *Sim* | *Chaves estrangeiras conectando Turmas, Alunos e Notas devidamente mapeadas na arquitetura.* |

| Critério de Pronto (DoD V4.0) | Status | Evidência de Implementação e Qualidade |
| :---- | :---- | :---- |
| **1. Implementação Arquitetural** | **Concluído** | Consultas e rotas para agregação estatística de médias e taxas de acerto desenvolvidas e otimizadas no banco de dados PostgreSQL 15+. |
| **2. Comunicação via API** | **Concluído** | Endpoints REST criados para retornar pacotes estruturados de dados analíticos com suporte a parâmetros de filtros (RNF05). |
| **3. Operações Django Admin** | **Concluído** | Tabelas relacionais que vinculam notas, turmas e históricos permanecem acessíveis e totalmente auditáveis no Django Admin. |
| **4. Validação de CAs** | **Concluído** | Critérios CA-US24-01 a CA-US24-03 validados nos cenários de preenchimento e dados nulos. |
| **5. Garantia das RNs** | **Concluído** | O sistema de buscas isola os dados por token JWT, garantindo de forma invariante que um professor autenticado acesse apenas os dados de suas próprias turmas. |
| **6. Validação de RNFs (RNF11)** | **Concluído** | Painel de indicadores visuais estruturado em grid adaptativo, garantindo o redimensionamento fluido e legibilidade em telas móveis de 360px. |
| **7. Integração Contínua (CI)** | **Concluído** | Código integrado com sucesso ao repositório principal, com funções matemáticas de cálculo de desempenho validadas na pipeline de testes. |
| **8. Homologação & Validação** | **Concluído** | Painel analítico testado no ambiente de homologação da Vercel por meio do fluxo de acesso e homologado formalmente com a cliente (PO). |

</details>
