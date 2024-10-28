const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User registration (for students or faculty)
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// Get user profile
router.get('/profile', userController.getUserProfile);

// Update user profile
router.put('/profile', userController.updateUserProfile);

module.exports = router;
