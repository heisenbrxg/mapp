import React from 'react';
import { Lock } from 'lucide-react';
import './SensitivityCard.css';

const SensitivityCard = () => {
    return (
        <div className="card sensitivity-card">
            <div className="sensitivity-content">
                <div className="cloud-icon-wrapper">
                    <div className="cloud-emoji">☁️</div>
                    <div className="sparkles">✨</div>
                </div>
                <div className="text-content">
                    <div className="title">My sensitivity</div>
                    <div className="subtitle">Relation to headaches</div>
                </div>
            </div>
            <div className="lock-icon-wrapper">
                <Lock size={16} color="#C4C4C4" />
            </div>
        </div>
    );
};

export default SensitivityCard;
