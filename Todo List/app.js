function addTodo() {
    let todoList = document.getElementById("todo-list")
    let userTitle = document.getElementsByClassName("user-title")
    let userDesc = document.getElementsByClassName("user-desc")

    if (userTitle[0].value.trim() == "") {
        Swal.fire({
            title: "Title?",
            text: "please enter a value for title",
            icon: "question"
          });
    } else if (userDesc[0].value.trim() == "") {
        Swal.fire({
            title: "Description?",
            text: "please enter a value for Description",
            icon: "question"
          });
    } else {
        todoList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-start">
                  <div class="ms-2 me-auto">
                    <div class="fw-bold">${userTitle[0].value}</div>
                    ${userDesc[0].value}
                  </div>
                  <span class="badge bg-warning rounded-pill"><i onclick="delSingleTodo()" class="fa-solid fa-trash-can"></i></span>
                </li>`
        userTitle[0].value = "";
        userDesc[0].value = "";
    }
}

function delSingleTodo() {
    event.target.parentElement.parentElement.remove();
}

function delAllTodo() {
    event.target.previousElementSibling.innerHTML = "";
}