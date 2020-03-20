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

//Postgres user routes
server.get('/users', userDB.getUsers);
server.get('/users/:id', userDB.getUserById);
server.post('/users', userDB.createUser);
server.put('/users/:id', userDB.updateUser);
server.delete('/users/:id', userDB.deleteUser);

server.listen(PORT, () => {
    console.log("***Server is listening***");
})

