var lg = console.log;

var menu = "1. Rechercher un collègue par nom"
    + "\n99. Sortir\n";

//open a console-listener
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var serviceModule = require('./service.js');


function playMenu() {

    rl.question(menu, function (saisie) {

        if (saisie == '1') {
            lg(`Votre choix : ${saisie}`);

            rl.question('Veuillez saisir le nom de recherche\n', (XXX) =>
                serviceModule.findCollegueByName(XXX, function(colleguesIdentityList, errorMessage){
                    lg("\n>> Recherche en cours du nom : " +XXX + "\n");
                
                    if(errorMessage){
                        lg(errorMessage);
                    }else{
                        lg(colleguesIdentityList.name +" "+ colleguesIdentityList.firstname 
                            +" ("+ colleguesIdentityList.birthdate +")\n");
                    }
                
                    //when finished, go back to the menu!
                    playMenu();
                })
            );
            
            
        } else if (saisie == '99') {
            lg("Au revoir!");
            //stop the app
            process.exit(0);
            //stop listening
            rl.close();
        }

    })
}

exports.playMenu = playMenu;