// 1
function power(a, b) {
    return a**b;
}
console.log(power(3, 2));

// 2
function checkLeap(x) {
    if (x % 400 == 0) {
        return true;
    } else if ((x % 4 == 0) && (x % 100 != 0)) {
        return true;
    }
    return false;
}

if (checkLeap(2024)) {
    console.log("It's leap year");
} else {
    console.log("It isn't leap year");
}

// 3
function S(a, b, c) {
    return (a + b + c) / 2;
}
function area(a, b, c) {
    var s = S(a, b, c);
    return (s * (s - a) * (s - b) * (s - c));
}

console.log(area(1, 2, 2));

// 4
function average(x, y, z) {
    return (x + y + z) / 3;
}

function percentage(x, y, z, tot) {
    return (((x + y + z) * 100) / tot);
}

function mainFunction(sub1, sub2, sub3, totalMarks) {
    return `Average: ${average(sub1, sub2, sub3)}
Percentage: ${percentage(sub1, sub2, sub3, totalMarks)}`;
}

// can also change totalMarks' argument value if each subject's marks aren't 100.
console.log(mainFunction(43, 87, 72, 300));

// 5
function customIndexOf(str, subStr) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === subStr) {
            return i;
        }
    }
    return -1;
}

var str = "wxyandz";
console.log(customIndexOf(str, "d"));

// 6
function remVowel(str) {
    for (var i = 0; i < str.length; i++) {
        v = str[i];
        if ((v.toLowerCase() === "a") || (v.toLowerCase() === "e") || (v.toLowerCase() === "i") || (v.toLowerCase() === "o") || (v.toLowerCase() === "u")) {
            str = str.slice(0, i) + str.slice(i + 1);
            --i;
        }
    }
    return str;
}
console.log(remVowel("aeioxpDpEros"));

// 7
function countVowelOccur(str) {
    var vowelArr = ["a", "e", "i", "o", "u"];
    var combinedVowelArr = new Array();
    var ocurrences = new Array();
    var twoIndicies = "";
    
    for (var i = 0; i < vowelArr.length; i++) {
        for (var j = 0; j < vowelArr.length; j++) {
            combinedVowelArr.push(vowelArr[i] + vowelArr[j]);
        }
    }
    
    for (var i = 0; i < str.length; i++) {
        twoIndicies = str.slice(i, i + 2);
        for (var j = 0; j < combinedVowelArr.length; j++) {
            switch (twoIndicies.toLowerCase()) {
            case (combinedVowelArr[j]):
                ocurrences.push(combinedVowelArr[j]);
            }
        }
    }
    return ocurrences;
}
var testString = "Pleases read this application and give me gratuity";

console.log(`Such Occurrences are ${countVowelOccur(testString).join(", ")}.`);

// 8
function kmToMeter(d) {
    return d * 1000;
}
function kmToFeet(d) {
    return d * 3280.8399;
}
function kmToInch(d) {
    return d * 39370.0787;
}
function kmToCentimeter(d) {
    return d * 100000;
}
var userInputDist = +prompt("Enter distance in kilometers.");
alert(`Distance in meters: ${kmToMeter(userInputDist)}
Distance in feet: ${kmToFeet(userInputDist)}
Distance in inches: ${kmToInch(userInputDist)}
Distance in centimeter: ${kmToCentimeter(userInputDist)}`);

// 9
function calcOvertime() {
    var totalTime = prompt("Enter the total time the employee has worked (in hr).");
    if (totalTime <= 40) {
        alert(`No Overtime
Overtime Pay = Rs. 0.00`)
    } else if (totalTime > 40) {
        var ratePerHr = 12.00;
        var OverTimeHrs = Math.floor(totalTime) - 40;
        var overTime = OverTimeHrs * ratePerHr;
        alert(`Overtime Pay = Rs. ${overTime.toFixed(2)}`) 
    } else {
        alert("Enter a valid number.")
    }
}
calcOvertime();

// 10
function checkDenomination() {
    var x = prompt("Enter amount to withdraw!")
    var hundredCount = 0;
    var fiftyCount = 0;
    var tenCount = 0;
    if (x) {
        while (x > 0) {
            if ((x - 100) >= 0) {
                hundredCount++;
                x -= 100;
            } else if ((x - 50) >= 0) {
                fiftyCount++;
                x -= 50;
            } else if ((x - 10) >= 0) {
                tenCount++;
                x -= 10;
            } else {
                x--;
            }
        }
        return `You will have ${hundredCount} hundred notes, ${fiftyCount} fifty notes ${tenCount} ten notes`;
    } else {
        return "Please enter a valid number.";
    }
}

alert(checkDenomination());