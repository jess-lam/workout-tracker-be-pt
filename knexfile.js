// Update with your config settings.
require('dotenv').config()
const types = require('pg').types;
types.setTypeParser(1082, val => val);

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'postgres',
      password: `${process.env.DB_LOCALPASSWORD}`,
      database: 'postgres'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  },
  testing: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: `${process.env.DB_TESTNAME}`,
      password: `${process.env.DB_LOCALPASSWORD}`,
      database: 'test'
    },
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}`,
    migrations: {
      directory: './database/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    useNullAsDefault: true
  }
};
