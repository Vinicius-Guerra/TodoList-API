# Documentação da TodoList-API

 API para gerenciar uma lista de Todos(noticias)
## Tabela de Conteúdos
* Visão Geral
* Arquitetura
* Endpoints

# 1. Visão Geral
Visão geral do projeto, um pouco das tecnologias usadas.
* NodeJS
* Express
* TypeScript
* Zod

# 2. Arquitetura
  - Controller + Services, Interfaces, Routes, middlewares + errors, database(fake);

# 3. Endpoints
## Indice
* TodoList
  * Post - /cars (Criação de uma noticia)
  * Get = /cars (Leitura de todas as noticias)
  * Get - /cars/:id (Criação de uma noticia especifica)
  * Delete - /cars/:id (Apagar uma noticia)
  * Patch - /cars/:id (Editar uma noticia)

 # 1. Cars
O objeto TodoList é definido como:
```json
  {
    "id": number,
    "title": string,
    "content": string,
    "createdAt": date,
    "updatedAt": date
  }
```

## Rotas
### 1.1 Criação de Noticias POST /todos
### Title e contente são campos obrigatórios
Padrão de corpo
```json
  {
     "title": "Exemplo 1",
     "content": "lorem ipsum",
  }
```

Padrão de resposta:
```json
  {
     "id": 1,
     "title": "Exemplo 1",
     "content": "lorem ipsum",
     "createdAt": "2023-10-06T13:14:21.752Z",
     "updatedAt": "2023-10-06T13:14:21.752Z"
  }
```

### 1.2 Leitura de Noticias GET /todos
### Possível parâmetros de busca (searchParams)
Padrão de resposta:
```json
[
   {
      "id": 1,
      "title": "Exemplo 1",
      "content": "lorem ipsum",
      "createdAt": "2023-10-06T13:14:21.752Z",
      "updatedAt": "2023-10-06T13:14:21.752Z"
   }
]
```

### Leitura de Noticia individual GET /todos/:id
Padrão de Resposta:
```json
{
   "id": 1,
   "title": "Exemplo 1",
   "content": "lorem ipsum",
   "createdAt": "2023-10-06T13:14:21.752Z",
   "updatedAt": "2023-10-06T13:14:21.752Z"
}
```
Possiveis erros:
### Noticia não encontrada 404
```json
{
   "error": "Todo not found."
}
```

### 1.3 Exclusão de carros DELETE /todos/:id
Está rota não precisa de corpo e não tem um objeto de resposta.
Possíveis erros:
### Noticia não encontrada 404
```json
{
    "error": "Todo not found."
}
```

### 1.4 Atualização de noticias PATCH /todos/:id
Padrão de corpo:
```json
{
  "title": "Exemplo 1",
  "content": "lorem ipsum",
}
```
* Todos os campos desta rota são opcionais

  Padrão de resposta:
```json
{
   "id": 1,
   "title": "Exemplo 1",
   "content": "lorem ipsum",
   "createdAt": "2023-10-06T13:14:21.752Z",
   "updatedAt": "2023-10-07T13:14:21.752Z"
}
```

Possíveis erros:
### Noticia não encontrada 404
```json
{
    "error": "Todo not found."
}
```
