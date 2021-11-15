const router = require("express").Router();
const Workout = require("../models/workout");

// Get exercise in a given workout by id

// getWorkoutsInRange()
// /api/workouts/range


// Create new workout document - createWorkout(data = {})
// /api/workouts
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});


// Add exercise object to most recent workout - addExercise(data)
// /api/workouts/:id


// Get last Workout - getLastWorkout()
// /api/workouts




module.exports = router;