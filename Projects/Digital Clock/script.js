
// when you click on Banner Time will be displayed but it will not continiously display single time on click
// document.body.querySelector('#Banner').addEventListener('click', (e) => {
//     const Time = document.querySelector('#Time')
//     console.log(Time);
//     const CurrDate = new Date()
//     const CurrTime = CurrDate.toLocaleTimeString()

//     Time.innerHTML =  CurrTime
// });


// if you want to display time dynamically every second then follow second method

const getTime = ()=> {
    const Time = document.querySelector('#Time')
    const CurrTime = new Date().toLocaleTimeString()

    Time.innerHTML = CurrTime
}
// after particular interval it runs js that is
setInterval(getTime,1000) // second parameter is milisecond so 1000 milisecond