"use strict";
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    },
};
var myself = {
    name: 'Harry',
    bankAccount: bankAccount,
    hobbies: ['Maths', 'Coding'],
};
myself.bankAccount.deposit(3000);
console.log(myself);
