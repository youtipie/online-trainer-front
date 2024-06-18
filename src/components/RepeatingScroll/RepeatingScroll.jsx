import React, {useCallback, useEffect, useRef, useState} from 'react';
import classes from './RepeatingScroll.module.css';


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

    const backupWidth = width;

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const scroll = scrollRef.current.scrollLeft;
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
            const minWidth = backupWidth;
            const maxWidth = maxScroll - backupWidth
            console.log(scroll)
            if (scroll < minWidth || scroll >= maxWidth) {
                scrollRef.current.scrollLeft = backupWidth * (surroundingBackup - 1) + (scroll % width)
            }
        }
    }, [backupWidth, surroundingBackup, width]);

    useEffect(() => {
        if (contentRef.current) {
            if (selectedIndex >= 0 && selectedIndex < children.length) {
                const childrenLength = children.length;
                const centralDiv = scrollRef.current.children[Math.floor(childrenLength / 2)];
                const elementToScrollIndex = selectedIndex !== null ? selectedIndex : Math.floor(centralDiv.children.length / 2)
                const element = centralDiv.children[elementToScrollIndex];
                if (element) {
                    element.scrollIntoView({
                        behavior: 'instant',
                        block: "center",
                        inline: 'center'
                    });
                }
            } else {
                scrollRef.current.scrollLeft = backupWidth * surroundingBackup;
            }
            setWidth(contentRef.current.offsetWidth);
        }
        // eslint-disable-next-line
    }, []);

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

    return (
        <div className={classes["scroll-loop-outer"]} style={outerStyle}>
            <div
                className={classes["scroll-loop-inner"]}
                ref={scrollRef}
                style={{
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