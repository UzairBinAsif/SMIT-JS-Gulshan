function delR(n) {
    document.getElementById(n).remove();
}

function calc(x) {
    if (x.innerHTML == "+") {
        y = document.getElementById("count-value").innerHTML;
        var count =  Number(y);
        count += 1;
        document.getElementById("count-value").innerHTML = count;
    } else if (x.innerHTML == "-") {
        y = document.getElementById("count-value").innerHTML;
        var count =  Number(y);
        count -= 1;
        document.getElementById("count-value").innerHTML = count;
    }
}