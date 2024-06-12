import React from 'react';
import arrowIcon from "../images/arrow-down.png"

const levels = [
    {name: "Рівень 1", subname: "Легкий"},
    {name: "Рівень 2", subname: "Середній"},
    {name: "Рівень 3", subname: "Нормальний"},
    {name: "Рівень 4", subname: "Майстер"},
    {name: "Рівень 5", subname: "Профі"}
]


const TrainContent = () => {
    return (
        <div className="content-container main-content">
            {levels.map(level =>
                <div className="level-select">
                    <div className="level-text-wrapper">
                        <h1 className="category-name">{level.name}</h1>
                        <h2 className="category-name subcategory-name">{level.subname}</h2>
                    </div>
                    <img
                        className="level-icon"
                        src={arrowIcon}
                        alt="Arrow down icon for level"
                    />
                </div>
            )}
        </div>
    );
};

export default TrainContent;