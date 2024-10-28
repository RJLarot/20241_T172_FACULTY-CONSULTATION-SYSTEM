// src/components/notificationList.jsx
import React, { useState, useEffect } from 'react';
import { getNotifications } from '../services/api'; // Ensure you have this function in your API service

const NotificationList = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await getNotifications();
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <div className="container mt-4">
            <h2>Notifications</h2>
            <ul className="list-group">
                {notifications.length > 0 ? (
                    notifications.map((notification, index) => (
                        <li key={index} className="list-group-item">
                            {notification.message} {/* Adjust according to your notification structure */}
                        </li>
                    ))
                ) : (
                    <li className="list-group-item">No notifications available.</li>
                )}
            </ul>
        </div>
    );
};

export default NotificationList;
