import React from 'react';
import Progress from "../../../UI/Progress/Progress";
import "./bodyStatsProgress.css"

const BodyStatsProgress = ({max, value, className}) => {
    return (
        <div className="stats-progress">
            <div className="stats-progress-wrapper">
                <div className="stats-progress-header">
                    <p className="stats-prev">1</p>
                    <p className="stats-header">Прогрес</p>
                    <p className="stats-next">2</p>
                </div>
                <Progress max={max} value={value} className={className}/>
            </div>
        </div>
    );
};

export default BodyStatsProgress;