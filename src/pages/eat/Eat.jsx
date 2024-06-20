import React from 'react';
import "./eat.css"
import FixedSlideMenu from "../../UI/FixedSlideMenu/FixedSlideMenu";
import DailyEatStats from "./components/DailyEatStats";
import SlideMenu from "../../UI/SlideMenu/SlideMenu";
import BodyStats from "./components/BodyStats";

const eatTimes = ["Сніданок", "Обід", "Вечеря", "Інше", "Трекер води", "Трекер сну"]

const Eat = () => {
    return (
        <div className="no-footer-overlap">
            <div className="content-container overlap">
                <div className="calendar-open">
                    <FixedSlideMenu
                        select={{name: "Розрахунок калорій на день"}}
                        options={[{name: "Test", subname: "Megatest"}, {name: "Test1", subname: "Megatest1"}, {
                            name: "Test2",
                            subname: "Megatest2"
                        }]}
                        onClick={(option) => console.log(option)}
                        selectStyles={{
                            height: "4em",
                            marginTop: "2em",
                            width: "80%",
                            fontSize: "0.8em",
                            borderRadius: "10px"
                        }}
                        optionsStyles={{height: "20em"}}
                    >
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
                            {/*TODO: Add real calendar*/}
                            <h1>Nothing for now</h1>
                        </div>
                    </FixedSlideMenu>
                </div>
                <DailyEatStats header={"Щоденна норма"}/>
            </div>
            <div className="content-container">
                <DailyEatStats header={"Щоденник харчування"}/>
                <div className="eat-times">
                    {eatTimes.map(time => (
                        <SlideMenu
                            key={time}
                            select={{name: time}}
                            options={[{name: "Сир - 500 кг"}]}
                            selectStyles={{fontSize: "0.9em", height: "3em", width: "80%", borderRadius: "10px"}}
                            optionsStyles={{width: "80%"}}
                            iconStyles={{width: "2em"}}
                        />
                    ))}
                </div>
            </div>
            <BodyStats/>
        </div>
    );
};

export default Eat;