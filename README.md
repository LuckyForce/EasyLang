# EasyLang
A lightweight JavaScript/TypeScript language library to easily scale and manage multilingual websites.

## Setup
All you need is to copy the file <a href="https://github.com/LuckyForce/EasyLang/blob/main/js/EasyLang.js">EasyLang.js</a> or <a href="https://github.com/LuckyForce/EasyLang/blob/main/ts/EasyLang.ts">EasyLang.ts</a> to your project and import it.

TypeScript:
```ts
//Import
import { EasyLang } from './EasyLang.ts';
//Create Instance
const lang = new EasyLang();
```
JavaScript:
```js
//Import
import { EasyLang } from './EasyLang.js';
//Create Instance
const lang = new EasyLang();
```

To make EasyLang work, you need to provide a language file in form of JSON. You can edit the path to the file in the file EasyLang.js or EasyLang.ts by changing the path of the import. Change PATH_NAME to the path of your language file.

```js
import json from 'PATH_NAME' assert {type: 'json'};
```

The language file has to be build like the following:
```json
{
    "default": "en",
    "HelloWorld": {
        "en": "Hello World",
        "de": "Hallo Welt",
        "es": "Hola Mundo"
    }
}
```
The "default" key is the default language. This language will be used if no language or translation is provided. If the language is not available, the default language will be used. If the default language is not available and the other language is not available, it will return null.

Phrases can be defined in the following way:
```json
{
    "HelloWorld": {
        "en": "Hello World",
        "de": "Hallo Welt",
        "es": "Hola Mundo"
    }
}
```
"HelloWorld" is the key of the phrase. The value is an object with the languages as keys and the translation as value. If the phrase is not defined in the language file, it will return null.

## Usage
To now use EasyLang you just need to call the method get() with the key of the phrase and the language.

Example with the following language file:
```json
{
    "default": "en",
    "HelloWorld": {
        "en": "Hello World",
        "de": "Hallo Welt",
        "es": "Hola Mundo"
    }
}
```

```js
//Import
import { EasyLang } from './EasyLang.js';
//Create Instance
const lang = new EasyLang();
//Get Phrase
lang.get('HelloWorld', 'en'); // Hello World
lang.get('HelloWorld', 'de'); // Hallo Welt
lang.get('HelloWorld', 'es'); // Hola Mundo
lang.get('HelloWorld', 'fr'); // Hello World (default language)
lang.get('HelloWorld'); // Hello World (default language)
```