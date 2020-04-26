exports.seed = function(knex, Promise) {
  return knex('workouts').insert([
  {workout_name:'Lifting', workout_description:'Full body lift', muscles:'Chest, back, quads, butt', equipment:'Barbell, plate weights'},
  {workout_name:'Spin class', workout_description:'Pelaton Marathon', muscles:'Legs', equipment:'Pelaton bike'},
  {workout_name:'Treadmill', workout_description:'Intervals', muscles:'Legs', equipment:'Treadmill'}
]);
};
