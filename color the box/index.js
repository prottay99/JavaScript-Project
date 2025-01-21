function getRandomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let mainColor = "#" + red.toString(16) + green.toString(16) + blue.toString(16);
    return mainColor;
}

document.querySelectorAll('.box').forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})