// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Default app PORT for use
const PORT = process.env.PORT || 5660;

const app = express();
// Parse incoming requests with urlencoded payloads and return as objects
app.use(express.urlencoded({ extended: true }));
// Return the incoming request objects as JSON objects
app.use(express.json());
// Serve static files in the public directory
app.use(express.static('public'));

// Connecting to MongoDB via Mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

// DEFINE THE ROUTES LOCATIONS ONCE FILES MADE --------
// app.use(require('./routes/api.js'));
// app.use(require('./routes/whatevername'));


app.listen(PORT, () => {
    console.log('App listening on Port ${PORT}!');
});