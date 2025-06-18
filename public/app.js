const taskList = document.getElementById("taskList");
const taskForm = document.getElementById("taskForm");

// Fetch tasks from API
async function fetchTasks() {
  const res = await fetch("http://localhost:3000/tasks");
  const tasks = await res.json();

  taskList.innerHTML = "";
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = `${task.title} (Priority: ${task.priority})`;
    taskList.appendChild(li);
  });
}

// Handle form submission
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(taskForm);
  const newTask = {
    title: formData.get("title"),
    description: formData.get("description"),
    priority: parseInt(formData.get("priority")) || 2,
    dueDate: formData.get("dueDate"),
    completed: formData.get("completed") === "on",
  };

  await fetch("http://localhost:3000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });

  taskForm.reset();
  fetchTasks(); // Refresh task list
});

// Initial fetch
fetchTasks();
