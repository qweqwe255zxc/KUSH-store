import { Link } from 'react-router-dom';

import { useRef, useState, useEffect } from 'react';
import './catalog.css'
import WordToChars from '../../components/WordToChars';
import { charsObserver, observer } from '../../utils/utils.js';


const NewDropHero = () => {

    const newDropHeroRef = useRef(null)
    const linkToDropRef = useRef(null)
    const ctaRef = useRef([])
    const arrowRef = useRef(null)
    const taglineRef = useRef(null);
    const newEraRef = useRef([]);
    const sameEnergyRef = useRef([]);
    const diffDimensionRef = useRef([]);
    useEffect(() => {

        observer(newDropHeroRef.current, linkToDropRef.current, .2, 2000)
        observer(newDropHeroRef.current, arrowRef.current, .2, 1400)
        // observer(newDropHeroRef.current, newDropHeroRef.current, .8, 0,)

        charsObserver(linkToDropRef.current, ctaRef.current, .2, 0, 50)
        charsObserver(taglineRef.current, newEraRef.current, 0.2, 0, 50);
        charsObserver(taglineRef.current, sameEnergyRef.current, 0.2, 500, 50);
        charsObserver(taglineRef.current, diffDimensionRef.current, 0.2, 1000, 50);
    }, []);

    useEffect(() => {
        
    }, []);

    return (
        <div className="new-drop-hero" ref={newDropHeroRef}>
            <Link className='new-drop-hero__link absolute top-0 left-0 flex m-3 justify-between items-center w-2/4  ease-in-out duration-900  border-t-3 md:border-t-2 sm:border-t border-t-white rounded-b-xl h-fit hover:backdrop-blur-xs' ref={linkToDropRef}>
                {/* <h2 className='flex text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl   font-semibold text-white'>{WordToChars('Discrover The Drop', 'new-drop-hero__link-text', ctaRef)}</h2> */}
                <h2 className='flex text-[clamp(20px,4dvw,72px)] leading-none font-semibold text-white'>{WordToChars('Discrover The Drop', 'new-drop-hero__link-text', ctaRef)}</h2>
                <svg ref={arrowRef} className='h-3 sm:h-4 md:h-6 lg:h-8 xl:h-11 2xl:h-15 translate-y-10 opacity-0 transition-all ease-[cubic-bezier(.8, 0, .55, 1)] duration-500' viewBox="0 0 97 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="88" height="8" transform="translate(0 40.0322)" fill="white" />
                    <rect width="61.6619" height="8" transform="translate(52.6475) rotate(45)" fill="white" />
                    <rect width="61.6619" height="8" transform="translate(47 81.6338) rotate(-45)" fill="white" />
                </svg>

            </Link>
            <div ref={taglineRef} className='absolute flex flex-col items-end bottom-0 right-0 text-white m-3'>
                {WordToChars('New Era', 'hero-banner__tagline-item', newEraRef)}
                {WordToChars('Same Energy', 'hero-banner__tagline-item', sameEnergyRef)}
                {WordToChars('Different Dimension', 'hero-banner__tagline-item', diffDimensionRef)}
            </div>
        </div>
    );
}

const Filters = ({ selectedGlobal, setSelectedGlobal }) => {
    const [globalFilters] = useState(['All', 'New Drop', 'Tops', 'Shoes', 'Bottoms'])

    return (
        <div className=' flex justify-between mx-7.5 my-[clamp(1.5rem,5dvw,5rem)]'>
            {globalFilters.map((globalFilter, i) => {
                return (
                    <span key={i} className={`filters__item opacity-70 cursor-pointer ${selectedGlobal === globalFilter ? 'font-bold opacity-100' : ''} `} onClick={() => { setSelectedGlobal(globalFilter) }} >{globalFilter}</span>
                )
            })}
            <span className='filters__item opacity-70'>All Filters</span>
        </div>
    )
}

