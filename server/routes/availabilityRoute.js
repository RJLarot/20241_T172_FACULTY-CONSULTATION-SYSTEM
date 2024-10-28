// routes/availabilityRoute.js
const express = require('express');
const router = express.Router();
const { addAvailability, getAvailability } = require('../db');

// Route to add availability
router.post('/', (req, res) => {
    const availabilityData = req.body;
    addAvailability(availabilityData);
    res.status(201).json({ message: 'Availability added successfully', availability: availabilityData });
});

// Route to get all availability
router.get('/', (req, res) => {
    const availabilityList = getAvailability();
    res.status(200).json(availabilityList);
});

module.exports = router;
