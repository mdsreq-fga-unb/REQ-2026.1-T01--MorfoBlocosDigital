# 📌 Ata de Reunião — MorfoBlocos (Sprint 06)

## Informações Gerais

| Item                | Detalhe         |
| ------------------- | --------------- |
| **Projeto** | MorfoBlocos     |
| **Tipo de Reunião** | Sprint Planning |
| **Data** | 24/06/2026      |

### Participantes

* Artur Fernandes
* Luiz Henrique Pallavicini
* Bruno Souza
* Carlos Eduardo (Cadu)
* Ana Beatriz

---

##  Objetivo(s) da Reunião

Planejar a estabilização final do MVP, correção crítica de responsividade bloqueante (RNF11), implementação da Integração Contínua (CI) via GitHub Actions e homologação do deploy na Vercel e nuvem.

---

##  Pautas e Definições

### Pauta 1: Bloqueio da US17 (Responsividade em 360px)

**Definição:** O layout da mesa de montagem está quebrando em dispositivos móveis, ferindo o RNF11. A US será declarada formalmente como "Bloqueada" no relatório de impedimentos até que o CSS/Flexbox seja refatorado.

### Pauta 2: Configuração de CI/CD e Deploy de Produção

**Definição:** O projeto precisa estar online para validação da PO. Será priorizada a configuração do ci.yml para testes automáticos, o deploy do backend (Gunicorn) e do frontend (Vercel) utilizando variáveis de ambiente seguras.

### Pauta 3: Fechamento do MkDocs e Evidências

**Definição:** Toda a documentação técnica (Sprints, Relatório de Impedimentos, Lições Aprendidas) deve ser fechada. Os links do repositório e da Vercel serão inseridos como "Evidência Funcional" na tabela do MVP.

---

##  Ações / Próximos Passos

**Luiz Henrique Pallavicini**

* Configurar a esteira do GitHub Actions (CI);
* Realizar o deploy do ecossistema (Backend na nuvem e Frontend na Vercel).

**Carlos Eduardo**

* Refatorar o CSS (Flexbox) do tabuleiro (US17) para resolver o corte e barra de rolagem horizontal em telas pequenas.

**Ana Beatriz**

* Fechar as Lições Aprendidas e a ata de reuniões com a PO (Profª Pilar).

**Bruno Souza**

* Escrever o Relatório de Impedimentos e Pendências de Evidência, documentando os status bloqueados e parciais.

**Artur Fernandes**

* Auditar o portal MkDocs em busca de links quebrados;
* Atualizar a matriz final do Quadro MVP com o link de produção.

---

##  Observações

> O grupo concorda em adotar máxima transparência com a banca avaliadora, relatando todas as decisões arquiteturais e itens parcialmente entregues no relatório de impedimentos.

---

## **Dailies**

# Daily 01 — 24/06

## Artur
- **Ontem:** Preparei o espaço da S6.
- **Hoje:** Atualizo a tabela de Acompanhamento do Cronograma e Execução.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Conduzi a retrospectiva.
- **Hoje:** Atualizo as legendas do Quadro MVP para alinharmos o status real das entregas.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Finalizei os PRs.
- **Hoje:** Crio o arquivo ci.yml no GitHub Actions para automatizarmos os testes.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Declarei a S5 concluída.
- **Hoje:** Subo a versão final do Relatório de Impedimentos no MkDocs.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Limpei meu ambiente.
- **Hoje:** Inicio a refatoração do CSS e Flexbox da US17 para consertar o layout mobile.
- **Impedimentos:** Nenhum.

---

# Daily 02 — 25/06

## Artur
- **Ontem:** Atualizei a tabela do cronograma.
- **Hoje:** Listo quais tabelas de US vão receber o link de produção da Vercel.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Atualizei as legendas do MVP.
- **Hoje:** Acompanho o andamento da tela da US17 com o Carlos.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Criei o arquivo de CI.
- **Hoje:** Investigo e resolvo um erro na versão do Python que quebrou a esteira do GitHub Actions.
- **Impedimentos:** Erro de versão do Python no workflow (em resolução).

