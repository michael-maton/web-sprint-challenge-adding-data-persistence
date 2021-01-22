// build your `/api/resources` router here
const express = require('express');

const Resources = require("./model");

const router = express.Router();


router.get("/", (req, res) => {
    Resources.find()
        .then((resources) => {
            res.status(200).json(resources)
        })
        .catch((err) => {
            res.status(500).json({ err: error.message })
        })
})

router.post("/", (req, res) => {
    const resourceData = req.body;

    Resources.addResource(resourceData)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to create new resource' });
      });
})

module.exports = router;