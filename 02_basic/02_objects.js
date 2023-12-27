/* singaltan 
a singaltan Object is created by constructor 
Object.create=>this is constructor methode
const user=new Object();
if we print it then output is {} empty ata hai
*/
const mysmb=Symbol("key1")
// now i use this mysmb in object

//literal Object
const user=
{
    userName:"zunaid",
    "full name":"zunaid alam",
    //internally all key treated as a string by machine
    [mysmb]:"symbol..........",

    email:"zunaidalam707070@gmail.com"
}
// console.log(user);
// console.log(user.userName);
//generally we use this methode to access the obj elements

//but other way is
// console.log(user["full name"]);
// console.log(user["userName"]);

//console.log( user[mysmb]);
//this is the way to access the symbol in object
user.email="zunaid@google.com"
//console.log(user.email);
//Object.freeze(user)
//now we can not change userName="ravan"


user.greeting=function(){
    console.log("gretting is working");
}
// console.log(user.greeting());
// console.log(user);
const student={
    name: {
        fullName: {
            stdName: "zunaid alam",
        }
    },
}
//console.log(student.name.fullName.stdName)

const grade={1:"a",2:"b",3:"c"}
const grade2={4:"d",5:"e",6:"f"}
const grade3=[grade,grade2]
//console.log(grade3);
//output[ { '1': 'a', '2': 'b', '3': 'c' }, { '4': 'd', '5': 'e', '6': 'f' } ]
const grade4=Object.assign(grade,grade2)
//console.log(grade);
//console.log(grade4===grade);
/*const grade4=Object.assign({},grade,grade2)
here this is a good approach to write empty object {} because 
grade and grade2 assign inside this empty object and the then it 
return a new object 
it is good apporach to use {} object(targt object hai ye) */
//console.log(grade4);
//output { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

const grade5={...grade,...grade2}
//console.log(grade5);
//{ '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } 
// console.log(user);
// console.log(Object.keys(user));
//print only key of object
// console.log(Object.values(user));
// console.log(Object.entries(user));
//it convert the key and value into array
console.log(user.email);
const {email}=user
//this is known as destructor do not need to write user.email only email
console.log(email);
const {userName}=user
console.log(userName);
const {"full name":fullName}=user;
console.log(fullName);

//=======API======
/* Asan sabdo me apna kam kisi dusre ke uper lad dena
khana nahi bnae hotal me khane chale gay ye hmara hedak
nahi hai ke khana kaise banega  xml api hota hai json api aajkal 
khub esthemal hota hai yeh easey to use hota in the comparision
of xml api*/
//json api ka ek object hai esme key "" ke ander hota hai
{
    "name":"zunaid alam"
    "age":23
}

//json api jaruri nahi hai ke wah object ke formate me hi mile
//array ke formate me bhi mil sakta hai 3 object hai arr ke andar
[
    {},
    {},
    {},
]