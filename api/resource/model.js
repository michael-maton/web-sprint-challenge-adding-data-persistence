// build your `Resource` model here
const db = require("../../data/dbConfig");

module.exports = {
    find,
    addResource
}

function find() {
    return db("resources")
}

async function addResource(resource) {
    const returnArr = await db("resources")
        .insert(resource)
        .then((id) => {
            return db("resources")
                .where("resource_id", id)
                .select("resource_name")
        })
    return returnArr[0];
}