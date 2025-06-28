// WE CAN DEFINE FUNCTION IN OBJECT ALSO
let obj = {
    name:"tushar",
    "age":18,
    id:82272,
    one : function(){
        console.log("HEllo this is function");
    }
}
// Object.freeze(obj) // freeze the object cannot change
obj['name'] = 'ganesh'
// console.log(obj.one()); // ACCESS THE FUNCTION
// undefined is printed because it does not return any ---> so return undefined

// you can define objects in objects also

// MERGE TWO OBJECTS
const obj1 = {
    FirstId:1,
    FirstName:'tushar'
}
const obj2 = {
    SecondId:2,
    SecondName:'ganesh'
}
const obj3 = {...obj1,...obj2} // you can use this for array merging also
// console.log(obj3);
const obj4 = Object.assign({},obj1,obj2) // This can be done also
// console.log(obj4);
// console.log(Object.values(obj4));

console.log(`THIS IS first name ${obj4.FirstName}`); // String interpolation

// Object Destructuring
const {FirstName} = obj4 
console.log(FirstName); // Cant change value using Destructured name





