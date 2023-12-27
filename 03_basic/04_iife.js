//Immediately invoked function expression(IIFE)
/*When we want to avoid polution of global variable
 and immediate execute  function then we use it
 */


// const chai1=function()
// {
//    console.log("DB CONNECTION");
// }

// chai1()
//this is a normal function not execute immediat
/* ab ese hum turant execute karne ke lea chai1 ke jgah pe
function chai1()
{
   console.log("DB CONNECTION");
}

esko ek pranthessi() ke andar rakhenge
(function chai1()
{
   console.log("DB CONNECTION");
}) 
ab chai1 ke jaga pe to humne es ko likh diya ab bchaa() to finally
(function chai1()
{
   console.log("DB CONNECTION");
}) () 
etna immediate execute hojega 
not need to write function defination and execution
*/
// (function chai1()
// {
    //ese named iife bhi kahte hai
//    console.log("DB CONNECTION");
// }) () 

//chai1(username)() esko immediate function me aesse likhenge
(function chai1(username)
{
   console.log(`welcome ${username}`);
}) ("zunaid") ;// agar 2 iife function lgatar ho to ; lgana hoga 
// ab esi ko arrow function se likhenge
( (username)=>{
    //without named iife
    console.log("DB CONNECTION1");
}) ("ajad")