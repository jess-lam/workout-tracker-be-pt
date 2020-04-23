const db = require('../../connection');


function getUsers(){
   return db('users');
}

function getUserById(id){
    return db('users')
        .where({id})
        
}

function updateUser(id, changes){
        db('users')
        .where({ id })
        .update(changes)

        const changedUser = getUserById({ id });
        return changedUser;
}

function deleteUser(id){
    return db('users')
        .where({id})
        .del()
}


    module.exports = {
        getUsers,
        getUserById,
        updateUser,
        deleteUser,
        // userLogin
    }