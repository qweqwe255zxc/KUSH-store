import { useParams } from "react-router-dom";
import { useProducts } from '../hooks/useProducts';
import { formatPrice } from "../utils/utils";
import { useEffect, useRef, useState } from "react";
import chevronDown from '../assets/img/chevronDown.svg'



const ProductPage = () => {


    const params = useParams()

    const { products } = useProducts()

    const curProduct = products.find(prod => prod.id === Number(params.id))

    const [selectedSize, setSelectedSize] = useState(curProduct?.sizes?.[0] || '');
    const [sizesIsOpen, setSizesIsOpen] = useState(false)
    console.log(selectedSize);

    const galaryRef = useRef(null)
    const isScrolling = useRef(false)

    const currIndex = useRef(0)
    const [currentIndex, setCurrentIndex] = useState(0);
    const accumDelta = useRef(0)

    const handleWheel = (e) => {
        e.preventDefault()
        if (isScrolling.current || !galaryRef.current) return;

        accumDelta.current += e.deltaY
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

        const height = galaryRef.current.clientHeight

        galaryRef.current.scrollTo({
            top: currIndex.current * height,
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
            {
                curProduct ? (
                    <div className="grid grid-cols-7 max-h-screen gap-[clamp(0.5rem,1.5vw,2rem)]">
                        <div className="col-span-2 flex justify-center items-center">
                            <div className="h-[clamp(3rem,6vw,6rem)] flex flex-wrap gap-[clamp(2px,0.5vw,6px)] ml-[clamp(0.5rem,2vw,1.75rem)]">
                                {curProduct?.imgs?.map((imgSrc, i) => (
                                    <button className={`h-full shrink-0 cursor-pointer ${currentIndex === i ? 'opacity-100' : 'opacity-40'}`} onClick={() => { changeImage(i) }} key={i}>
                                        <img className="w-full h-full" src={imgSrc} alt="" />
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div ref={galaryRef} className="w-full overscroll-contain overflow-hidden col-span-3">
                            {curProduct?.imgs?.map((imgSrc, i) => {
                                return (
                                    <div className="h-screen w-full flex justify-center items-center" key={i}>
                                        <img className="w-[clamp(70%,80vw,90%)] max-h-[clamp(60vh,80vh,90vh)] object-contain" src={imgSrc} alt={`Product Image ${i + 1}`} />
                                    </div>)
                            })}
                        </div>
                        <div className="flex items-center justify-center flex-col col-span-2 px-[clamp(0.5rem,2vw,2rem)]">
                            <div className="">
                                <p className="text-[clamp(0.6rem,1vw,0.75rem)] text-center text-gray-500 uppercase leading-none">{curProduct.brand}</p>
                                <h1 className="text-[clamp(0.85rem,1.5vw,1rem)] uppercase leading-none mb-[clamp(0.25rem,0.5vw,0.5rem)]">{curProduct.model}</h1>
                                <p className="text-[clamp(0.75rem,1.3vw,0.9rem)] text-center text-[#898989] tracking-[-.05rem] font-medium leading-none mb-[clamp(1rem,3vw,1.75rem)]"><span className='currency'>₽</span> {formatPrice(curProduct.price)}</p>
                            </div>
                            <div className="relative w-[clamp(60%,20vw,75%)] text-center text-[clamp(0.75rem,1.2vw,0.875rem)] mb-[clamp(0.5rem,1vw,0.75rem)]">
                                <button className="relative w-full cursor-pointer border border-[#DFDFDF] " onClick={() => setSizesIsOpen(!sizesIsOpen)}>
                                    <span className="">{selectedSize}</span>
                                    <img className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-200 ${sizesIsOpen ? 'rotate-180' : ''}`} src={chevronDown} alt="" />
                                </button>
                                <div className={`w-full transition-[max-height] ease-(--def-ease) duration-150 overflow-hidden divide-y divide-[#DFDFDF] border-x border-[#DFDFDF]  ${sizesIsOpen ? 'max-h-17' : 'max-h-0'}`}>
                                    {curProduct?.sizes?.map((size, i) => (
                                        <button className={`w-full cursor-pointer ${i === curProduct.sizes.length - 1 ? 'border-b border-[#DFDFDF]' : ''} ${size === selectedSize ? 'bg-gray-100' : 'bg-white'} `} tabIndex={sizesIsOpen ? 0 : -1} key={i} onClick={() => {
                                            setSelectedSize(size)
                                            setSizesIsOpen(false)
                                        }}>
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <button className="w-[clamp(60%,20vw,75%)] text-center text-[clamp(0.75rem,1.2vw,0.875rem)] cursor-pointer border bg-[#f4f4f4] border-[#DFDFDF] uppercase mb-[clamp(1rem,3vw,1.75rem)]"> add to cart</button>

                            {/* <div className="mb-1.5 uppecase w-3/5 text-start text-sm  leading-none"><button className="uppecase text-sm ">description</button></div> */}
                            <button className="cursor-pointer w-3/5 mb-1.5">
                                <p className="uppecase text-start text-sm uppercase leading-none">description</p>
                            </button>
                            <button className="cursor-pointer w-3/5">
                                <p className="uppecase text-start text-sm uppercase leading-none">size guide</p>
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>Loading product...</p>
                )
            }
        </ >
    );
};

export default ProductPage;
