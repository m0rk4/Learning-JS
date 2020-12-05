"use strict";

// JS - 8 basic data types

// dynamic-type
let message = "Message";
message = 12345;

/*
 number:
 ints, floats + Infinity, -Infinity and NaN.
 Range: [2^53 - 1 ; -(2^53 - 1)]
 */

// Math operations are safe
// the program will not die
alert(1 / 0); // Inf
alert("Message" / 2); // NaN

/*
  BigInt:
  Range: Formally Inf
  Suffix: n
*/

const bigInt = 84274827874287492652652659265926592659265926592n;

/*
   string:
   literals: "" ''
   no char type i js
 */

let str = "Mark";
let str1 = 'Mark';

let res = `Hello, ${str}`;
let res1 = "Hello, ${str}";

alert(res);
alert(res1);

let name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

/*
  boolean:
  true false
 */

let nameCh = true;
let ageCh = false;

let isGr = 4 > 1;
alert(isGr);

// null
let age = null;

// undefined (no assign)
let age1;
alert(age1);

let go = 123;
go = undefined;
alert(go);

// Object: seems to be like other OOPs (later)
// symbol: unique identifiers (later)

/*
  typeof x
  or
  typeof(x)

  returns string with type
 */

/*
  samples:
  typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2) - OFFICIAL MISTAKE

typeof alert // "function"  (3) - SPECIAL OBJECT
 */

