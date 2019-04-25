let lg = console.log;

let menu = "1. Rechercher un collègue par nom"
    + "\n99. Sortir\n";

//open a console-listener
let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//this is an object
let Service = require('./service.js');
let serviceObject = new Service();

function playMenu() {
    rl.question(menu, saisie => {

        if (saisie == '1') {
            lg(`Votre choix : ${saisie}`);

            rl.question('Veuillez saisir le nom de recherche\n', (searchingName) => {
                
                serviceObject.findCollegueByName(searchingName)
                        .then((tabColleagues) => {
                            tabColleagues.forEach(element => lg(`${element.name} ${element.firstname} (${element.birthdate})\n`));
                        })
                        .catch((error) => lg(error.response.body + '\n'))
                        //when finished, go back to the menu
                        .finally(() => playMenu());
                }
            )
           
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