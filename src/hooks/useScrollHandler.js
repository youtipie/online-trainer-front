import {useCallback} from "react";

const useScrollHandler = (scrollRef, width, surroundingBackup) => {
    return useCallback(() => {
        if (scrollRef.current) {
            const scroll = scrollRef.current.scrollLeft;
            const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.offsetWidth;
            const minWidth = width;
            const maxWidth = maxScroll - width;

            if (scroll < minWidth || scroll >= maxWidth) {
                scrollRef.current.scrollLeft = width * (surroundingBackup - 1) + (scroll % width);
            }
        }
    }, [scrollRef, width, surroundingBackup]);
};

export default useScrollHandler;