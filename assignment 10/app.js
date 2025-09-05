// 1
var date = new Date();
alert(date);

// 2
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[date.getMonth()];
alert(`Current month: ${currentMonth}`);

// 3
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = days[date.getDay()].slice(0, 3);
alert(`Today is: ${currentDay}`);

// 4
currentDay = days[date.getDay()];
if (currentDay.toLowerCase() === "saturday" || currentDay.toLowerCase() === "sunday") {
    alert("It's Fun day");
}

// 5
var currentDate = date.getDay();
if (currentDate < 16) {
    alert("First fifteen days of the month");
} else {
    alert("Last days of the month");
}

// 6
var date = new Date();
var timeTillJan70 = new Date().getTime();
alert(`Current Date: ${date}
Elapsed milliseconds since January 1, 1970: ${timeTillJan70}
Elapsed minutes since January 1, 1970: ${(timeTillJan70 / (1000 * 60)).toFixed(2)}`);

// 7
var currentHrs = date.getHours();
if (currentHrs < 12) {
    alert("It's AM");
} else {
    alert("It's PM");
}

// 8
var laterDate = new Date("Dec 31 2020");
alert(`Later Date ${laterDate}`);

// 9
var ramadanDate = new Date("Mar 01 2025");
var ramadanMillisec = new Date().getTime() - ramadanDate.getTime();

alert(`${Math.floor(ramadanMillisec / (1000 * 60 * 60 * 24))} days have past since 1st Ramadan, 2025`);

// 10
var refDate = new Date();
var refDateMillisec = refDate.getTime() - new Date("2015").getTime();
alert(`${Math.round(refDateMillisec / (1000))} seconds had passed since beginning of 2015`);

// 11
date = new Date();
var pastHourDate = new Date();
pastHourDate.setHours(date.getHours() - 1);
alert(`current date: ${date}
1 hour ago, it was ${pastHourDate}`);

// 12
date = new Date();
var past100YearsDate = new Date();
past100YearsDate.setFullYear(date.getFullYear() - 100);
alert(`current date: ${date}
100 years back, it was ${past100YearsDate}`);

// 13
var userAge = prompt("Enter your age.");
var userYear = new Date();
userYear = userYear.getFullYear() - +userAge;
alert(`Your age is ${userAge}
Your birth year is ${userYear}`);

// 14
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentMonth = months[date.getMonth()];
var units = 410;
var chargesPerUnit = 16;
var lateCharge = 350;
var netAmount = units * chargesPerUnit;

document.write(`<h1>K-E1ectric Bill</h1>
Customer Name: <b>ABC Customer</b><br>
Month: <b>${currentMonth}</b><br>
Number of units: <b>${units.toFixed(2)}</b><br>
Charges per unit: <b>${chargesPerUnit.toFixed(2)}</b><br><br>
Net Amount Payable (within Due Date): <b>${netAmount.toFixed(2)}</b><br>
Late payment surcharge: <b>${lateCharge.toFixed(2)}</b><br>
Gross Amount Payable (after Due Date): <b>${(netAmount + lateCharge).toFixed(2)}</b>`);