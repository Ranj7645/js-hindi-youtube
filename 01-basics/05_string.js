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
console.log(fullName.substring(0,7));// if end character is greater than the length of the 
// string then it will return the whole string ,it will not show the error

console.log(fullName.slice(70,124));// if end character is greater than the length of the
// string then it will return the empty string ,it will not show the error
console.log(fullName.slice(-5));
console.log(Number(""));// it will return 0, if we pass the empty string to the number function

abc="  shiva     "
console.log(abc.trim());
console.log(abc.trimLeft());
console.log(abc.trimRight());

let url="https://www.opentexts.com/abcdef"
console.log(url.replaceAll('s',''))
console.log(url.replace('s',''))
// for checking string is present or not
console.log(url.includes("texts"));
console.log(url.includes("texts123"));// it will return false
console.log(url.startsWith("https"));
console.log(url.endsWith("com"));
console.log(url.split("/"));











