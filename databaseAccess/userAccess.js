const knex = require("knex");
const config = require("../knexfile");
const db = knex(config.production);

module.exports = {
    getUsers
}

function getUsers(){
    return db("test_table");
}
