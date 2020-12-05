"use strict";

/*
  3 modal windows:
  alert, prompt, confirm
 */

// wait for 'OK' click
alert("Hello!");



let text = "Enter smth:";
const DEFAULT_VALUE = "something...";
// 2nd param - not necessary
// returns string or null if nothing was cancel or ESC
let result = prompt(text, DEFAULT_VALUE);



// true - 'OK', false - other
let question = "Are you man?";
let res = confirm(question);


