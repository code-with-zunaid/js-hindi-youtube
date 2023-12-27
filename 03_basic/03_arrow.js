/*yha pe user={ke andar ek (this) hai or eske bahar bhi ek (this) dono
ko print kra kar dekhenge }*/

const user={
    userName:"zunaid",
    welcome:function(){
        //console.log(`${this.userName}, welcome in my website`);
        //console.log(this)
    }
}

//user.welcome()
//output zunaid
//{ eske ander jo bhi hota hai usi ko scope khate hai  }
//user={eske andar jo bhi hai wah context hai}
//context yani variable ke value ke bare me bat karte hai
user.userName="sam bahadur"
//hamne yha pe context ko change kar diya
//user.welcome()
//sam bahadur 
//console.log(this)
/*print {} empty kyouki abhi koi current context bna hi nahi hai
if we print this in browser console then it print windows object
which is global object this kisi context ko represent karta hai  */

function chai()
{
   let username1="zu1naid"
    //console.log(this)
    //print global object
    console.log(this.username1)
    //undfined
    //does not work because it work only in object context
}

//chai()


const chai1=function()
{
   let username1="zu1naid"
    //console.log(this)
    //print global object
    console.log(this.username1)
    //undfined
    //does not work because it work only in object context
}

//chai1()

//arrow function 
const chai2=()=>{
    let username1="zu1naid"
    console.log(this)
    //print {} empty object
    console.log(this.username1)
    //undfined
    //does not work because it work only in object context
}

chai2()
/* syntax of arrow function
() =>{

}
or es func ko kisi bhi variable me hum rakh sakte hai
*/

const addof=(n1,n2)=>
{
    return n1+n2
}
console.log(addof(3,4))

//implicit arrow return function written in a line
//const addof2=(n1,n2)=> n1+n2
//or
const addof2=(n1,n2)=> (n1+n2)
console.log(addof2(5,6));


//agar object return krana hota to use ({ eske ander likhte})
//const addof2=(n1,n2)=> ({ussername:"zunaid"})