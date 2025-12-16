import React from 'react';
import './WeekView.css';

const WeekView = () => {
    const days = [
        { label: 'M', isActive: false },
        { label: 'T', isActive: false },
        { label: 'W', isActive: false },
        { label: 'T', isActive: false },
        { label: 'F', isActive: false },
        { label: 'S', isActive: false },
        { label: 'S', isActive: true }, // Highlighting Sunday or Today
    ];

    return (
        <div className="card week-card">
            <div className="week-row">
                {days.map((day, index) => (
                    <div key={index} className={`day-circle ${day.isActive ? 'active' : ''}`}>
                        {day.label}
                    </div>
                ))}
            </div>
            <div className="pill-status">
                <span className="pill-icon">💊</span>
                <span className="status-text">Not taken</span>
            </div>
        </div>
    );
};

export default WeekView;
