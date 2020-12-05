"use strict";

/*
ATTENTION:
WE AREN'T
TALKING ABOUT
OBJECTS HERE
 */

// STRING CAST
// alert -> to string
// math operations -> to numbers
// false -> "false"
// null -> "null"
// ..
let bool = true;
alert(typeof bool); // boolean = string

bool = String(bool);
alert(typeof bool); // string = string




// NUM CAST
// in math funs and exprsns
alert("6" / "2"); // 3, "6" -> 6 ..

let str = "123";
alert(typeof str); // string

let num = Number(str);
alert(typeof(num)); // number
/*
RULES OF NUMBER CAST
undefined -> NaN
null -> 0
true -> 1
false -> 0
string -> {
   1. trim
   2. empty?
      2.1 yes -> 0
      2.2 no -> {
         try cast: success?
             2.2.1 yes -> number
             2.2.2 no -> NaN
      }
}
 */





// BOOLEAN CAST
// "", 0, null, undefined, Nan -> false
// others -> true


