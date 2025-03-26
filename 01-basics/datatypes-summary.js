// 1. primitive data types(immutable data types) are data types that are passed by value
// and are copied by their value
// primitive data types are stored in the stack
// primitive data types are 



// there are 7 primitive data types in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol :- it is used to create unique identifiers for objects
// 7. BigInt
const value1=Symbol("hello");
const value2=Symbol("hello");
console.log(value1===value2); //false
console.log(value1==value2); //false

// 2. Non-primitive data types ,are data types that are passed by reference and are copied by their reference
// Non-primitive data types are stored in the heap
// Non-primitive data types are mutable
// Non-primitive data types are objects
// there are 3 non-primitive data types in JavaScript:

// 1. Object
// 2. Array
// 3. Function

console.log("non primitive data types");

const heros=["superman","batman","spiderman"];

let myObj={
    name:"john",
    age:20
}
const fun=function (){
    console.log("hello world");
}
console.log(heros);
console.log(myObj);
console.log(fun);