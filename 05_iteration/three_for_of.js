const arr=[1,3,4,5,6,7,8]
for (const i of arr) {
    //console.log(i);
}
const str="Hello World!"
for (const ch of str) {
    //console.log(ch);
}

const map=new Map()
map.set('in','india')

map.set('usa','united state of america')
map.set('uk','united kingdom')
//console.log(map);

for (const key of map) {
    //console.log(key);
}

for (const [key,value] of map) {
    //here destructure of map
    //console.log(value);
}

const obj={
    'name':'zunaid',
    'age':23,

}


for (const objElem of obj) {
    //console.log(objElem);
    //we can not itterate object like this there are other way for it   
}