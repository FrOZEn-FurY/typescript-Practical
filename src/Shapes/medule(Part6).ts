import square2 from "./Square";
import triangle2 from './Triangle'

// O. Export

export class Square {
    render() {
        console.log("rendering a squere");
    }
}

// O. Export default

export default class Traingle {
    render() {
        console.log("rendering a triangle");
    }
}

// O. Re-export

export { square2, triangle2 };
