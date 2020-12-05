"use strict";

let userName = prompt("What is your name?");
if (userName == null) {
    alert('Hello, Unknown!');
} else {
    alert(`Hello, ${userName}`);
}