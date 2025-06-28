let arr = [1,2,3,4,5]

// FOR-OF loop
for (const i of arr) { // does not work on Object
    // console.log(i*i);
}


// FOROF on MAP 
let NewMap = new Map() // map keys can be any datatype in object keys are converted to string
NewMap.set(2,"hello")
NewMap.set("hello",2);

for (const [key,values] of NewMap) {
    // console.log(key , '=>' , values);   
}

// FOR Iterating on Object (FOR-IN)

MyObject = {
    name:'tushar',
    age:20,
    Mob:7829924,
    add:'kasarwadi'
}
for (const key in MyObject) {
    // console.log(key,"=>",MyObject[key]);
}

// FOR EACH FUNCTION

arr = [4,5,6,7,'tushar',7]
arr.forEach((item)=>{
    // console.log(item); 
})
// foreach return undefined that means it does not change original Array
// while Map is meant for transforming data of array it returns new array

arr.forEach(function (item,index,arr) { // in this not only item is received index whole array is also received
    // console.log(item,index,arr);
})
arr.map((i)=> {
//     console.log(i);
})

// Custom Function 
const PrintItem = function (item) {
//     console.log(item);
}
// arr.forEach(PrintItem)) // pass only reference dont call PrintItem() like this

// Objects inside array 
const Myarr = [
    {
        name1:'tushar',
        age1 : 20
    },
    {
        name2:'ganesh',
        age2 : 22
    },
    {
        name3:'mom',
        age3 : 40
    }
]
Myarr.forEach((item)=> {
    // console.log(item.age1 ?? item.age2 ?? item.age3);// ??smart way to ignore undefined / null it get first non (undefined / null) value
    
})



