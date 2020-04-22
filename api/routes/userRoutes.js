//import express
const express = require('express');

//import router middleware
const router = express.Router();

router.get('/', (req, res) => {
    res.send({message: 'IT LIVES!!'})
})

//export router
module.exports = router;