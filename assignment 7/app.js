//1
var multiArr = [[], [], []]
console.log("Empty Multidimensional Array:", multiArr)

//2
var matrix = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]]
console.log("Matrix pattern Array:", matrix)

//3
for (var i = 1; i < 11; i++) {
    console.log(i)
}

// 4
console.log("") // Only used for line break

var tableNum = prompt("Enter a number to show it's multiplication table.")
var tableLth = prompt("Enter the desired length for the table.")

for (var i = 1; i <= tableLth; i++) {
    console.log(`${tableNum} x ${i} = ${tableNum * i}`)
}

// 5
console.log("")
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

fruits.forEach(e => {
    console.log(e)
});


for (var i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`)
}

// 6
console.log("")
console.log('Counting:')
for (var i = 1; i <= 15; i++) {
    console.log(i);
}

console.log('Reverse Counting:')
for (var i = 10; i >= 1; i--) {
    console.log(i);
}

console.log('Even:')
for (var i = 0; i <= 20; i++) {
    if (i%2==0) {
        console.log(i)
    }

}

console.log('Odd:')
for (var i = 0; i <= 20; i++) {
    if (i%2!=0) {
        console.log(i)
    }
}

console.log('Series:')
for (var i = 2; i <= 20; i++) {
    if (i%2==0) {
        console.log(`${i}k`)
    }
}

// 7
console.log("")
var A = ["cake", "apple pie", "cookie", "chips", "patties"]
var usrChoice = prompt("Welcome to ABC bakery. What do you want to order?")
foundItem = false

A.forEach(e => {
    if (e == usrChoice) {
        for (var i = 0; i < A.length; i++) {
            if (A[i] == e) {
                var foundIndex = i
                foundItem = true
                break
            }
        }
        alert(`${usrChoice} is available at index ${foundIndex} in our bakery`)
    } else if (e == A[A.length - 1] && foundItem == false) {
        alert(`We are sorry. ${usrChoice} is not available in our bakery`)
    }
});

// 8
console.log("")
A = [24, 53, 78, 91, 12]

var largest = A[0]
for (var i = 0; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]
    }
}
console.log(largest)

// 9
console.log("")
A = [24, 53, 78, 91, 12]

var smallest = A[0]
for (var i = 0; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]
    }
}
console.log(smallest)

// 10
console.log("")
for (var i = 5; i < 101; i++) {
    if (i%5==0) {
        console.log(i);
    }
}