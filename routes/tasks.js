const express = require("express");
const router = express.Router();

const tasks = [];

router.get("/tasks", (req, res) => {
  res.json(tasks);
});

router.post("/tasks", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const { title, description, priority, dueDate, completed } = req.body;

  const id = tasks.length + 1;
  const taskPriority = priority !== undefined ? priority : 2;

  const newTask = {
    id,
    title,
    description: description || "",
    priority: taskPriority,
    dueDate: dueDate || null,
    completed: completed || false,
    dateCreated: new Date().toISOString(),
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});
