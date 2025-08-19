// 1
var studentNamesLiteral = []

// 2
var studentNamesObject = []

// 3
var stringArr = ["a", "b", "c", "d", "e"]

// 4
var numArr = [1, 2, 3, 4, 5]

// 5
var booleanArr = [true, false, true, true, false]

// 6
var mixedArr = [1, "a", false, 980, true, "z"]

// 7
var qualificationsList = ["SSC", "HSC", "BCS", "BE", "BS", "BArch.", "BCOM", "ME","MS", "M.phil.", "PhD"]
console.log("Qualifications:");
console.log(""); // for line break

var temp = 1;
qualificationsList.forEach(e => {
    for (var i = temp; i <= qualificationsList.length;) {
        console.log(`${i}) ${e}`);
        break
    }
    temp++
});
console.log("");

// 8
var names = ["Michael", "John", "Tony"]
var scores = [320, 230, 480]

for (var j = 0; j < names.length; j++) {
    for (var k = 0; k < scores.length; k++) {
        console.log(`Score of ${names[j]} is ${scores[j]}. Percentage: ${scores[j] / 500 * 100}%`);
        break
    }
}
console.log("");

// 9
var colorArr = ["Red", "Yellow", "Green"]
alert(colorArr);

// a
var userColorChoice = prompt('What color do you want to add to the beginning?');
colorArr.unshift(userColorChoice);
alert(colorArr);

// b
userColorChoice = prompt('What color do you want to add to the end?');
colorArr.push(userColorChoice);
alert(colorArr);

// c
colorArr.unshift("Magenta", "Violet");
alert(colorArr);

// d
colorArr.shift();
alert(colorArr);

// e
colorArr.pop();
alert(colorArr);

// f
var userIndexChoice = prompt('At what index you want to add another color?');
userColorChoice = prompt('What color do you want to add to that index?');
colorArr.splice(userIndexChoice, 0, userColorChoice);
alert(colorArr);

// g
userIndexChoice = prompt('At what index you want to start deleting colors?');
var deleteCount = prompt('How many colors you want to delete?');
colorArr.splice(userIndexChoice, deleteCount);
alert(colorArr);

// 10
var studentScores = [1,2,3,4,2,1,4,4,3,1,2];
console.log("Scores of Students:", studentScores);
console.log("Ordered Scores of Students:", studentScores.sort());
console.log("");

// 11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log(`Cities List: ${cities}`);
console.log(`Selected Cities List: ${cities.slice(2, 4)}`);
console.log("");

// 12
var arr = ["This", "is", "my", "cat"];
console.log(`String ${arr}`);
var arrToStr = arr.join(" ");
console.log(`String ${arrToStr}`);

// 13
var fifoArr = []
fifoArr.push("keyboard")
fifoArr.push("mouse")
fifoArr.push("printer")
fifoArr.push("monitor")

console.log("Devices:", fifoArr)
console.log("Out:", fifoArr.shift())
console.log("Out:", fifoArr.shift())
console.log("Out:", fifoArr.shift())
console.log("Out:", fifoArr.shift())

// 14
var lifoArr = []
lifoArr.push("keyboard")
lifoArr.push("mouse")
lifoArr.push("printer")
lifoArr.push("monitor")

console.log("Devices:", lifoArr)
console.log("Out:", lifoArr.pop())
console.log("Out:", lifoArr.pop())
console.log("Out:", lifoArr.pop())
console.log("Out:", lifoArr.pop())

// 15
var manufacturersArr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

manufacturersArr.forEach(e => {
    document.write(e)
});