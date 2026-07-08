# MorfoBlocosDigital

Bem-vindo ao projeto **MorfoBlocosDigital**, uma aplicação web composta por frontend em React/TypeScript e backend em Django REST Framework.

---

## ⚙️ Requisitos recomendados

- Python 3.14.4
- npm 9.2.0
- Docker e Docker Compose instalados

> Recomendamos usar exatamente essas versões para evitar problemas de compatibilidade.

---

## 🧱 Tecnologias principais

- Frontend: React + TypeScript
- Estilização: TailwindCSS
- Backend: Django REST Framework
- Banco de dados: PostgreSQL
- Contêineres: Docker Compose

---

## 🚀 Como rodar o projeto

### Opção 1: Usando Docker Compose

1. Navegue até a raiz do projeto:

```bash
cd /home/bruno/teste/REQ-2026.1-T01--MorfoBlocosDigital
```

2. Suba os serviços com build:

```bash
docker compose up --build
```

3. Após o build, o frontend e backend estarão disponíveis em:

- Frontend: http://localhost:5173
- Backend: http://localhost:8000


### Opção 2: Rodando localmente sem Docker

#### Backend

1. Vá para a pasta do backend:

```bash
cd backend
```

2. Crie e ative um ambiente virtual com Python 3.14.4.

```bash
python -m venv .venv
source .venv/bin/activate
```

3. Instale as dependências:

```bash
pip install -r requirements.txt
```

4. Execute o servidor Django:

```bash
python manage.py runserver
```

#### Frontend

1. Vá para a pasta do frontend:

```bash
cd frontend
```

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

---

## 🌐 URLs do sistema

- Frontend: http://localhost:5173
- Backend: http://localhost:8000

---

## 📁 Estrutura do projeto

- `frontend/` — código React + TypeScript
- `backend/` — API Django REST Framework
- `docker-compose.yml` — orquestração Docker

---

## 💡 Dica

Se estiver usando versões diferentes do Python ou do npm, confirme se há compatibilidade ou use `pyenv`/`npm` para fixar as versões recomendadas.
