import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './MonthlyStats.css';

const MonthlyStats = () => {
    const data = [
        { name: 'Severe', value: 3, color: '#00297A' }, // Deep Navy
        { name: 'Remaining', value: 25, color: '#F0F1F6' }, // The light grey part
    ];

    const legendData = [
        { label: 'Severe', count: 0, color: '#00297A' },
        { label: 'Moderate', count: 1, color: '#0066FF' },
        { label: 'Mild', count: 0, color: '#60AFFF' },
    ];

    return (
        <div className="card stats-card">
            <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={55}
                            outerRadius={70}
                            startAngle={90}
                            endAngle={450}
                            dataKey="value"
                            stroke="none"
                            cornerRadius={10}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="center-text">1</div>
            </div>

            <div className="legend-container">
                {legendData.map((item, index) => (
                    <div key={index} className="legend-item">
                        <div className="badge" style={{ backgroundColor: item.color }}>
                            {item.count}
                        </div>
                        <span className="legend-label">{item.label}</span>
                    </div>
                ))}
                <div className="legend-item">
                    <div className="badge transparent"></div>
                    <span className="legend-label remaining">No pain days</span>
                </div>
            </div>
        </div>
    );
};

export default MonthlyStats;