## Ana
- **Ontem:** Subi o relatório de impedimentos.
- **Hoje:** Faço uma revisão ortográfica completa na página de Planejamento e Organização.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Iniciei a refatoração.
- **Hoje:** Removo as larguras fixas e aplico o grid adaptativo no container de morfemas.
- **Impedimentos:** Nenhum.

---

# Daily 03 — 26/06

## Artur
- **Ontem:** Listei as tabelas para os links.
- **Hoje:** Faço uma varredura por links quebrados ou 404 dentro do MkDocs.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Acompanhou o ajuste visual.
- **Hoje:** Audito a mesa de trabalho no celular simulado para verificar o cumprimento do RNF11.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Resolvi o erro do CI.
- **Hoje:** Começo a preparar os arquivos do Gunicorn e staticfiles para o deploy do backend.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Fiz revisão ortográfica.
- **Hoje:** Redijo e formato as atas de reuniões faltantes das últimas Sprints.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Apliquei os grids.
- **Hoje:** Faço ajustes finos de padding para os blocos não cortarem o texto em telas pequenas.
- **Impedimentos:** Nenhum.

---

# Daily 04 — 29/06

## Artur
- **Ontem:** Procurei links quebrados na sexta.
- **Hoje:** Adiciono a flag temporária "[Evidência a preencher]" nas áreas do documento.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Auditei a responsividade visual.
- **Hoje:** Altero o status da US17 de "Bloqueado" para "Implementado" no Quadro MVP.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Preparei o Gunicorn.
- **Hoje:** Subo a API do backend na nuvem e crio o vercel.json no repositório do React.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Redigi as atas formais.
- **Hoje:** Fecho o texto consolidado das Lições Aprendidas.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Finalizei o CSS.
- **Hoje:** Faço o teste final da responsividade da mesa com a API ligada.
- **Impedimentos:** Nenhum.

---

# Daily 05 — 30/06

## Artur
- **Ontem:** Inseri as marcações de evidência.
- **Hoje:** Faço o cruzamento final entre o MVP implementado e as priorizações da matriz MoSCoW.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Atualizei a US17.
- **Hoje:** Congelo o Relatório de Impedimentos mantendo a restrição de UI das US23 e US24.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Subi a API.
- **Hoje:** Configuro as variáveis de ambiente na Vercel (VITE_API_URL) e dou start no build de produção.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Finalizei as lições aprendidas.
- **Hoje:** Realizo a formatação estrutural e visual dos novos textos no repositório de documentos.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Testei a mesa integrada.
- **Hoje:** Fico acompanhando os logs de build da Vercel para mapear qualquer falha no deployment.
- **Impedimentos:** Nenhum.

---

# Daily 06 — 01/07

## Artur
- **Ontem:** Cruzei o MoSCoW.
- **Hoje:** Marco oficialmente o status da Sprint 6 como "Cumprido ✅" no quadro de execução.
- **Impedimentos:** Nenhum.

## Bruno
- **Ontem:** Congelei o relatório.
- **Hoje:** Aprovo a visão geral dos relatórios de engenharia e certifico as evidências.
- **Impedimentos:** Nenhum.

## Luiz
- **Ontem:** Iniciei o build do front.
- **Hoje:** Valido o deploy concluído e pego o link oficial gerado pela plataforma.
- **Impedimentos:** Nenhum.

## Ana
- **Ontem:** Formatei o MkDocs.
- **Hoje:** Substituo todos os blocos de pendência pelo link de produção do jogo.
- **Impedimentos:** Nenhum.

## Carlos
- **Ontem:** Monitorei o processo de deploy.
- **Hoje:** Faço testes manuais pelo celular conectado no 4G usando o link público.
- **Impedimentos:** Nenhum.