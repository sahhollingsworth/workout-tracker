// Import required packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

// Default app PORT for use
const PORT = process.env.PORT || 3000;

const app = express();
// Middleware declaration for routes
app.use(morgan("dev"));

// Parse incoming requests with urlencoded payloads and return as objects
app.use(express.urlencoded({ extended: true }));
// Return the incoming request objects as JSON objects
app.use(express.json());
// Serve static files in the public directory
app.use(express.static('public'));

// Connecting to MongoDB via Mongoose
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// Routes for data retrieval from DB
app.use(require('./routes/apiRoutes.js'));
// Routes for app pages
app.use(require('./routes/htmlRoutes.js'));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});