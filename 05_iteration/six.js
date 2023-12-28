const arr=[10,83,40,51,67,74,89]
const retuarr=arr.forEach((item)=>{
    //return console.log(item);
})
//console.log(retuarr);
//output undfined foreach loop will nothing return


//use filter for return
const retarr=arr.filter((item)=>50<item)
//console.log(retarr);
//output [ 83, 51, 67, 74, 89 ]


const retar=arr.filter((item)=>{
    return 50<item
})
//console.log(retar);
//output [ 83, 51, 67, 74, 89 ]
/* yha pe humne { } dekar ek scope reday kar deya hai 
to yha pe return likha jaruri hai
*/

const newarr=[]
arr.forEach((item)=>{
    if(item>50)
    {
        newarr.push(item)
    }
})
console.log(newarr);