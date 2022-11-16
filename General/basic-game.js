/////////////////////////// We will define functions in this section that will help us //////////////////////////////
function foodQuiz() {
  console.log('Ok then! Get ready for a Cultural Cuisine Adventure!');

  // When you answer yes, the questions start. prompts, let, and if statements are used a lot in the questions. 
  // for example (example here)
  // I also gave this ACSII art code that I made with a classmate

  console.log("888              888    d8b               .d8888b.           888")
  console.log("888              888    88P              d88P  Y88b          888")
  console.log("888              888    8P               888    888          888")
  console.log("888      .d88b.  888888 *  .d8888b       888         .d88b.  888")
  console.log("888     d8P  Y8b 888       88K           888  88888 d88  88b 888")
  console.log("888     88888888 888        Y8888b.      888    888 888  888 Y8P")
  console.log("888     Y8b.     Y88b.          X88      Y88b  d88P Y88..88P    ")
  console.log("88888888 Y8888   Y888       88888P        8888P88    *Y88P*  888")
  
}

/////////////////////////// This is where the program begins ////////////////////////////////////

let operation = "no"; // this is just a default value
const name = prompt('What is your name? ');
console.log("Hey there, " + name + "!"); // this is another way to create sentences...
//
console.clear();

while (operation == "no") {
  console.log("I have a question for you, " + name + ". Do you like food?");
  
  // This is the first prompt that has two different possible outcomes. (yes) or (no)
  let operation = prompt("type yes or no");

  if (operation == "yes") {
    console.clear();
    foodQuiz();
  }
  else if (operation == "no") {
    console.clear();
    console.log('Whaaaat, are you sure you do not like food?')
  }
  else {
    console.clear();
    console.log('Oops, looks like you typed something wrong, remember just type yes or no.')
  }
}//end while loop
