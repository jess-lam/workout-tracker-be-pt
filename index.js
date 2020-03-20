const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const PORT = process.env.PORT || 3000;

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

server.listen(PORT, () => {
    console.log("***Server is listening***");
})
