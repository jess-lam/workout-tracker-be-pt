const db = require('../../database/connection');

module.exports = {
  add,
  findById,
  getAll,
  update,
  remove,
};

function add(diet) {
  return db('diets').insert(diet).returning('*');
}

function findById(id) {
  return db('diets').where({ id }).first();
}

function getAll(id) {
  return db('diets')
    .join('users', 'users.id', 'diets.user_id')
    .select( 
      'diets.id',
      'diets.user_id',
      'diets.meal_date',
      'diets.meal_time',
      'diets.meal_category',
      'diets.food_name',
      'diets.food_quantity',
      'diets.food_measure',
      'diets.food_calories',
      'diets.food_fat',
      'diets.food_protein',
      'diets.food_carbs',
      'diets.food_fiber'
      )
    .from('diets')
    .where('diets.user_id', id)
}

function update(changes, id) {
  return db('diets').where({ id }).update(changes).returning('*');
}

function remove(id) {
  return db('diets').where({ id }).del();
}
