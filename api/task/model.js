// build your `Task` model here
const db = require("../../data/dbConfig");

module.exports = {
  find,
  addTask,
};

function find() {
  return db("tasks")
    .join("projects", "tasks.project_id", "projects.project_id")
    .select(
      "project_description",
      "project_name",
      "task_completed",
      "task_notes",
      "task_description"
    )
    .then((tasks) => {
      return tasks.map((task) => {
        return {
          ...task,
          task_completed: task.task_completed === 1 ? true : false,
        };
      });
    });
}

async function addTask(task) {
  const newTaskID = await db("tasks").insert(task);
  const returnArr = await db("tasks")
    .where("task_id", newTaskID)
    .select("task_completed", "task_description", "task_notes")
    .then((tasks) => {
      return tasks.map((task) => {
        return {
          ...task,
          task_completed: task.task_completed === 1 ? true : false,
        };
      });
    });

  return returnArr[0];
}
