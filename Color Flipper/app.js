function changeColor() {
    let span = document.getElementById("color-span");
    let colorArr = ["red", "blue", "green", "yellow", "pink", "purple", "white"];    
    let randomColor = colorArr[Math.abs(Math.round(Math.random() * colorArr.length-1))];
    span.innerText = randomColor;
    span.style.color = randomColor;
    document.body.style.backgroundColor = randomColor;
}

function changeHex() {
    let span = document.getElementById("color-span");
    colorArr = ["#ff0000", "#0000ff", "#008000", "#ffff00", "#ffc0cb", "#800080", "#ffffff"];
    let randomColor = colorArr[Math.abs(Math.round(Math.random() * colorArr.length-1))];
    span.innerText = randomColor;
    span.style.color = randomColor;
    document.body.style.backgroundColor = randomColor;
}