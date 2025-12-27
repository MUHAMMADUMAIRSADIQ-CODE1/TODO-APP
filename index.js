

let button = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");


function todos() {
    localStorage.setItem("todos", ul.innerHTML);
}


let savedTodos = localStorage.getItem("todos");
if (savedTodos) {
    ul.innerHTML = savedTodos;
}


function addLi() {
    let li = document.createElement("li");
    li.innerHTML = `
    <span class="text">${input.value}</span>
    <button class="del">Delete</button>
  `;
    ul.appendChild(li);
}


function clearInput() {
    input.value = "";
}


ul.addEventListener("click", (e) => {


    if (e.target.classList.contains("text")) {
        e.target.classList.toggle("add");
        todos();
    }


    if (e.target.classList.contains("del")) {
        let li = e.target.closest("li");
        let text = document.querySelector(".text");

        if (text.classList.contains("add")) {
            let ok = confirm("Are you sure");
            if (ok) li.remove();
        } else {
            li.remove();
        }

        todos();
    }
});


button.addEventListener("click", () => {
    if (input.value) {
        addLi();
        clearInput();
        todos();
    }
});
