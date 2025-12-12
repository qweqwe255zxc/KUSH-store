export const buildTitle = (page) => {
    return `${page.toUpperCase()} — KUSH`
}

export const observer = (container, el, threshold, interval = 0, classes = 'show') => {
    if (!container) return
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    el.classList.add(classes)
                }, interval);
            }
        })
    }, { threshold: threshold })

    obs.observe(container)

    return () => observer.disconnect()
}

export const charsObserver = (container, el, threshold, startDelay, delayInc) => {
    if (!container) return
    const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            let delay = startDelay
            if (entry.isIntersecting) {
                el.forEach(element => {
                    setTimeout(() => {
                        element.classList.add('show')
                    }, delay)
                    delay += delayInc
                });
            }
        })
    }, { threshold: threshold })

    obs.observe(container)

    return () => observer.disconnect()
}