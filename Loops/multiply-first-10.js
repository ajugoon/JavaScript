// program to display the sum of natural numbers
let answer = 1; //cannot use zero in the case of multiplication
const n = 10

// looping from i = 1 to n
// in each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    answer *= i;  // answer = answer * i
}

console.log('answer:', answer);
//console.log('Notice that the console will clear in 4 seconds');
//setTimeout(() => {console.clear()}, 4000);
