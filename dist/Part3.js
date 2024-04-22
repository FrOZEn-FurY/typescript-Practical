"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
        Account._customerCount++;
    }
    deposit(amount) {
        amount -= this.calculateTax(amount);
        this._balance += amount;
    }
    static get customerCount() {
        return Account._customerCount;
    }
    getBalance() {
        return this._balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        console.log("Valuing outside the class using setter, but it is also controlled like what we are doing.");
        this._balance = amount * 0.5;
    }
    calculateTax(amount) {
        let tax = amount * 9 / 100;
        return tax;
    }
}
Account._customerCount = 0;
;
let account = new Account(1, 'mamad', 0);
account.deposit(100);
console.log(account.getBalance());
console.log(Account.customerCount);
console.log(account instanceof Account);
console.log(typeof account);
console.log(account);
console.log(account.balance);
account.balance = 20;
class Dynamic {
}
let dynamic = new Dynamic;
dynamic['a1'] = [1, 'maximus'];
dynamic.a2 = [2, 'william'];
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    gaming() {
        console.log("Gaming!");
    }
}
class Teacher extends Person {
    constructor(field, firstName, lastName) {
        super(firstName, lastName);
        this.field = field;
    }
    get fullName() {
        this.gaming();
        return 'Proffesor ' + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Person('ali', 'kenshi'),
    new Teacher('math', 'seyed ali', 'poshami'),
]);
class Shape {
    constructor(name) {
        this.name = name;
    }
}
class Circle extends Shape {
    constructor(name) { super(name); }
    render() {
        console.log(`rendering a circle named: ${this.name}`);
    }
}
class GoogleCalander {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
    }
    removeEvent() {
    }
    ;
}
;
//# sourceMappingURL=Part3.js.map