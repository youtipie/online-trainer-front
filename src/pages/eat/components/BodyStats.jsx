import React from 'react';
import "./bodyStats.css"
import PeriodSelectMenu from "./PeriodSelectMenu";
import BodyStatsProgress from "./BodyStatsProgress";

// TEMPORARY DATA! JUST TO SHOW SOME FUNCTIONAL
// IN FUTURE WILL USE HOOKS TO GET DATA FROM SERVER
const periodsMock = [
    {name: "День"},
    {name: "Місяць"},
    {name: "Рік"}
]


const BodyStats = () => {
    const [selectedPeriod, setSelectedPeriod] = React.useState(periodsMock[0]);

    function changePeriod(period, closeSelect) {
        setSelectedPeriod(period)
        closeSelect()
    }

    return (
        <div className="content-container">
            <div className="body-stats-wrapper">
                <div className="body-stats">
                    <div className="body-stats-col">
                        <div className="content-container light body-stats-text-container">
                            <p className="body-stats-text">Данні</p>
                        </div>
                        <div className="content-container light body-stats-text-container">
                            <div className="body-stats-input-wrapper">
                                <p className="body-stats-text">Вага</p>
                                <p className="body-stats-text bold">80 кг</p>
                            </div>
                        </div>
                        <div className="content-container light body-stats-text-container">
                            <p className="body-stats-text"></p>
                        </div>
                    </div>
                    <div className="body-stats-col">
                        <div style={{padding: "0"}} className="content-container light body-stats-text-container">
                            <PeriodSelectMenu
                                selectedPeriod={selectedPeriod}
                                periods={periodsMock}
                                changePeriod={changePeriod}
                            />
                        </div>
                        <div className="content-container light body-stats-text-container">
                            <div className="body-stats-input-wrapper">
                                <p className="body-stats-text">Вага</p>
                                <p className="body-stats-text bold">85 кг</p>
                            </div>
                        </div>
                        <div className="content-container light body-stats-text-container">
                            <p className="body-stats-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            <BodyStatsProgress max={100} value={70}/>
        </div>
    );
};

export default BodyStats;