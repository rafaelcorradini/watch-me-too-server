Watch me too API

https://watchmetoo.rafaelcdacunha.com.br/

## Installation

1. You need `Node.js` (at least 10.x version) installed on your machine, if you don't have it, you should install it.
2. Install necessary dependencies:
    - **Via node `npm` package manager** - Run `npm install` on the project root

## Configuration for PostgreSQL database

##### Via Docker

1. Install **Docker** on your machine
2. Run `docker-compose up -d` in a terminal on the project root. This will start 3 containers:
    - database(PostgreSQL) container;

##### Via another chosen solution.

1. Install your **PostgreSQL** database
3. Change connection configuration, from your root `cd` to `env-files` folder and change the following configurations with your own:

###### **For PostgreSQL connection:**
1. Database connection via URL
```bash
DATABASE_URL=http://watchmetoo_db:watchmetoo_db@127.0.0.1:5432/watchmetoo_db
# Example: DATABASE_URL=http://<user>:<password>@<host>/<database_name>
```
2. Database connection via credentials
```bash
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=watchmetoo_db
DATABASE_USER=watchmetoo_db
DATABASE_PASSWORD=watchmetoo_db
```

## Migrations and seeds

1. For database tables structure, in the project root run: `npm run knex migrate:latest`
2. To create a default user, run: `npm run knex seed:run`

## Run the application

1. For starting the application, the following script (defined in `package.json` under `scripts`) must be called:
    - via **npm**: `npm run start` or `npm run dev` for starting the development environment, which has livereload enabled;
