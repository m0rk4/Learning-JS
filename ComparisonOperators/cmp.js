"use strict";

// > < >= <= != ==  return true false

/*
 strings cmp:
 lexic
 */

if ("zdsfdsfs" > "a"){
    alert("yes");
}

// Cmp diff types? (not null and undefined)
// it casts to number and compares
alert( '2' > 1 ); // true, строка '2' становится числом 2
alert( '01' == 1 ); // true, строка '01' становится числом 1


// strict cmp !== ===
// checks types
alert( 0 === false ); // false, так как сравниваются разные типы

// null
alert( null === undefined ); // false
alert( null == undefined ); // true
alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true

// undefined
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)