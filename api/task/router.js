// build your `/api/tasks` router here
const express = require('express');

const Tasks = require("./model");

const router = express.Router();



router.get("/", (req, res) => {
    Tasks.find()
        .then((tasks) => {
            res.status(200).json(tasks)
        })
        .catch((err) => {
            res.status(500).json({ err: error.message })
        })
})

router.post("/", (req, res) => {
    const taskData = req.body;

    Tasks.addTask(taskData)
      .then(task => {
        res.status(201).json(task);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new task' });
      });
})
module.exports = router;