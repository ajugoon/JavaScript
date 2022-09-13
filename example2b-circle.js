// establish the value of PI as a constant value
// define some variables and give placeholder values where needed 
const PI = 3.14159;
let area = 0;

// reference: https://www.codecademy.com/article/getting-user-input-in-node-js
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('What is the radius of the circle?', radius => {
  console.log(`The Radius of the circle is: ${radius} cm`);
  readline.close();
  // the area of the circle is given by A = PI * (r ** 2)
  area = (PI * radius * radius);
  console.log("The Area of the Circle is: " + area + " sq. units")
});

