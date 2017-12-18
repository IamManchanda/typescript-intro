"use strict";
// string
var myName = 'Harry';
// number
var myAge = 24;
// boolean
var hasHobbies = false;
// assign types
var myRealAge = 25;
// array
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
// tuples
var address = ['SuperStreet', 99];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
// any
var car = 'BMW';
console.log(car);
car = {
    brand: 'BMW',
    series: 3,
};
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// void
function sayHello() {
    console.log('Say Hello');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
// function types
var myMultiply;
myMultiply = multiply;
console.log(multiply(5, 6));
// objects
var userData = {
    name: 'Harry',
    age: 27,
};
userData = {
    name: 'Hello',
    age: 22,
};
// complex object
var complex1 = {
    data: [100, 3.99, 10],
    output: function () {
        return this.data;
    },
};
var complex2 = {
    data: [101, 78.9, 13],
    output: function () {
        return this.data;
    },
};
console.log(complex1, complex2);
// union types
var myOriginalAge = 24;
myOriginalAge = '24';
var finalValue = 30;
if (typeof finalValue === 'number') {
    console.log('Final value is a number');
}
function throwNewError() {
    throw new Error('An Error Mesage');
}
var canAlsoBeNull = 12;
canAlsoBeNull = null;
var canThisBeAny = null;
canThisBeAny = 12;
console.log(canThisBeAny);
//# sourceMappingURL=script.js.map