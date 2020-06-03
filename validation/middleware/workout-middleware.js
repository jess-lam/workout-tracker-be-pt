const workoutRegistration = require('../workout');

module.exports = (req, res, next) =>{
    console.log(req.body)
    const workout = req.body
    const { error, isValid } = workoutRegistration(workout);

    //return 400 error if entries are invalid
    if(isValid){
        res.status(400).json(error);
    } else {
        next();
    }
}