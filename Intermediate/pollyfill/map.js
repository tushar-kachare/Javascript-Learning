const arr = [1,2,3,4,5,5] 

function mymap(arr , callback) {
    let result = []
    for (let i = 0 ; i<arr.length ; i++) {
        result.push(callback(arr[i]))
    }
    return result;
}



Array.prototype.mymap = function (callback)  {
    let result = []
    for (let i = 0 ; i<this.length ; i++) {
        result.push(callback(this[i]))
    }
    return result;
}


console.log(arr.mymap((ele)=>{
    return 2*ele
}))


setTimeout(function (){
    console.log('x');
},5000)
for(let i = 0; i<10; i++) {
    setTimeout(function () {
        console.log(i);
    },i*1000)
}
console.log("HI");
