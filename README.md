# Ludoteca Web - Catálogo de Jogos (Full-Stack)

## Visão Geral

Esta é uma aplicação **Full-Stack** segura e moderna para o gerenciamento de um catálogo de jogos. O sistema oferece:

* **Autenticação e Segurança:** Sistema de Login e Registro protegido por **JWT (JSON Web Tokens)**.
* **Isolamento de Dados (Multi-tenancy):** Cada usuário possui seu próprio ambiente privado, visualizando e gerenciando apenas os jogos que ele mesmo cadastrou.
* **Armazenamento Permanente:** Operações completas de CRUD integradas ao banco de dados SQLite.
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

### Autenticação e Usuários (`/api/auth/`)
* `POST /api/auth/register/` : Cria uma nova conta de usuário (requer nome, email e senha).
* `POST /api/auth/login/` : Autentica o usuário no sistema e retorna o Token JWT de acesso.

### Gerenciamento de Jogos (`/api/games/`)
*(Requer Token JWT no cabeçalho `Authorization: Bearer <token>`)*

* `GET /api/games/` : Retorna a lista de jogos do usuário logado.
* `POST /api/games/` : Salva um novo jogo associado à conta do usuário.
* `PUT /api/games/{id}/` : Atualiza os dados de um jogo específico.
* `DELETE /api/games/{id}/` : Remove permanentemente o jogo do banco de dados.

---

## Autores

Projeto desenvolvido por:

* Renan Martins Pereira - 1240110606
* Vitor Antônio Henriques Negreiros - 1240109245
* Gustavo Rangel Valente - 1240110185
* Cauã Manuel Proença de Andrade -1240109764 
## Documentação Acadêmica

📄 [Clique aqui para ler o Relatório Técnico completo do Projeto](./docs/Documentação_ludoteca.pdf)
