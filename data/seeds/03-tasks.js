exports.seed = function (knex, Promise) {
  return knex("tasks").insert([
    { task_description: "task1 description", task_notes: "task1 notes", task_completed: true, project_id: 1},
    { task_description: "task2 description", task_notes: "task2 notes", task_completed: false, project_id: 1},
    { task_description: "task1 description", task_notes: "task1 notes", task_completed: true, project_id: 2},
    { task_description: "task2 description", task_notes: "task2 notes", task_completed: false, project_id: 2},
  ]);
};
