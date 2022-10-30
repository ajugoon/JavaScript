// This is a simple program that allows the user to input a radius and 
// have an area of a circle calculated.
// Reference: https://www.codecademy.com/article/getting-user-input-in-node-js

const prompt = require('prompt-sync')({sigint: true});

const name = prompt('What is your name? ');
console.log(`Hey there ${name}!`);
console.log("Hey there " + name + "!")

const num = prompt('Enter a number: ');

const PI = 3.14159;
let area = 0;
let radius = Number(num);

// the area of the circle is given by A = PI * (r ** 2)
area = PI * (radius ** 2);

console.log("The Area of the Circle is: " + area + " sq. units")
