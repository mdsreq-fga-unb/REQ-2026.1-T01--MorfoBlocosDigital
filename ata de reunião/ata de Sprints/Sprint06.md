📌 Ata de Reunião - MorfoBlocos (Sprint 06)
Data: 24/06/2026

Participantes:
Artur Fernandes
Luiz Henrique Pallavicini
Bruno Souza
Carlos Eduardo (Cadu)
Ana Beatriz

🎯 Objetivo(s) da Reunião
Planejar a estabilização final do MVP, correção crítica de responsividade bloqueante (RNF11), implementação da Integração Contínua (CI) via GitHub Actions e homologação do deploy na Vercel e nuvem.

📋 Pautas e Definições
Pauta 1: Bloqueio da US17 (Responsividade em 360px)
Definição: O layout da mesa de montagem está quebrando em dispositivos móveis, ferindo o RNF11. A US será declarada formalmente como "Bloqueada" no relatório de impedimentos até que o CSS/Flexbox seja refatorado.

Pauta 2: Configuração de CI/CD e Deploy de Produção
Definição: O projeto precisa estar online para validação da PO. Será priorizada a configuração do ci.yml para testes automáticos, o deploy do backend (Gunicorn) e do frontend (Vercel) utilizando variáveis de ambiente seguras.

Pauta 3: Fechamento do MkDocs e Evidências
Definição: Toda a documentação técnica (Sprints, Relatório de Impedimentos, Lições Aprendidas) deve ser fechada. Os links do repositório e da Vercel serão inseridos como "Evidência Funcional" na tabela do MVP.

✅ Ações / Próximos Passos
Luiz Henrique Pallavicini: Configurar a esteira do GitHub Actions (CI) e realizar o deploy do ecossistema (Backend na nuvem e Frontend na Vercel).
Carlos Eduardo: Refatorar o CSS (Flexbox) do tabuleiro (US17) para resolver o corte e barra de rolagem horizontal em telas pequenas.
Ana Beatriz: Fechar as Lições Aprendidas e a ata de reuniões com a PO (Profª Pilar).
Bruno Souza: Escrever o Relatório de Impedimentos e Pendências de Evidência, documentando os status bloqueados e parciais.
Artur Fernandes: Auditar o portal MkDocs em busca de links quebrados e atualizar a matriz final do Quadro MVP com o link de produção.

📝 Observações
O grupo concorda em adotar máxima transparência com a banca avaliadora, relatando todas as decisões arquiteturais e itens parcialmente entregues no relatório de impedimentos.
