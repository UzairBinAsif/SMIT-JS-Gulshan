// 1
var a;
a = 10
document.write(`<p style="font-size: 1.5em;">
    Result:
<br>
    The value of a is ${a}</p>
<hr>
`)

document.write(`<p style="font-size: 1.5em;">
    The value of ++a is: ${++a}
<br>
    Now the value of a is: ${a}
</p>
<hr>
`)

document.write(`<p style="font-size: 1.5em;">
    The value of a++ is: ${a++}
<br>
    Now the value of a is: ${a}
</p>
<hr>
`)

document.write(`<p style="font-size: 1.5em;">
    The value of --a is: ${--a}
<br>
    Now the value of a is: ${a}
</p>
<hr>
`)

document.write(`<p style="font-size: 1.5em;">
    The value of a-- is: ${a--}
<br>
    Now the value of a is: ${a}
</p>
`)

// 2
var a = 2, b = 1; 
var result = --a - --b + ++b + b--;

document.write("<p style=\"font-size: 1.5em;\">a is ", a)
document.write("<br><p style=\"font-size: 1.5em;\">b is ", b)
document.write("<br><p style=\"font-size: 1.5em;\">result is ", result)

// Here a and b are initialized with the values 2 and 1 respectively.
// value of a is firstly pre-decremented so that JS uses it' value as `1`
// then, it's value of b is pre-decremented & becomes `0` which is then used
// Afterwards, the value of b is pre-incremented & becomes `1` again
// Lastly, the value of b is post-decremented, thus it uses `1` and makes it `2`

// the expression becomes (result = 1 - 0 + 1 + 1) resulting 3 as an answer.

// 3
var userName = prompt("Enter your name.")
alert(`Hello ${userName}`)


// 4
var userNum = +prompt("Enter a number whose table you want.", "5")

for (var i = 1; i < 11; i++) 
document.write(`${userNum} x ${i} = ${userNum * i}<br>`)

// 5
// a
var sub1 = prompt("Enter name of first subject.")
var sub2 = prompt("Enter name of second subject.")
var sub3 = prompt("Enter name of third subject.")

// b
var totalPerSubject = 100;

// c
var marksOfSub1 = +prompt("Enter marks of first subject.")
var marksOfSub2 = +prompt("Enter marks of second subject.")
var marksOfSub3 = +prompt("Enter marks of third subject.")

// e

var totalMarks = marksOfSub1 + marksOfSub2 + marksOfSub3;
var totalPercentage = (totalMarks * 100) / (totalPerSubject * 3)
var perOfSub1 = marksOfSub1 / totalPerSubject * 100
var perOfSub2 = marksOfSub2 / totalPerSubject * 100
var perOfSub3 = marksOfSub3 / totalPerSubject * 100

document.write(`
<table border>
    <tr style="text-align: center;">
        <th>Subject</th>
        <th>Total Marks</th>
        <th>Obtained Marks</th>
        <th>Percentage</th>
    </tr>
    <tr style="text-align: center;">
        <td>${sub1}</td>
        <td>${totalPerSubject}</td>
        <td>${marksOfSub1}</td>
        <td>${Math.round(perOfSub1)}%</td>
    </tr>
    <tr style="text-align: center;">
        <td>${sub2}</td>
        <td>${totalPerSubject}</td>
        <td>${marksOfSub2}</td>
        <td>${Math.round(perOfSub2)}%</td>
    </tr>
    <tr style="text-align: center;">
        <td>${sub3}</td>
        <td>${totalPerSubject}</td>
        <td>${marksOfSub3}</td>
        <td>${Math.round(perOfSub3)}%</td>
    </tr>
    <tr style="text-align: center;">
        <td></td>
        <td style="font-weight: bold;">${totalPerSubject * 3}</td>
        <td style="font-weight: bold;">${totalMarks}</td>
        <td style="font-weight: bold;">${Math.round(totalPercentage)}%</td>
    </tr>
   </table>
`)