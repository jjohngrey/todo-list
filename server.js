import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

let tasks = [];
let taskId = 0;

app.get("/", (req, res) => {
    res.render("script.js")
});

app.get("/tasks", (req, res) => {
    console.log(tasks);
    res.json(tasks);
})

app.post("/tasks", (req, res) => {
    console.log(req.body);
    const newTask = {
        id: taskId++,
        task: req.body.task
    };
    tasks.push(newTask);
    res.json(newTask);
})

app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    tasks = tasks.filter((task) => task.id !== id);
    res.sendStatus(200);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});