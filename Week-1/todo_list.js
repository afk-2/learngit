let addButton = document.getElementById("addButton");
let taskList = document.getElementById("taskList");

addButton.onclick = createTask;

function createTask() {
    let taskField = document.getElementById("newTask");
    let taskItem = document.createElement("li");

    taskItem.innerText = taskField.value;
    taskList.appendChild(taskItem);
    taskField.value = "";
}
