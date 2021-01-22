// build your `Project` model here
const db = require("../../data/dbConfig");

module.exports = {
  find,
  addProject,
};

function find() {
  return db("projects").then((projects) => {
    return projects.map((project) => {
      return {
        ...project,
        project_completed: project.project_completed === 1 ? true : false,
      };
    });
  });
}

async function addProject(project) {
  const newProjectID = await db("projects").insert(project);
  const returnArr = await db("projects")
    .where("project_id", newProjectID)
    .select("project_completed", "project_description", "project_name")
    .then((projects) => {
      return projects.map((project) => {
        return {
          ...project,
          project_completed: project.project_completed === 1 ? true : false,
        };
      });
    });

  return returnArr[0];
}

//  function addProject(project) {
//     const newProject = {
//         ...project,
//         project_completed: project.project_completed === 1 ? true : false,
//     }
//   return db("projects")
//     .insert(newProject)
//     .then(id => {
//         return db("projects")
//             .where("project_id", id)
//             .select("project_completed", "project_description", "project_name")
//     })
// }
