// O. Class decorator

function Decorator(constructor: Function) { // Defining a class decorator, the input argument must be the constructor of the class.
    constructor.prototype.parameter = [];
    constructor.prototype.method = () => { // We value the things we want using prototype (make the changes using prototype).
        console.log("Putting a method inside the class.")
    }
}

@Decorator // Decorator will be called in runtime.
class Cls {

}

// O. Giving argument to the decorator

type Option = {
    selector: string,
}

function OptionDeterminetion(value: Option): Function { // This function that gets the arguments of decorator and returns the decorator is called Decorator Factory.
    return (constructor: Function) => {
        constructor.prototype.parameter = [];
        constructor.prototype.option = value; // We just used the given value, also this example is kinda of similar to what you might do with decorators in fron-end.
        constructor.prototype.method = () => {
            console.log("Putting a method inside the class.")
        }
    }
}

@OptionDeterminetion({selector: "#Profile-pic"}) // And this is how we give agrguments.
class Profile {

}

// O. Combining decorators

@Decorator
@OptionDeterminetion({selector: 'fsdfs'}) // First, it will be called, the reult will go up, one by obe this operation happens for all the decorators.
class Combined {

}

// O. Method decorator

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) { // It must get these three values, first one is the targeted method, second one is its name and third one is the descriptor of that method.
    console.log(target);
    console.log(methodName);
    console.log(descriptor); // This is what so called something that describes every property.

    const originalMethod = descriptor.value as Function; // This is how we store the original method. We do an assertion so the compiler knows it is a function.

    descriptor.value = function(...args: any){ // We use function and not arrow function so this keyword is binded to it. Also we use ...args so any arguments given to this decorator will be given to the original method, so it is useable for all kinds of methods and not only that.
        console.log("before");
        originalMethod.call(this, ...args); // This is how we call the original method.
        console.log("after");
    }
}

class Ppl {
    @Log
    @Log
    say(message: string): void {
        console.log(message);
    }
}

let p = new Ppl();
p.say("Hi");

// O. Accessor decorator

function Capitalize(target: any, methodName: string, descriptor: PropertyDescriptor) { // Accessor is getter and setter.
    const originalMethod = descriptor.get; // For getter and setter we are not using value for getting the function.
    console.log(target);
    console.log(methodName);
    console.log(descriptor);

    descriptor.get = function(){
        const result = originalMethod?.call(this);
        return typeof result === 'string' ? result.toUpperCase() : result; // Make this kinda of handlings so the decorator could be used for any type of method.
    }
}

class Words {
    constructor(
        public firstName: string,
        public lastName: string
    ) {}

    @Capitalize
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

let w = new Words("John", "Doe");
console.log(w.fullName);

// O. Property decorator

function MinLength(length: number) {
    const propertyValue = new WeakMap(); // We use WeakMap because the property is not registred yet and it is goes to a garbage collector. It is represented here, and we can use it so the values that will be given to the property will be stored instance dependent.
    return (target: any, propertyName: string)=>{ // For properties, only this to parameters must be given to the decorator.
        console.log(target);
        console.log(propertyName);
        const descriptor: PropertyDescriptor = { // Here, we must make the property descriptor and change it however we like, for general setter and getter is enough to be implemented.
            get() { // Here, getter.
                return propertyValue.get(this); // Here's how we can get the property value.
            },
            set(newValue: string) { // And here is setter which checks the length of the password, and then values it if it was valid.
                if(newValue.length < length) {
                    console.error(`The password length for property ${propertyName} should be at least ${length}`);
                    return;
                }
                propertyValue.set(this, newValue);  // Here's how we set the property value.
            }
        }
        Object.defineProperty(target, propertyName, descriptor); // At last, we update the property with the new descriptor.
    }
}

class UserCreator {
    @MinLength(4) // Note that decorator get's called once, but the descriptor has the needed things to check the password length.
    password: string;
    constructor(password: string) {
        this.password = password;
    }
}

let u = new UserCreator("123");
let u2 = new UserCreator("213213");
console.log(u.password);
u.password = '123123';
console.log(u.password);
console.log(u2.password);
u2.password = '1';
console.log(u2.password);

// O. Parameter decorator

type Params = {
    [key: string]: number;
}

let params: Params[] = [];

function LogParams(target: any, methodName: string, parameterIndex: number) { // It gets the index of the parameter we want to log., that is 0-indexed and is from left to right, also the method name is the name of the method that the param is inside.
    console.log(target);
    params.push({[methodName]: parameterIndex});
}

class SomeClass {
    someMethod(@LogParams someParam: number, @LogParams someParam2: string) { // Decorator will be placed behind the parameter.
        console.log(someParam);
        console.log(someParam2);
    }
}

console.log(params);