function updateTaskFields(task, updates) {
  const fieldsForUpdate = [
    "title",
    "description",
    "priority",
    "dueDate",
    "completed",
  ];
  let updated = false;

  fieldsForUpdate.forEach((field) => {
    if (updates[fields] !== undefined) {
      task[field] = updates[field];
      updated = true;
    }
  });

  return updated;
}

module.exports = { updateTaskFields };
