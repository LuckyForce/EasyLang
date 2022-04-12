//import module Lang
import { Lang } from './lang.js';

//Create Instance of Lang
const lang = new Lang();

//Print all test templates. HelloWorld, Welcome and Goodbye
console.log("English");
console.log(lang.getPhrase('HelloWorld', 'en'));
console.log(lang.getPhrase('Welcome', 'en'));
console.log(lang.getPhrase('Goodbye', 'en'));
console.log("");
console.log("German");
console.log(lang.getPhrase('HelloWorld', 'de'));
console.log(lang.getPhrase('Welcome', 'de'));
console.log(lang.getPhrase('Goodbye', 'de'));
console.log("");
console.log("Spanish");
console.log(lang.getPhrase('HelloWorld', 'es'));
console.log(lang.getPhrase('Welcome', 'es'));
console.log(lang.getPhrase('Goodbye', 'es'));