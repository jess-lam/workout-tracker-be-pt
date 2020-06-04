exports.seed = function (knex) {
  return knex('diets')
    .del()
    .then(() => {
      return knex('diets').insert([
        {
          user_id: 1,
          food_name: '6 oz Ribeye Steak, grilled',
          meal_category: 'Lunch',
          food_stats: '200 calories, 7g fat, 1g fiber, 33g protein, 1g carbs',
        },
        {
          user_id: 1,
          food_name: '1 cup carrots(12 baby carrots), raw',
          meal_category: 'Lunch',
          food_stats: '25 calories, 0g fat, 1.5g fiber, 0.5g protein, 6g carbs',
        },
        {
          user_id: 1,
          food_name: '1 cup broccoli florets, raw',
          meal_category: 'Lunch',
          food_stats:
            '31 calories, 0.4g fat, 2.4g fiber, 2.5g protein, 6g carbs',
        },
        {
          user_id: 1,
          food_name: '1 cup Plain Yogurt',
          meal_category: 'Breakfast',
          food_stats:
            '149 calories, 8g fat, 0g fiber, 8.5g protein, 11.4g carbs',
        },
        {
          user_id: 1,
          food_name: '1/2 cup granola',
          meal_category: 'Breakfast',
          food_stats:
            '195 calories, 2.9g fat, 3.5g fiber, 4.4g protein, 40.5g carbs',
        },
        {
          user_id: 1,
          food_name: '3 cups lettuce mix salad',
          meal_category: 'Dinner',
          food_stats: '27 calories, 0.4g fat, 2g fiber, 2.1g protein, 5g carbs',
        },
        {
          user_id: 1,
          food_name: '1 cup carrots(12 baby carrots), raw',
          meal_category: 'Dinner',
          food_stats: '25 calories, 0g fat, 1.5g fiber, 0.5g protein, 6g carbs',
        },
        {
          user_id: 1,
          food_name: '2 tbsp salad dressing, ranch',
          meal_category: 'Dinner',
          food_stats:
            '129 calories, 13g fat, 0g fiber, 0.4g protein, 1.8g carbs',
        },
      ]);
    });
};
