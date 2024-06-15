import React from 'react';
import "./bodyStats.css"

const BodyStats = () => {
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
                        <div className="content-container light body-stats-text-container">
                            <p className="body-stats-text">Вага ></p>
                            {/*TODO: Do normal and customizable select menu!*/}
                            {/*<FixedSlideMenu*/}
                            {/*    select={{name: "Місяць"}}*/}
                            {/*    options={[{name: "День"}]}*/}
                            {/*    onClick={(option) => console.log(option)}*/}
                            {/*    selectStyles={{fontSize: "0.7em", fontWeight: "400", height: "auto"}}*/}
                            {/*/>*/}
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
        </div>
    );
};

export default BodyStats;