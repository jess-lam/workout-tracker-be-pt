const express = require('express');
const router = express.Router();
const workoutMiddleware = require('../../validation/middleware/workout-middleware');

//import model
const Users = require('../models/userModel');

router.get('/', (req, res) =>{
    const id = req.userId;
    
    Users.getWorkoutsByUser(id)
        .then(blah =>{
            res.status(200).json({message: blah})
        })
        .catch(err =>{
            res.status(500).json({message: err})
        })
})

router.post('/', workoutMiddleware, (req, res) =>{
    const workout = req.body;
    workout.user_id = req.userId;

    Users.addWorkout(workout)
        .then(work =>{
            res.status(200).json({message: work})  
        })
        .catch(err =>{
            console.log(err);
            res.status(500).json({message: err})
        })
})

router.put('/:id', (req, res) =>{
    const workout = req.body;
    const id = req.params.id
    workout.user_id = req.userId;

    Users.editWorkout(workout, id)
        .then(work =>{
            res.status(200).json({message: work})
        })
        .catch(err =>{
            res.status(500).json({message: err})
        })
})

router.delete('/:id', (req, res) =>{
    const id = req.params.id
    const user_id = req.userId;

    Users.deleteWorkout(user_id, id)
        .then(work =>{
            res.status(200).json({message: work})
        })
        .catch(err =>{
            res.status(500).json({message: err})
        })
})

module.exports = router;