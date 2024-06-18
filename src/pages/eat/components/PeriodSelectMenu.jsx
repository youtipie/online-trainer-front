import React from 'react';
import FixedSlideMenu from "../../../UI/FixedSlideMenu/FixedSlideMenu";


const PeriodSelectMenu = ({selectedPeriod, periods, changePeriod}) => {

    return (
        <FixedSlideMenu
            select={selectedPeriod}
            options={periods}
            onClick={changePeriod}
            selectStyles={{
                fontSize: "0.7em",
                height: "2.7rem",
                margin: "0",
                width: "100%",
                borderRadius: "10px"
            }}
            nameStyles={{fontWeight: "400"}}
            iconStyles={{width: "2.3em"}}
            optionsStyles={{top: "5em", height: "auto", fontSize: "0.7em", borderRadius: "10px"}}
            optionStyles={{borderRadius: "10px"}}
            singleArrow={true}
            whiteArrow={false}
        />
    );
};

export default PeriodSelectMenu;