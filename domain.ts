import localdate from 'localdate';

export class Collegue {

    constructor(private _matricule:string, private _name:string,
        private _firstname:string, private _email:string,
        private _birthdate:localdate, private _photoUrl:string){

    }

    get name() {
        return this._name;
    }

    get firstname() {
        return this._firstname;
    }

    get matricule() {
        return this._matricule;
    }

    get birthdate() {
        return this._birthdate;
    }

}