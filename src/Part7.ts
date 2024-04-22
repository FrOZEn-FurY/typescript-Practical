// O. Using JS

import calculateTax from './tax'; // allowJS config must be enabled.

let tax = calculateTax(100);
console.log(tax);

// O. No typechcking

// Type checking here is also not as powerful as type checking in the TS itself.
let tax2 = calculateTax(); // There will be an error for this, because the type checking knows that an argument must be given. first solution is a comment in the tax.js file.
console.log(tax2);

// O. Typechecking like typescript

import calculateTax2 from './tax2';

// calculateTax2(); gives error now.
// calculateTax2('2'); gives error now.
let tax3 = calculateTax2(222);
console.log(tax3);

// O. Using declaration file

import calculateTax3 from './tax3';

// calculateTax3(); does not work.
// calculateTax3('2'); does not work.
let tax4 = calculateTax3(222);
console.log(tax4);

// When using dec files, you have to declare all the functions, and only declare them and not implement them, any other things that don't get declared are not recodnized.
// Also you must export the things in dec files as well.

// O. Using JS packages

import * as _ from 'lodash'; // If we import lodash here, there is no declaration file. Most of the packages have their own but when something like this doesn't we can do this:
// We install the dec types for it using an populer repo called definitly typed. To install dec files we use npm install -D @types/lodash.
// @types is the repo and -D is that we only install it for our project (Development project).
// Now the error is gone because the dec files exist.