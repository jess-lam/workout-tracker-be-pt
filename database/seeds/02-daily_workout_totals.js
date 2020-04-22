
exports.seed = function(knex, Promise) {

      // Inserts seed entries
      return knex('daily_workout_totals').insert([
        {id: 1, workout_date:'2020-04-21', workout_starttime:'15:30:28', workout_endtime:'16:02:54', user_id:1},
        {id: 2, workout_date:'2020-04-21', workout_starttime:'17:00:00', workout_endtime:'15:35:45', user_id:2},
        {id: 3, workout_date:'2020-04-21', workout_starttime:'17:45:15', workout_endtime:'18:25:13', user_id:3}
      ]);
};
