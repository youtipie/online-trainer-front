import React, {useCallback, useLayoutEffect, useRef} from 'react';
import classes from './RepeatingScroll.module.css';

const RepeatingScroll = ({
                             surroundingBackup = 4,
                             outerStyle,
                             innerStyle,
                             children
                         }) => {
    const contentRef = useRef(null);
    const scrollRef = useRef(null);
    const [height, setHeight] = React.useState(0);

    const backupHeight = height * surroundingBackup;

    const handleScroll = useCallback(() => {
        if (scrollRef.current) {
            const scroll = scrollRef.current.scrollTop;
            if (scroll < backupHeight || scroll >= backupHeight + height) {
                scrollRef.current.scrollTop = backupHeight + (scroll % height)
            }
        }
    }, [height]);

    useLayoutEffect(() => {
        if (contentRef.current) {
            setHeight(contentRef.current.offsetHeight);
            scrollRef.current.scrollTop = backupHeight;
        }
    });

    return (
        <div className={classes["scroll-loop-outer"]} style={outerStyle}>
            <div
                className={classes["scroll-loop-inner"]}
                ref={scrollRef}
                style={{
                    height,
                    ...innerStyle
                }}
                onScroll={handleScroll}
            >
                {Array(surroundingBackup)
                    .fill()
                    .map(() => {
                        return <div>{children}</div>
                    })}

                <div ref={contentRef}>{children}</div>

                {Array(surroundingBackup)
                    .fill()
                    .map(() => (
                        <div>{children}</div>
                    ))}
            </div>
        </div>
    );
};

export default RepeatingScroll;