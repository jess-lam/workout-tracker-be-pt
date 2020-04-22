exports.seed = function(knex, Promise) {
  return knex('workouts').insert([
  {id: 1, workout_name:'Lifting', workout_description:'Full body lift', muscles:'Chest, back, quads, butt', equipment:'Barbell, plate weights'},
  {id: 2, workout_name:'Spin class', workout_description:'Pelaton Marathon', muscles:'Legs', equipment:'Pelaton bike'},
  {id: 3, workout_name:'Treadmill', workout_description:'Intervals', muscles:'Legs', equipment:'Treadmill'}
]);
};
