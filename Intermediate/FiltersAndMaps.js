const MyNum = [2,3,4,5,6,7]

// Returns array when condition is matched on existing array 
const FilterArr = MyNum.filter( (item) => (item > 2));
// console.log(FilterArr);


// Map 
let NewArr = MyNum.map( (num) => (num+10)) // apply operation on each element of array and returns whole array 
// console.log(NewArr);

// Chaining
NewArr = MyNum.map( (num) => (num*10))
              .map( (num) => (num + 2))
              .filter( (num) => (num > 1)) // returns a[i]*10 + 2 on each element as filter is a[i]>1

console.log(NewArr);
