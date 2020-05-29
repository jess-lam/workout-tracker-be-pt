const knex = require('knex');
const config = require('../knexfile');
const environment = process.env.DB_ENV || 'development';
console.log(process.env.DB_ENV);
module.exports = knex(config[environment]);
