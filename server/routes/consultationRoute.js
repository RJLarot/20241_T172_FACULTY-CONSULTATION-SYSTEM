// routes/consultationRoute.js
const express = require('express');
const router = express.Router();
const { scheduleConsultation, getConsultations } = require('../db');

// Route to schedule a consultation
router.post('/schedule', (req, res) => {
    const consultationData = req.body;
    scheduleConsultation(consultationData);
    res.status(201).json({ message: 'Consultation scheduled successfully', consultation: consultationData });
});

// Route to get all consultations
router.get('/', (req, res) => {
    const consultationsList = getConsultations();
    res.status(200).json(consultationsList);
});

module.exports = router;
