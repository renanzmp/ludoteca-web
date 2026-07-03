# Catálogo de Filmes (Full-Stack)

## Visão Geral

Esta é uma aplicação **Full-Stack** segura e moderna para o gerenciamento de catálogos de filmes. O sistema oferece:

* **Autenticação Segura (JWT):** Sistema de Login e Registro com senhas criptografadas via `bcrypt` e proteção de rotas via Bearer Tokens.
* **Painel Analítico:** Gráficos interativos (`Recharts`) baseados no histórico do usuário.
* **Busca Integrada:** Integração transparente com a API oficial do TMDB para busca de filmes, pôsteres e sinopses.
* **Armazenamento Permanente:** Operações de CRUD integradas ao banco de dados SQLite.

O Backend foi construído em Python com **FastAPI**, enquanto o Frontend utiliza **React.js** via Vite, entregando um design premium inspirado em plataformas de streaming (Dark Theme e UI Dinâmica).

## Estrutura da Arquitetura

O backend segue conceitos de **Clean Architecture**:

* `app/controllers` → Endpoints da API (Filmes, TMDB e Auth).
* `app/services` → Regras de negócio, busca externa e geração de Tokens JWT.
* `app/repositories` → Acesso ao banco de dados SQLite (SQLAlchemy).
* `app/models` → Tabelas do Banco de Dados (`usuarios` e `filmes`).
* `app/schemas` → Validação de entrada e saída (Pydantic).
* `app/security.py` → Motor de Criptografia e middlewares de segurança.

## Tecnologias Utilizadas

* **Backend:** Python 3.11, FastAPI, SQLAlchemy, SQLite, Uvicorn, PyJWT, Passlib (Bcrypt).
* **Frontend:** React 18, Vite, Recharts, React Router Dom, Iconify.
* **Infraestrutura:** Docker Compose.

## Configuração Obrigatória (.env)

O sistema exige uma chave da API do **The Movie Database (TMDB)** para buscar os dados dos filmes. Crie um arquivo chamado `.env` na raiz do projeto contendo:

```env
TMDB_API_KEY=sua_chave_de_acesso_aqui
