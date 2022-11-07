// this program uses a "do...while" construct to multiply the first 10 numbers
let product = 1;
let number = 10;
let i = 1;

do {
  product = product * i;
  console.log(product);
  i++;
} while (i <= number)

console.log("The product is: " + product);
