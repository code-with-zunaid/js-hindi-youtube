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
const BigIngum=9808776565443455678798n;
//when we add n at the last of number then it become BigInt


/*

==============reference(non primitive)==========
1.Array 
it usese to [ ] square bracket;
its return type is object

const hero=["saktiman" , "dogo"]


2.Object
it uses { }
and contain key value pair
const obj1={
        name:"ajay"
        age:78
}


3.function 
in javascript a function can be treated as variable
its data type is function,(fuction object)
return type is object function

*/
const myfunction=function()
{
console.log("Hello world");
}


const obj1={
        name:"ajay",
        age:78,
}

const hero=["saktiman" , "dogo"]
console.log(typeof hero);



/*
=============Memory==========
stack(primitive) and heap(non-primitive)

let email="zunaidalam707070@gmail.com";
let email2=email;
console.log(email);
console.log(email2);
// here both print the same value
email2="kad34@gmail.com";
console.log(email);
console.log(email2);
/*here we change the value of email2 and it does not effect email value because
in stack copy of email  is assigned to email2 so its actual value is not effected 
but this is not happend in heap here change actual value
*/ 
let student=
{
        name1:"zunaid",
        age:23,
};

let student2=student;
student2.age=60;
console.log(student.age);
console.log(student2.age);
//here both print 60 because here both contain refferance of same object (of heap memory)




