class Account {
    private static _customerCount: number = 0; // Static variable
    // readonly id: number; // Instance variable, but annotation needed.
    // name: string; // This will be public.
    nickname?: string;
    // private _balance: number; // _ is just a contract, the private does the job.

    constructor( // This method is very more efficient. the commented sections are where will be deleted because of this.
        public readonly id: number, 
        public name: string, 
        private _balance: number) // Using the method you see here (which is called parameter property), whatever value is given to the constructor, it makes the given name properties and how you describes them and values them.
    { 
        // this.id = id;
        // this.name = name;
        // this._balance = balance;
        Account._customerCount++;
    } // Constructor, note that this is needed (valuing the instance variables is needed).

    deposit(amount: number): void { // Some function.
        amount -= this.calculateTax(amount);
        this._balance += amount;
    }

    static get customerCount(): number { // Returning static type. Note that it will be always called using the account class (the static variable is meant).
        return Account._customerCount; // As said, it will be called using the Account class. Also notable that the getter and setter for statics need static keyword.
    }

    getBalance(): number { // Getter
        return this._balance;
    }

    get balance(): number{ // The true way of getter, now you can call the balance variable out of the class, but it is controlled what it returns.
        return this._balance;
    }

    set balance(amount: number){ // Setter, it should not have a return type annotation. It also must gets a value.
        console.log("Valuing outside the class using setter, but it is also controlled like what we are doing.");
        this._balance = amount * 0.5; // Like we said, controlled.
    }

    private calculateTax(amount: number): number { // Private function
        let tax = amount * 9 / 100;
        return tax;
    }
};

let account = new Account(1, 'mamad', 0); // Making an object.
account.deposit(100);
console.log(account.getBalance());

console.log(Account.customerCount);

console.log(account instanceof Account); // Boolean phrase.
console.log(typeof account); // Type of the account will be considered object.
console.log(account); // Prints the information of account like an object.

console.log(account.balance); // Take a good note that the _ will be deleted. this is possible because of the getter (the true getter).
account.balance = 20 // Possible because of the setter, note again that _ is gone. _ also must not be used when declaring setter and getter.

class Dynamic {
    [transactionID: string]: [number, string]; // Index signature property, it enables the dynamic property things, but with a controlled version of type checking.  
}

// Dynamic thing got enabled for it, for some reason this has a problem for the class above because it has its own properties maybe ?
let dynamic = new Dynamic;
dynamic['a1'] = [1, 'maximus'];
dynamic.a2 = [2, 'william'];

// O. Inheritence, polymophism and overriding, and protected access point

class Person {
    constructor(
        public firstName: string,
        public lastName: string,
    ) {}

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    protected gaming() {
        console.log("Gaming!");
    }
}

class Teacher extends Person { // Inheritence
    constructor(
        public field: string,
        firstName: string,
        lastName: string,
    ) { super(firstName, lastName); } // Parent constructor must be called, but the values that got inheriated from the parent didn't re-declared here.

    override get fullName(): string { // This is function overriding, override keyword is better be used here, if not used, there is no connection between the function here and the function in the parent.
        this.gaming(); // Or super.gaming(), you know the difference.
        return 'Proffesor ' + super.fullName; // super can be used to get the things from parent like this.
    }
    /*
        override keyword affects the polymorphism, you will see in below.
    */
}

function printNames(people: Person[]) { // This is polymorphism.
    for (let person of people) {
        console.log(person.fullName);
    }
}

printNames([
    new Person('ali', 'kenshi'),
    new Teacher('math', 'seyed ali', 'poshami'),
]) // Yes, polymorphism handled automaticly, but the only needed thing is that the things that must be overwritten and affcted at polymorphism, must have the override keyword.

// O. Abstraction

abstract class Shape { // This class will be used for others, and will not be used to make objects from. In short, this class is an abstract class.
    constructor(public name: string) {}

    abstract render(): void; // Abstract functions don't have a implementation, but needs annotation and only be used inside an abstract class.
}

class Circle extends Shape {
    constructor(name: string) { super(name); }

    render() { // Abstracted methods must be implemented inside the child classes.
        console.log(`rendering a circle named: ${this.name}`);
    }
}

// let obj = new Shpae('hi') is not possible.

// O. Interface

interface Calender { // Interfaces are only and only for decalration, they don't have anytype of implementation, they are just interfaces of things.
    name: string,
    addEvent: () => void,
    removeEvent: () => void,
}

interface SomeCalander extends Calender { // Interfaces have inheritence.
    alarms: () => void;
}

class GoogleCalander implements Calender { // Using classes and implements keyword, we implement the interfaces as we like.
    constructor(public name: string) {}

    addEvent(): void {

    }

    removeEvent(): void {

    };
    // Everything inside the interface must be included.
};

/*
    If you have a logic that must be or can be declared inside the base object, use abstract classes.
    If you just have somethings that don't need to be implemented at all at just must be inhriated, use interface.
    Also JS itself doesn't have interface at all. Interface is only used for type checking and management and stuff.
*/
