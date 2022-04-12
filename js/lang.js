import json from '../lang.json' assert {type: 'json'};
export class Lang {

    //Constructor
    constructor() {
        //Load json file
        this.json = json;
        console.log(this.json);
    }

    //Get Phrase for the given key and language
    get(key, lang) {
        //Check if key exists
        if (this.json[key] == undefined) {
            //Return null
            return null;
        } else {
            //Check if language exists
            if (this.json[key][lang] == undefined) {
                //Check if default language exists
                if (this.json[key][this.json['default']] == undefined) {
                    //Return null
                    return null;
                } else {
                    //Return default language
                    return this.json[key][this.json['default']];
                }
            } else {
                //Return language
                return this.json[key][lang];
            }
        }
    }
}
