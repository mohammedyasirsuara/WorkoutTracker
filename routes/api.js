const router = require("express").Router();
const Workout = require("../models/workout.js");

//route to create a new workout
router.post("/api/workouts",({body}, res)=>{
    Workout.create(body)
    .then(dworkout=>{
        console.log(dworkout)
        res.json(dworkout)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})

//route to retireve workouts
router.get("/api/workouts",(req, res)=>{
    Workout.find({})
    .then(workout=>{
        res.json(workout)
    })
    .catch(err=>{
        res.status(400).json(err)
    })
})

//route to 
router.get("api/workouts/range")