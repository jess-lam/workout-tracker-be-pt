// const server = require('./server/server');
const express = require('express');
const bodyParser = require('body-parser');
const server = express();


server.use(bodyParser.json());

server.use(
    bodyParser.urlencoded({
        extended: true
    })
);

const userDB = require('./routes/userRoutes');

server.get('/', (req, res) => {
    res.json({
        info: 'Server is working as expected'
    })
});

server.get('/users', userDB.getUsers);

server.listen(process.env.DB_PORT || 3001, () => {
    console.log("***Server is listening***");
})

