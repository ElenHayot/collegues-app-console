let lg = console.log;

let menu:string = "1. Rechercher un collègue par nom"
    + "\n99. Sortir\n";

//open a console-listener
import readline from 'readline';
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//this is an object
import {Service} from './service';
let serviceObject:Service = new Service();

import {Collegue} from './domain';

function playMenu() {
    rl.question(menu, (saisie:any) => {

        if (saisie == '1') {
            lg(`Votre choix : ${saisie}`);

            rl.question('Veuillez saisir le nom de recherche\n', (searchingName:string) => {
                
                serviceObject.findCollegueByName(searchingName)
                        .then((tabColleagues:Array<Collegue>) => {
                            tabColleagues.forEach((element:Collegue) => lg(`${element.name} ${element.firstname} (${element.birthdate})\n`));
                        })
                        .then(() => playMenu())
                        .catch((error:any) => {
                            lg(error.response.body + '\n');
                            playMenu();
                        })
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