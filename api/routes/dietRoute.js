const express = require('express');

const Diet = require('../models/dietModel');
const restricted = require('../../validation/middleware/restricted-middlware');
const router = express.Router();

// Get a list of diet foods
router.get('/', (req, res) => {
  Diet.getAll()
    .then((diet) => {
      res.status(200).json(diet);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Could not retrieve diet', err });
    });
});

// Add a diet food entry
router.post('/', restricted, (req, res) => {
  const dietData = req.body;
  dietData.user_id = req.userId;

  Diet.add(dietData)
    .then((diet) => {
      res.status(201).json(diet);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Could not add a new food entry', err });
    });
});

// Update a diet food entry
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Diet.findBy(id, changes)
    .then((food) => {
      if (food) {
        res.status(200).json(food);
      } else {
        res.status(404).json({ message: 'Could not find a matching entry' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Could not update this entry', err });
    });
});

// Delete a diet food entry
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const user_id = req.userId;

  Diet.remove(user_id, id)
    .then((deleted) => {
      res.json({ removed: deleted });
    })
    .catch((err) => {
      res.status(500).json({ message: 'Could not remove this entry', err });
    });
});

module.exports = router;
