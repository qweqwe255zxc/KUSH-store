import { useState } from "react";
import { formatPrice } from "../../../utils/formatPrice.js";
import chevronDown from '../../../assets/img/chevronDown.svg'


const ProductInfo = ({ curProduct }) => {

    const [selectedSize, setSelectedSize] = useState(curProduct?.sizes?.[0]?.size || '');
    const [sizesIsOpen, setSizesIsOpen] = useState(false)
    const [descriptionIsOpen, setDescriptionIsOpen] = useState(false)
    const [guideIsOpen, setGuideIsOpen] = useState(false)

    return (
        <div className="flex items-center justify-center flex-col col-span-2 ml-[clamp(.75rem,2vw,1.75rem)]">
            <div className="">
                <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-center text-gray-500 uppercase leading-none">{curProduct.brand}</p>
                <h1 className="text-[clamp(.875rem,1.1dvw,1rem)] text-center uppercase leading-none mb-[clamp(0.25rem,0.5vw,0.5rem)]">{curProduct.model}</h1>
                <p className="text-[clamp(0.75rem,1.05dvw,0.875rem)] text-center text-[#919191] tracking-[-.05rem] font-medium leading-none mb-[clamp(1rem,1.6vw,1.5rem)]"><span className='currency'>₽</span> {formatPrice(curProduct.price)}</p>
            </div>
            {/* начало размеров  transition-[max-height] ease-(--def-ease) duration-150  */}
            <div className="relative w-full text-center flex flex-col items-center text-sm mb-[clamp(0.5rem,.8dvw,0.75rem)]" >
                <button className="rounded-xs relative w-[clamp(10rem,20dvw,100%)] cursor-pointer border  border-[#DFDFDF]" onClick={() => { setSizesIsOpen(!sizesIsOpen); setDescriptionIsOpen(false); setGuideIsOpen(false) }}>
                    <span className="text-[clamp(0.75rem,1.05dvw,0.875rem)] leading-none py-0.5">{selectedSize}</span>
                    <img className={`absolute right-0 top-1/2 -translate-y-1/2 transition-all ease-in-out duration-200 ${sizesIsOpen ? 'rotate-180' : ''}`} src={chevronDown} alt="" />
                </button>
                <div className={`w-[clamp(10rem,20dvw,100%)] overflow-hidden divide-y divide-[#DFDFDF] border-x border-[#DFDFDF]  ${sizesIsOpen ? 'max-h-full' : 'max-h-0'}`}>
                    {curProduct?.sizes?.map((size, i) => (
                        <button className={`rounded-xs w-full text-[clamp(0.75rem,1.05dvw,0.875rem)] tracking-[-0.06rem] leading-none py-0.5 cursor-pointer ${i === curProduct.sizes.length - 1 ? 'border-b border-[#DFDFDF]' : ''} ${size.stock === 0 ? 'opacity-50' : ''}  ${size.size === selectedSize ? 'bg-gray-100' : 'bg-white'} `}
                            disabled={size.stock === 0} tabIndex={sizesIsOpen && size.stock !== 0 ? 0 : -1} key={i} onClick={() => {
                                setSelectedSize(size.size)
                                setSizesIsOpen(false)
                            }}>
                            size: {size.size} stock: {size.stock}
                        </button>
                    ))}
                </div>
            </div>
            {/* конец размеров */}
            <button className="rounded-xs  w-[clamp(10rem,20dvw,100%)] leading-none py-0.5 text-center text-[clamp(0.75rem,1.05dvw,0.875rem)] cursor-pointer border bg-[#f4f4f4] border-[#DFDFDF] uppercase mb-[clamp(1rem,1.6vw,1.5rem)]"> add to cart</button>
            <div onClick={() => { setDescriptionIsOpen(!descriptionIsOpen); setSizesIsOpen(false); setGuideIsOpen(false) }} className="cursor-pointer  w-[clamp(10rem,20dvw,100%)] text-[clamp(0.75rem,1.05dvw,0.875rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                <button className={`cursor-pointer block uppecase text-start uppercase leading-none ${descriptionIsOpen ? 'underline' : ''}`}>description</button>
                <div className={`overflow-hidden uppercase ${descriptionIsOpen ? 'max-h-1000' : 'max-h-0'}`}>
                    <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-gray-500 leading-none mt-1 mb-[clamp(0.125rem,0.4vw,0.375rem)]">{curProduct.description ? curProduct.description : 'no description'}</p>
                    <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-gray-500 leading-none ">{curProduct.materials ? curProduct.materials : 'no materials information'}</p>
                </div>
            </div>
            <div onClick={() => { setGuideIsOpen(!guideIsOpen); setSizesIsOpen(false); setDescriptionIsOpen(false) }} className="cursor-pointer  w-[clamp(10rem,20dvw,100%)] text-[clamp(0.75rem,1.05dvw,0.875rem)] mb-[clamp(0.125rem,0.4vw,0.375rem)]">
                <button className={`cursor-pointer block uppecase text-start uppercase leading-none ${guideIsOpen ? 'underline' : ''}`}>size guide</button>
                <div className={`overflow-hidden uppercase ${guideIsOpen ? 'max-h-1000' : 'max-h-0'}`}>
                    <p className="text-[clamp(0.625rem,.8dvw,0.75rem)] text-gray-500 leading-none mt-1 mb-[clamp(0.125rem,0.4vw,0.375rem)]">{curProduct.sizeGuide ? curProduct.sizeGuide : 'no size guide'}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;