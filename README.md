# Ludoteca Web - Catálogo de Jogos (Full-Stack)

## Visão Geral

Esta é uma aplicação **Full-Stack** segura e moderna para o gerenciamento de um catálogo de jogos. O sistema oferece:

* **Armazenamento Permanente:** Operações completas de CRUD integradas ao banco de dados SQLite.
* **Segurança de Configuração:** Ocultação de chaves sensíveis e configurações de ambiente via `python-dotenv`.
* **Comunicação RESTful:** API estruturada garantindo o tráfego seguro de dados em formato JSON.

O Backend foi construído em Python com **Django** e **Django REST Framework**, enquanto o Frontend utiliza **React.js** via Vite, entregando um design elegante e responsivo focado na temática de jogos (Dark Theme).

## Estrutura da Arquitetura

O projeto adota a separação de responsabilidades e segue a arquitetura MVT/Controller no backend:

* `backend/games/models.py` → Tabelas e modelagem do Banco de Dados (`Game`).
* `backend/games/serializers.py` → Validação de entrada e conversão de dados complexos para JSON.
* `backend/games/views.py` → Controllers contendo a lógica dos endpoints da API.
* `backend/games/tests.py` → Testes automatizados dos endpoints HTTP.
* `frontend/src/services/api.js` → Configuração do cliente HTTP (Axios) para comunicação com o servidor.

## Tecnologias Utilizadas

* **Backend:** Python, Django.
* **Frontend:** HTML, CSS3, React.
* **Controle de Versão:** Git e GitHub.

## Configuração Obrigatória (.env)

O sistema exige a configuração de variáveis de ambiente para rodar com segurança. Crie um arquivo chamado `.env` dentro da pasta `backend/` contendo:

```env
SECRET_KEY=django-insecure-sua_chave_secreta_aqui
DEBUG=True
```

## Como Executar

### 1. Subindo o Backend (Django)

Abra o seu terminal, navegue até a pasta `backend/` e execute os comandos abaixo:

```bash
# Crie e ative seu ambiente virtual
python -m venv venv
# (No Windows)
venv\Scripts\activate

# Instale todas as dependências do projeto
pip install -r requirements.txt

# Crie as tabelas no banco de dados SQLite
python manage.py migrate

# Inicie o servidor Python
python manage.py runserver
```

### 2. Subindo o Frontend (React)

Abra um novo terminal, navegue até a pasta `frontend/` e execute:

```bash
cd frontend
npm install
npm run dev
```

*(O Vite encaminha automaticamente a aplicação para a porta 5173, consumindo a API na porta 8000).*

## Estrutura do Banco de Dados (SQLite)

O banco local possui a tabela principal `Game` com os seguintes atributos:

* `id` (PK), `title`, `genre`, `developer`, `release_date`, `created_at`.

## Endpoints e Rotas da API

### Gerenciamento de Jogos (`/api/games/`)

* `GET /api/games/` : Retorna a lista completa de todos os jogos cadastrados no sistema.
* `POST /api/games/` : Salva um novo jogo no banco de dados.
* `PUT /api/games/{id}/` : Atualiza todos os dados de um jogo específico selecionado pelo ID.
* `DELETE /api/games/{id}/` : Remove permanentemente o registro do jogo do banco de dados.

---

## Autores

Projeto desenvolvido por:

* Renan Martins Pereira
