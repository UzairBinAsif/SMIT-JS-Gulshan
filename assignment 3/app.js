// 1
var userCity = prompt("Enter city name.");

if (userCity === "Karachi") {
    alert("Welcome to city of lights");
}

// 2
var userGender = prompt("Specify your gender.");

if (userGender.toLowerCase() === "male") {
    alert("Good Morning Sir.")
} else if (userGender.toLowerCase() === "female") {
    alert("Good Morning Ma'am.")
}

// 3
var signal = prompt("Enter the color of traffic signal.")
if (signal.toLowerCase() === "red") {
    alert("Must Stop")
} else if (signal.toLowerCase() === "yellow") {
    alert("Ready to move")
} else if (signal.toLowerCase() === "green") {
    alert("Move now")
}

// 4
var fuel = prompt("Enter your fuel in litres.")

if (fuel < 0.25) {
    alert("Please refill the fuel in your car")
}

// 5a
var a = 4; 
if (++a === 5){ 
alert("given condition for variable a is true"); 
}

// b
var b = 82; 
if (b++ === 83){ 
alert("given condition for variable b is true"); 
}

// c
var c = 12; 
if (c++ === 13){ 
alert("condition 1 is true"); 
} 
if (c === 13){ 
alert("condition 2 is true"); 
} 
if (++c < 14){ 
alert("condition 3 is true"); 
} 
if(c === 14){ 
alert("condition 4 is true"); 
}

// d
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
alert("The cost equals"); 
}

// e
if (true){ 
alert("True"); 
} 
if (false){ 
alert("False"); 
}

// f
if("car" < "cat"){ 
alert("car is smaller than cat"); 
}

// 6
var sub1 = Number(prompt("Enter subject1's marks."))
var sub2 = Number(prompt("Enter subject2's marks."))
var sub3 = Number(prompt("Enter subject3's marks."))
var total = Number(prompt("Enter total marks.", "300"))
obtMarks = sub1+sub2+sub3
var per = Math.round((obtMarks) / total * 100)

if (per >= 80) {
    alert(`Marks Sheet

Total Marks: ${total}
Marks Obtained: ${obtMarks}
Percentage: ${per}%
Grade: A-one
Remarks: Excellent`)
} else if (per >= 70) {
    alert(`Marks Sheet

Total Marks: ${total}
Marks Obtained: ${obtMarks}
Percentage: ${per}%
Grade: A
Remarks: Good`)
} else if (per >= 60) {
    alert(`Marks Sheet

Total Marks: ${total}
Marks Obtained: ${obtMarks}
Percentage: ${per}%
Grade: B
Remarks: You need to improve`)
} else {
    alert(`Marks Sheet

Total Marks: ${total}
Marks Obtained: ${obtMarks}
Percentage: ${per}%
Grade: Fail
Remarks: Sorry`)
}

// 7
var secretNum = 4;
var userSecretNumGuess = Number(prompt("Guess the secret number."))

if (userSecretNumGuess + 1 == secretNum) {
    alert("Close enough to the correct answer.")
} else if (userSecretNumGuess == secretNum) {
    alert("Bingo! Correct answer.")
} else {
    alert("Try again!")
}

// 8
var divisibleCheck = prompt("Enter a number to check.")

if (divisibleCheck) {
    if (divisibleCheck % 3 == 0) {
        alert(`${divisibleCheck} is divisible by 3.`)
    }
}

// 9
var checkEvenOdd = prompt("Enter a number.")

if (checkEvenOdd) {
    if(checkEvenOdd % 2 == 0) {
        alert("Given number is Even")
    } else {
        alert("Given number is Odd")
    }
}

// 10
var T = prompt("Enter Temperature:")

if (T) {
    if (T > 40) {
        alert("It is too hot outside.")
    } else if (T > 30) {
        alert("The Weather today is Normal.")
    } else if (T > 20) {
        alert("Today's Weather is cool.")
    } else if (T > 10 || T <= 10) {
        alert("“OMG! Today's weather is so Cool.")
    }
}

// 11
var firstNum = prompt("Enter first number.");
var secondNum = prompt("Enter Second number.");
var operation = prompt("Select operation (+, -, *, /, %).");
var result;

if (operation === "+") {
    result = Number(firstNum) + Number(secondNum)
    alert(result)
} else if (operation === "-") {
    result = Number(firstNum) - Number(secondNum)
    alert(result)
} else if (operation === "*") {
    result = Number(firstNum) * Number(secondNum)
    alert(result)
} else if (operation === "/") {
    result = Number(firstNum) / Number(secondNum)
    alert(result)
} else if (operation === "%") {
    result = Number(firstNum) % Number(secondNum)
    alert(result)
}