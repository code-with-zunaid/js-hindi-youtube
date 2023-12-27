function student(){
console.log("zuanid alam");
}

student
//this is only reference 
//student()
//this is execution

function add(num1,num2){
    console.log(num1+num2);
}


//console.log('RESULT IS '+add(3,4));
// output is RESULT IS undefined
//because it return nothing
function add(num1,num2){
    return num1+num2
}
//console.log('RESULT IS '+add(3,4));

function userName(userName="india"){
    console.log(` user name is ${userName}`);
}

//userName();
/*now it print india if there is no argument pass 
then userName is bydefault initialized with india */
//userName("America")

function num(num6)
{
    console.log(num6)
}

//num(1,2,3)
//print 1
function num1(...num6)
{
    console.log(num6)
}

//num1(1,2,3)
//output [ 1, 2, 3 ]

function num2(x,y,...num6)
{
    console.log(num6)
}

num2(1,2,3,4,5,6)
//output [ 3, 4, 5, 6 ] 