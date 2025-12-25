
export const observer = (
    container,
    el,
    threshold,
    timeout = 0,
    // fadeSize = 'fade-in-md',
    classes = "fade-in-show"
) => {
    if (!container) return;
    // el.classList.add(fadeSize);
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        el.classList.add(...classes.split(" "));
                    }, timeout);
                }
            });
        },
        { threshold: threshold }
    );

    obs.observe(container);

    return () => observer.disconnect();
};

export const arrObserver = (
    container,
    el,
    threshold,
    startDelay,
    delayInc,
    applyFade = false,
    fadeSize = "fade-in-md",
    removeDur = undefined
) => {
    if (!container) return;
    if (applyFade) el.forEach((element) => element.classList.add(fadeSize));
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                let delay = startDelay;
                if (entry.isIntersecting) {
                    el.forEach((element) => {
                        setTimeout(() => {
                            element.classList.add("fade-in-show");
                        }, delay);
                        if (removeDur) {
                            setTimeout(() => {
                                element.classList.remove("fade-in-md");
                                element.classList.remove("fade-in-lg");
                                element.classList.remove("fade-in-sm");
                                console.log("class removed", element.classList);
                            }, delay + removeDur);
                        }
                        delay += delayInc;
                    });
                }
            });
        },
        { threshold: threshold }
    );

    obs.observe(container);

    return () => observer.disconnect();
};