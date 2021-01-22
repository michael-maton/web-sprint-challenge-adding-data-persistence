// build your `/api/projects` router here
const express = require('express');

const Projects = require("./model");

const router = express.Router();


router.get("/", (req, res) => {
    console.log("hi")
})

router.post("/", (req, res) => {

})

module.exports = router;