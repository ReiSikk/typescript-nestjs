import { Gender } from "./Gender";

export class Cat {
    //name: string;

constructor( public name: string, public gender: Gender) {
    //this.name = name;
}

meow(message:string) : void {
    console.log(message);
}

isFemale() : boolean {
    //return true if this is true
    return this.gender === Gender.Female;

}
}