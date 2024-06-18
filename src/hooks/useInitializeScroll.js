import {useEffect} from "react";

const useInitializeScroll = (contentRef, scrollRef, selectedIndex, children, surroundingBackup, width) => {
    useEffect(() => {
        if (contentRef.current) {
            if (selectedIndex >= 0 && selectedIndex < children.length) {
                const centralDiv = scrollRef.current.children[Math.floor(children.length / 2)];
                const elementToScrollIndex = selectedIndex !== null ? selectedIndex : Math.floor(centralDiv.children.length / 2);
                const element = centralDiv.children[elementToScrollIndex];

                if (element) {
                    element.scrollIntoView({
                        behavior: 'instant',
                        block: 'center',
                        inline: 'center'
                    });
                }
            } else {
                scrollRef.current.scrollLeft = width * surroundingBackup;
            }
        }
        // eslint-disable-next-line
    }, []);
};

export default useInitializeScroll;