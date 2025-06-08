const express = require("express");
const router = express.Router();
const { updateTaskFields } = require("../helpers/taskHelpers");

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

router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

router.get("/tasks/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === id);
  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.status(200).json(task);
});

router.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskToUpdate = tasks.find((t) => t.id === taskId);
  if (!taskToUpdate) {
    return res.status(404).json({ error: "Task not found" });
  }

  updateTaskFields(taskToUpdate, req.body);
});
