require('dotenv').config({
  path: `../env-files/${process.env.NODE_ENV || 'development'}.env`,
});

const Knex = require('knex');
const knexStringcase = require('knex-stringcase');
const knexConfig = require('./knexfile');

const knex = Knex(knexStringcase(knexConfig[process.env.NODE_ENV || 'development']));

module.exports = knex;
