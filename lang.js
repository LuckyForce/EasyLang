export class Lang {
    static JSON_PATH = 'lang.json';

    //Constructor
    constructor() {
        //Load json file
        this.json = require(Lang.JSON_PATH);
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
