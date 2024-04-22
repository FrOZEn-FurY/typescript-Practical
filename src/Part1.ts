/* Data types */

// Simple annotaion
let age: number = 123_456_789; // using underscore doesn't affect, just increases readablity
let firstName: string = 'Frozen';
let isMarried: boolean = false;

// Implicity
let age2 = 123;
let name2 = 'cancer';
let isDangerous = true;

// Any
let anyData;
anyData = 1;
anyData = 'banned';
let max: any;
max = 1;
max = 'max';

function printer(data: any) { // Either giving it any, or false the noImplicityAny config (second option is not recommended if you have no reason).
    console.log(data);
};

// Array
let numbers: number[] = [1, 2, 3];
let mix: (string | number)[] = [1, '2', 'max', 3]

numbers[0].toString() // Intellisence will be better.

// Tuple (Arrays with specific sizes)
let tuple: [number, string, boolean] = [1, 'mamad', true];
let arrayOfTuples: (typeof tuple)[] = [[...tuple], [2, 'kenshi', false]]; // Using other types as another type (other values).

tuple.push(2); // No errors unfortunatly.

// Enum (Enumration)
enum Sizes {Small, Medium, Large}; // Starts values from 0 an in order.
enum Sizes2 {Small = 5, Medium, Large};
enum Sizes3 {Small = 5, Medium = 10, Large = 1231};
enum Sizes5 {Small = 'sadasd', Medium = 10, Large = 1231};

const enum Size4 {Small = 45, Medium = 50, XXL = 2343}; // The method used to map this one when valuing sth in js is different because of const.

// Functions
function incomer(cancer: string, optional?: string): void { // Unused Params and Unused Variables will be warned. Also it is better to declare the return type instead of implicity determining it.
    let molly: string = 'molly';
    console.log(cancer + molly + optional);
}

incomer('20-0', 'optional'); // Optional parameter
incomer('20-0');

function master(steve = 'click') { // Default value
    console.log(steve);
}

master();
master('forced');

// Date
let date: Date; // We have this data type which I don't know how to value.

// Object
let obj: { // How you annotate objects. You either put anootation or you just don't use it.
    readonly id: number,
    name: string,
    field?: string,
    func: () => void,
} = {
    id: 1,
    name: 'field',
    func: () => {
        console.log('Hi!')
    },
};

obj.field = 'hello!'; // Because it became optional.
// obj.id = 2; does not work.
// obj.fail = true; does not work. That means objects are no longer dynamic.