const ProductGrid = () => {

    const [products] = useState([
        {
            id: 1,
            name: 'Alexander Digenova Leather Bomber',
            img: '/product1.png',
            price: 182960
        },
        {
            id: 2,
            name: 'Mowalola Belt',
            img: '/product2.png',
            price: 24438
        }, {
            id: 3,
            name: 'Alexander Digenova M65 Field Coat',
            img: '/product3.png',
            price: 115594
        }, {
            id: 4,
            name: 'Mowalola Belt',
            img: '/product2.png',
            price: 24438
        },
        {
            id: 5,
            name: 'Alexander Digenova Leather Bomber',
            img: '/product1.png',
            price: 182960
        },
        {
            id: 6,
            name: 'Mowalola Belt',
            img: '/product2.png',
            price: 24438
        }, {
            id: 7,
            name: 'Alexander Digenova M65 Field Coat',
            img: '/product3.png',
            price: 115594
        }, {
            id: 8,
            name: 'Mowalola Belt',
            img: '/product2.png',
            price: 24438
        },
    ]);

    const [pages] = useState([1, 2, 3]); // пока без рассчетов для того чтобы понять как выглядит и анимацию сделать
    const [currPage, setCurrPage] = useState(1);
    const [hoverPage, setHoverPage] = useState(null);

    return (
        <>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 divide-y divide-x border-t divide-[#d1d1d193] border-[#d1d1d193]">
                {products.map((product, i) => (
                    <div key={i} className='relative overflow-hidden w-full h-full pb-4.5 flex flex-col justify-center items-center aspect-48/50 last:border-r last:border-b first:border-l border-[#d1d1d193]'>
                        <img src={product.img} className='w-[75%] ' alt="" />
                        <span className='absolute bottom-0 left-0 font-[330] m-1 md:m-1.25 lg:m-1.5 xl:m-1.75 2xl:m-2 text-[10px] lg:text-xs 2xl:text-sm'>{product.name}</span>
                        <span className='absolute bottom-0 right-0 font-[330] m-1 md:m-1.25 lg:m-1.5 xl:m-1.75 2xl:m-2 text-[10px] lg:text-xs 2xl:text-sm'><span className='currency'>₽</span> {product.price}</span>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-10 mb-17.5">
                {pages.map((pageNum, i) => (
                    <div key={i} className={`cursor-pointer pageNum text-xl flex items-center gap-2 px-1 font-light transition-opacity duration-350
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
                ))}
            </div>
        </>
    )
}

const JoinKushHero = () => {

    return (
        <div className='w-full max-h-202 aspect-19/9 pb-[clamp(0px,4dvw,40px)] 2xl:pb-[clamp(0px,6dvw,60px)]  uppercase relative flex flex-col items-center justify-center  bg-[#d1d1d193]'>
            <div className='flex items-center flex-col'>
                <span className='flex'>{WordToChars('Join', 'join-kush__title')} <span className='join-kush__title'>&nbsp;</span> {WordToChars('Kush', 'join-kush__title')}</span>
                <span className='join-kush__title'>World</span>
            </div>
            <span className=' text-center  pt-[3dvw] 2xl:pt-[5dvw] text-xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl '>Join the <span className='font-extrabold text-center'>KUSH community</span> and be the first to know <br /> about new releases, special offers, and everything <br /> happening in <span className='font-extrabold'>the world of KUSH.</span></span>

            <a href='https://t.me/+dMw3Ead6dZJiODMy' alt='' className='absolute bottom-0 left-0 flex m-3 justify-between items-center w-4/5 hover:w-5/6  ease-in-out duration-300  border-b-3 md:border-b-2  sm:border-b border-b-black rounded-t-xl h-fit text-black'>
                <h2 className='text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold  lowercase'>telegram</h2>
                <svg className='h-3 sm:h-4 md:h-6 lg:h-8 xl:h-11 2xl:h-15 fill-black' viewBox="0 0 97 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="88" height="8" transform="translate(0 40.0322)" />
                    <rect width="61.6619" height="8" transform="translate(52.6475) rotate(45)" />
                    <rect width="61.6619" height="8" transform="translate(47 81.6338) rotate(-45)" />
                </svg>
            </a>
            <span className='absolute bottom-0 right-0 m-3 lg:text-base text-xs'>&copy;studio kush 2025</span>

        </div>
    )
}


const Catalog = () => {

    const [selectedGlobalFilter, setSelectedGlobalFilters] = useState('All');

    // useEffect(() => {
    //     document.title = buildTitle("catalog");
    // }, []);

    return (
        <>
            <NewDropHero />
            <Filters selectedGlobal={selectedGlobalFilter} setSelectedGlobal={setSelectedGlobalFilters} />
            <ProductGrid />
            <JoinKushHero />

        </>
    );
};

export default Catalog;