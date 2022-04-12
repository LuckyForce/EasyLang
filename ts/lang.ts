import json from "../lang.json";

export class Lang {
  private static json: object;

  public static init(lang: string) {
    this.json = json;
  }

  //Get Phrase for the given key and language
  public static get(key: string, lang: string): string {
    //Check if key exists
    if (this.json[key] == undefined) {
      //Return null
      return null;
    } else {
      //Check if language exists
      if (this.json[key][lang] == undefined) {
        //Check if default language exists
        if (this.json[key][this.json["default"]] == undefined) {
          //Return null
          return null;
        } else {
          //Return default language
          return this.json[key][this.json["default"]];
        }
      } else {
        //Return language
        return this.json[key][lang];
      }
    }
  }
}
