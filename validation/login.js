//code from https://www.simplecode.io/blog/create-a-rest-api-part-6-user-login-jwt-authentication/

const Validator = require('validator');
const ifEmpty = require('./checkForEmpty');

module.exports = function validateLoginInput(data){
    let errors = {};

    data.email = !ifEmpty(data.email) ? data.email : "";
    data.password = !ifEmpty(data.password) ? data.password : "";

    if(!Validator.isEmail(data.email)){
        errors.email = "Invalid Email";
    }

    if(ifEmpty(data.email)){
        errors.email = data;
    }

    if(ifEmpty(data.password)){
        errors.password = errors
    }

    return{
        errors,
        isValid: ifEmpty(errors)
    };
};