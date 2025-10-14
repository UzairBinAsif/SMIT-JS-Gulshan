function checkForm(e, p) {
    var email = document.getElementById(e);
    var pass = document.getElementById(p);

    if (email.value == "") {
        alert("Please provide email!")
    } else if (pass.value == "") {
        alert("Please provide password!")
    } else {
        var form = document.getElementsByTagName("form")[0];
        form.style.cssText = "display: none;"
        
        document.getElementById('showEmail').innerHTML = `Email: ${email.value}`;
        document.getElementById('showPass').innerHTML = `Password: ${pass.value}`;
    }
}

function seeMore(s) {
    let seeBtn = document.getElementById(s)
    if(seeBtn.innerHTML == "See more") {
        event.target.previousElementSibling.innerHTML += 'Facilis accusamus dolores ducimus sed harum voluptates nobis error esse reiciendis quibusdam nulla, nisi est nihil quia a! Ipsum fugiat itaque nam inventore id totam excepturi, officia iste suscipit? Asperiores nemo facilis amet laudantium sed saepe tenetur, earum fuga enim quae rerum ipsam? Impedit rem labore, itaque explicabo, accusamus ullam accusantium possimus quibusdam inventore repudiandae provident assumenda. Reiciendis, quod error. Voluptates nam, laboriosam harum, corrupti, dicta accusamus possimus inventore officiis officia minima pariatur ratione eius placeat atque dolor natus quis? Repellendus, repudiandae excepturi numquam saepe recusandae culpa eius nulla mollitia quia voluptatem? Quas, odit eius voluptas officia vitae voluptatum omnis dolores, obcaecati saepe fugiat corrupti sit delectus reiciendis assumenda impedit commodi enim nemo quasi nesciunt aliquid minus laborum ducimus architecto ipsa. Neque eligendi quibusdam laborum a. Laboriosam reiciendis perferendis, sequi commodi quod officia ut. Hic placeat fuga quo perspiciatis totam aut minima neque ab velit? Atque iure delectus vero aut veniam incidunt nemo adipisci, qui eveniet omnis corrupti. Dolor, ipsam itaque! Debitis at dolor quia corporis rem accusantium, error fuga explicabo perspiciatis totam inventore non architecto provident consectetur quisquam voluptate cupiditate, natus placeat atque deleniti quo facere? Eveniet saepe nihil magnam tenetur molestiae, neque atque minus distinctio quod porro obcaecati, accusantium sit modi. Odio alias eaque optio ratione, magnam id porro quia minus nisi iure, deleniti incidunt dolores, quidem nulla architecto aspernatur ullam. Iste repellendus debitis perferendis reiciendis harum modi necessitatibus dolores eum impedit hic! Quae vel nesciunt iure temporibus sit quia nisi! Nesciunt magnam officiis, unde sunt sint possimus. Eveniet illo facilis laboriosam quaerat expedita ratione, aut nam deserunt velit, et iure officiis, necessitatibus omnis amet dolorem corrupti beatae voluptate officia. Molestiae.'
        seeBtn.innerHTML = "See less"
    } else {
        event.target.previousElementSibling.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis pariatur deserunt, atque voluptatum qui unde neque excepturi eius sapiente facere similique, blanditiis explicabo ad itaque provident error. '
        seeBtn.innerHTML = "See more"
    }
}

function submitForm() {
    event.preventDefault()
    console.log("first")
}

// function delR(n) {
//     document.getElementById(n).remove();
// }

// function editR(x) {
//     console.log(x)
//     console.log(x.childElement)
// }

let currentIndex = 0;

// Add Student Function
function addStudent(event) {
    event.preventDefault(); // stop form reload

    const name = document.getElementById("name").value;
    const cls = document.getElementById("class").value;
    const table = document.getElementById("studentTable");

    // Create a new row
    const row = table.insertRow(-1);
    row.id = currentIndex;

    row.innerHTML = `
        <td>${currentIndex}</td>
        <td>${name}</td>
        <td>${cls}</td>
        <td>
            <button onclick="delR(${currentIndex})">Delete</button>
            <button onclick="editR(${currentIndex})">Edit</button>
        </td>
    `;

    currentIndex++;
    document.getElementById("addForm").reset();
}

// Delete Row Function
function delR(id) {
    document.getElementById(id)?.remove();
}

// Edit Row Function
function editR(id) {
    const row = document.getElementById(id);
    const name = row.children[1].textContent;
    const cls = row.children[2].textContent;

    document.getElementById("editIndex").value = id;
    document.getElementById("editName").value = name;
    document.getElementById("editClass").value = cls;

    document.getElementById("editForm").style.display = "block";
}

// Save Edited Data
function saveEdit(event) {
    event.preventDefault();

    const id = document.getElementById("editIndex").value;
    const name = document.getElementById("editName").value;
    const cls = document.getElementById("editClass").value;

    const row = document.getElementById(id);
    row.children[1].textContent = name;
    row.children[2].textContent = cls;

    document.getElementById("editForm").style.display = "none";
}

// Cancel Edit
function cancelEdit() {
    document.getElementById("editForm").style.display = "none";
}