// 1
function currentDate() {
    var date = new Date();
    return date;
}
alert(currentDate());

// 2
var fName = prompt("Enter first name.");
var lName = prompt("Enter last name.");

alert(`Hello, ${fName} ${lName}`);

// 3
function sums() {
    a = +prompt("Enter first number.");
    b = +prompt("Enter second number.");
    return a + b;
}

alert(sums());

// 4
function operatorFunc(num1, num2, opr) {
    if (opr === "+") {
        return num1 + num2;
    } else if (opr === "-") {
        return num1 - num2;
    } else if (opr === "*") {
        return num1 * num2;
    } else if (opr === "/") {
        return num1 / num2;
    }
}

sums(operatorFunc(8, 6, "*"));

// 5
function squareOf(a) {
    return a**2;
}
alert(squareOf(7));

// 6
function factorialOf(n) {
    if (n >= 0) {
        if (n == 0 || n == 1) {
            return 1;
        } else if (n > 1) {
            return n * factorialOf(n - 1);
        }
    } else {
        return `Enter a valid positive number, you entered: ${n}`;
    }
}

alert(factorialOf(5));

// 7
function count(st, sp) {
    for (var i = st; i < sp+1; i++) {
        console.log(i);
    }
}

count(-181, 10);

// 8
function calculateHypotenuse(base, perp) {
    function calculateSquare(x) {
        return x**2;
    }
    hypoSq = calculateSquare(base) + calculateSquare(perp);
    hypo = (hypoSq)**(1/2);
    return hypo;
}

var userPerp = +prompt("Enter perpendicular value of triangle.");
var userBase = +prompt("Enter base value of triangle.");

alert(calculateHypotenuse(userBase, userPerp));

// 9
function area(w, h) {
    return w*h;
}
var height = 8;
var width = 3;
alert(area(2, 4));
alert(area(width, height));

// 10
function isPalindrome(x) {
    y = "";
    for (var i = x.length - 1; i >= 0; i--) {
        y += x[i];
    }
    if (x.toLowerCase() === y.toLowerCase()) {
        return true;
    }
    return false;
}

var userInput = prompt("Enter a string to check whether it's palindrome or not.");

if (isPalindrome(userInput)) {
        alert(`${userInput} is palindrome.`);
} else {
        alert(`${userInput} is not palindrome.`);
}
        
// 11
function toPascalCase(x) {
    for (var i = 0; i < x.length; i++) {
        if (i === 0) {
            x = x[i].toUpperCase() + x.slice(i+1);
        } else if (x[i] === " ") {
            x = x.slice(0, i+1) + x[i+1].toUpperCase() + x.slice(i+2);
        }
    }
    return x;
}
        
userInput = prompt("Enter a string to convert to pascal case.");
alert(toPascalCase(userInput));

// 12
function findLongWord(x) {
    var longestWord = "";
    for (var i = 0; i < x.length - 1; i++) {
        for (var j = i; j < x.length; j++) {
            if (x[j] == " " || j == x.length - 1) {
                if (x.slice(i, j).length > longestWord.length) {
                    longestWord = x.slice(i, j);
                }
                i = j;
                break
            }
        }
    }
    return longestWord;
}

alert(findLongWord("Web Development Tutorial"));

// 13
function countOccur(a, b) {
    var count = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b) {++count}
    }
    return count;
}

alert(countOccur("JSResourceS.com", "o"));

// 14
function calcCircumference(x) {return `The circumference is ${(2*Math.PI*x).toFixed(3)}`}
function calcArea(x) {return `The area is ${(Math.PI*x**2).toFixed(3)}`}

alert(calcCircumference(+prompt("Enter radius of circle to calculate circumference.")));
alert(calcArea(+prompt("Enter radius of circle to calculate area.")));