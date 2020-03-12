const express = require('express');
const router = express.Router();
const userAccess = require('../databaseAccess/userAccess')

// router.get('/', (req, res) => {
//     userAccess.getUsers()
//     .then((users) => {
//         res.status(200);
//         res.send(users);
//     })
//     .catch((err) => {
//         res.status(500);
//         res.send(err);
//     })
// })

router.get('/db', (req, res) => {
    try {
      const client = await pool.connect()
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })

module.exports = router;