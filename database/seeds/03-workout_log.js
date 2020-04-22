
exports.seed = function(knex, Promise) {
        return knex('workout_log').insert([
        {id: 1, date_set:'2020-04-21', time_set:'15:30:28', muscles:'Full body', equipment: true, user_id:1, workouts_id:1},
        {id: 2, date_set:'2020-04-21', time_set:'17:00:00', muscles:'Legs', equipment:true, user_id:2, workouts_id:2},
        {id: 3, date_set:'2020-04-21', time_set:'17:45:15', muscles:'Legs', equipment:true, user_id:3, workouts_id:3}
      ]);
  };


