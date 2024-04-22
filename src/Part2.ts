// O. Defining a type

type Employee = {
    readonly id: number,
    name: string,
    duty?: string,
    retire: (dateToRetire: Date) => void,
};

let employee: Employee;

// O. Union of types

function rialToToman(value: number | string): number { // We annotate two types for one variable, using pipe line (union of types).
    if (typeof value === 'number') // This method is called narrowing, using this condition, intellisence will show you the reasonable results for the variable.
        return value / 10; // Intellisence for number type
    return parseInt(value) / 10; // Intellisence for string type
};

// O. Intersection of types

type Good = {
    isGood: boolean
};

type Bad = {
    isBad: boolean
};

type Feedback = Good & Bad; // Remember that using impossible combinitions result in the automatic anootation of never, e. g. number & string.

let feed: Feedback = {
    isBad: false,
    isGood: true,
}

// O. Literal types

type Num = 50 | 100;
type Str = 'str1' | "str2";
type Mix = 'str' | 50;
let num: Num = 50;
let str: Str = 'str1';
let mx: Mix = 50;

num = 100; // But num = 101 for example does not work.
str = 'str2' // But str = 'd' for example does not work.
mx = 'str' // But mx = anything else does not work.

// O. Nullable types

function canNull(name: string | null | undefined): void { // In JS could be null or undefined, so we make a union type of it and handle it inside the function.
    if (name)
        console.log(name);
    else
        console.log('Invalid.');
};

canNull(null); // It would give error if you didn't use union types. strict and strictNullChecks configs cause this.

// O. Optional chains

let objc: {
    birth?: Date,
} = {};
console.log(objc?.birth); // Optional chain

let arr: null = null;
arr?.[0]; // Optional element access operator

let logger: any = null; // The any here means it could be a function so the callability is given to it.
logger?.('this'); // Optional call operator

// O. Nullish operator

let value1: null = null;
let value2: number = 0;
console.log(`${value1 ?? 30} and ${value2 ?? 30}`);
console.log(`${value1 ? value1 : 30} and ${value2 ? value2 : 30}`); // Note that the if works for falsely ones but nullish opr works for only null and undefined ones.

// O. Type assertion

let element = document.getElementById('input1'); // It returns a HTMLElement type, which is built-in class type in JS.
// element.value costs problems because the HTMLElement itself does not have value property, so we need to assert the returned value to some other useable and doable types, like HTMLInputElement.

// Method 1

let element2 = <HTMLInputElement> document.getElementById('input2');
element2.value; // Now it is working because we made type assertion from HTMLElement to HTMLInputElement which has value property.

// Method 2

let element3 = document.getElementById('input3') as HTMLInputElement;
element3.value; // It also works.
/*
    Note that this type assertion thing does not change the data type completely, it just changes (actaully give more information to the value)
    if and only if, the value type that is already is and the target type, are related and transformable (something like type intersections).
*/

// O. Unknown

function func1(value: any): typeof value {
    // value.someFunc() does not give you and error in because the type is any and it could have the function but in runtime we will have problems.
    return value; // So the value won't be unused here.
}

function func2(value: unknown): void {
    // value.someFunc() now gives you error here. you can use type narrowing.
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    }
}

/*
    General note:
    typeof can only be used for primitive data type (data type that are built-in, or it is better to say have no functions or method and not coming from a
    defined class).
    for non-primitive data types you have to use the instanceof function from JS.
*/

// O. Never

function infiniteLoop(): never {
    while (true) {
        // Some code for example.
    }
}

infiniteLoop();
/* 
    console.log("We have a warning here because this code is unreachable."); 
    ---| Never return type caused this, it makes the warnings come out for unreachablity. |---
*/
