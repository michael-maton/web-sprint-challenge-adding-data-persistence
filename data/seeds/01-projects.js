exports.seed = function (knex, Promise) {
  return knex("projects").insert([
    { project_name: "project1", project_description: "project1 description", project_completed: true },
    { project_name: "project2", project_description: "project2 description", project_completed: false },
  ]);
};
