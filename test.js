//import lang from 'EasyLang/lang.js';
import Lang from 'lang.js';

//Print all test templates. HelloWorld, Welcome and Goodbye
console.log("English");
console.log(Lang.getPhrase('HelloWorld', 'en'));
console.log(Lang.getPhrase('Welcome', 'en'));
console.log(Lang.getPhrase('Goodbye', 'en'));
console.log("");
console.log("German");
console.log(Lang.getPhrase('HelloWorld', 'de'));
console.log(Lang.getPhrase('Welcome', 'de'));
console.log(Lang.getPhrase('Goodbye', 'de'));
console.log("");
console.log("Spanish");
console.log(Lang.getPhrase('HelloWorld', 'es'));
console.log(Lang.getPhrase('Welcome', 'es'));
console.log(Lang.getPhrase('Goodbye', 'es'));