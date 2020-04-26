//code used from: https://www.simplecode.io/blog/create-a-rest-api-part-3-user-registration-and-validation/

//validates form fields
const validator = require('validator');
const ifEmpty = require('./checkForEmpty');

module.exports = function checkRegistrationFields(data){
    //catches errors
    let error = {};

    data.email = !ifEmpty(data.email) ? data.email : "";
    data.password = !ifEmpty(data.password) ? data.password : "";
    data.username = !ifEmpty(data.username) ? data.username : "";

    if (ifEmpty(data.email)){
        error.email = "Email is required";
    }    
    if (ifEmpty(data.email)){
        error.email = "Email address is invalid"; 
    }
    if (ifEmpty(data.password)){
        error.password = "Password is required";
    }
    if(ifEmpty(data.username)){
        error.username = "Username is required";
    }

    return {
        error,
        isValid: ifEmpty(error)
    };    
};