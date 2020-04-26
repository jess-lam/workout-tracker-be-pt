//code used from: https://www.simplecode.io/blog/create-a-rest-api-part-3-user-registration-and-validation/


const ifEmpty = field => {
    try {
        let results = false;

        if(
            field === undefined || field === null || 
            (typeof field === "string" && field.trim().length === 0) || 
            (typeof field === "object" && Object.keys(field).length === 0)
        )
        results = true;
        return results;        
    } catch(error){
        return error;
    }
};

module.exports = ifEmpty;