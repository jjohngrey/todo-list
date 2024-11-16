const addButton = document.getElementById("addButton");
let tasks = ["Wash dishes", "Do homework"];
let unorderedListOfTasks = document.getElementById("unorderedListOfTasks");

const API_URL = "http://localhost:3000/tasks";

async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    return tasks;
}

displayTasks();

function displayTasks() {
    // const tasks = await fetchTasks();
    for (i = 0; i < tasks.length; i++) {
        let li = document.createElement('li');
        li.innerText = tasks[i];
        unorderedListOfTasks.appendChild(li);
    }
}

addButton.addEventListener("click", function() {
    var taskName = document.getElementById("taskName").value;
    tasks.push(taskName);
    console.log(tasks);
    displayTasks();
});
