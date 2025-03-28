marvel_heros=["thor","iron Man","Spider man"]
dc_heros=["superman","batman","flash"]
// pushing the array
    // marvel_heros.push(dc_heros)
    // console.log("pushed array :- " ,marvel_heros);

//concatenation
marvel_heros.concat(dc_heros)
console.log(" concatination :- " ,marvel_heros); // it will return new array

// spread operator
let all_heros=[...marvel_heros,...dc_heros]
console.log("spread operator :- " ,all_heros);

console.log(...marvel_heros);

const anotherWay=[1,2,3,[4,5,6],7,[8,9,[10,11,12]]];
console.log(anotherWay);
console.log(...anotherWay);
console.log(anotherWay.flat(2))// it will flat the array upto 2 level(flat will return new array)
console.log(anotherWay.flat(Infinity))// it will flat the array upto infinite level

// fill() method
let arr=[1,2,3,4,5,6,7,8,9]
console.log("original array",arr)
console.log("fill method ",arr.fill(0,2,5))// it will fill the array with 0 from index 2 to 5
console.log("original array",arr)

//isArray() method
let name = "saurabh"
console.log("Is array ",Array.isArray(name))// it will return false
console.log("Using from method to create the array ",Array.from(anotherWay.flat(Infinity)))// it will return new array 
a={"Name":"Ranjeet"}
valueOfA=Object.values(a)
console.log("printing value of object",Array.from(valueOfA))
console.log(Array.from(a))// this will print empty array
// Array.from() method returns an Array object from any object with a length property or an iterable object.
score1=100
score2=200
score3=300
console.log(Array.of(score1,score2,score3))// it will return new array

