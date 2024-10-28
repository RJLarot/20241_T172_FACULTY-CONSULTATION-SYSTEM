// src/components/facultyAvailability.jsx
import React from 'react';

const FacultyAvailability = () => {
    // Sample data, ideally fetched from the server
    const availability = [
        { faculty: 'Faculty 1', time: '10:00 AM - 11:00 AM' },
        { faculty: 'Faculty 2', time: '1:00 PM - 2:00 PM' },
    ];

    return (
        <div className="container mt-4">
            <h2>Faculty Availability</h2>
            <ul className="list-group">
                {availability.map((item, index) => (
                    <li key={index} className="list-group-item">
                        {item.faculty}: {item.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FacultyAvailability;
