import json from 'PATH_NAME' assert {type: 'json'};

export class EasyLang {
  private static json: object;

  public static init(lang: string) {
    this.json = json;
  }

  //Get Phrase for the given key and language
  public get(key: string, lang?: string): string {
    //Check if key exists
    if (EasyLang.json[key] == undefined) {
      //Return null
      return null;
    } else {
      //Check if language exists
      if (EasyLang.json[key][lang] == undefined) {
        //Check if default language exists
        if (EasyLang.json[key][EasyLang.json["default"]] == undefined) {
          //Return null
          return null;
        } else {
          //Return default language
          return EasyLang.json[key][EasyLang.json["default"]];
        }
      } else {
        //Return language
        return EasyLang.json[key][lang];
      }
    }
  }
}
