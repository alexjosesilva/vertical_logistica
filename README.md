[![Latest Version](https://img.shields.io/github/v/release/alexjosesilva/crm_postogasolinas_Logus_mvc?include_prereleases)](https://github.com/alexjosesilva/crm_postogasolinas_Logus_mvc/releases/tag/1.0)
[![License](https://img.shields.io/github/license/alexjosesilva/logus-microservice-gas-station)]([https://github.com/seu-usuario/seu-repositorio/blob/master/LICENSE](https://github.com/alexjosesilva/logus-microservice-gas-station/blob/master/LICENSE))


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
4. Use um cliente HTTP (ex: Postman) para testar os endpoints.

## Endpoints
- `POST /upload` - Envia um arquivo de pedidos desnormalizado.
- `GET /orders` - Consulta os pedidos transformados.

## Estructura do Projects

```
/controllers
  - ordersController.js
  - uploadController.js
/routes
  - orders.js
  - upload.js
/services
  - orderService.js
  - uploadService.js
/utils
  - parseLegacyFile.js
  - transformOrders.js
index.js
```