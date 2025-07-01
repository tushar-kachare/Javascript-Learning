
// CLasses are like blueprints for objects
class Car { // can use this for each object like self in python
    start() {
        console.log("Start");
    }
    stop() {
        console.log("Stop");
    }
}
let obj = new Car()
console.log(obj.start());

// ** even if constructor is not present in class js automatically invoke constructor to initialize the object

// with constructor class

class constructorCar {
    constructor(brandName) {
        this.brandName = brandName
    }
    printBrand() {
        console.log(`brand name is ${this.brandName}`);
    }
}

let toyota = new constructorCar("Toyota")
let bugatti = new constructorCar('Bugatti Chirone')
console.log(bugatti.printBrand());


// **** Inheritance *** 
// child always has higher priority for same methods or even constructor

// Super() -> to access methods from parent class to invoke parent class constructor
// write it in child constructor to invoke parent constructor
class person {
    eat() {
        console.log("Person Eat for living");
    }

    sleep() {
        console.log("Person Sleep for living");
    }
}

class Engineer extends person { // Engineer inherit from person class
    work() {
        console.log("Engineer work always");
    }
}
let obj1 = new Engineer()
console.log(obj1.eat());











 