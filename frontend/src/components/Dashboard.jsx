import React from 'react';
import PainFreeCard from './PainFreeCard';
import WeekView from './WeekView';
import SensitivityCard from './SensitivityCard';
import MonthlyStats from './MonthlyStats';

const Dashboard = () => {
    return (
        <div className="dashboard-content">
            <div className="section">
                <h2 className="section-title">Today</h2>
                <PainFreeCard />
            </div>

            <div className="section">
                <h2 className="section-title">Week</h2>
                <WeekView />
            </div>

            <div className="section">
                <h2 className="section-title">December 2025</h2>
                <MonthlyStats />
            </div>
        </div>
    );
};

export default Dashboard;
