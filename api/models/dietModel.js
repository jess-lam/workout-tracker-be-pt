const db = require('../../database/connection');

module.exports = {
  add,
  getAll,
  update,
  remove,
};

function add(food) {
  return db('diets').insert(food);
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
