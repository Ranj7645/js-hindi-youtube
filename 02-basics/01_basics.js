myArr=[0,1,2,3,4,5,6,7,8,9];
console.log(myArr);
myArra1=new Array(10,20,30,40,50,60,70,80,90,100)
console.log(myArra1);
temp=[1,2,3,4]
// method of array
// 1. push() method
console.log("pushed method will return length of array ",temp.push(6))// this will return new length of array
// 2. pop() method
console.log("popped element",temp.pop());
// remove last element
//The pop() method removes (pops) the last element of an array.
//The pop() method changes the original array.
//The pop() method returns the removed element.
// 3. shift() method
console.log("shift elemnts",temp.shift())// remove first element and return that removed element
//The shift() method removes the first item of an array.
// 4. unshift() method
console.log("Unshift elents ",temp.unshift(1))// add first element
//The unshift() method adds new items to the beginning of an array, and returns the new length.

// Note ***********************
/* 1. --- > Unshift and push return new length of array ------ Means it is behaving in same manner
   2. --- > Shift and pop return removed element from array
*/
// Slice and splice method
// 1. slice() method
console.log("original array",temp)
console.log("Slice method ",temp.slice(1,3))// it will return new array with sliced elements
console.log("original array",temp)
// 2. splice() method
console.log("Splice method ",temp.splice(1,2))// it will return removed elements
console.log("original array",temp)
// 3. concat() method
console.log("Concat method ",temp.concat([1,2,3,4,5,6,7,8,9,10]))// it will return new array
console.log("original array",temp)
// 4. indexOf() method
console.log("Index of method ",temp.indexOf(1))// it will return index of element
