import { useEffect } from "react";

const useLockBodyScroll = (
    enabled = true
) => {
    useEffect(() => {
        if (!enabled) return

        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [enabled]);
};

export default useLockBodyScroll;