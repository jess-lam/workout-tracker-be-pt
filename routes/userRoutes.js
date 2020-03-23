const { pool } = require('../config');

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (err, results) => {
        if (err){
            res.status(500).json(err)       
        }
        res.status(200).json(results.rows)
    })
}

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
        if(err){
            res.status(500).json(err)
        }
        res.status(200).json(results.rows)
    })
}

const createUser = (req, res) => {
    const id = parseInt(req.params.id);
      const data = {
        oauth_id: req.body.oauth_id,
         username: req.body.username,
         email: req.body.email,
         userpassword: req.body.userpassword,
         goal: req.body.goal,
         goal_startdate: req.body.goal_startdate,
         goal_enddate : req.body.goal_enddate
        };
        
        const values = [
            data.oauth_id,
            data.email,
            data.username,
            data.userpassword,
            data.goal,
            data.goal_startdate,
            data.goal_enddate
        ];
        
    pool.query('INSERT INTO users (oauth_id, username, email, userpassword, goal, goal_startdate, goal_enddate) VALUES ($1, $2, $3, $4, $5, $6, $7)',  values, (err, results) => {
        if(err){
            res.status(500).json(err)
        } 
        res.status(201).send(`User added with ID: ${id}`)
    })
}

const updateUser = (req, res) => {
      
    pool.query('UPDATE users SET email = $1, userpassword = $2, goal = $3, goal_startdate = $4, goal_enddate = $5 WHERE id = $6', [req.body.email, req.body.userpassword, req.body.goal, req.body.goal_startdate, req.body.goal_enddate, parseInt(req.params.id)], (err, results) => {
        if(err){
            res.status(500).json(err)
        } 
        res.status(201).send(`User modified with ID: ${id}`)
    })
}

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM users WHERE id = $1', id, (err, results) => {
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