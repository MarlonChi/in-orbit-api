## in.orbit 🚀

API do in.orbit, sistema para o usuário criar e gerenciar metas pessoais por semana.

### Rotas
GET -> /pending-goals (Busca metas que o usuário ainda não finalizou)

GET -> /summary (Busca metas que o usuário já cumpriu)

POST -> /completions (Completa determinada meta passando o ID)
{
    goalId
}

POST -> /goals (Cria uma nova meta)
{ 
    title, 
    desiredWeeklyFrequency 
}

### Tech Stack
- node
- typescript
- fastify
- @biomejs/biome
- drizzle-kit
- postgres
- zod
- docker

### Executando o projeto

Requisitos: 
- Docker

``` docker compose up ```
``` npx drizzle-kit generate ```
``` npx drizzle-kit migrate ```
``` npm run dev ```