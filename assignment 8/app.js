// 1
var firstName = prompt("Enter your first name.");
var lastName = prompt("Enter your last name.");

var fullName = firstName + " " + lastName;
alert(`Hello, ${fullName}!`);

// 2

var userPhone = prompt("What's your favourite phone's model?");

alert(`My Favourite phone is: ${userPhone}\nLength of String: ${userPhone.length}`);

// 3
var word = "Pakistani";
for (var i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() === "n") {
        alert(`String: ${word}\nindex of 'n': ${i}`);
    }
}

// 4
var word2 = "Hello World";
alert(`String: ${word2}\nLast index of 'l': ${word2.lastIndexOf("l")}`);

// 5
var word3 = "Pakistani";
alert(`String: ${word3}\nCharacter at index '3': ${word3.charAt(3)}`);

// 6
var firstName = prompt("Enter your first name.");
var lastName = prompt("Enter your last name.");
lastName = " " + lastName;

var fullName = firstName.concat(lastName);
alert(`Hello, ${fullName}!`);

// 7
var initialWord = "Hyderabad";
for (var i = 0; i < initialWord.length; i++) {
    if (initialWord.slice(i, i + 5).toLowerCase() === "hyder") {
        var finalWord = "Islam".concat(initialWord.slice(i + 5));
    }
}

alert(`City ${initialWord}\nAfter replacement: ${finalWord}`);

// 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
var modifiedMsg = message.replaceAll("and", "&");
alert(`String before: ${message}\nString After: ${modifiedMsg}`);

// 9
var str1 = "472";
var str2 = +str1;
alert(`Value: ${str1}\nType: ${typeof(str1)}\nValue: ${str2}\nType: ${typeof(str2)}`);

// 10
var userInputToUpper = prompt("Enter a text to convert to capital letters.");
alert(`User Input: ${userInputToUpper}\nUpper case: ${userInputToUpper.toUpperCase()}`);

// 11
var userInputToTitle = prompt("Enter text to capitalize.");
var x = userInputToTitle;

for (var i = 0; i < userInputToTitle.length; i++) {
    if (i == 0) {
        userInputToTitle = userInputToTitle[i].toUpperCase() + userInputToTitle.slice(i + 1);
    }
    else if (userInputToTitle[i] == " ") {
        userInputToTitle = userInputToTitle.slice(0, i + 1) + userInputToTitle[i + 1].toUpperCase() + userInputToTitle.slice(i + 2);
    }
}

alert(`User Input: ${x}\nTitle case: ${userInputToTitle}`);

// 12
var num = 35.36;
var initialNum = num;
num = String(num);
num = num.replace(".", "");

alert(`Number: ${initialNum}\nResult: ${num}`);

// 13
var userName = prompt("Enter your name.");
var arr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", "{", "}", ";", ":", "'", "\"", "\\", "|", ",", ".", "<", ">", "/", "?"];
var arr2 = Array();
var isValid = true;

for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i].charCodeAt(0));
}

if (userName) {
    arr2.forEach(e => {
        for (var i = 0; i < userName.length; i++) {
            if (userName[i].charCodeAt(0) == e) {
                isValid = false;
            }
        }
    });

    if (isValid) {
        alert("Username is ok.");
    } else {
        alert("Please Enter a valid username.");
    }
}

// 14

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userSearch = prompt("Welcome to ABC Bakery, what do you want to order Sir/Ma'am?");
var foundIndex = false;

A.forEach(e => {
    if (e === userSearch.toLowerCase()) {
        for (var i = 0; i < A.length ; i++) {
            if (A[i] === e) {
                var index = i;
                foundIndex = true;
                break;
            }
        }
        alert(`${e} is available at index ${index} in our bakery`);
    } else if (e === A[A.length - 1] && foundIndex === false) {
        alert(`We are sorry. ${userSearch} is not available in our bakery`);
    }
})

// 15
var userPass = prompt("Make a strong password.");

if (!(userPass[0] >= "0" && userPass[0] <= "9")) {
    if (userPass.length >= 6) {
        var hasAlpha = false;
        var hasNum = false;
        for (var i = 0; i < userPass.length; i++) {
            var code = userPass[i].charCodeAt(0);
            if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
                hasAlpha = true;
            }
            if (code >= 48 && code <= 57) {
                hasNum = true;
            }
        }
        if (hasAlpha && hasNum) {
            alert(`Entered Password: ${userPass}\nPassword is ok`);
        } else {
            alert(`Entered Password: ${userPass}\nPassword must contain a number and alphabet\nPlease enter a valid password`);
        }
    } else {
        alert(`Entered Password: ${userPass}\nPassword must be at least 6 characters long\nPlease enter a valid password`);
    }
} else {
    alert(`Entered Password: ${userPass}\nPassword cannot begin with a number\nPlease enter a valid password`);
}

// 16
var university = "University of Karachi";
university = university.split("");
university.forEach(e => {
    document.write(`${e} <br>`);
});

// 17
var checkLast = prompt("Enter name of a country.");
alert(`User input: ${checkLast}\nLast character of input: ${checkLast[checkLast.length - 1]}`);

// 18
var quote = "The quick brown fox jumps over the lazy dog";
var count = 0;

for (var i = 0; i < quote.length; i++) {
    if (quote.slice(i, i + 3).toLowerCase() === "the") {
        count += 1;
    }
}
alert(`Text: ${quote}\nThere are ${count} occurrence(s) of the word 'the'`)