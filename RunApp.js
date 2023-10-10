"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./Cat");
var Gender_1 = require("./Gender");
var Person_constructor_1 = require("./Person-constructor");
var person1 = new Person_constructor_1.Person("John", "something@something.ee");
var person2 = new Person_constructor_1.Person("Jane", "janedoe@gmail.dk");
var cat1 = new Cat_1.Cat("Garfield", Gender_1.Gender.Male);
var cat2 = new Cat_1.Cat("Molly", Gender_1.Gender.Female);
var cat3 = new Cat_1.Cat("Jane", Gender_1.Gender.Female);
person1.addCat(cat1);
person1.addCat(cat2);
person1.addCat(cat3);
console.log("cat1 is a " + cat1.isFemale());
console.log("cat2 is a " + cat2.isFemale());
person1.showCats();
console.log(person1);
/* cat1.meow("Feed me"); */ 
