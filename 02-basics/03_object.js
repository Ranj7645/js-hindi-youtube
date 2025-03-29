// singelton object :- it is an object which has only one instance and is created using the new keyword using the constructor function
// Object.create() method

// Object literal
const mySym = Symbol("key1");
const obj={
    "full name ": "saurabh" ,
    "age":25,
    email:"rk@gmail.com",
    [mySym]:"myKey1",
    location:"India",
    lastLoginDays: ["monday","tuesday","wednesday"],
}
console.log(obj.email)
console.log(obj["email"])// console.log(obj[email]) this will give error

// console.log(obj."full name ")// this will give error
console.log(obj["full name "])

console.log(obj[mySym])
console.log(typeof obj.mySym) // this will give string but if u want to get use as symbol then write like this in obj: -[mySym]: "myKey1"

obj.email="rkumar12@opentext.com" // updating the value of email
console.log(obj)

// Object.freeze(obj) // it will freeze the object and we can't update the value of object
obj.email="ranjeetMicrosoft.com"
// console.log(obj) // it will not update the value of email

obj.greeting=function(){
    console.log("Hello world")
}

obj.greeting2=function(){
    console.log(`hello ${this["full name "]} , how are you ?`) // or console.log(`hello ${this.fullName} , how are you ?`)
}
//console.log(obj.greeting)// it will print the function,in undefined
console.log(obj.greeting())// it will print the function;
console.log(obj.greeting2())











