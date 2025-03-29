const tinderUser =new Object();

tinderUser.id="123abc"
tinderUser.name="saurabh"
tinderUser.isLoggedIn=true

// console.log(tinderUser);

const regularUser = {
    email:"rkumar@gmail.com",
    fullName:{
        userFullName:{
            "userName":"saurabh",
            firstName:"Ranjeet",
            lastName:"Kumar"
        }
    }
}

// console.log(regularUser);

console.log(regularUser.fullName.userFullName.userName);

const obj1={1:'a',2:'b',3:'c'}
const obj2={4:'d',5:'e',6:'f'}
const obj3={obj1,obj2}
//console.log(obj3);
const obj4={...obj1,...obj2}
//console.log(obj4);
//console.log(obj3,obj1);

// Object.assign(obj1,obj2) // it will copy the values of all enumerable own properties from one or more source objects to a target object. here target is obj1 and source is obj2
//console.log(obj1);

const obj5=Object.assign({},obj1,obj2) // it will copy the values of all enumerable own properties from one or more source objects to a target object. here target is obj5 and source is obj1 and obj2
//console.log(obj5);

const users=[
    {userName:"saurabh",age:25},
    {userName:"Ranjeet",age:30},
    {userName:"Kumar",age:35}
]
// console.log(users[1])

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(" Through this way we can find the length of objects , the length of object is : ",Object.keys(tinderUser).length);// it will return the length of object
console.log(Object.entries(tinderUser))// it will return the array of key value pair

console.log(tinderUser.hasOwnProperty("id"))// it will return true if the object has the property













