//import module Lang
import { Lang } from './lang.js';

//Create Instance of Lang
const lang = new Lang();

//Print all test templates. HelloWorld, Welcome and Goodbye
console.log("English");
console.log(lang.get('HelloWorld', 'en'));
console.log(lang.get('Welcome', 'en'));
console.log(lang.get('Goodbye', 'en'));
console.log("");
console.log("German");
console.log(lang.get('HelloWorld', 'de'));
console.log(lang.get('Welcome', 'de'));
console.log(lang.get('Goodbye', 'de'));
console.log("");
console.log("Spanish");
console.log(lang.get('HelloWorld', 'es'));
console.log(lang.get('Welcome', 'es'));
console.log(lang.get('Goodbye', 'es'));
console.log("");
//This should return the default language because French is not supported.
console.log("French");
console.log(lang.get('HelloWorld', 'fr'));
console.log(lang.get('Welcome', 'fr'));
console.log(lang.get('Goodbye', 'fr'));
console.log("");
//This should return the default language because no language is specified.
console.log("No Language");
console.log(lang.get('HelloWorld'));
console.log(lang.get('Welcome'));
console.log(lang.get('Goodbye'));