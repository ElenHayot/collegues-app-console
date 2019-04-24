var request = require('request');

function findCollegueByName(nameToFind, callback){

    request('https://hayot-collegues-api.herokuapp.com/collegues?name='+nameToFind, {json:true}, function(err, res, body){
        
    if(res.statusCode >= 400 && res.statusCode < 600) {
        //send error if no match
        var errorMessage = res.body;
        callback([], errorMessage);
    } else {
        //first request result
        colleguesFoundArray = body;
    
        colleguesFoundArray.forEach(function(matricule){
            request('https://hayot-collegues-api.herokuapp.com/collegues/'+ matricule, {json:true}, function(err, res, body){
                var colleguesIdentityList = body;
    
            callback(colleguesIdentityList);    
            });
        });
    }

    });
    
}

exports.findCollegueByName = findCollegueByName;