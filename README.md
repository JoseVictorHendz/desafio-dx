# desafio-dx



Indice
=
  * ### [Execução do projeto](#Execução-do-projeto)
  * ### [Requisitos](#Requisitos)
  * ### [Observações](#Observações)

Execução do projeto
=
* ### Rode ```yarn``` para instalar todas as dependências.
* ### Execute o seguinte comando ```yarn typeorm migration:run``` para gerar as tabelas do banco e populalo. [Arquivos que geram e populam o banco](https://github.com/JoseVictorHendz/test-dx/tree/main/src/database/migrations).
* ### Rode ```yarn dev``` para executar o projeto.

Observações
=
* ### O banco utilizado foi o postgres.
* ### Foi adicionado algunas tratamentos de erros básico.
* ### Foi implementado a verificação de token valido, porém não adicionei em nenhuma rota já que não estava nos requisitos, [aqui estão middleware de permissão do usuário](https://github.com/JoseVictorHendz/test-dx/blob/main/src/middleware/ensureAuthenticated.ts)

Requisitos
=
# Requisitos do [desafio](http://bit.ly/exerciciodevbackend)
## O sistema deve permitir a criação de usuários (clientes).
```
POST: localhost:3333/user
body: {
        "name": "josé victor",
        "email":  "jose",
        "password": "123456"
      }
```


## Logon e logoff de um usuário.
```
POST: localhost:3333/sessions/logon
body: {
        "email": "jose",
        "password": "123456"
      }
```

```
POST: localhost:3333/sessions/logout
```


## Listagem de filmes disponíveis.
```
GET: localhost:3333/film
```


## Locação de um filme.
```
POST: localhost:3333/film/rental
body: {
        "user_id": "97d1d590-78e7-483c-be0d-75e20fe25f92",
        "film_id": "de3e0ed5-261e-46cf-b5af-ad527c1341c0"
      }
```


## Devolução de um filme.
```
POST: localhost:3333/film/devolution
body: {
        "user_id": "97d1d590-78e7-483c-be0d-75e20fe25f92",
        "film_id": "de3e0ed5-261e-46cf-b5af-ad527c1341c0"
      }
```


## Pesquisa de filme pelo título.
```
GET: localhost:3333/film/end
```

