let inputValue = document.getElementById('input-1');

let result = "";

Array.from(document.querySelectorAll('button')).forEach(button=>{
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            result = eval(result);
        } else if (e.target.innerHTML.toLowerCase() == "x") {
            result += "*";
        } else if (e.target.innerHTML == "÷") {
            result += "/";
        } else if (e.target.innerHTML == "AC") {
            result = "";
        } else if (e.target.innerHTML == "⌫") {
            result = result.slice(0, result.length - 1);
        } else {
            result += e.target.innerHTML;
        }
        inputValue.value = result;
    })
})
