import React from 'react';
import FixedSlideMenu from "../../../UI/FixedSlideMenu/FixedSlideMenu";


const CategorySelect = ({selectedCategory, setSelectedCategory, setLevels, categories}) => {
    function selectCategory(category, closeSelect) {
        setSelectedCategory(category)
        setLevels(category.levels)
        closeSelect()
    }

    return (
        <FixedSlideMenu
            select={selectedCategory}
            options={categories}
            onClick={selectCategory}
        />
    );
};

export default CategorySelect;