function  AddTwoNumbers(a,b) { // a & b are parameters
    return a+b
    
}
// console.log(AddTwoNumbers(3,4));  // 3 & 4 are arguments 

function addGeneric(...numbers) { // Can accept any no. of parameter. called as (rest) 
    let sum = 0
    for (let i = 0 ; i < numbers.length ; i++) {
        sum += numbers[i]
    }
    return sum
}
// console.log(addGeneric(1,2,3))

// Function Expressions. 
// i.e Assigning function to variables.
const square = function(a) {
    return a ** 2
}
// console.log(square(2))


// Function Hoisting.

//code runs without any error, despite the function gets called before it's declared. This is because the JavaScript interpreter hoists the entire function declaration to the top of the current scope.
// console.log(mult(2,54))
function mult(a , b) {
    return a * b
}

// Function hoisting only works with function declarations — not with function expressions. The following code will not work:

// console.log(ml(2,4)) // Here we will get error. 
// const ml = function(a , b) {
//     return a * b
// }


// (this) refers to current object / parent object (in browser it refers to windows object)
const user = {
  name: "Tushar",
  greet: function () {
    console.log(this.name); // "Tushar"
  }
};
// user.greet();


// **********IMP*******
const val = (a , b) => { 
    return a + b // explicit return
}
const val2 = (a , b) => (a+b); // implicite return
// console.log(val2(1,3))   


// ******* Immediately Invoked Function Expression ********
(function TwoSum(a,b){
    console.log(a+b);
})(3,4);

((a,b)=> {
    console.log(a+b);    
})(3,4);




