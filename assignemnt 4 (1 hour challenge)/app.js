var correctAns = Math.round(Math.random() * 10);

for (var i;;i++) {
    if (correctAns == 0) {
        correctAns = Math.round(Math.random() * 10)
    } else {
        break
    }
}

alert("Welcome to Number Guessing Game.")

var userInput = prompt("Enter a number between (1 to 10)")

if (userInput) {
    if (userInput == correctAns) {
        alert("🎯 Correct!")
    } else if (Math.abs(userInput - correctAns) <= 2) {
        alert("Bas ek step door ho")
    } else if (Math.abs(userInput - correctAns) <= 4) {
        alert("thoda sa or try karo")
    } else if (Math.abs(userInput - correctAns) <= 6) {
        alert("qareeb ho rahe ho")
    } else if (Math.abs(userInput - correctAns) > 6) {
        alert("low guess hai")
    } else {
        alert("Number to enter karo")
    }
} else {
    alert("kuch to bolo 😥")
}