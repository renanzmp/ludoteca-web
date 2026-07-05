# 🎮 Ludoteca Web

> **Sua coleção, sob o seu controle.**
> Uma aplicação Full-Stack segura e moderna para o gerenciamento de um catálogo pessoal de jogos, desenvolvida para garantir que cada usuário tenha seu próprio ambiente privado.

---

## 🚀 Visão Geral

O sistema oferece as seguintes funcionalidades principais:

* 🔐 **Autenticação e Segurança:** Sistema de Login e Registro protegido por **JWT (JSON Web Tokens)**, garantindo sessões seguras sem armazenamento de estado no servidor.
* 🛡️ **Isolamento de Dados (Multi-tenancy):** Cada usuário possui seu próprio ambiente privado, visualizando, editando e excluindo apenas os jogos que ele mesmo cadastrou.
* 💾 **Armazenamento Permanente:** Operações completas de CRUD integradas ao banco de dados (SQLite em ambiente local e PostgreSQL em produção).
* 📡 **Comunicação RESTful:** API estruturada garantindo o tráfego seguro de dados em formato JSON entre o cliente e o servidor.

---

## 💻 Tecnologias Utilizadas

### 🎨 Frontend
* **React** (Interface de Usuário)
* **Vite** (Bundler e Servidor de Desenvolvimento)
* **Axios** (Requisições HTTP)
* **CSS3** (Estilização Dark Theme)

### ⚙️ Backend
* **Python 3.12+** (Linguagem Principal)
* **Django & Django REST Framework (DRF)** (Construção da API)
* **djangorestframework-simplejwt** (Autenticação)
* **PostgreSQL** (Banco de Dados em Produção)
* **Gunicorn & WhiteNoise** (Servidor WSGI e Gerenciamento de Estáticos)

### ☁️ Deploy e Infraestrutura
* **Frontend:** Vercel
* **Backend e Banco de Dados:** Render

---

## 🛠️ Como executar o projeto localmente

### 📌 Pré-requisitos
Certifique-se de ter instalado em sua máquina:
* `Python` (versão 3.12 ou superior)
* `Node.js` e `npm`
* `Git`

### 1️⃣ Clonando o repositório
Abra o seu terminal e execute:
```bash
git clone [https://github.com/renanzmp/ludoteca-web.git](https://github.com/renanzmp/ludoteca-web.git)
cd ludoteca-web
```

### 2️⃣ Configurando o Backend (API Django)
```bash
cd backend

# Crie e ative o ambiente virtual
python -m venv venv
source venv/bin/activate  # No Windows, utilize: venv\Scripts\activate

# Instale as dependências do projeto
pip install -r requirements.txt
```

**Configurando as Variáveis de Ambiente:**
Crie um arquivo chamado `.env` dentro da pasta `backend` (no mesmo nível do arquivo `manage.py`) e adicione:
```env
SECRET_KEY=uma_chave_secreta_qualquer_para_testes
DEBUG=True
```

**Criando o banco de dados e rodando o servidor:**
```bash
python manage.py migrate
python manage.py runserver
```
📍 *A API estará disponível em `http://localhost:8000/api/`.*

### 3️⃣ Configurando o Frontend (React/Vite)
Abra uma **nova aba** no seu terminal (mantenha o servidor do backend rodando) e execute:
```bash
cd frontend

# Instale as dependências do Node
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
📍 *A interface gráfica estará disponível em `http://localhost:5173`.*

---

## 📡 Endpoints e Rotas da API

### 🔑 Autenticação e Usuários (`/api/auth/`)
| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/api/auth/register/` | Cria uma nova conta de usuário. |
| `POST` | `/api/auth/login/` | Autentica o usuário e retorna o Token JWT. |

### 🕹️ Gerenciamento de Jogos (`/api/games/`)
*(Requer Token JWT no cabeçalho `Authorization: Bearer <token>`)*

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/api/games/` | Retorna a lista de jogos do usuário logado. |
| `POST` | `/api/games/` | Salva um novo jogo na conta do usuário. |
| `PUT` | `/api/games/{id}/` | Atualiza os dados de um jogo específico. |
| `DELETE` | `/api/games/{id}/` | Remove o jogo do banco de dados permanentemente. |

---

## 👨‍💻 Autores

Este projeto foi desenvolvido como requisito acadêmico para a disciplina de Laboratório de Desenvolvimento de Software da **Universidade Veiga de Almeida (UVA)** pelos alunos:

* **Renan Martins Pereira** - 1240110606
* **Vitor Antônio Henriques Negreiros** - 1240109245
* **Gustavo Rangel Valente** - 1240110185
* **Cauã Manuel Proença de Andrade** - 1240109764
## Documentação Acadêmica

📄 [Clique aqui para ler o Relatório Técnico completo do Projeto](./docs/documentacao_ludoteca.pdf)
