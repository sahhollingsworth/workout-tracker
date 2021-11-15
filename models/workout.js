// Import Mongoose package for schema development
const mongoose = require("mongoose");

// Use Mongoose Schema
const Schema = mongoose.Schema;

// Use schema to define workout document fields
const workoutSchema = new Schema({
    // Date is assigned the datetime value of document creation (user form entry)
    day: {
        type: Date,
        default:Date.now
    },
    exercises: [
        {
            type: {
                type: String,
                required: true,
            },
            name: {
                type: String,
                trim: true,
                required: true,
            },
            duration:  {
                type: Number,
                required: true,
            },
            // only applies to resistance workouts
            weight:  {
                type: Number,
            },
            // only applies to resistance workouts
            reps:  {
                type: Number,
            },
            // only applies to resistance workouts
            sets:  {
                type: Number,
            },
            // only applies to cardio workouts
            distance: {
                type: Number,
            }
        }
    ]
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;