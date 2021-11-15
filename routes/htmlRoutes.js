const router = require('express').Router();
const path = require('path');

// Homepage or / to reference index.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Exercise Page to reference exercise.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

// Stats page to reference status.html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

module.exports = router;