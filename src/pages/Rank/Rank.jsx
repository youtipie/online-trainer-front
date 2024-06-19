import React from 'react';
import rankPlaces from "../../assets/images/rank-places.svg";
import "./rank.css";


const Rank = () => {
    return (
        <div className="no-footer-overlap">
            <div className="content-container">
                <div className="rank-places-container">
                    <img className="rank-places" src={rankPlaces} alt="Rank places"/>
                </div>
                <div className="rank-choose-container">
                    <div className="content-container light rank-choose">
                        <h2>
                            Сушка
                        </h2>
                    </div>
                    <div className="content-container light rank-choose">
                        <h2>
                            Рекомпозиція
                        </h2>
                    </div>
                    <div className="content-container light rank-choose">
                        <h2>
                            Маса
                        </h2>
                    </div>
                </div>
                <div className="rank-choose-header-container">
                    <div className="content-container light rank-choose-header">
                        <h1>Таблиця лідерів</h1>
                    </div>
                </div>
                <div className="content-container light rank-column-header-container">
                    <p className="rank-column-header rank">Ранг</p>
                    <p className="rank-column-header name">Ім'я</p>
                    <p className="rank-column-header score">Бали</p>
                </div>
            </div>
        </div>
    );
};

export default Rank;