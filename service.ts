//this (request) is an object
import request from 'request-promise-native';

export class Service{

    findCollegueByName(nameToFind:string):Promise<any>{

        return request(`https://hayot-collegues-api.herokuapp.com/collegues?name=${nameToFind}`, { json: true })
            .then((tabMatricules:Array<string>) => {
                const tabPromise:Array<any>  = tabMatricules.map((matricule:string) => request(`https://hayot-collegues-api.herokuapp.com/collegues/${matricule}`, {
                    json: true
                }));
                //sends a promise that contains a tab of promises
                return Promise.all(tabPromise);
            });
   
    }

}