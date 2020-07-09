const db = require('../../database/connection');

module.exports = {
    getAll,
    getMealplan,
    // addMealplan,
    // addDietToMealplan,
    // editMealplan,
    // deleteMealplan,
    // deleteDietInMealplan
}
async function getMealplans(user_id){
    const mealplans = await db('meal_plan')
        .where('meal_plan.user_id', user_id)
    // returns a promise that way routines[index].workouts isnt undefined in the return statement later then
    // and maps through the routines array to get every workout associated with said routines and
    // then sets routines index to the array of workouts 
    await Promise.all(mealplans.map(async (item, index) => { 
            mealplans[index].diets = await db('meal_plan')
                .where('meal_plan.user_id', item.user_id)
                .where('meal_plan.id', item.id)
                .innerJoin('diet_connector', 'diet_connector.meal_plan_id', 'meal_plan.id' )
                .innerJoin('diets', 'diets.id', 'diet_connector.diets_id')
                .select(
                    'diets.id',
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
                    'diets.food_fiber',
                    'diets.meal_notes'
                )
        }));
    
    return {...mealplans}
}

async function getMealplan(id, user_id){
    const diets = await db('meal_plan')
        .where('meal_plan.user_id', user_id)
        .where('meal_plan.id', id)
        .innerJoin('diet_connector', 'diet_connector.meal_plan_id', 'meal_plan.id' )
        .innerJoin('diets', 'diets.id', 'diet_connector.diets_id')
        .select(
            'diets.id',
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
            'diets.food_fiber',
            'diets.meal_notes'
        )

    const mealplan = {};
    
    const mealplan_title = await db('meal_plan')
        .where('meal_plan.user_id', user_id)
        .where('meal_plan.id', id)
        .select('meal_plan.meal_plan_title')

    mealplan.title = mealplan_title[0].mealplan_title
    
    mealplan.diets = diets;

    return mealplan;
}

// async function addRoutine(routine){
//     const [entity] = await db('entity').insert({user_id: routine.user_id}, 'id');
//     const [id] = await db('routines').insert({...routine, entity_id: entity}, 'id')

//     return db('routines').where('routines.id', '=', id);
// }

// async function addWorkoutToRoutine(connection, user_id){
//     await db('connector').insert(connection)
    
//     return getRoutine(connection.routines_id, user_id);
// }

// async function editRoutine(id, routine){
//     await db('routines').where('routines.user_id', '=', routine.user_id).where('routines.id', '=', id).update(routine)

//     return db('routines').where('routines.id', '=', id);
// }

// function deleteRoutine(id, user_id){
//     return db('routines').where('routines.id', '=', id).where('routines.user_id', '=', user_id).del();
// }

// async function deleteWorkoutInRoutine(id, user_id, workout_id){
//     const isvalid = await db('routines').where('routines.user_id', '=', user_id).where('routines.id', '=', id)
    
//     if(isvalid[0]){
//         return db('connector').where('connector.routines_id', '=', id).where('connector.workout_id', '=', workout_id).del()
//     } else {
//         return "not valid user id for specific workout"
//     }
// }

