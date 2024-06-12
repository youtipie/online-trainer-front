import React from 'react';
import whiteArrowDown from "../images/white-arrow-down.png"


const CategorySelect = ({selectedCategory, setSelectedCategory, categories}) => {
    const [isSelectVisible, setIsSelectVisible] = React.useState(false);

    function selectCategory(category) {
        setSelectedCategory(category)
        setIsSelectVisible(false)
    }

    return (
        <>
            {isSelectVisible && <div className="category-options-backdrop"></div>}
            <div className="content-container select-menu">
                <div className="category-select"
                     onClick={() => setIsSelectVisible(prev => !prev)}>
                    <img
                        className={"arrow-down-icon" + (isSelectVisible ? " up" : " down")}
                        src={whiteArrowDown}
                        alt="Arrow down icon"
                    />
                    <div className="category-select category">
                        <h1 className="category-name">{selectedCategory.category}</h1>
                        {
                            selectedCategory.subcategory
                            &&
                            <h2 className="category-name subcategory-name">
                                {selectedCategory.subcategory}
                            </h2>
                        }
                    </div>
                    <img
                        className={"arrow-down-icon" + (isSelectVisible ? " up" : " down")}
                        src={whiteArrowDown}
                        alt="Arrow down icon"
                    />
                </div>
            </div>
            <div className={"category-options" + (isSelectVisible ? " visible" : "")}>
                {categories.filter(item => item !== selectedCategory).map(category =>
                    <div className="category-select category" onClick={() => selectCategory(category)}>
                        <h1 className="category-name">{category.category}</h1>
                        {
                            category.subcategory
                            &&
                            <h2 className="category-name subcategory-name">
                                {category.subcategory}
                            </h2>
                        }
                    </div>)
                }
            </div>
        </>
    );
};

export default CategorySelect;