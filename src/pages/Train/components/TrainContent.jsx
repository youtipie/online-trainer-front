import React from 'react';
import SlideMenu from "../../../UI/SlideMenu/SlideMenu";


const TrainContent = ({levels}) => {

    return (
        <div className="content-container train-content">
            {levels.map(level =>
                <SlideMenu
                    select={level}
                    options={level.options}
                    key={level.name}
                />
            )}
        </div>
    );
};

export default TrainContent;