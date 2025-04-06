#!/bin/bash

set -e

echo "🐳 Iniciando instalação do Docker e Docker Compose..."

# Atualizar pacotes
echo "🔄 Atualizando pacotes..."
sudo apt update -y && sudo apt upgrade -y

# Instalar dependências necessárias
echo "📦 Instalando dependências..."
sudo apt install apt-transport-https ca-certificates curl software-properties-common -y

# Adicionar chave GPG oficial do Docker
echo "🔑 Adicionando chave GPG do Docker..."
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Adicionar o repositório oficial Docker no Ubuntu
echo "📁 Adicionando repositório oficial do Docker..."
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] \
  https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instalar Docker Engine
echo "🐋 Instalando Docker Engine..."
sudo apt update -y
sudo apt install docker-ce docker-ce-cli containerd.io -y

# Iniciar e habilitar Docker no boot
echo "🚀 Iniciando serviço Docker..."
sudo systemctl start docker
sudo systemctl enable docker

# Instalar Docker Compose
echo "🐳 Instalando Docker Compose..."
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# Tornar Docker Compose executável
sudo chmod +x /usr/local/bin/docker-compose

# Verificar instalações
echo "🔍 Docker version:"
docker --version

echo "🔍 Docker Compose version:"
docker-compose --version

echo "✅ Docker e Docker Compose instalados com sucesso!"
