"use strict";

// Math: + - / *   **  %

// + for string concatenation
let s = "my" + "string";
alert(s);

alert("1" + 2); // "12"
alert(2 + '1'); // "21"
alert(2 + 2 + "1"); // "41"

// unary +[var] <=> Number([var])
let one = "1", two = "2";
alert(one + two); // "12"
alert(+one + +two); // "3"


// += *= /= ....
// ++ --


//BITWISE operations
// cast to 32-bit num
// & | ^ ~ << >> >>>

// ,
// returns value after last ','
// () - are necessary
let x = (1 + 2, 3 + 4);
alert(x);


