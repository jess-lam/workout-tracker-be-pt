
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.text('oauth_id').unique();
      tbl.text('username').unique().notNullable();
      tbl.text('email').unique().notNullable();
      tbl.text('password').notNullable();
      tbl.text('goal');
      tbl.date('goal_startdate');
      tbl.date('goal_enddate');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
