import React from 'react';
import classes from "./FixedSlideMenu.module.css"
import whiteArrowDown from "../../assets/images/white-arrow-down.png";
import greyArrowDown from "../../assets/images/arrow-down.png";


const FixedSlideMenu = ({
                            select,
                            options,
                            onClick,
                            selectStyles,
                            optionsStyles,
                            optionStyles,
                            nameStyles,
                            subnameStyles,
                            iconStyles,
                            singleArrow = false,
                            whiteArrow = true,
                            children
                        }) => {
    const [isSelectVisible, setIsSelectVisible] = React.useState(false);

    const arrow = whiteArrow ? whiteArrowDown : greyArrowDown;
    const iconClasses = [
        classes["fixed-slide-menu-icon"],
        singleArrow ? classes["single-arrow"] : classes["double-arrow"],
        isSelectVisible ? classes["up"] : classes["down"]
    ].join(" ");
    const optionsClasses = [classes["fixed-slide-menu-options"], isSelectVisible ? classes["visible"] : classes["invisible"]].join(" ");
    const textWrapperClass = [
        classes["fixed-slide-menu-select-text-wrapper"],
        singleArrow ? classes["single-arrow"] : classes["double-arrow"]
    ].join(" ")

    function handleClick(option) {
        onClick(option, () => setIsSelectVisible(false))
    }

    return (
        <>
            {
                isSelectVisible
                &&
                <div className={classes["fixed-slide-menu-backdrop"]} onClick={() => setIsSelectVisible(false)}></div>
            }
            <div style={selectStyles} className={classes["fixed-slide-menu-select"] + " overlap"}
                 onClick={() => setIsSelectVisible(prev => !prev)}>
                {!singleArrow
                    &&
                    <img
                        style={iconStyles}
                        className={iconClasses}
                        src={arrow}
                        alt="Arrow down icon"
                    />
                }
                <div className={textWrapperClass}>
                    <h1 style={nameStyles} className={classes.name}>{select.name}</h1>
                    {
                        select.subname
                        &&
                        <h2 style={subnameStyles} className={classes.subname}>
                            {select.subname}
                        </h2>
                    }
                </div>
                <img
                    style={iconStyles}
                    className={iconClasses}
                    src={arrow}
                    alt="Arrow down icon"
                />
            </div>
            <div style={optionsStyles} className={optionsClasses}>
                {
                    children ?
                        children
                        :
                        options.filter(item => item !== select).map(option =>
                            <div
                                style={optionStyles}
                                key={option.name + option.subname}
                                className={classes["fixed-slide-menu-option"]}
                                onClick={() => handleClick(option)}
                            >
                                <div className={classes["fixed-slide-menu-option-text-wrapper"]}>
                                    <h1 style={nameStyles} className={classes["name"]}>{option.name}</h1>
                                    {
                                        option.subname
                                        &&
                                        <h2 style={subnameStyles} className={classes.subname}>
                                            {option.subname}
                                        </h2>
                                    }
                                </div>
                            </div>)
                }
            </div>
        </>
    );
};

export default FixedSlideMenu;