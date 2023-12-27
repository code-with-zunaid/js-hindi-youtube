// //array after declaration its size can be increased
let arr=[1,2,3,4,"zunaid"]
// //we can put here descimilar type of data inside array
// //remember length is properties not methode
// shalo copy me actual reference pass nahi hota hai 
//deep copy me actual reference pass hota hai 

// arr.push("alam")
// //this add in the last 
// console.log(arr);
// arr.pop()
// //remove the last element


// arr.unshift("bihar")
// /* it shift all the element in the last and add it shelf at the 0th position
// //not good approach because there are 100000 of data in 
// arr then it shift all element time consimeing process*/
// console.log(arr);
// console.log(arr.shift());
// //remove 0th position of element
// console.log(arr.includes(3));
// console.log(arr.indexOf("zunaid"));
// let neAr=arr.join()
// console.log(arr);
// console.log(neAr);

//==========slice and splice============
//slice does not manipulate original Array

/*console.log(`Original array is ${arr}`);
let arrslice=arr.slice(1,3)
console.log(`after slice array is ${arr}`);
console.log(arrslice);


//splice it manipulate original arr
console.log(`Original array is ${arr}`);
let arrsplice=arr.splice(1,3)
console.log(`after splice array is ${arr}`);
console.log(arrsplice);
*/
let arr1=[1,2,3,4,5]
let arr2=[6,7,8,9]
//console.log(arr1.push(arr2));
//print only 6
//console.log(arr1);
/* print [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ]
for accessing 4 arr[3] but accessing 8 arr[5][2]
//here arr2 push in arr1 as an element/object
*/
//let arr3=arr1.concat(arr2)
//console.log(arr3);

//here arr3 is like as a normal array we can access any Element like 1d array

//spread operator using this we can merge array 
const arr4=[...arr,...arr1,...arr2]
//console.log(arr4);
// output [ 1, 2, 3, 4, 'zunaid', 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// const arr5=[1,2,[3,4,[5,6,[7,8]]]]
// const normalArray=arr5.flat(Infinity);
// this convert in simple array 
//console.log(normalArray);
console.log(Array.isArray("zunaid"));
//this identify that zunaid is array or not it give boolean value

console.log(Array.from("zunaid"));
//it convert zunaid in an array  [ 'z', 'u', 'n', 'a', 'i', 'd' ]

let x1=200
let x2=300
let x3=400
let x4=500
console.log(Array.of(x1,x2,x3,x4));
// it return a new array [ 200, 300, 400, 500 ]



