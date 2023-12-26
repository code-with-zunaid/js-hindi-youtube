let date1=new Date();
//date is count from 1 january 1970 in milisecond
// console.log(date);
// console.log(typeof date);
// console.log(date.toString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleDateString());
// console.log(date.toDateString());
// let createDate=new Date(2023,0,4)
// let createDate2=new Date("01-14-2023")
// console.log(createDate2);
let createDate3=Date.now();
console.log(createDate3);
let x=new Date();
console.log(x.getDate());
console.log(x.getHours());
console.log(x.getMinutes())
console.log(x.getDay());
console.log(new Date().getTime())
//const timestamp=new Date().getDate();
const timestamp = 1703603753307; // Replace this with your timestamp

const date = new Date(timestamp);

// Get individual date components
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-indexed, so January is 0
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Format the date and time as a string
const formattedDateTime = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day} ${hours}:${minutes}:${seconds}`;

console.log(formattedDateTime);
