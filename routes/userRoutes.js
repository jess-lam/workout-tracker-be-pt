const { pool } = require('../config');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err){
            res.status(500).json(err)       
        }
        res.status(200).json(results)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
        if(err){
            res.status(500).json(err)
        }
        res.status(200).json(results)
    })
}

const createUser = (req, res) => {
    const { oauth_id, username, email, userpassword, goal, goal_startdate, goal_enddate } = res.body;
    pool.query('INSERT INTO users (oauth_id, username, email, userpassword, goal, goal_startdate, goal_enddate) VALUES ($1, $2, $3, $4, $5, $6, $7)', [oauth_id, username, email, userpassword, goal, goal_startdate, goal_enddate], (err, results) => {
        if(err){
            res.status(500).json(err)
        } 
        res.status(201).send(`User added with ID: ${results.insertId}`)
    })
}

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { email, userpassword, goal, goal_startdate, goal_enddate } = req.body;
    pool.query('UPDATE users SET email = $1, userpassword = $2, goal = $3, goal_startdate = $4, goal_enddate = $5 WHERE id = $6', [email, userpassword, goal, goal_startdate, goal_enddate, id], (err, results) => {
        if(err){
            res.status(500).json(err)
        } 
        res.status(201).send(`User modified with ID: ${id}`)
    })
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
        if(err){
            res.status(500).json(err)
        }
        res.status(200).send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
}