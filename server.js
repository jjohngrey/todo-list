import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

let tasks = [];
let taskId = 0;

app.get("/", (req, res) => {
    res.render(script.js);
});

app.post("/tasks", (req, res) => {
    res.send(req.body);
    tasks.push(req.body);
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/`);
});