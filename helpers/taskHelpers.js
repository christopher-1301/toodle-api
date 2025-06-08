function updateTaskFields(task, updates) {
  const fieldsForUpdate = [
    "title",
    "description",
    "priority",
    "dueDate",
    "completed",
  ];
  fieldsForUpdate.forEach((field) => {
    if (updates[fields] !== undefined) {
      task[field] = updates[field];
    }
  });
}

module.exports = { updateTaskFields };
