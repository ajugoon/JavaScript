// Enter some introductory comments here

//////////////////////////////// All of the functions will go here ////////////////////////////////

function findArea() {
  console.clear();
  radius = prompt("Radius?");
  area = 3.14 * (radius ** 2)
  console.log("The area is: " + area + " sq. units");
} //end function

function findCircumference() {
  console.clear();
  radius = prompt("Radius?");
  circumference = 3.14 * (radius * 2)
  console.log("The circumference is: " + circumference + " units");
} //end function

////////////////////////////////// This is where the MAIN program begins ////////////////////////////////
let radius = 0;

const name = prompt('Please enter your name...');

console.log("Hey there, " + name + "!");

console.log("Welcome to Circle Functions")
console.log("1. Find the area of a circle")
console.log("2. Find the circumference of a circle")

const choice = Number(prompt('Please choose an option>'));

if (choice == 1) {
  console.log('You have chosen to find the area of a circle');
  findArea();
}
else if (choice == 2) {
  console.log('You have chosen to find the circumference of a circle');
  findCircumference();
}
else {
  console.log("Invalid choice!")
}
