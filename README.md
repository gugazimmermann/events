# Events

## How to install

* `npm install`

### Database

This project uses MySQL with Sequelize.

Database commands:

* `db:start:dev`
* `db:start:test`
* `db:start:prod`
* `db:stop:dev`
* `db:stop:test`
* `db:stop:prod`

Sequelize commands, need to run inside `packages/server/api/src/`

* `npx sequelize-cli model:generate --name TABLE_NAME --attributes ATTRIBUTE_NAME:ATTRIBUTE_TYPE,ATTRIBUTE_NAME:ATTRIBUTE_TYPE`
* `npx sequelize-cli db:migrate`
* `npx sequelize-cli seed:generate --name SEED_NAME`
* `npx sequelize-cli db:seed:all`

### API

commands:

* `api:start:dev`
* `api:start:test`
* `api:start:prod`
