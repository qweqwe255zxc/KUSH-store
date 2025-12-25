import { useEffect } from "react";

const ScrollToTop = () => {
    useEffect(() => {
        const nav = performance.getEntriesByType('navigation')[0];
        console.log(nav);
        if (nav?.type === 'reload') {
            window.scrollTo({
                top: 0,
                left:0,
                behavior: 'instant'
            })
        }
    }, []);

    return null;
};

export default ScrollToTop;