// All randomly generated numbers will be greater than or equal to 0 
// and less than (but not equal to) 11

        var max = 11;
        var randNum = null;
        var numTries = null;
        
        // This function will generate the random number

        function getRandomInt() {
            document.getElementById("myNum").disabled = false;
            document.getElementById("myNum").value = "";
            randNum = Math.floor(Math.random() * max);
            console.log("The random number is: " + randNum);
            console.log("*************** NEW GAME ******************");
        }
 

        // This function can still be made more rigorous...
        function checkChoice() {

            numTries ++;
            var guess = document.getElementById("myNum").value;
            document.getElementById("myNum").value = "";
            var hint1 = "";
            var hint2 = "This is try: #" + numTries;

            console.log("The guess is: " + guess);

            if (guess < randNum){
                hint1 = "The guess of " + guess + " is too low. Go higher.";
                console.log("The guess is too low. Go higher.");

            } else if (guess > randNum){
                hint1 = "The guess of " + guess + " is too high. Go lower."; 
                console.log("The guess is too high. Go lower.");

            } else {
                hint1 = "The guess is correct!!!";
                console.log("The guess is correct!!!");

            }

            console.log("This is try: #" + numTries);
            console.log("******************************************");


            const info1 = document.getElementById("myInfo1");
            info1.innerHTML = hint1;

            const info2 = document.getElementById("myInfo2");
            info2.innerHTML = hint2;

        }//end onclick   

        // Start with the text entry box being disbaled
        document.getElementById("myNum").disabled = true;

        // This section triggers a button click when the return key is pressed
        // Reference: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

        var input = document.getElementById("myNum");
        input.addEventListener("keyup", function(event) {
            
            if (event.keyCode === 13) {
                checkChoice();
            //event.preventDefault();
            //document.getElementById("btn2").click();
            }

        });  