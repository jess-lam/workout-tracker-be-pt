const db = require('../../database/connection');


function getUsers() {
    return db('users');
}

async function add(user) {
    const [id] = await db("users").insert(user, "id")

    return findById(id);
}

function findById(id) {
    return db('users')
        .where({
            id
        })
        .first()
}

function updateUser(id, changes) {
    return db('users')
        .where('users.id', '=', id)
        .update(changes)
}

function deleteUser(id) {
    return db('users')
        .where({
            id
        })
        .first()
        .del()
}

function findBy(filter) {
    return db('users')
        .where(filter);
}

function getWorkoutsByUser(id) {
    return db('users')
        .join('workouts', 'users.id', '=', 'workouts.user_id')
        .where('users.id', '=', id)
        .select(
            'workouts.workout_category',
            'workouts.workout_title',
            'workouts.workout_date',
            'workouts.workout_start_time',
            'workouts.workout_end_time',
            'workouts.workout_description',
            'workouts.completed',
        )
}

async function addWorkout(workout) {
    console.log(workout);
    await db('workouts').insert(workout)

    return 1;
}

async function editWorkout(workout, id) {
    const res = await db('workouts').where('workouts.id', '=', id)
        .where('workouts.user_id', '=', workout.user_id)
        .update(workout)

    return db('workouts').where('workouts.id', '=', id)
}

function deleteWorkout(userId, id) {
    return db('workouts').where('workouts.id', '=', id)
        .where('workouts.user_id', '=', userId)
        .del()
}


module.exports = {
    getUsers,
    add,
    findById,
    updateUser,
    deleteUser,
    findBy,
    getWorkoutsByUser,
    addWorkout,
    editWorkout,
    deleteWorkout
}