import { Cat } from "./Cat";
import { Gender } from "./Gender";
import { Person } from "./Person-constructor";

let person1 = new Person("John", "something@something.ee");
let person2 = new Person("Jane", "janedoe@gmail.dk");

let cat1 = new Cat("Garfield", Gender.Male);
let cat2 = new Cat("Molly", Gender.Female)
let cat3 = new Cat("Jane", Gender.Female)
person1.addCat(cat1);
person1.addCat(cat2);
person1.addCat(cat3);



console.log("cat1 is a " + cat1.isFemale());
console.log("cat2 is a " + cat2.isFemale());

person1.showCats();
console.log(person1);

/* cat1.meow("Feed me"); */