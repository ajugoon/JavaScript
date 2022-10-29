/* This is a simple program that introduces how to enable programs to make 
choices based on conditional statements and user input. */

//const prompt = require('prompt-sync')({sigint: true});

let mood = prompt('How are you feeling today?');

// The use of || means "OR"
// The use of && means "AND"
if (mood == "happy" || mood == "HAPPY") {
  console.log('So delighted to hear that!');
} 
else if (mood == "sad") {
  console.log('Hope you have a better day tomorrow...');
} 
else if (mood == "angry") {
  console.log('Cool it!');
} 
else {
  console.log('Have a wonderful day!');
}
