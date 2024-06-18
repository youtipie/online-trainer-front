import React from 'react';


const ScrollItem = ({items, className, selectedIndex, selectedStyle, handleClick}) => {
    return (
        <>
            {items.map((child, index) =>
                <div
                    key={index}
                    className={className}
                    style={selectedIndex === index ? selectedStyle : {}}
                    onClick={(event) => handleClick(event, index)}>
                    {child}
                </div>
            )}
        </>
    );
};

export default ScrollItem;