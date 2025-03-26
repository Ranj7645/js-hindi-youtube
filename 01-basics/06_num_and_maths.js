const score =400.78954
console.log(score.toFixed(2));
console.log(score.toPrecision(2));
console.log(score.toString());
console.log(score.toString(2));

const num=100000
console.log(num.toLocaleString('en-IN'));// it return the number in the form of string with comma separated
console.log(Number.MAX_VALUE);
// ----------------- --     ----  ------ Math-------  ------    ------------- ----     ----

console.log("-----Math----");
// console.log(Math)
// console.log(Math.abs(-123));
// console.log(Math.ceil(4.5));// it will return the next integer value
// console.log(Math.floor(4.3));// it will return the previous integer value
// console.log(Math.round(4.5));// it will return the nearest integer value
// console.log(Math.round(4.4));// it will return the nearest integer value
// console.log(Math.round(4.6));// it will return the nearest integer value
// console.log(Math.sqrt(4));// it will return the square root of the number
// console.log(Math.pow(2,3));// it will return the power of the number
// console.log(Math.min(2,3,4,5,6,7,8,9));// it will return the minimum number
// console.log(Math.max(2,3,4,5,6,7,8,9));// it will return the maximum number


console.log(Math.random());// it will return the random number between 0 to 1
console.log(Math.random()*100);// it will return the random number between 0 to 100
console.log(Math.floor(Math.random()*100));// it will return the random number between 0 to 100
console.log(Math.floor(Math.random()*100)+1);// it will return the random number between 1 to 100
max=20;min=10;
console.log(Math.toFixed(Math.floor(Math.random()*(max-min+1)+min)));// it will return the random number between 10 to 20
console.log(Math.PI);// it will return the value of pi

