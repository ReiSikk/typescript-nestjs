"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var Gender_1 = require("./Gender");
var Cat = /** @class */ (function () {
    //name: string;
    function Cat(name, gender) {
        this.name = name;
        this.gender = gender;
        //this.name = name;
    }
    Cat.prototype.meow = function (message) {
        console.log(message);
    };
    Cat.prototype.isFemale = function () {
        //return true if this is true
        return this.gender === Gender_1.Gender.Female;
    };
    return Cat;
}());
exports.Cat = Cat;
