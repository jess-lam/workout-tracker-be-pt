const { pool } = require('../config');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err){
            res.status(500).json(err)       
        }
        res.status(200).json(results)
    })
}

module.exports = {
    getUsers
}