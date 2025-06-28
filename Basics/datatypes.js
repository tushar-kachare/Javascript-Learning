/* 

primitive
 Number
 String
 Boolean
 Undefined - > let x
 Null -> Special value intentionally empty
 Symbol -> Unique identifiers (ES6)
 BigInt -> large integers 

 Non primitive

 Object -> like dictionary key value pairs
 Array
 Function
 date

*/
 typeof 42           // "number"
typeof "hello"      // "string"
typeof true         // "boolean"
typeof undefined    // "undefined"
typeof null         // ❗️"object" (a JS bug since forever)
typeof {}           // "object"
typeof []           // "object" (arrays are special objects)
typeof function(){} // "function"


// Primitive
let a = 10;           // Number
let b = "Hello";      // String
let c = true;         // Boolean
let d;                // Undefined
let e = null;         // Null
let f = 123n;         // BigInt
let g = Symbol();     // Symbol

// Non-Primitive
let arr = [1, 2, 3];  // Array (object)
let obj = {x: 1};     // Object
let fun = function() {}; // Function
