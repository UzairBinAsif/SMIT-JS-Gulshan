// 1. i.
let mainContent = document.getElementById("main-content")

// ii.
for (var i = 0; i < mainContent.children.length; i++) {
    console.log(mainContent.children[i])
}

// iii.
let renderContent = document.getElementsByClassName("render");
for (var i = 0; i < renderContent.length; i++) {
    document.write(`${renderContent[i].innerHTML}<br>`)
}

// iv.
document.getElementById("first-name").value = "Uzair"

// v.
document.getElementById("last-name").value = "Bin Asif"
document.getElementById("email").value = "shaikh123@gmail.com"

// 2
// i.
document.write(`${document.getElementById("form-content").nodeType}<br>`)

// ii.
document.write(`${document.getElementById("lastName").nodeType}<br>`)
document.write(`${document.getElementById("lastName").childNodes[0].nodeType}<br>`)

// iii.
document.write(`${document.getElementById("lastName").childNodes[0] = "Last Name: Hoytt"}<br>`)

// iv.
console.log("First Child ->", mainContent.firstElementChild)
console.log("Last Child ->", mainContent.lastElementChild)

// v.
console.log("Previous Sibling ->", document.getElementById("lastName").previousElementSibling)
console.log("Next Sibling ->", document.getElementById("lastName").nextElementSibling)

// vi.
console.log("Parent Node ->", document.getElementById("email").parentNode)
console.log("Node Type ->", document.getElementById("email").nodeType)