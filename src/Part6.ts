// O. Import

import { Square as SQ } from "./Shapes/medule(Part6)"; // Importing and naming it something else to use.

let sq = new SQ();
sq.render();

// O. Import from an export default

import Traingle from "./Shapes/medule(Part6)";

let tr = new Traingle();
tr.render();

// O. Import them togather

// import Traingle, { Square } from "./medule(Part6)";

// O. Wildcard

import * as Shapes from './Shapes/medule(Part6)'; // Importing everything exported from a module.

let sq2 = new Shapes.Square();
sq2.render();

// O. Re-exporting

import { square2, triangle2 } from './Shapes/medule(Part6)'; // These two functions got re exported.

square2();
triangle2();

// If we name the the main file that we are exporting from, index, we don't even need to mention it in the import path. But the option moduleResolution must be turned on first.

import { square2 as square3, triangle2 as triangle3 } from './Shapes'; // This is the same as above.
triangle3();
square3();