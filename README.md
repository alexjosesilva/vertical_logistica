[![Latest Version](https://img.shields.io/github/v/release/alexjosesilva/crm_postogasolinas_Logus_mvc?include_prereleases)](https://github.com/alexjosesilva/crm_postogasolinas_Logus_mvc/releases/tag/1.0)
[![License](https://img.shields.io/github/license/alexjosesilva/logus-microservice-gas-station)]([https://github.com/seu-usuario/seu-repositorio/blob/master/LICENSE](https://github.com/alexjosesilva/logus-microservice-gas-station/blob/master/LICENSE))
[![codecov](https://codecov.io/gh/alexjosesilva/vertical_logistica/graph/badge.svg?token=Q9WCDX6DA6)](https://codecov.io/gh/alexjosesilva/vertical_logistica)
![Contribuidores](https://img.shields.io/github/contributors/alexjosesilva/vertical_logistica)
![Último commit](https://img.shields.io/github/last-commit/alexjosesilva/vertical_logistica)
![Docker Image Build](https://github.com/alexjosesilva/vertical_logistica/actions/workflows/docker-image.yml/badge.svg)

# Projeto de Software para Realizar a integração entre dois Sistemas

Este é um projeto de software desenvolvido parar realizar a comunicação entre dois sistemas um legado e outro em tecnologia emergente, utilizando a arquitetura SOA(Orientado a Servicos) e seguindo a implementação de APIs RestFul. O sistema legado que possui um arquivo de
pedidos desnormalizado, precisamos transformá-lo em um arquivo json normalizado.

## Funcionalidades

O software oferece as seguintes funcionalidades:
 - O sistema recebe um arquivo via API REST e processa-o para ser retornado via API REST (JSON format)

 ## Tecnologias Utilizadas
- Node.js
- Express
- Multer

## Como Executar
1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute a aplicação: `node index.js`
4. Para testar a API, use ferramentas como Postman para enviar um arquivo para /api/orders/upload e consultar dados em /api/orders.

## Endpoints
- `POST http://localhost:3001/api/orders/upload` - Envia um arquivo de pedidos desnormalizado.
- `GET http://localhost:3001/api/orders` - Consulta os pedidos transformados.

## Estructura do Projects

```
project-root/
│
├── src/
│   ├── controllers/
│   │   └── orderController.js
│   ├── services/
│   │   └── orderService.js
│   ├── utils/
│   │   └── fileHandler.js
│   ├── routes/
│   │   └── orderRoutes.js
│   ├── models/
│   │   └── orderModel.js
│   └── index.js
│
├── test/
│   ├── orderService.test.js
│
├── uploads/
│   └── (Uploaded files)
│
├── .gitignore
├── package.json
└── README.md
```
