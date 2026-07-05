#!/usr/bin/env bash
# Saída imediata em caso de erro
set -o errexit

# Instala as dependências
pip install -r requirements.txt

# Coleta os arquivos estáticos (CSS do Django Admin)
python manage.py collectstatic --no-input

# Aplica as alterações no banco de dados na nuvem
python manage.py migrate