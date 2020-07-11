exports.seed = function (knex) {
    return knex('mealplans')
      .del()
      .then(() => {
        return knex('mealplans').insert([
            { 
                mealplan_title: "Monday Lunch",
                user_id: 1, 
                entity_id: 16
            },
            { 
                mealplan_title: "Monday Breakfast",
                user_id: 1,
                entity_id: 17
            },
            {
                mealplan_title: "Monday Dinner",
                user_id: 1,
                entity_id: 18
            }
        ]);
    });
};