const db = require('../../database/connection');

module.exports = {
  add,
  findBy,
  getAll,
  update,
  remove,
};

function add(diet) {
  return db('diets').insert(diet);
}

function findBy(id) {
  return db('diets').where(id);
}

function getAll() {
  return db('diets');
}

function update(changes, id) {
  return db('diets').where({ id }).update(changes);
}

function remove(id) {
  return db('user').where({ id }).del();
}
