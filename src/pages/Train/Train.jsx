import React from 'react';
import "./train.css"
import CategorySelect from "./components/CategorySelect";
import TrainContent from "./components/TrainContent";

const categories = [
    {category: "Тренажерний зал", subcategory: ""},
    {category: "Stretching", subcategory: ""},
    {category: "Домашні тренування", subcategory: "Гантелі - Резина"},
    {category: "Домашні тренування", subcategory: "Власна вага"}
]


const Train = () => {
    const [selectedCategory, setSelectedCategory] = React.useState(categories[0]);

    return (
        <>
            <CategorySelect
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
            />
            <TrainContent/>
        </>
    );
};

export default Train;