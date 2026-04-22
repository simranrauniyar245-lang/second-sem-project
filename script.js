const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const count = document.getElementById("count");

function updateCount() {
    count.innerText = list.children.length;
}

function addTask() {
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.classList.add("delete");

    li.appendChild(span);
    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
    updateCount();

    delBtn.addEventListener("click", function () {
        li.remove();
        updateCount();
    });
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") addTask();
});