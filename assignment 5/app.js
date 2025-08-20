// 1
var userInput = prompt("Enter a character (Number or String).")
asciiCode = userInput.charCodeAt(0)

if (48 <= asciiCode && asciiCode <= 57) {
    alert("Character is a number.")
} else if (65 <= asciiCode && asciiCode <= 90) {
    alert("Character is an Upper Case Letter.")
} else if (97 <= asciiCode && asciiCode <= 122) {
    alert("Character is a Lower Case Letter.")
}

// 2
var num1 = prompt("Enter 1st number.")
var num2 = prompt("Enter 2nd number.")

if (num1 == num2) {
    alert("Both numbers are equal.")
} else if (num1 > num2) {
    alert(`${num1} is larger`)
} else if (num1 < num2) {
    alert(`${num2} is larger`)
}

// 3
var userChoice = prompt("Enter a number to check.")

if (userChoice === "") {
    alert("Please provide any input.")
} else if (userChoice == 0) {
    alert("Number is Zero.")
} else if (userChoice > 0) {
    alert("Number is Positive.")
} else if (userChoice < 0) {
    alert("Number is Negative.")
} else {
    alert("Provided input is Not a Number.")
}

// 4
var checkVowel = prompt("Enter a singular string (i.e. of length 1)")
var c = checkVowel.toLowerCase()

if (checkVowel.length == 1){
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
        alert(true)
    } else {
        alert(false)
    }
} else {
    alert("Provide SINGLE String only!")
}

// 5
var correctPass = "@bCSS3"
var userPass = prompt("Enter your password in correct format (password = @bCSS3 for checking only).")

if (userPass) {
    if (userPass === correctPass) {
        alert("Correct! The password you entered matches the original password")
    } else {
        alert("Incorrect password")
    }
} else {
    alert("Please Enter your password")
}

// 6
var greeting; 
var hour = 13; 
if (hour < 18) { 
greeting = "Good day";
} 
else {
greeting = "Good evening"; 
}

// 7
var time = prompt("What time is it? (e.g. 05:31pm = 1731)");

if (time >= 0o000 && time < 1200) {
    alert("Good Morning!")
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!")
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!")
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!")
}