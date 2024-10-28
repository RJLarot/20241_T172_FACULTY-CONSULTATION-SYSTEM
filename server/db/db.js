// db.js
const users = [];
const availability = [];
const consultations = [];
const notifications = [];
const history = []; // Add a new array for history

// Functions to manage users
const addUser = (user) => {
    users.push(user);
};

const getUsers = () => {
    return users;
};

// Functions to manage availability
const addAvailability = (availabilityData) => {
    availability.push(availabilityData);
};

const getAvailability = () => {
    return availability;
};

// Functions to manage consultations
const scheduleConsultation = (consultationData) => {
    consultations.push(consultationData);
};

const getConsultations = () => {
    return consultations;
};

// Functions to manage notifications
const addNotification = (notification) => {
    notifications.push(notification);
};

const getNotifications = () => {
    return notifications;
};

// Functions to manage history
const addHistoryEntry = (entry) => {
    history.push(entry); // Push entry into the history array
};

const getHistory = () => {
    return history; // Return the history array
};

// Export functions to use in your routes
module.exports = {
    addUser,
    getUsers,
    addAvailability,
    getAvailability,
    scheduleConsultation,
    getConsultations,
    addNotification,
    getNotifications,
    addHistoryEntry, // Export the addHistoryEntry function
    getHistory, // Export the getHistory function
};
