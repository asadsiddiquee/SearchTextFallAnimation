const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})

function createText () {
    const Text = document.createElement('div');
    Text.classList.add('Text');
    Text.style.left = Math.random()*100 +"vw";
    Text.style.animationDuration = Math.random()* 2 + 3 + "s";
    Text.innerText = input.value;
    document.body.appendChild(Text);
    setTimeout(() => {
        Text.remove();
    }, 5000)
} 

setInterval(createText,300);