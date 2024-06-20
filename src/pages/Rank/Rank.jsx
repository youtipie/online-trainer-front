import React from 'react';
import rankPlaces from "../../assets/images/rank-places.svg";
import "./rank.css";
import RankTable from "./components/RankTable";

const categories = ["Сушка", "Рекомпозиція", "Маса"]

const Rank = () => {
    const [selectedCategoty, setSelectedCategoty] = React.useState(categories[0]);

    const changeCategory = (category) => {
        setSelectedCategoty(category);
    }

    return (
        <div className="no-footer-overlap">
            <div className="content-container">
                <div className="rank-places-container">
                    <img className="rank-places" src={rankPlaces} alt="Rank places"/>
                </div>
                <div className="rank-choose-container">
                    {categories.map(category => (
                        <div
                            key={category}
                            className={"content-container light rank-choose" +
                                (selectedCategoty === category ? " selected" : "")}
                            onClick={() => changeCategory(category)}
                        >
                            <div className="rank-choose-inner">
                                <h2>
                                    {category}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="rank-choose-header-container">
                    <div className="content-container light rank-choose-header">
                        <h1>Таблиця лідерів</h1>
                    </div>
                </div>
                <RankTable/>
            </div>
        </div>
    )
        ;
};

export default Rank;