const ifEmpty = field => {
    try {
        let results = false;
        if(field !== undefined || field !== null )
        results = true;      
        return results;  
    } catch(error){
        return error;
    }
};

module.exports = ifEmpty;