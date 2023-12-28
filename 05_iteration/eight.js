const myNum=[1,2,3,4,5]
const myTotal=myNum.reduce(function(acc,curr){
    //console.log(`acc value ${acc} and curr value ${curr}`);
return acc+curr
},0)

//console.log(myTotal);
/* here first time acc is initialized with 0 
and it return sum of all items of myNum array
*/

//using arrow function
const myTotal1=myNum.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal1);
//output 15
// it is basically used in shoppingCarts