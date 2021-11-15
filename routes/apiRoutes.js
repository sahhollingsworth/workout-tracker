const router = require("express").Router();
const Workout = require("../models/workout");

// Get all workout documents
router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Get most recent workout documents
router.get('/api/workouts/range', (req, res) => {
    Workout.find({})
    // Get only the last 7 workouts
    .limit(7)
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Create new workout document 
router.post('/api/workouts', (req, res) => {
    Workout.create({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// Add to (Modify) exercise array from most recent workout document
router.put('/api/workouts/:id', (req, res) => {
    Workout.findByIdAndUpdate(req.params.id,
        { $push: {exercises: req.body} },
        { new: true, runValidators: true }
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

module.exports = router;