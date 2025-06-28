const AllButtons = document.querySelectorAll('div')
const Body = document.body

AllButtons.forEach((color) => {
    color.addEventListener('click' ,(e)=> {
        const Text = color.innerText
        console.log(Text);
        Body.style.backgroundColor = Text

    })
})


