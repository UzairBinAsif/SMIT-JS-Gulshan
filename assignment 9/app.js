// 1
var inputNum = prompt("Enter a positive number.")
alert(`number: ${inputNum}
round off value: ${Math.round(inputNum)}
floor value: ${Math.floor(inputNum)}
ceil value: ${Math.ceil(inputNum)}`)

// 2
var inputNum2 = prompt("Enter a positive number.")
alert(`number: ${inputNum2}
round off value: ${Math.round(inputNum2)}
floor value: ${Math.floor(inputNum2)}
ceil value: ${Math.ceil(inputNum2)}`)

// 3
var inputForAbs = +prompt("Enter a number.")
alert(`The Absolute value of ${inputForAbs} is ${Math.abs(inputForAbs)}`)

// 4
var dice = Math.round(Math.random() * 5) + 1
alert(`random dice value: ${dice}`)

// 5
var coinToss = Math.round(Math.random()) + 1
alert(`${coinToss}
random coin value: ${coinToss == 2 ? "Heads" : "Tails"}`)

// 6
alert(`random number between 1 and 100: ${Math.ceil(Math.random() * 100)}`)

// 7
var userWeight = prompt("Enter your weight.")
alert(`The weight of user is ${parseFloat(userWeight)} kilograms.`)

// 8
var pcGuess = Math.ceil(Math.random() * 10)
var userGuess = prompt("Enter a number between 1 and 10.")
alert(userGuess == pcGuess ? "Congratulations! you guessed correctly" : "Try again!")