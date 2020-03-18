// const express = require('express');
// const router = express.Router;
const { pool } = require('../config');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err){
            res.status(500).json(err)       
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers
}