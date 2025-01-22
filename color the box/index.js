// use any selector
// let boxes = document.querySelector('.container').children;
// or use
// let boxes = document.querySelectorAll('.box')
// or use
let boxes = document.getElementsByClassName('box')


function getRandomColor() {
    let red = Math.ceil(0 + Math.random() * 255);
    let green = Math.ceil(0 + Math.random() * 255);
    let blue = Math.ceil(0 + Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    e.style.Color = getRandomColor();
})