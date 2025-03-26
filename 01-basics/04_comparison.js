console.log("1">2) //false
console.log("1"<2) //true;
console.log("2">="2")//true
console.log("2"<="2")//true
console.log("2"=="2")//true
console.log("2"==="2") //true
console.log("2"!="2")//false
console.log("2"!=="2") //false

console.log("comparison of different data types");
// console.log(2==="2");

// -----------------------------------------------------------------------------

// stack(hold primitive data types) and heap(hold reference data types)
// stack and heap are two different memory locations in js
// stack hold call by value and heap hold call by reference
// stack is faster than heap
// stack is limited in size and heap is larger in size
// stack is temporary and heap is permanent
console.log("stack and heap");
    let a = 2;
    b=a;
    console.log(a);

console.log("heap memory used in js");
let user1={
    "name":"ranjeet",
    age:23n,
    company:"Amity"
}
console.log(user1);
user2=user1;
console.log("I have changed the company name of user2 but it also changed the company name of user1 beacuse it is reference data type");

user2.company="OpenText";
console.log("user 1",user1);
console.log("user 2",user2);


    