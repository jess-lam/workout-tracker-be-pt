const email = /^\S+@\S+\.\S+$/
const checkDate = /(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/
const checkTime = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/

module.exports = {
    email,
    checkDate,
    checkTime
};