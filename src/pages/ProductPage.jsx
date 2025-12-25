import { useParams } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice.js";
import { useEffect, useRef, useState } from "react";
import chevronDown from '../assets/img/chevronDown.svg'
import ScrollToTop from "../components/common/ScrollToTop.jsx";
import { useProducts } from "../features/product/useProducts.jsx";



const ProductPage = () => {


    const params = useParams()

    const { products } = useProducts()

    const curProduct = products.find(prod => prod.id === Number(params.id))

    const [selectedSize, setSelectedSize] = useState(curProduct?.sizes?.[0] || '');
    const [sizesIsOpen, setSizesIsOpen] = useState(false)
    const [descriptionIsOpen, setDescriptionIsOpen] = useState(false)
    const [guideIsOpen, setGuideIsOpen] = useState(false)
    console.log(selectedSize);

    const galaryRef = useRef(null)
    const isScrolling = useRef(false)

    const currIndex = useRef(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const accumDelta = useRef(0)

    const handleWheel = (e) => {
        e.preventDefault()
        if (isScrolling.current || !galaryRef.current) return;

        const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX

        accumDelta.current += delta
        console.log(e);

        const threshold = galaryRef.current.clientHeight * 0.2

        if (Math.abs(accumDelta.current) >= threshold) {
            const direction = accumDelta.current > 0 ? 1 : -1

            let nextIndex = currIndex.current + direction
            const maxIndex = curProduct.imgs.length - 1

            if (nextIndex < 0) nextIndex = 0
            if (nextIndex > maxIndex) nextIndex = maxIndex

            if (nextIndex !== currIndex.current) {
                isScrolling.current = true
                currIndex.current = nextIndex
                setCurrentIndex(nextIndex)

                galaryRef.current.scrollTo({
                    top: nextIndex * galaryRef.current.clientHeight,
                    behavior: 'smooth'
                })


                setTimeout(() => {
                    isScrolling.current = false
                    accumDelta.current = 0
                }, 600)

            } else {
                accumDelta.current = 0
            }
        }
    }

    const changeImage = (num) => {
        currIndex.current = num
        setCurrentIndex(num)
        if (!galaryRef.current) return
        galaryRef.current.scrollTo({
            top: currIndex.current * galaryRef.current.clientHeight,
            behavior: 'smooth'
        })
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
        <>
            <ScrollToTop />
            {
                curProduct ? (
                    <div className="grid grid-cols-8 max-h-screen">
                        <div className="col-span-2 flex justify-center items-center">
                            <div className="h-[clamp(3rem,5dvw,5rem)] flex flex-wrap gap-[clamp(.125rem,.5dvw,.375rem)] ml-[clamp(.75rem,2vw,1.75rem)]">
                                {curProduct?.imgs?.map((imgSrc, i) => (
                                    <button className={`h-full shrink-0 cursor-pointer ${currentIndex === i ? 'opacity-100' : 'opacity-40'}`} onClick={() => { changeImage(i) }} key={i}>
                                        <img className="w-full h-full" src={imgSrc} alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div ref={galaryRef} className=" w-full overscroll-contain overflow-hidden col-span-4">
                            {curProduct?.imgs?.map((imgSrc, i) => {
                                return (
                                    <div className="h-screen w-full flex justify-center items-center" key={i}>
                                        <img className="w-full max-h-[90%] object-contain" src={imgSrc} alt={`Product Image ${i + 1}`} />
                                    </div>)
                            })}
                        </div>
                        <div className="flex items-center justify-center flex-col col-span-2 ml-[clamp(.75rem,2vw,1.75rem)]">
                            <div className="">
                                <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-center text-gray-500 uppercase leading-none">{curProduct.brand}</p>
                                <h1 className="text-[clamp(.875rem,1.1dvw,1rem)] text-center uppercase leading-none mb-[clamp(0.25rem,0.5vw,0.5rem)]">{curProduct.model}</h1>
                                <p className="text-[clamp(0.75rem,1.05dvw,0.875rem)] text-center text-[#898989] tracking-[-.05rem] font-medium leading-none mb-[clamp(1rem,1.6vw,1.5rem)]"><span className='currency'>₽</span> {formatPrice(curProduct.price)}</p>
                            </div>
                            {/* начало размеров  transition-[max-height] ease-(--def-ease) duration-150  */}
                            <div className="relative w-full text-center flex flex-col items-center text-sm mb-[clamp(0.5rem,.8dvw,0.75rem)]" >
                                <button className="relative w-[clamp(10rem,20dvw,100%)] cursor-pointer border  border-[#DFDFDF]" onClick={() => { setSizesIsOpen(!sizesIsOpen); setDescriptionIsOpen(false); setGuideIsOpen(false) }}>
                                    <span className="text-[clamp(0.75rem,1.05dvw,0.875rem)] leading-none py-0.5">{selectedSize}</span>
                                    <img className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-200 ${sizesIsOpen ? 'rotate-180' : ''}`} src={chevronDown} alt="" />
                                </button>
                                <div className={`w-[clamp(10rem,20dvw,100%)] overflow-hidden divide-y divide-[#DFDFDF] border-x border-[#DFDFDF]  ${sizesIsOpen ? 'max-h-16' : 'max-h-0'}`}>
                                    {curProduct?.sizes?.map((size, i) => (
                                        <button className={`w-full text-[clamp(0.75rem,1.05dvw,0.875rem)] leading-none py-0.5 cursor-pointer ${i === curProduct.sizes.length - 1 ? 'border-b border-[#DFDFDF]' : ''} ${size === selectedSize ? 'bg-gray-100' : 'bg-white'} `} tabIndex={sizesIsOpen ? 0 : -1} key={i} onClick={() => {
                                            setSelectedSize(size)
                                            setSizesIsOpen(false)
                                        }}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            {/* конец размеров */}
                            <button className="w-[clamp(10rem,20dvw,100%)] leading-none py-0.5 text-center text-[clamp(0.75rem,1.05dvw,0.875rem)] cursor-pointer border bg-[#f4f4f4] border-[#DFDFDF] uppercase mb-[clamp(1rem,1.6vw,1.5rem)]"> add to cart</button>
                            <div onClick={() => { setDescriptionIsOpen(!descriptionIsOpen); setSizesIsOpen(false); setGuideIsOpen(false) }} className="cursor-pointer  w-[clamp(10rem,20dvw,100%)] text-[clamp(0.75rem,1.05dvw,0.875rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                                <button className={`cursor-pointer block uppecase text-start uppercase leading-none ${descriptionIsOpen ? 'underline' : ''}`}>description</button>
                                <div className={`overflow-hidden uppercase ${descriptionIsOpen ? 'max-h-1000' : 'max-h-0'}`}>
                                    <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-gray-500 leading-none mt-1 mb-[clamp(0.125rem,0.4vw,0.375rem)]">{curProduct.description ? curProduct.description : 'no information'}</p>
                                    <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-gray-500 leading-none mb-[clamp(0.125rem,0.4vw,0.375rem)]">{curProduct.materials ? curProduct.materials : 'no information'}</p>
                                </div>
                            </div>
                            <div onClick={() => { setGuideIsOpen(!guideIsOpen); setSizesIsOpen(false); setDescriptionIsOpen(false) }} className="cursor-pointer  w-[clamp(10rem,20dvw,100%)] text-[clamp(0.75rem,1.05dvw,0.875rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                                <button className={`cursor-pointer block uppecase text-start uppercase leading-none ${guideIsOpen ? 'underline' : ''}`}>size guide</button>
                                <div className={`overflow-hidden uppercase ${guideIsOpen ? 'max-h-1000' : 'max-h-0'}`}>
                                    <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-gray-500 leading-none mt-1 mb-[clamp(0.125rem,0.4vw,0.375rem)]">{curProduct.sizeGuide ? curProduct.sizeGuide : 'no information'}</p>
                                </div>
                            </div>
                        </div>
                    </div >
                ) : (
                    <p>Loading product...</p>
                )
            }
        </ >
    );
};

export default ProductPage;
