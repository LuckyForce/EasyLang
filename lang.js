import json from './lang.json' assert {type: 'json'};
export class Lang {

    //Constructor
    constructor() {
        //Load json file
        this.json = json;
        console.log(this.json);
    }

    //Get Phrase for the given language
    getPhrase(phrase, lang) {
        //Check if phrase exists
        if (this.json[phrase] == undefined) {
            //Return null
            return null;
        } else {
            //Check if language exists
            if (this.json[phrase][lang] == undefined) {
                //Check if default language exists
                if (this.json[phrase][this.json['default']] == undefined) {
                    //Return null
                    return null;
                } else {
                    //Return default language
                    return this.json[phrase][this.json['default']];
                }
            } else {
                //Return language
                return this.json[phrase][lang];
            }
        }
    }
}
