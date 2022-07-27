const { Router } = require('express');
const { Activity } = require("../db");
const {createActivity} = require("../controllers/activities.js")

const router = Router();

router.post("/", async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        let create = await createActivity(name, difficulty, duration, season, countries)
        res.status(200).json({msg: "Activity correctly created and assigned"});
    } catch (error) {
        res.status(404).send(error);
    }
  });
  
router.get("/", async (req, res) => {
    try {
        let activities = await Activity.findAll();
        res.status(200).json(activities);
    } catch (error) {
        res.status(404).send({msg: 'Activity doesnt exist'});
    }
});

module.exports = router

