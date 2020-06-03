const {checkDate, checkTime} = require('./regex');
const ifEmpty = require('./checkForEmpty');

module.exports = function checkRegistrationFields(workout){
    //catches errors
    let error = {};

    /*expected data 
        workout_category
        workout_title
        workout_date
        workout_start_time
        workout_end_time
        workout_description
        completed
    */

    let data = {...workout}

    data.workout_category = ifEmpty(data.workout_category) ? data.workout_category : "";
    data.workout_title = ifEmpty(data.workout_title) ? data.workout_title : "";
    data.workout_date = ifEmpty(data.workout_date) ? data.workout_date : "";
    data.workout_start_time = ifEmpty(data.workout_start_time) ? data.workout_start_time : "";
    data.workout_end_time = ifEmpty(data.workout_end_time) ? data.workout_end_time : "";
    data.workout_description = ifEmpty(data.workout_description) ? data.workout_description : "";

    if ( data.workout_category = "" )
        error.workout_category = "Category is required";
    if ( data.workout_title = "" )
        error.workout_title = "Title is required"
    if ( !checkDate.test( data.workout_date ) )
        error.workout_date = "date is invalid"
    if ( !checkTime.test( data.workout_start_time ) )
        error.workout_start_time = "start time is invalid"
    if ( !checkTime.test( data.workout_end_time ))
        error.workout_end_time = "Workout End time is invalid"
    if ( data.workout_description = "")
        error.workout_description = "Workout Description is invalid"

    return {
        error,
        isValid: ifEmpty(error)
    };    
};