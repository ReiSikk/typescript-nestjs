"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //we define the type again so if you call this class you have to pass in the correct type
    function Person(name, email) {
        this.cats = [];
        this.name = name;
        this.email = email;
    }
    Person.prototype.addCat = function (cat) {
        this.cats.push(cat);
    };
    Person.prototype.showCats = function () {
        this.cats.forEach(function (cat) {
            console.log(cat.name + "" + cat.gender);
        });
    };
    return Person;
}());
exports.Person = Person;
