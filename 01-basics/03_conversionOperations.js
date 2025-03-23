let score="33";
console.log(typeof(score));
let a=Number(score);
console.log(a);
console.log(typeof a);
let bol=Boolean(score);
console.log(bol);
console.log(typeof bol);

let bolvalue=Number(true)
console.log(bolvalue);
console.log(typeof bolvalue);

console.log("hiii");
let val=null
console.log(val);
console.log(typeof val);
let val1=Number(val);
console.log(val1);
console.log(typeof val1);

// "33" => 33
// "33abc" => NaN(Not a Number) but its type is number
// true=>1
// false=>0
// null=>0
// undefined=>NaN
// ""=>0
// " "=>0
// "abc"=>NaN