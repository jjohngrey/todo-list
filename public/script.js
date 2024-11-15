const addButton = document.getElementById("addButton");
const tasks = ["Wash dishes", "Do homework"];

let listOfTasks = document.getElementById("listOfTasks");
for (i = 0; i < tasks.length; i++) {
    let li = document.createElement('li');
    li.innerText = tasks[i];
    listOfTasks.appendChild(li);
}

addButton.addEventListener("click", function(taskName) {
    tasks.push(taskName);
});
