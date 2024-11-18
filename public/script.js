function handleTaskSubmission(event) {
    event.preventDefault();

    let taskName = document.getElementById("taskName").value;

    if (taskName.length <= 0) {
        alert("No task was specified. Please add task name.");
    } else {
        addTaskToBackend(taskName);
    }

    document.getElementById("taskName").value = "";
}

document.getElementById("form").addEventListener("submit", handleTaskSubmission);

window.addEventListener("DOMContentLoaded", fetchTasks);

function fetchTasks() {
    fetch("/tasks")
        .then((response) => response.json())
        .then((tasks) => {
            console.log("Fetched tasks: ", tasks);
            const unorderedListOfTasks = document.getElementById("unorderedListOfTasks");
            unorderedListOfTasks.innerHTML = "";
            
            for (let i = 0; i < tasks.length; i++) {
                const li = document.createElement('li');
                li.textContent = tasks[i].task;
                li.dataset.id = newTask.id;

                let deleteButton = document.createElement("button");
                deleteButton.textContent = "x";
                deleteButton.onclick = () => deleteTaskFromBackend(newTask.id, li);

                li.appendChild(deleteButton);
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
    li.dataset.id = newTask.id;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.onclick = () => deleteTaskFromBackend(newTask.id, li);
    
    li.appendChild(deleteButton);
    unorderedListOfTasks.appendChild(li);
}

function deleteTaskFromBackend(id, task) {
    fetch(`/tasks/${id}`, {
        method: "DELETE"
    }).then((response) => {
        if (response.ok) {
            task.remove()
            removeTaskFromList(id);
        } else {
            console.error("Error deleting task");
        }
    })
    .catch((error) => {
        console.error("Error deleting task", error);
    });
}

function removeTaskFromList(id) {
    let unorderedListOfTasks = document.getElementById("unorderedListOfTasks");
    let tasks = unorderedListOfTasks.getElementsByTagName("li");
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].dataset.id === id) {
            unorderedListOfTasks.removeChild(tasks[i]);
            break;
        }
    }
}


