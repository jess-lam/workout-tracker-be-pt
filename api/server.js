const express = require('express');

const apiRouter = require('./api-router');

const server = express();


//Routes
server.use('/api', apiRouter);

//Main Route
server.get('/', (req, res) => {
    res.status(200).send({message: "Server is live"})
});

module.exports = server;