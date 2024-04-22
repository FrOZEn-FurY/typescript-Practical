"use strict";
class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    printType(val) {
        console.log(typeof val);
    }
}
let pair = new KeyValuePair(1, '2');
pair.printType(2);
function genFunc(val) {
    console.log(val);
}
function getResult(id) {
    console.log(id);
    return { data: null };
}
getResult(2);
function echo(value) {
    return value;
}
echo(1);
echo('1');
class Store {
    constructor() {
        this._array = [];
    }
    add(obj) {
        this._array.push(obj);
    }
}
class One extends Store {
    method() { }
}
class Two extends Store {
    serach(name) {
        return this._array.find(obj => obj.name === name);
    }
}
class Three extends Store {
    filterByCategory(cat) {
        return this._array.filter(obj => obj.category === cat);
    }
}
class Products {
    constructor() {
        this._products = [];
    }
    add(p) {
        this._products.push(p);
    }
    find(property, value) {
        return this._products.find(obj => obj[property] === value);
    }
}
let pros = new Products();
pros.add({ name: 'a', category: 'b', price: 3 });
console.log(pros.find('name', 'a'));
console.log(pros.find('category', 'b'));
console.log(pros.find('price', 1));
//# sourceMappingURL=Part4.js.map