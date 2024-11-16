import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

let tasks = ["Wash dishes", "Do homework"];
let taskId = 0;

app.get("/", (req, res) => {
    res.render(script.js, {
        tasks: tasks
    });
});

app.get("/tasks", (req, res) => {
    res.json(tasks);
})

app.post("/tasks", (req, res) => {
    res.render(tasks.json);
    res.send(req.body);
    tasks.push(req.body);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});