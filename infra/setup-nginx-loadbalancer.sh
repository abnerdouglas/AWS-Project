#!/bin/bash

set -e

echo "🚀 Iniciando configuração do Proxy Reverso + Load Balancer com NGINX..."

# 1. Atualizar pacotes
echo "🔄 Atualizando pacotes..."
sudo apt update -y && sudo apt upgrade -y

# 2. Instalar nginx
echo "📦 Instalando NGINX..."
sudo apt install nginx -y

# 3. Criar arquivo de configuração personalizado
CONFIG_PATH="/etc/nginx/conf.d/xpto-loadbalancer.conf"

echo "🛠️  Criando arquivo de configuração do NGINX: $CONFIG_PATH"

sudo tee "$CONFIG_PATH" > /dev/null <<EOL
# Load Balancer + Proxy Reverso XPTO

upstream xpto_backend {
    server 192.168.0.10:3000;
    server 192.168.0.11:3000;
    server 192.168.0.12:3000;
}

server {
    listen 80;

    location / {
        proxy_pass http://xpto_backend;
        proxy_http_version 1.1;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOL

# 4. Testar configuração do NGINX
echo "🔍 Testando configuração do NGINX..."
sudo nginx -t

# 5. Reiniciar NGINX
echo "🔄 Reiniciando NGINX..."
sudo systemctl restart nginx

echo "✅ NGINX configurado com sucesso como Load Balancer + Proxy Reverso!"
