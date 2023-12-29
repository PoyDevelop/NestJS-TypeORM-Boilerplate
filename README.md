## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

# command

```
npm install
npm start
npm install --save @nestjs/typeorm typeorm mysql2
npm install --save @nestjs/config
npm install --save bcryptjs
npm install --save class-validator class-transformer
npm install --save passport-local
npm install --save @nestjs/passport passport
npm install --save @nestjs/jwt passport-jwt
npm install --save-dev @types/passport-jwt
```

#### Command

```
nest --version
npm i -g npm-check-updates
npm run start
npm install --save @nestjs/typeorm typeorm mysql2
npm install typeorm -g
npm i bcrypt
npm i -D @types/bcrypt
```

#### Generate Resource

```
nest g resource user --no-spec
nest g resource auth --no-spec

```

```
npm run migration:generate -- db/migrations/users_create
npm run migration:generate -- db/migrations/options_create
```

## หลัง generate ลบ FK กับ INDEX

#### run migration

```
npm run migration:run
docker compose exec api npm run migration:run
```

#### Seed create

```
npm run migration:create -- db/migrations/users
typeorm migration:create db/migrations/permission_seed
typeorm migration:create db/migrations/role_seed
typeorm migration:create db/migrations/option_seed
```

#### pm2

```
yarn build
pm2 start dist/src/main.js --name dmc-api
pm2 start dist/main.js --name <application_name>
pm2 startup systemd
pm2 save


```
