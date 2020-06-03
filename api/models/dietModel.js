const db = require('../../database/connection');

module.exports = {
  add,
  findBy,
  getAll,
  update,
  remove,
};

function add(diet) {
  return db('diets').insert(diet).returning('*');
}

function findBy(id) {
  return db('diets').where(id);
}

function getAll() {
  return db('diets');
}

function update(changes, id) {
  return db('diets').where({ id }).update(changes).returning('*');
}

function remove(id) {
  return db('diets').where({ id }).del();
}
