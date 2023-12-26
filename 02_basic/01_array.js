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

console.log(`Original array is ${arr}`);
let arrslice=arr.slice(1,3)
console.log(`after slice array is ${arr}`);
console.log(arrslice);


//splice it manipulate original arr
console.log(`Original array is ${arr}`);
let arrsplice=arr.splice(1,3)
console.log(`after splice array is ${arr}`);
console.log(arrsplice);




