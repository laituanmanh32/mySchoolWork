## Technology Stack
+ NodeJS
+ Express 4.x
+ Postgres 9.x
+ Typescript 2.x
+ Socket.IO 1.7.x

## How to run
+ `npm install` (`sudo npm install` if linux/osx)
+ `gulp` to test if runable or not
+ `node dist/server` to run server, or
+ `nodemon dist/server` to run & watch


## How to use
+ Modify `config.json` for server config, ex: server port

## Easiest way to run Postgres
+ Using docker:

```
docker run --name pgd \
-e POSTGRES_PASSWORD=yourpassword \
-p 5432:5432 \
-d mdillon/postgis
```

Happy Coding
