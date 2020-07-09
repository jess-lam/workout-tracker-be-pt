const express = require('express')
const router = express.Router()

const Mealplans = require('../models/mealplanModel')

// Get a list of existing meal plans by user
router.get('/', (req, res) => {
    const id = req.userId;

    Mealplans.getAll(id)
        .then(meal => {
            res.status(200).json(meal)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Could not retrieve mealplan', err })
        })
})

// Get a meal plan by id
router.get('/:id', (req, res) => {
    const { id } = req.params

    Mealplans.findById(id)
        .then(meal => {
            if(meal) {
                res.json(meal)
            }else {
                res.status(404).json({ message: 'Could not find this meal plan id'})
            }
        })
        .catch(err => {
            res.status(500).json({ message: 'Could not retrieve this meal plan', err })
        })
})