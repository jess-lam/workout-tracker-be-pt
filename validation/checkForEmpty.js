const ifEmpty = field => {
    try {
        let results = true;
        if( 
            !field || 
            isStringEmpty(field) || 
            isObjEmpty(field)
        )
        results = false;      
        return results;  
    } catch(error){
        return error;
    }
};

function isStringEmpty(str){
    return typeof str === "string" && str.trim().length === 0
}

function isObjEmpty(obj){
    return typeof obj === "object" && Object.keys(obj).length === 0;
}

module.exports = ifEmpty;