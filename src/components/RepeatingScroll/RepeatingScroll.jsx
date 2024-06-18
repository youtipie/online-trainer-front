import React, {useCallback, useEffect, useRef, useState} from 'react';
import classes from './RepeatingScroll.module.css';
import ScrollItem from "./ScrollItem";
import useScrollHandler from "../../hooks/useScrollHandler";
import useInitializeScroll from "../../hooks/useInitializeScroll";


const RepeatingScroll = ({
                             surroundingBackup = 4,
                             defaultIndex = null,
                             outerStyle,
                             innerStyle,
                             children,
                             selectedStyle
                         }) => {
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    const [width, setWidth] = React.useState(0);
    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

    const handleScroll = useScrollHandler(scrollRef, width, surroundingBackup);

    useInitializeScroll(contentRef, scrollRef, selectedIndex, children, surroundingBackup, width);

    useEffect(() => {
        if (contentRef.current) {
            setWidth(contentRef.current.offsetWidth);
        }
    }, [contentRef]);

    const handleClick = useCallback((event, index) => {
        setSelectedIndex(index);
        const element = event.currentTarget;
        setTimeout(() => {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });
        }, 100)
    }, []);

    const generateBackup = () => {
        return (
            Array(surroundingBackup)
                .fill(null)
                .map((_, i) => (
                    <div key={i} className={classes["scroll-loop-item"]}>
                        <ScrollItem
                            items={children}
                            className={classes["scroll-loop-item"]}
                            selectedIndex={selectedIndex}
                            selectedStyle={selectedStyle}
                            handleClick={handleClick}
                        />
                    </div>
                )))
    }

    return (
        <div className={classes["scroll-loop-outer"]} style={outerStyle}>
            <div
                className={classes["scroll-loop-inner"]}
                ref={scrollRef}
                style={innerStyle}
                onScroll={handleScroll}
            >
                {generateBackup()}
                <div ref={contentRef} className={classes["scroll-loop-item"]}>
                    <ScrollItem
                        items={children}
                        className={classes["scroll-loop-item"]}
                        selectedIndex={selectedIndex}
                        selectedStyle={selectedStyle}
                        handleClick={handleClick}
                    />
                </div>
                {generateBackup()}
            </div>
        </div>
    );
};

export default RepeatingScroll;