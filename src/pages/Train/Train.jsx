import React from 'react';
import "./train.css"
import CategorySelect from "./components/CategorySelect";
import TrainContent from "./components/TrainContent";

// TEMPORARY DATA! JUST TO SHOW SOME FUNCTIONAL
// IN FUTURE WILL USE HOOKS TO GET DATA FROM SERVER
const categories = [
    {
        name: "Тренажерний зал", subname: "", levels: [
            {
                name: "Рівень 1",
                subname: "Легкий",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            },
            {
                name: "Рівень 2",
                subname: "Середній",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            },
            {
                name: "Рівень 3",
                subname: "Нормальний",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            },
            {
                name: "Рівень 4",
                subname: "Майстер",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            },
            {
                name: "Рівень 5",
                subname: "Профі",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            }
        ]
    },
    {
        name: "Stretching", subname: "", levels: [
            {
                name: "Рівень 1",
                subname: "Легкий",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            },
            {
                name: "Рівень 2",
                subname: "Середній",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            },
            {
                name: "Рівень 3",
                subname: "Нормальний",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            },
            {
                name: "Рівень 4",
                subname: "Майстер",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            },
            {
                name: "Рівень 5",
                subname: "Профі",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            }
        ]
    },
    {
        name: "Домашні тренування", subname: "Гантелі - Резина", levels: [
            {
                name: "Рівень 1",
                subname: "Легкий",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            },
            {
                name: "Рівень 2",
                subname: "Середній",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            },
            {
                name: "Рівень 3",
                subname: "Нормальний",
                options: [{name: "Анжуманія"}, {name: "Прес качат", subname: "30 хв"}]
            }
        ]
    },
    {
        name: "Домашні тренування", subname: "Власна вага", levels: [
            {
                name: "Рівень 1",
                subname: "Легкий",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            },
            {
                name: "Рівень 2",
                subname: "Середній",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            },
            {
                name: "Рівень 3",
                subname: "Нормальний",
                options: [{name: "Турник"}, {name: "Бегит", subname: "30 хв"}]
            }
        ]
    }
]


const Train = () => {
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);
    const [levels, setLevels] = React.useState(selectedCategory.levels);

    return (
        <>
            <div className="content-container overlap">
                <CategorySelect
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    setLevels={setLevels}
                    categories={categories}
                />
            </div>
            <TrainContent levels={levels}/>
        </>
    );
};

export default Train;