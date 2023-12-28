const arr=[10,83,40,51,67,74,89]
/* arr.forEach()  
here foreach loop know everything about arr that what is the length
,element etc. but foreach loop take a function() inside parenthessis for 
accessing the element*/
arr.forEach(function printElement(arrItem){ 
    //console.log(arrItem)
})

//but we not need to write function name here 
arr.forEach(function (arrItem){ 
    //console.log(arrItem)
})

//using arrow function
arr.forEach((arrItem) => { 
    //console.log(arrItem)
})

//passing function reference 
arr.forEach(printElement)

function printElement(arrItem){ 
   // console.log(arrItem)
}

//accessing more element using forecah loop
arr.forEach((item,index,arr) =>{
    //console.log(item,index,arr);
})


//accessing of object in array
const language_progrramming=
[
    {
        language:"js",
        name:"javascript"
    },
    {
        language:"HTML",
        name:"Hyper text markup language"
    }

]
language_progrramming.forEach((item)=>{
    console.log(item.name);
})