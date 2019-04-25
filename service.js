//this (request) is an object
let request = require('request-promise-native');


module.exports = class Service{

    findCollegueByName(nameToFind) {

        return request(`https://hayot-collegues-api.herokuapp.com/collegues?name=${nameToFind}`, { json: true })
            .then(tabMatricules => {
                const tabPromise = tabMatricules.map(matricule => request(`https://hayot-collegues-api.herokuapp.com/collegues/${matricule}`, {
                    json: true
                }));
                //sends a promise that contains a tab of promises
                return Promise.all(tabPromise);
            });
   
    }

}