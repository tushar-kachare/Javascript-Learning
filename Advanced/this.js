// this is special keyword in javascript which refers to object that is executing current function

// **** check Call , apply , bind ****

// strict mode -> using stricter version of js to use write this "use strict"
// non strict mode -> normal mode
// diff between strict and non strict 

// 1] this inside simple function in strict it gives (undefined)
//    but in non strict it gives globalObject (windows) in browser
// "use strict"
function a() {
    console.log(this);  // globalObject when in strict mode
}
// a()

const obj = {
  name: "Tushar",
  sayName: function () {
    console.log(this.name);
  },
  checkName: () => { // in arrow function this refers to its lexical environment in this case it refers to globalObject
    console.log(this);
  },
  anotherCheck : function(){ // if instead of function if we use arrow function this will point to globalObject ****
        const a = () => {
            console.log(this); // this refers to obj environment
        }
        a()
  }
};

obj.checkName(); // Output: Tushar (this refers to obj)

// this in DOM refers to HTMLelement 