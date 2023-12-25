//there are two types of data type
/*
        1 primitive there are 7 types of it which is given bellow
String,
Number
Bollean
null =>it mena value is empty not 0;

undefined => it mena variable and its location in memory is defined but 
which type of value is store inside it does not know

Symboll
BigIng

in primitive data type only copy of value is passe (call by value) and all 
changes are done on it;

note=>js is a dynamic type language because when we assigned
const score="134" or 134 or true 
here any type of value can accept score so it is dynamic type language
 */

const temprature =null
//here temprature is empty not 0;
//const score;
//const score=undefined;
//both are same
const id=Symbol("123");
const id2=Symbol("123");
console.log(id===id2);
/*it return false because here symbol return a data type 
and it is not necessary that it will return same data type for
both id and id2;*/


