import express from "express";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

let tasks = [];
let taskId = 0;

app.get("/", (req, res) => {
    res.render(script.js);
});

app.listen(PORT, () => {
    console.log(`Serve running on http://localhost:${PORT}/`);
});