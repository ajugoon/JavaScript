/* This is a simple program that introduces how to enable programs to make 
choices based on conditional statements. */

const prompt = require('prompt-sync')({sigint: true});

const name = prompt('Please enter your name...');
console.log(`Hey there ${name}!`);

const grade = prompt('Enter your grade as a mark from 0-100: ');

// ensure that data entered is considered as a Number
myGrade = Number(grade);

if (myGrade >= 80) {
  console.log('A: excellent work!');
} 
else if (myGrade >= 70) {
  console.log('B: very good work!');
} 
else if (myGrade >= 60) {
  console.log('C: encouraging perfomance, but more is expected!');
} 
else {
  console.log('You need to come in for extra help!');
}
