# 🚀 Infraestrutura de Rede Integrada - Empresa XPTO

## 📚 Sobre o Projeto

Este projeto prático tem como objetivo implementar uma infraestrutura de rede robusta, segura e escalável para a empresa XPTO, utilizando tecnologias modernas, visando segurança e eficiência operacional.

## Diagrama de Topologia de Rede
![Diagrama](/DiagramaAWS.png)

## Tutorial Completo de Como Replicar o Ambiente

- [Tutorial Completo](https://lovely-approach-2a6.notion.site/Tutorial-Configura-o-AWS-PROJECT-1cde548382fd80ef92a6d098321771d7)

## 🔧 Tecnologias Utilizadas

- AWS (Amazon Web Services)
- Docker e Docker Compose
- Nginx (Load Balancer e Proxy Reverso)
- PostgreSQL (banco de dados)
- pgAdmin (interface de gerenciamento do PostgreSQL)
- Ubuntu Server (VMs na AWS)

## 📡 Endereçamento IPv4 e Segmentação

Rede utilizada: `192.168.0.0/24`

### Divisão em Sub-redes

| Sub-rede | Faixa IP           | Primeiro IP utilizável | Último IP utilizável | Endereço de Broadcast | Máscara de Sub-rede      |
|----------|--------------------|------------------------|----------------------|-----------------------|--------------------------|
| 1        | `192.168.0.0/27`   | `192.168.0.1`          | `192.168.0.30`       | `192.168.0.31`        | `255.255.255.224` (/27)  |
| 2        | `192.168.0.32/27`  | `192.168.0.33`         | `192.168.0.62`       | `192.168.0.63`        | `255.255.255.224` (/27)  |
| 3        | `192.168.0.64/27`  | `192.168.0.65`         | `192.168.0.94`       | `192.168.0.95`        | `255.255.255.224` (/27)  |
| 4        | `192.168.0.96/27`  | `192.168.0.97`         | `192.168.0.126`      | `192.168.0.127`       | `255.255.255.224` (/27)  |
| 5        | `192.168.0.128/27` | `192.168.0.129`        | `192.168.0.158`      | `192.168.0.159`       | `255.255.255.224` (/27)  |
| 6        | `192.168.0.160/27` | `192.168.0.161`        | `192.168.0.190`      | `192.168.0.191`       | `255.255.255.224` (/27)  |

## 🎓 Equipe e Orientação
- Disciplina: Redes de Computadores
- Professor: Jean Costa
