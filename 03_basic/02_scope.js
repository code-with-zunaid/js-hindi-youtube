if(true)
{
    let a=10
    const b=20
    var c=30
}
//console.log(a);
//syntax error because a is not in the scope
//console.log(b);
//syntax error because b is not in the scope
console.log(c);
//but it print 30 this is a problem with var so we avoid it

//=======intersting=========
addOne(5)
//we can access this function before declaration
function addOne(num)
{
    return num+1;
}

addTwo(5)
//we can not access this function before declaration
const addTwo=function(num)
{
    return num+2;
}