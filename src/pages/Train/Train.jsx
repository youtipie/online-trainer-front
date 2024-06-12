import React from 'react';
import "./train.css"
import CategorySelect from "./components/CategorySelect";

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
            <div className="content-container main-content">
                <h1>Content</h1>
            </div>
        </>
    );
};

export default Train;