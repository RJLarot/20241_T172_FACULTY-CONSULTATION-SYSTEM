// routes/historyRoute.js
const express = require('express');
const router = express.Router();
const { addHistory, getHistory } = require('../db');

// Route to add history
router.post('/', (req, res) => {
    const historyData = req.body;
    addHistory(historyData);
    res.status(201).json({ message: 'History recorded successfully', history: historyData });
});

// Route to get all history
router.get('/', (req, res) => {
    const historyList = getHistory();
    res.status(200).json(historyList);
});

module.exports = router;
