function handleTaskSubmission(event) {
    event.preventDefault();
    let taskName = document.getElementById("taskName").value;
    addTaskToBackend(taskName);

    document.getElementById("taskName").value = "";
}

document.getElementById("form").addEventListener("submit", handleTaskSubmission);

window.addEventListener("DOMContentLoaded", fetchTasks);


function fetchTasks() {
    fetch("/tasks")
        .then((response) => response.json())
        .then((tasks) => {
            console.log("Fetched tasks: ", tasks);
            let unorderedListOfTasks = document.getElementById("unorderedListOfTasks");
            unorderedListOfTasks.innerHTML = "";
            for (let i = 0; i < tasks.length; i++) {
                const li = document.createElement('li');
                li.textContent = tasks[i].task;
                unorderedListOfTasks.appendChild(li);
            }
        })
        .catch((error) => {
            console.error("Error fetching tasks", error);
        });
}

function addTaskToBackend(taskName) {
    fetch("/tasks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task: taskName })
    })
        .then((response) => response.json())
        .then((newTask) => {
            addTaskToList(newTask);
        })
        .catch((error) => {
            console.error("Error adding tasks", error);
        });
}

function addTaskToList(newTask) {
    let unorderedListOfTasks = document.getElementById("unorderedListOfTasks");
    let li = document.createElement('li');
    li.textContent = newTask.task;
    unorderedListOfTasks.appendChild(li);
}


