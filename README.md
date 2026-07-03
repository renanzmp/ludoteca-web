# Ludoteca Web - Catálogo de Jogos (Full-Stack)

## Visão Geral

Esta é uma aplicação **Full-Stack** moderna para o gerenciamento de um catálogo de jogos. O sistema oferece:

* **Armazenamento Permanente:** Operações completas de CRUD (Criar, Ler, Atualizar, Deletar) integradas ao banco de dados SQLite.
* **Segurança de Configuração:** Ocultação de chaves sensíveis e configurações de ambiente via `python-dotenv`.
* **Comunicação RESTful:** API estruturada garantindo o tráfego seguro de dados em formato JSON.

O Backend foi construído em Python com **Django e Django REST Framework**, enquanto o Frontend utiliza **React.js** via Vite, entregando um design elegante e responsivo focado na temática de jogos (Dark Theme).

## Estrutura da Arquitetura

O projeto adota a separação de responsabilidades (Frontend e Backend isolados) e segue a arquitetura MVT/Controller no backend:

* `backend/games/models.py` → Tabelas e modelagem do Banco de Dados (`Game`).
* `backend/games/serializers.py` → Validação de entrada e conversão de dados complexos para JSON.
* `backend/games/views.py` → Controllers contendo a lógica dos endpoints da API (ModelViewSet).
* `backend/games/tests.py` → Testes automatizados dos endpoints HTTP.
* `frontend/src/services/api.js` → Configuração do cliente HTTP (Axios) para comunicação com o servidor.

## Tecnologias Utilizadas

* **Backend:** Python, Django, Django REST Framework, SQLite, django-cors-headers, python-dotenv.
* **Frontend:** React, Vite, Axios, CSS3 (Variáveis e Flexbox).
* **Controle de Versão:** Git e GitHub.

## Configuração Obrigatória (.env)

Para rodar o backend com segurança, é necessário criar um arquivo chamado `.env` dentro da pasta `backend/` contendo a chave secreta do Django e a configuração de debug:

```env
SECRET_KEY=django-insecure-sua_chave_secreta_aqui
DEBUG=True
Como Executar (Localmente)
Para rodar a aplicação na sua máquina, você precisará de dois terminais abertos simultaneamente (um para o servidor Python e outro para o servidor Node/React).

1. Subindo o Backend (Django)
Abra o seu terminal, navegue até a pasta backend/ e execute os comandos abaixo:

Bash
# Crie o ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# No Windows:
venv\Scripts\activate
# No Linux/Mac:
source venv/bin/activate

# Instale todas as dependências do projeto
pip install -r requirements.txt

# Crie as tabelas no banco de dados SQLite
python manage.py migrate

# Inicie o servidor Python
python manage.py runserver
A API estará disponível em: http://localhost:8000/api/games/

2. Subindo o Frontend (React)
Abra um novo terminal, navegue até a pasta frontend/ e execute:

Bash
# Instale as dependências do Node
npm install

# Inicie o servidor de desenvolvimento do Vite
npm run dev
A interface gráfica estará disponível em: http://localhost:5173/

Estrutura do Banco de Dados (SQLite)
O banco local possui a tabela principal Game com os seguintes atributos:

id (PK, Inteiro)

title (String, Máx 200 caracteres)

genre (String, Máx 100 caracteres)

developer (String, Máx 150 caracteres)

release_date (Data, Opcional)

created_at (Data e Hora, Preenchimento Automático)

Endpoints e Rotas da API
Gerenciamento de Jogos (/api/games/)
GET /api/games/: Retorna a lista completa de todos os jogos cadastrados no sistema.

POST /api/games/: Salva um novo jogo no banco de dados.

PUT /api/games/{id}/: Atualiza todos os dados de um jogo específico selecionado pelo ID.

DELETE /api/games/{id}/: Remove permanentemente o registro do jogo do banco de dados.

Autores
Projeto desenvolvido por:

Renan Martins Pereira
