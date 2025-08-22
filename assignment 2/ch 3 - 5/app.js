// Ch 3
// 1
var age = 18;
alert(`I am ${age} years old`)

// 2
var count = localStorage.getItem('visitcount') || 0;
count++;
localStorage.setItem('visitcount', count);
alert(`You have visited this page ${count} times.`);

// 3
var birthYear = 2006
document.write(`My birth year is ${birthYear}<br>`)
document.write(`Datatype of my declared variable is ${typeof(birthYear)}<hr>`)

// 4
var visitorName = prompt("What is your name?")
var productName = prompt("What is your desired product's name?")
var productQuantity = prompt("How much quantity?")

document.write(`<b>${visitorName}</b> ordered <b>${productQuantity}</b> <b>${productName}</b>(s) on XYZ Clothing store`)

// Ch 4
// 1
var a = "123"; b = "abc"; c = 590;

console.log(a);
console.log(b);
console.log(c);

// 2
// LEGAL
var rashid = "Rashid";
var bilal_khan = true;
var $dollar = false;
var _underscore = 10;
var minhaj123 = Number();

// ILLEGAL
// var #rashid = "Rashid";
// var bilal khan = false;
// var for = "loop'sKeyword";
// var burger-king = "hyphenated";
// var 123minhaj = Number();

// 3
document.write("<h1>Rules for Naming Variables</h1>");
document.write("<br>");
document.write("A variable name can contain only letters, numbers, dollar signs, and underscores. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or _. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS Keywords<br>");

// Ch 5
// 1
var num1 = Number(prompt("Enter 1st number."));
var num2 = Number(prompt("Enter 2nd number."));
var add = num1 + num2;

document.write(`Sum of ${num1} and ${num2} is ${add} <br>`);

// 2
var sub = num1 - num2;
document.write(`Difference of ${num1} and ${num2} is ${sub} <br>`);
var mul = num1 * num2;
document.write(`Multiplication of ${num1} and ${num2} gives ${mul} <br>`);
var divs = num1 / num2;
document.write(`Division of ${num1} and ${num2} gives ${divs} <br>`);
var mod = num1 % num2;
document.write(`Modulus of ${num1} and ${num2} is ${mod} <br>`);
document.write("<br>")

// 3
var num3;
document.write(`Value after variable declaration is: ${num3} <br>`);
var num3 = 1;
document.write(`Initial Value: ${num3} <br>`);
num3++;
document.write(`Value after increment is: ${num3} <br>`);
num3 = num3 + 7;
document.write(`Value after addition is: ${num3} <br>`);
num3--;
document.write(`Value after decrement is: ${num3} <br>`);
num3 = num3 % 3;
document.write(`The remainder is: ${num3} <br>`);
document.write("<br>")

// 4
var price = 600;
var numOfTicket = 5;
var totalPrice = price * numOfTicket;
document.write(`Total cost to buy ${numOfTicket} tickets to a movie is ${totalPrice}PKR`);
document.write("<br>");

// 5
document.write("<br>Table of 4<br>")
for (var i = 1; i < 11; i++) {
    document.write(`4 x ${i} = ${4*i}<br>`)
}

// 6
var tempInC = Number(prompt("Enter the temperature in °C."));
var calculatedF = (tempInC * 9 / 5) + 32;
var tempInF = Number(prompt("Enter the temperature in °F."));
var calculatedC = (tempInF - 32) * 5 / 9;
document.write(`<br>${tempInC}°C = ${calculatedF}°F <br>`);
document.write(`${tempInF}°F = ${calculatedC}°C`);

// 7
var priceItem1 = 650;
var priceItem2 = 100;
var quantityItem1 = 3;
var quantityItem2 = 7;
var codCharges = 100;
var total = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + codCharges;
document.write(`<br><br>Price of item 1 is ${priceItem1}<br>`)
document.write(`Quantity of item 1 is ${quantityItem1}<br>`)
document.write(`Price of item 2 is ${priceItem2}<br>`)
document.write(`Quantity of item 2 is ${quantityItem2}<br>`)
document.write(`Shipping Charges ${codCharges}<br>`)
document.write(`Total cost of your order is ${total}`)

// 8
var totalMarks = 980;
var obtMarks = 804;
var per = obtMarks / totalMarks * 100;
document.write(`<br><br>Total Marks: ${totalMarks} <br>`)
document.write(`Obtained Marks: ${obtMarks} <br>`)
document.write(`Percentage: ${per}% <br>`)

// 9
var usdAmount = 10;
var riyalAmount = 25;
var totalPkrAmount = (usdAmount * 104.8) + (riyalAmount * 28);
document.write("<h1>Currency in PKR</h1><br>");
document.write(`Total Currency in PKR: ${totalPkrAmount}`);

// 10
var randomVar = 39;
randomVar = ((randomVar + 5) * 10) / 2;
console.log(randomVar);

// 11
var currentYear = 2025;
var birthYear2 = 1998;
document.write(`<br><br>Current Year: ${currentYear}<br>`)
document.write(`Birth Year: ${birthYear2} <br>`)
document.write(`Your Age is: ${currentYear - birthYear2} <br>`)

// 12
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius ** 2;
document.write("<h1>The Geometrizer</h1><br>");
document.write(`Radius of a circle: ${radius}<br>`);
document.write(`The Circumference is: ${circumference}<br>`);
document.write(`The Area is ${area}<br>`);

// 13
var favSnack = "cookie";
var currentAge = 18;
var maxAge = 88;
var snackPerDay = 4;
var totalSnacks = snackPerDay * 365.25 * (maxAge - currentAge);

document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write(`Favourite Snack: ${favSnack}<br>`);
document.write(`Current age: ${currentAge}<br>`);
document.write(`Estimated maximum age: ${maxAge}<br>`);
document.write(`Amount of snacks per day: ${snackPerDay}<br>`);
document.write(`You will need ${Math.floor(totalSnacks)} ${favSnack}(s) to last you\
 until the ripe old age of ${maxAge}`);