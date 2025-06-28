// setTimeout(function (){
//     console.log('x');
// },5000)
// for(let i = 0; i<10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },i*1000)
// }
// console.log("HI"); //  output -> HI,0 to 4 then x then 5 to 9 

Array.prototype.calculate = function ( callback) {
    const output = []
    for(let i = 0; i<this.length; i++) {
        output.push(callback(this[i]))
    }
    return output
}

const check = [1,2,3,4]

check.calculate((radius) => (radius*radius));

// const ans = check.reduce((acc,curr) => {
//     acc += curr
//     return acc
// },0)
// console.log(ans);

// Array.prototype.Reduce = function(callback,acc) {
//     for(let i = 0; i<this.length; i++) {
//         acc = callback(acc , this[i])
//     }
//     return acc;
// }
// const ans = check.Reduce(function (acc,curr) {
//     acc = acc + curr;
//     return acc
// }, 0)
// console.log(ans);

const myObject = [
    {firstName:'Tushar' , age:19},
    {firstName:'Ganesh' , age:20},
    {firstName:'Rajaram' , age:40},
    {firstName:'Saru' , age:30}       
]

const ans = myObject.filter((x) => x.age > 20).map((x) => x.firstName)

const ans2 = myObject.reduce((acc,curr) => {
    if(curr.age > 20) {
        acc.push(curr.firstName)
        return acc
    }
    return acc

},[])
console.log(ans2);

