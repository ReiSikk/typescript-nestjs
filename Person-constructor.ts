import { Cat } from './Cat';

export class Person {
    name: string; 
    email: string;
    cats: Cat[] = [];

    //we define the type again so if you call this class you have to pass in the correct type
    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    addCat(cat: Cat) : void {
        this.cats.push(cat);
    }

    showCats() : void {
        this.cats.forEach( (cat) => {
            console.log(cat.name + "" + cat.gender)
        })
    }
}