//false values 
/* false, 0, -0,BigInt On, "", null, undefined, NaN
these values are always false if( ) ke andar rakhenge to 
ye block kabhi bhi execute nahi hoga only else block execute
hoga*/

//true value
/* "0", 'false', " ", [], {}, function(){} empty function hai
if("0") this is true and if block execute*/

//===========Nullish Coalescing Operator (??): null undefined==========
let val;
// val=5 ?? 10
//console.log(val);
// output 5 pahla value assign hota hai 

// val=null ?? 20
// console.log(val);
//output 20, errors ko remove karen kelea estemal kiya jata hai
// 
val=undefined ?? 30
//output 30


console.log(val);