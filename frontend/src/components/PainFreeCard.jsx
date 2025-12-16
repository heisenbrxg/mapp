import React from 'react';
import { ChevronRight } from 'lucide-react';
import './PainFreeCard.css';

const PainFreeCard = () => {
    return (
        <div className="card pain-free-card">
            <div className="pain-content">
                <div className="big-number">7</div>
                <div className="text-content">
                    <div className="title">Days no pain</div>
                    <div className="subtitle">Last attack was on 9 Dec</div>
                </div>
            </div>
            <ChevronRight className="arrow-icon" size={20} color="#C4C4C4" />
        </div>
    );
};

export default PainFreeCard;
