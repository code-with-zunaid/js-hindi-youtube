const obj={
    'name':'zunaid',
    'age':23,

}

for (const key in obj) {
 console.log(key); 
 console.log(obj[key])  
}

const arr=[10,83,40,51,67,74,89]
for (const key in arr) {
   //console.log(key);
   //only index print karta hai
   //console.log(`value at index ${key} is ${arr[key]}`);
}

const map=new Map()
map.set('in','india')

map.set('usa','united state of america')
map.set('uk','united kingdom')
for (const key in map) {
   console.log(key);
   //kuch nahi print krega forin loop itteration is not work on map
}
