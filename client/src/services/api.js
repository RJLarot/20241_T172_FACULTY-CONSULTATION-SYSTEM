import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Adjust if needed

export const registerUser = (userData) => {
    return axios.post(`${API_URL}/users/register`, userData);
};

export const getFacultyAvailability = () => {
    return axios.get(`${API_URL}/availability`);
};

export const scheduleConsultation = (consultationData) => {
    return axios.post(`${API_URL}/consultations/schedule`, consultationData);
};

export const getNotifications = () => {
    return axios.get(`${API_URL}/notifications`);
};

// Add more functions as needed
