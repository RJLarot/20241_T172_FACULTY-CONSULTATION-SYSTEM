// routes/notificationRoute.js
const express = require('express');
const router = express.Router();
const { addNotification, getNotifications } = require('../db');

// Route to add a notification
router.post('/', (req, res) => {
    const notification = req.body;
    addNotification(notification);
    res.status(201).json({ message: 'Notification added successfully', notification });
});

// Route to get all notifications
router.get('/', (req, res) => {
    const notificationsList = getNotifications();
    res.status(200).json(notificationsList);
});

module.exports = router;
