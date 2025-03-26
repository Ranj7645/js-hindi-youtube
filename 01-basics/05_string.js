const firstName = "ranjeet ";
const lastName = "kumar";

console.log("Adding two strings by using primitive way: ",firstName+lastName);
console.log("Adding two strings by using template literals: ",`${firstName} ${lastName}`); // templates literals are faster than primitive way
console.log("Adding two strings by using concat method: ",firstName.concat(lastName));
console.log("Adding two strings by using concat method with space: ",firstName.concat(" ",lastName));

console.log("other way to declare the string");
let fullName=new String("ranjeet kumar");
console.log(fullName);

// Method of Strings
console.log(fullName.length);
console.log(fullName.__proto__);
a=fullName.__proto__
console.log(typeof fullName);
console.log(typeof fullName.__proto__);

console.log(21 == '21'); //true
let bc=new String("21");
console.log("Hiii");

console.log(21 === bc); //true

console.log(fullName.toUpperCase);
console.log(fullName);
console.log(fullName.charAt(18)) // some times it will return empty string or some times it will return undefined
console.log(fullName.indexOf("kumar"));
asd=null
console.log(asd);






