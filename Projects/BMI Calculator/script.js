const form = document.querySelector('form')
// console.log(form);



form.addEventListener('submit' , (e)=> {
    e.preventDefault()
    const Result = document.querySelector('#result')
    Result.textContent = '' 
    const Height = Number(document.querySelector('#HeightNumber').value)/100
    const Weight = Number(document.querySelector('#WeightNumber').value)
    // console.log(Height,Weight);
    
    const ans = (Weight / (Height ** 2)).toFixed(2)
    if(isNaN(ans)) {
        Result.appendChild(document.createTextNode(`Enter a valid Number for Height and Weight`));
    } 
    else Result.appendChild(document.createTextNode(`Your BMI is ${ans} kg/m²`));
});