import React, {useEffect} from 'react';
import classes from './SlideMenu.module.css';
import arrowDown from "../../assets/images/arrow-down.png";


const SlideMenu = (props) => {
    const [isSelectVisible, setIsSelectVisible] = React.useState(false);

    useEffect(() => {
        setIsSelectVisible(false);
    }, [props]);

    const iconClasses = [classes["slide-menu-icon"], isSelectVisible ? classes["up"] : classes["down"]].join(" ")

    const optionsClasses = [classes["slide-menu-options"], isSelectVisible ? classes["visible"] : classes["invisible"]].join(" ")

    return (
        <>
            <div className={classes["slide-menu-select"]}
                 onClick={() => setIsSelectVisible(!isSelectVisible)}>
                <div className={classes["slide-menu-select-text-wrapper"]}>
                    <h1 className={classes["name"]}>{props.select.name}</h1>
                    {props.select.subname && <h2 className={classes["subname"]}>{props.select.subname}</h2>}
                </div>
                <img
                    className={iconClasses}
                    src={arrowDown}
                    alt="Arrow down icon"
                />
            </div>
            <div className={optionsClasses}>
                {props.options.map(option =>
                    <div key={option.name + option.subname} className={classes["slide-menu-option"]}>
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