const arr=[10,83,40,51,67,74,89]
/* const newarr=arr.map((item)=>item*2)
// console.log(newarr);

//const newarr=arr.map((item)=>{
    return item*2
})
 console.log(newarr);
output
[
   20, 166,  80,
   102, 134, 148,
   178
 ]
 here difference of filter and map is that 
filter work on true or false condition but in
map there is no condition */

//======chaining of methodes======
//arr.map().map().filter() is possible in js
const newarr=arr
    .map((item)=>item*2)
    .map((item)=>item+1)
    .filter((item)=>item>100)

console.log(newarr);    
/* output [ 167, 103, 135, 149, 179 ]
first map increase twise every item and pass 
these all items to second map, now second map
icrease every element with 1.and this all updated 
value pass to filter, now filter return those element
whose value is greater than 100;
 


