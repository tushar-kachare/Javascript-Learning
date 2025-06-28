let ComputerChoice;
let PrevGuesses = []
const GenerateAns = () => { // Generate answer
    ComputerChoice = Math.round(Math.random()*100)
}
GenerateAns(); 

function Start(Result,TrialDiv,GuessList) { // Start with beginning
    Trials = 10
    TrialDiv.innerHTML = Trials;
    GuessList.innerHTML = '';
    GenerateAns()
}

// console.log(ComputerChoice);

const Submit = document.querySelector('#Submit'); // submit button

let Trials = 10;
document.querySelector('#Ans').innerHTML = Trials

function CheckGuess(Guess,Result) { // check Number with Correct ans
    if (Guess === ComputerChoice) {
        Result.innerHTML = `You Won !!! Correct Choice: ${Guess}`;
        return true
    }
    if ( Guess < ComputerChoice) {
        Result.innerHTML = "Ans is Greater than your Guess !!"
    }
    else {
        Result.innerHTML = "Ans is Less than your Guess !!"
    }
    return false;
}


Submit.addEventListener('click', function(e){

    const Result = document.querySelector('#Result')
    const TrialDiv = document.querySelector('#Ans') // to show number of trials remianing
    const GuessList = document.querySelector('#GuessList') // to show previous guesses

    if (Trials < 0) { // trails are completed
        Result.innerHTML = `Trails are Completed! You Lost! Correct ans was ${ComputerChoice}`
        Start(Result,TrialDiv,GuessList)
        GenerateAns();
    }

    else {
        const Guess = Number(document.querySelector('#Number').value) // take input of guess
        if (isNaN(Guess)) {
            Result.innerHTML = 'Enter a Valid Number !!'
            Trials++;
        }
        else {
            const Check = CheckGuess(Guess,Result) // check the number with ComputerGuess
            if(!Check) {
                PrevGuesses.push(Guess);
            }
            else {
                Start(Result,TrialDiv,GuessList)
            }
        }
    }

    TrialDiv.innerHTML = `${Trials}` 
    Trials -=1

    if(PrevGuesses.length > 0) {
        for (let i = 0; i < PrevGuesses.length; i++) {
            GuessList.innerHTML += `${PrevGuesses[i]}, ` // show in PrviousGuess list
        }
    }
    PrevGuesses.length = 0
})