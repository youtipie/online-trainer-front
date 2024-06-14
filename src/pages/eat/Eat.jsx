import React from 'react';
import FixedSlideMenu from "../../UI/FixedSlideMenu/FixedSlideMenu";

const Eat = () => {
    return (
        <>
            <FixedSlideMenu
                select={{name: "Test", subname: "Megatest"}}
                options={[{name: "Test", subname: "Megatest"},{name: "Test1", subname: "Megatest1"}, {name: "Test2", subname: "Megatest2"}]}
                onClick={(option) => console.log(option)}
            />
        </>
    );
};

export default Eat;