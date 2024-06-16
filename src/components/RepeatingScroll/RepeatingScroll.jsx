import React, {useCallback, useEffect, useRef, useState} from 'react';
import classes from './RepeatingScroll.module.css';


const RepeatingScroll = ({
                             surroundingBackup = 4,
                             outerStyle,
                             innerStyle,
                             children,
                             selectedStyle
                         }) => {
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    const [width, setWidth] = React.useState(0);
    // TODO: Add select logic for selecting clicked element
    const [selectedIndex, setSelectedIndex] = useState(null);

    const backupWidth = width;

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const scroll = scrollRef.current.scrollLeft;
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
            const minWidth = backupWidth;
            const maxWidth = maxScroll - backupWidth
            if (scroll < minWidth || scroll >= maxWidth) {
                scrollRef.current.scrollLeft = backupWidth * (surroundingBackup - 1) + (scroll % width)
            }
        }
    }, [backupWidth, surroundingBackup, width]);

    useEffect(() => {
        if (contentRef.current) {
            setWidth(contentRef.current.offsetWidth);
            scrollRef.current.scrollLeft = backupWidth * surroundingBackup;
        }
    }, [backupWidth, surroundingBackup]);

    const handleClick = useCallback((event, index) => {
        // setSelectedIndex(index);
        const element = event.currentTarget;
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center'
        });
    }, []);

    return (
        <div className={classes["scroll-loop-outer"]} style={outerStyle}>
            <div
                className={classes["scroll-loop-inner"]}
                ref={scrollRef}
                style={{
                    width,
                    ...innerStyle
                }}
                onScroll={handleScroll}
            >
                {Array(surroundingBackup)
                    .fill(null)
                    .map((_, i) => (
                        <div key={`left-${i}`} className={classes["scroll-loop-item"]}>
                            {children.map((child, index) =>
                                <div
                                    className={classes["scroll-loop-item"]}
                                    style={selectedIndex === index ? selectedStyle : {}}
                                    onClick={(event) => handleClick(event, index)}>
                                    {child}
                                </div>
                            )}
                        </div>
                    ))}
                <div ref={contentRef} className={classes["scroll-loop-item"]}>
                    {children.map((child, index) =>
                        <div
                            className={classes["scroll-loop-item"]}
                            style={selectedIndex === index ? selectedStyle : {}}
                            onClick={(event) => handleClick(event, index)}>
                            {child}
                        </div>
                    )}
                </div>
                {Array(surroundingBackup)
                    .fill(null)
                    .map((_, i) => (
                        <div key={`right-${i}`} className={classes["scroll-loop-item"]}>
                            {children.map((child, index) =>
                                <div
                                    className={classes["scroll-loop-item"]}
                                    style={selectedIndex === index ? selectedStyle : {}}
                                    onClick={(event) => handleClick(event, index)}>
                                    {child}
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default RepeatingScroll;