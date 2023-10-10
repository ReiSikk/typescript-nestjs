"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    //we define the type again so if you call this class you have to pass in the correct type
    function Person(name, email) {
        this.name = name;
        this.email = email;
    }
    return Person;
}());
exports.Person = Person;
