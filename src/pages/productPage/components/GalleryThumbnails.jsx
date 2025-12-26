const GalleryThumbnails = ({ refs, curProduct, currentIndex, setCurrentIndex }) => {
    const { currIndexRef, galaryRef } = refs

    const changeImage = (num) => {
        currIndexRef.current = num
        setCurrentIndex(num)
        if (!galaryRef.current) return
        galaryRef.current.scrollTo({
            top: currIndexRef.current * galaryRef.current.clientHeight,
            behavior: 'smooth'
        })
    }


    return (
        <div className="col-span-2 flex justify-center items-center">
            <div className="h-[clamp(3rem,5dvw,5rem)]  flex flex-wrap gap-[clamp(.125rem,.5dvw,.375rem)] ml-[clamp(.75rem,2vw,1.75rem)]">
                {curProduct?.imgs?.map((imgSrc, i) => (
                    <button className={`h-full shrink-0 cursor-pointer ${currentIndex === i ? 'opacity-100' : 'opacity-40'}`}
                        onClick={() => { changeImage(i) }}
                        key={i}>
                        <img className="h-full" src={imgSrc} alt="" />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default GalleryThumbnails;