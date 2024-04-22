"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Decorator(constructor) {
    constructor.prototype.parameter = [];
    constructor.prototype.method = () => {
        console.log("Putting a method inside the class.");
    };
}
let Cls = class Cls {
};
Cls = __decorate([
    Decorator
], Cls);
function OptionDeterminetion(value) {
    return (constructor) => {
        constructor.prototype.parameter = [];
        constructor.prototype.option = value;
        constructor.prototype.method = () => {
            console.log("Putting a method inside the class.");
        };
    };
}
let Profile = class Profile {
};
Profile = __decorate([
    OptionDeterminetion({ selector: "#Profile-pic" })
], Profile);
let Combined = class Combined {
};
Combined = __decorate([
    Decorator,
    OptionDeterminetion({ selector: 'fsdfs' })
], Combined);
function Log(target, methodName, descriptor) {
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log("before");
        originalMethod.call(this, ...args);
        console.log("after");
    };
}
class Ppl {
    say(message) {
        console.log(message);
    }
}
__decorate([
    Log,
    Log
], Ppl.prototype, "say", null);
let p = new Ppl();
p.say("Hi");
function Capitalize(target, methodName, descriptor) {
    const originalMethod = descriptor.get;
    console.log(target);
    console.log(methodName);
    console.log(descriptor);
    descriptor.get = function () {
        const result = originalMethod === null || originalMethod === void 0 ? void 0 : originalMethod.call(this);
        return typeof result === 'string' ? result.toUpperCase() : result;
    };
}
class Words {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capitalize
], Words.prototype, "fullName", null);
let w = new Words("John", "Doe");
console.log(w.fullName);
function MinLength(length) {
    const propertyValue = new WeakMap();
    return (target, propertyName) => {
        console.log(target);
        console.log(propertyName);
        const descriptor = {
            get() {
                return propertyValue.get(this);
            },
            set(newValue) {
                if (newValue.length < length) {
                    console.error(`The password length for property ${propertyName} should be at least ${length}`);
                    return;
                }
                propertyValue.set(this, newValue);
            }
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class UserCreator {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(4)
], UserCreator.prototype, "password", void 0);
let u = new UserCreator("123");
let u2 = new UserCreator("213213");
console.log(u.password);
u.password = '123123';
console.log(u.password);
console.log(u2.password);
u2.password = '1';
console.log(u2.password);
let params = [];
function LogParams(target, methodName, parameterIndex) {
    console.log(target);
    params.push({ [methodName]: parameterIndex });
}
class SomeClass {
    someMethod(someParam, someParam2) {
        console.log(someParam);
        console.log(someParam2);
    }
}
__decorate([
    __param(0, LogParams),
    __param(1, LogParams)
], SomeClass.prototype, "someMethod", null);
console.log(params);
//# sourceMappingURL=Part5.js.map