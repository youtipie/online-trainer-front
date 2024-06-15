import React from 'react';
import "./dailyEatStats.css";

const mockData = [
    {name: "Білки", value: "250-270"},
    {name: "Жири", value: "40-50"},
    {name: "Вуглеводи", value: "250-270"},
    {name: "Вода", value: "3.1-3.3"},
    {name: "Сон", value: "0"}
]

const DailyEatStats = ({header}) => {
    // TODO: Add props to handle different values
    return (
        <div className="daily-eat-stats">
            <div style={{flexGrow: "1"}} className="content-container light">
                <div className="daily-eat-stats-center-text">
                    <p className="stats-text">{header}</p>
                </div>
                <div className="eat-stats-wrapper">
                    {mockData.map(item =>
                        <div key={item.name} className="eat-stats-col">
                            <p className="stats-text bold">{item.name}</p>
                            <p className="stats-text small">{item.value}</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="content-container light">
                <div className="eat-stats-col">
                    <p className="stats-text">Ккал</p>
                    <p className="stats-text bold">0</p>
                </div>
            </div>
        </div>
    );
};

export default DailyEatStats;