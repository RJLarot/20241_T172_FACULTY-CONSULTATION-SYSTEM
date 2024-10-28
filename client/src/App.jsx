// src/App.jsx
import React from 'react';
import UserRegistration from './components/UserRegistration';
import ConsultationScheduler from './components/ConsultationScheduler';
import FacultyAvailability from './components/FacultyAvailability';
import NotificationList from './components/NotificationList';

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">Faculty Consultation System</h1>
            <UserRegistration />
            <ConsultationScheduler />
            <FacultyAvailability />
            <NotificationList />
        </div>
    );
};

export default App;
