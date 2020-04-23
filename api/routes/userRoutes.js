//some code comes from: https://www.simplecode.io/blog/create-a-rest-api-part-3-user-registration-and-validation/

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkRegistrationFields = require('../../validation/register');
const database = require('../../connection');
//import model
const Users = require('../models/userModel');


//create user
//not sure how to split it up into a model/route
router.post('/register', (req, res) => {
    //res.send({message: 'IT LIVES!!'})
    //validates form fields
    const { error, isValid } = checkRegistrationFields(req.body);

    //return 400 error if entries are invalid
    if (!isValid){
        return res.status(400).json(error);
    }

    //hash password
    bcrypt.genSalt(8, (err, salt) => {
        if(err) throw err;
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            if(err) throw err;
            database('users')
            .returning(['id', 'email', 'username'])
            .insert({
                oauth_id: req.body.oauth_id,
                username: req.body.username,
                email: req.body.email,
                password: hash,
                goal: req.body.goal,
                goal_startdate: req.body.goal_startdate,
                goal_enddate : req.body.goal_enddate
            })
            .then(user => {
                res.status(200).json(user[0]);
            })
            .catch(err => {
                res.status(500).json({
                    message: "Failed to create new user."
                });
            });
        });  
    });
});

router.get('/org', (req, res) => {
    Users.getUsers()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to retrieve users"
            });
        });
});

router.get('/:userId', (req, res) => {
    const { userId }= req.params;
    Users.getUserById(userId)
        .then(users => {
            const user = users[0];
            if(user){
                res.status(200).json(user);
            } else {
                res.status(404).json({
                    message: 'Could not find user with given id.'
                });
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Failed to get user'
            });
        });
});

router.put('/:userId', (req, res) => {
    const updatedUser = req.body;
   Users.updateUser(req.params.id, updatedUser)
        .then(user => {
            if(user) {
                res.status(200).json(user);
            } else {
                res.status(404).json({
                    message: 'Could not find user with given id'
                });
            }
        })
        .catch(err => {
            
            res.status(500).json({
                message: err
            });
        });
});

router.delete('/:userId', (req, res) => {
    const { userId } = req.params;
        Users.deleteUser(userId)
        .then(user => {
            res.status(200).json({
                message: 'User deleted'
            })
        })
        .catch(err => {
            res.status(500).json({err})
        })
})

module.exports = router;