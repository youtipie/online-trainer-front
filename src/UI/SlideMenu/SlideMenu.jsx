import React, {useEffect} from 'react';
import classes from './SlideMenu.module.css';
import arrowDown from "../../assets/images/arrow-down.png";


const SlideMenu = (props) => {
    // TODO: Add classes styles instead of inline styles
    const {select, options, selectStyles, optionsStyles, optionStyles, iconStyles} = props
    const [isSelectVisible, setIsSelectVisible] = React.useState(false);

    useEffect(() => {
        setIsSelectVisible(false);
    }, [props]);

    const iconClasses = [classes["slide-menu-icon"], isSelectVisible ? classes["up"] : classes["down"]].join(" ")

    const optionsClasses = [classes["slide-menu-options"], isSelectVisible ? classes["visible"] : classes["invisible"]].join(" ")

    return (
        <>
            <div style={{...selectStyles}} className={classes["slide-menu-select"]}
                 onClick={() => setIsSelectVisible(!isSelectVisible)}>
                <div className={classes["slide-menu-select-text-wrapper"]}>
                    <h1 className={classes["name"]}>{select.name}</h1>
                    {select.subname && <h2 className={classes["subname"]}>{select.subname}</h2>}
                </div>
                <img
                    style={iconStyles}
                    className={iconClasses}
                    src={arrowDown}
                    alt="Arrow down icon"
                />
            </div>
            <div style={optionsStyles} className={optionsClasses}>
                {options.map(option =>
                    <div
                        style={optionStyles}
                        key={option.name + option.subname}
                        className={classes["slide-menu-option"]}
                    >
                        <div className={classes["slide-menu-option-text-wrapper"]}>
                            <h1 className={classes["name"]}>{option.name}</h1>
                            {option.subname && <h2 className={classes["subname"]}>{option.subname}</h2>}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default SlideMenu;