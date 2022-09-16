// This is a simple program that allows the user to calculate the perimeter
// of a rectangle.

const prompt = require('prompt-sync')({sigint: true});

let side1 = prompt('Enter the length of the rectangle: ');
let side2 = prompt('Enter the width of the rectangle: ');

let length = Number(side1);
let width = Number(side2);

let perimeter = 0;

perimeter = (length + width) * 2;

console.log("The Perimeter is: " + perimeter + " units")
