// src/components/consultationScheduler.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ConsultationScheduler = () => {
    const [date, setDate] = useState('');
    const [faculty, setFaculty] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to schedule a consultation
        console.log(`Scheduling consultation with ${faculty} on ${date}`);
    };

    return (
        <div className="container mt-4">
            <h2>Schedule Consultation</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="faculty" className="form-label">Select Faculty</label>
                    <select
                        className="form-select"
                        id="faculty"
                        value={faculty}
                        onChange={(e) => setFaculty(e.target.value)}
                        required
                    >
                        <option value="">Choose...</option>
                        <option value="faculty1">Faculty 1</option>
                        <option value="faculty2">Faculty 2</option>
                    </select>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success">Schedule</button>
            </form>
        </div>
    );
};

export default ConsultationScheduler;
