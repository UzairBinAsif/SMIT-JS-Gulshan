// 1
var itemsArray = [ 
    {name:"juice",price:"50", quantity:"3"}, 
    {name:"cookie",price:"30", quantity:"9"}, 
    {name:"shirt",price:"880", quantity:"1"}, 
    {name:"pen",price:"100", quantity:"2"}
];

for (var i = 0; i< itemsArray.length; i++) {
    console.log(`Price of ${itemsArray[i].name} is ${itemsArray[i].price} and ${itemsArray[i].quantity} items are available`)
}

// 2
let data = {
    name: "Dawood",
    email: "abc@xyz.com",
    password: "7878789",
    age: 19,
    gender: "Male",
    city: "Karachi",
    country: "Pakistan"
}

if(data.age && data.country) {
        console.log("Both age and country properties exist!")
} else if (data.age) {
    console.log("age property does not exist!")
} else if (data.country) {
    console.log("country property does not exist!")
} else {
    console.log("Both age and country properties does not exist!")
}

if(data.firstName && data.lastName) {
        console.log("Both firstName and lastName properties exist!")
} else if (data.firstName) {
    console.log("firstName property does not exist!")
} else if (data.lastName) {
    console.log("lastName property does not exist!")
} else {
    console.log("Both firstName and lastName properties does not exist!")
}

// 3
function letructCar(name, model, yearOfManufacturing) {
    this.name = name,
    this.model = model,
    this.yearOfManufacturing = yearOfManufacturing
}

let car1 = new letructCar("Tesla", "X", 2023)
let car2 = new letructCar("Mercedes", "Benz", 2019)
console.log(car1)
console.log(car2)

// 4
function CreateRecord(name, gender, adr, edu, profession) {
    this.name = name
    this.gender = gender
    this.adr = adr
    this.edu = edu
    this.profession = profession
}

let records = new Array();

function submitForm() {
    event.preventDefault()
    let span = document.getElementById('span')
    let name = document.getElementById('Name').value;
    let gender = document.getElementById('Gender').value;
    let address = document.getElementById('Address').value;
    let education = document.getElementById('Education').value;
    let profession = document.getElementById('Profession').value;
    
    let person = new CreateRecord(name, gender, address, education, profession);
    records.unshift(person)
    console.log(records)

    for (let i = 0; i < records.length; i++) {
        span.innerText = records[i]
        console.log(records)
    }

    span.innerText = "check console log"
    name.value = ""
    gender.value = ""
    address.value = ""
}