import { useEffect } from "react";


// const ImageGalary = ({ galaryRef, isScrollingRef, accumDeltaRef, currIndexRef, setCurrentIndex , curProduct }) => {
const ImageGalary = ({ refs, setCurrentIndex, curProduct }) => {
    const { galaryRef, isScrollingRef, accumDeltaRef, currIndexRef } = refs
    // const galaryRef = useRef(null)

    const handleWheel = (e) => {
        e.preventDefault()
        if (isScrollingRef.current || !galaryRef.current) return;

        const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX

        accumDeltaRef.current += delta
        console.log(e);

        const threshold = galaryRef.current.clientHeight * 0.2

        if (Math.abs(accumDeltaRef.current) >= threshold) {
            const direction = accumDeltaRef.current > 0 ? 1 : -1

            let nextIndex = currIndexRef.current + direction
            const maxIndex = curProduct.imgs.length - 1

            if (nextIndex < 0) nextIndex = 0
            if (nextIndex > maxIndex) nextIndex = maxIndex

            if (nextIndex !== currIndexRef.current) {
                isScrollingRef.current = true
                currIndexRef.current = nextIndex
                setCurrentIndex(nextIndex)

                galaryRef.current.scrollTo({
                    top: nextIndex * galaryRef.current.clientHeight,
                    behavior: 'smooth'
                })


                setTimeout(() => {
                    isScrollingRef.current = false
                    accumDeltaRef.current = 0
                }, 600)

            } else {
                accumDeltaRef.current = 0
            }
        }
    }

    useEffect(() => {
        const el = galaryRef.current
        if (!el) return
        el.addEventListener('wheel', handleWheel, { passive: false })

        return () => {
            el.removeEventListener('wheel', handleWheel, { passive: false })
        }
    }, []);


    return (
        <div ref={galaryRef} className=" w-full overscroll-contain overflow-hidden col-span-4">
            {curProduct?.imgs?.map((imgSrc, i) => {
                return (
                    <div className="h-screen w-full flex justify-center items-center" key={i}>
                        <img className="w-full max-h-[90%] object-contain" src={imgSrc} alt={`Product Image ${i + 1}`} />
                    </div>)
            })}
        </div>
    );
};

export default ImageGalary;