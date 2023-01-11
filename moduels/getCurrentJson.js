const fs = require('fs');


const getSpecificPerson = (id) => {
    let data = fs.readFileSync("./contacts/contacts.json", "utf8", (err, jsonData) => {
        if (err) {
            console.error(err);
            return
        }  
        return JSON.parse(jsonData) ;      
    });

    return JSON.parse(data)[id];
}

module.exports = getSpecificPerson;
