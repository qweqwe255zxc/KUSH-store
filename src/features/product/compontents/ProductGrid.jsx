import React, { useEffect, useRef, useState } from 'react';
import { arrObserver, observer } from '../../../utils/observers.js';
import ProductCard from './ProductCard.jsx';
import { useProducts } from '../useProducts';


const ProductGrid = ({ selectedCategory }) => {

    const itemsPerPage = 20;
    const [currPage, setCurrPage] = useState(1);
    const [hoverPage, setHoverPage] = useState(null);
    const { products } = useProducts()


    const startIndex = (currPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;


    const filteredProducts =
        selectedCategory.id === 2
            ? products.filter((product) => product.newDrop === true)
            : selectedCategory.id === 1
                ? products
                : products.filter((product) => product.category === selectedCategory.id);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const currentProducts = filteredProducts.slice(startIndex, endIndex);
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

    const container = useRef(null)
    const productsRef = useRef([])

    useEffect(() => {
        observer(container.current, container.current, .2, 0)
        arrObserver(container.current, productsRef.current, .2, 0, 50, true)
    }, []);

    return (
        <>
            {/* <div className="breadcrumb">catalog/{selectedCategory.value}</div> */}
            <div ref={container} className="animate-loader grid grid-cols-3 fade-in-md md:grid-cols-4 lg:grid-cols-5 divide-y divide-x border-t divide-[#E4E4E4] border-[#E4E4E4]">
                {currentProducts.map((product, i) => (
                    <ProductCard key={product.id} product={product} ref={productsRef} i={i} selectedCategory={selectedCategory} />
                ))}
            </div>
            <div className="flex justify-center mt-10 mb-17.5">
                {pages.length > 0 ? pages.map((pageNum, i) => (
                    <div key={i} className={`cursor-pointer pageNum text-[clamp(0.675rem,1.4dvw,1.25rem)] flex items-center gap-2 px-1 font-light transition-opacity duration-350
                        ${hoverPage
                            ? (hoverPage !== pageNum ? 'opacity-20' : '')
                            : (currPage !== pageNum ? 'opacity-20' : '')}`}
                        onMouseEnter={() => setHoverPage(pageNum)}
                        onMouseLeave={() => setHoverPage(null)}
                        onClick={() => setCurrPage(pageNum)}>
                        {pageNum}
                        <div className={` h-[.75px] bg-black ease-in-out duration-350 
                            ${hoverPage
                                ? (hoverPage == pageNum ? 'w-12.5' : 'w-0')
                                : (currPage == pageNum ? 'w-12.5' : 'w-0')
                            }`}></div>
                    </div>
                )) : <span className='text-center'>No products found</span>}
            </div>
        </>
    )
}

export default ProductGrid;
