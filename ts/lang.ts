import json from '../lang.json' assert {type: 'json'};

export class Lang {
  private static json: object;

  public static init(lang: string) {
    this.json = json;
  }

  //Get Phrase for the given key and language
  public get(key: string, lang?: string): string {
    //Check if key exists
    if (Lang.json[key] == undefined) {
      //Return null
      return null;
    } else {
      //Check if language exists
      if (Lang.json[key][lang] == undefined) {
        //Check if default language exists
        if (Lang.json[key][Lang.json["default"]] == undefined) {
          //Return null
          return null;
        } else {
          //Return default language
          return Lang.json[key][Lang.json["default"]];
        }
      } else {
        //Return language
        return Lang.json[key][lang];
      }
    }
  }
}
