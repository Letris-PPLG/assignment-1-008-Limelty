import express from "express";

const app = express();
app.use(express.json())

const todos = [
  { "id": 1, "title": "Belajar Node.js", "done": false },
  { "id": 2, "title": "Belajar Express.js", "done": true }
];

app.get("/", (req, res) => {
    res.send("API run smoothly");
    res.status(200)
});

app.get("/todos", (req, res) => {
    res.json(todos)
});

app.post("/todos", (req, res) => {
    const {title} = req.body;
    const {done} = req.body
    const newtodo = {
        id: todos.length + 1, title: title, done: done
    }
    todos.push(newtodo)
    res.status(201).json(newtodo)
});

app.listen(5001, () => console.log("Server running on http://localhost:5001"));