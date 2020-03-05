const server = require('./api/server');

let port = process.env.PORT || 4000;

server.listen(port, () => {
    console.log("***Server is listening on http://localhost:4000 ***");
})