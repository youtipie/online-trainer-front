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
            if (scroll < minWidth || scroll >= maxWidth) {
                scrollRef.current.scrollLeft = backupWidth * (surroundingBackup - 1) + (scroll % width)
            }
        }
    }, [backupWidth, surroundingBackup, width]);

    useEffect(() => {
        if (contentRef.current) {
            setWidth(contentRef.current.offsetWidth);
            if (selectedIndex >= 0 && selectedIndex < children.length) {
                const childrenLength = children.length;
                const centralDiv = scrollRef.current.children[Math.floor(childrenLength / 2)];
                const elementToScrollIndex = selectedIndex ? selectedIndex : Math.floor(centralDiv.children.length / 2)
                const element = centralDiv.children[elementToScrollIndex];
                if (element) {
                    // TODO: Make element more CENTERED
                    // console.log(width)
                    // console.log(scrollRef.current.offsetWidth, width, contentRef.current.offsetWidth);
                    // console.log("1", element.offsetLeft + width / 2 + (contentRef.current.scrollLeft % width))
                    // console.log(element.offsetLeft + width / 2)
                    // scrollRef.current.scrollLeft = element.offsetLeft + width / 2 + (scrollRef.current.scrollLeft % width);
                    // element.scrollIntoView({
                    //     behavior: 'smooth',
                    //     inline: 'center'
                    // });
                    const containerWidth = contentRef.current.offsetWidth;
                    const elementWidth = element.offsetWidth;
                    const elementOffsetLeft = element.offsetLeft;

                    const scrollPosition = elementOffsetLeft - (containerWidth / 2) + (elementWidth);
                    console.log(scrollPosition)
                    scrollRef.current.scrollLeft = scrollPosition;
                }
            } else {
                scrollRef.current.scrollLeft = backupWidth * surroundingBackup;
            }
        }
        // eslint-disable-next-line
    }, [width]);

    const handleClick = useCallback((event, index) => {
        setSelectedIndex(index);
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