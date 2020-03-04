const express = require('express');
const router = express.Router();
const userAccess = require('../databaseAccess/userAccess')

router.get('/', (req, res) => {
    userAccess.getUsers()
    .then((users) => {
        res.status(200);
        res.send(users);
    })
    .catch((err) => {
        res.status(500);
        res.send(err);
    })
})

module.exports = router;