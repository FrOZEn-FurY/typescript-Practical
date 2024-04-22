// O. Generic classes and generic methods

class KeyValuePair<K, V> {
    constructor(public key: K, public value: V) {}

    printType<T>(val: T): void {
        console.log(typeof val);
    }
}

let pair = new KeyValuePair<number, string>(1, '2');
pair.printType<number>(2);

// O. Generic functions

function genFunc<T>(val: T): void { // The T is a contract that came from C++, because they call these things template.
    console.log(val);
}

// O. Generic interface

interface Result<T> {
    data: T | null,
}

function getResult<T>(id: number): Result<T> {
    console.log(id);
    return {data: null};
}

getResult<string>(2);

// O. Limitation

function echo<T extends number | string>(value: T): T { // With extends, we can limit the values given as type to the template, note that this types that we are limiting could be a class and its children, interface, or any other type.
    return value;
}

echo(1);
echo('1');
// echo(true) does not work.

// O. Inheritence in generic classes

interface Product { // We just want to use this interface.
    name: string,
    category: string,
    price: number,
}

class Store<T> {
    protected _array: T[] = [];
    add(obj: T): void {
        this._array.push(obj); 
    }
}

// First senario of inheritence

class One<T> extends Store<T> { // Here, we still don't know what is the type so get the type parameter in the inheriated class as well an extends from the base class using the type parameter.
    method() {}
}

// Second senario of inheritence

class Two<T extends {name: string}> extends Store<T> { // We limited the options for the given type parameter to the ones that have the property name, why ?! se below.
    serach(name: string): T | undefined {
        return this._array.find(obj => obj.name === name); // We don't know what will be the T, so the compiler will warns us here, the thing that we should do is that we limit the type parameter options in this senario to the types that contain a property name.
    }
}

// Third senario of inheritence

class Three extends Store<Product> { // We know the the type of inheriated thing must be a specific type, so we just give it to the the parent type parameter here and we don't need to get another type parameter for this class.
    filterByCategory(cat: string): Product[] {
        return this._array.filter(obj => obj.category === cat); // Our knowledge helped us here.
    }
}

// O. Keyof

class Products {
    private _products: Product[] = [];
    add(p: Product): void {
        this._products.push(p);
    }

    /*
        The method find below is not a normal method, it has the flexibilty to get the property to search inside and a value to 
        search inside that property, but there will be things, we will explain them below.
    */
    find(property: /* string */ keyof Product, value: unknown): Product | undefined { 
        return this._products.find(obj => obj[property] === value);
    }
    /*
        We don't use string because if we use, the property inside the braces for obj, will be considered an index signature, and that is wrong,
        that causes that any property can be given to the function which is incorrect, instead, we use the keyof command which will give us all the keys that
        are inside the product, and that does not causes us any problems.
    */
}

let pros = new Products();
pros.add({name: 'a', category: 'b', price: 3});
console.log(pros.find('name', 'a'));
console.log(pros.find('category', 'b'));
console.log(pros.find('price', 1));
// console.log(pros.find('any', 2)); does not work.

// O. Type mapping

type ReadOnlyProduct = { // Mapping a type
    readonly [key in keyof Product]: Product[key];
}

type ReadOnly<T> = { // Generic type mapping that makes the properties of a type readonly.
    readonly [key in keyof T]: T[key];
}

type Optional<T> = { // Generic type mapping that makes the properties of a type optional.
    [key in keyof T]?: T[key];
}

type Nullable<T> = { // Generic type mapping that makes the properties of a type nullable.
    [key in keyof T]?: T[key] | null;
}

type Numbered<T> = { // Generic type mapping that makes all the properties number.
    [key in keyof T]: number;
}

// Note that mapped types cannot declare a new property or anything.