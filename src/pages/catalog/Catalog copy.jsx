
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import './catalog.css'
import WordToChars from '../../components/WordToChars';
import { arrObserver, observer } from '../../utils/utils.js';
import ReviewCard from '../../components/review.jsx';

const NewDropHero = () => {

    const containerRef = useRef(null)
    const linkToDropRef = useRef(null)
    const ctaRef = useRef([])
    const arrowRef = useRef(null)
    const taglineRef = useRef(null);
    const newEraRef = useRef([]);
    const sameEnergyRef = useRef([]);
    const diffDimensionRef = useRef([]);

    useEffect(() => {

        observer(linkToDropRef.current, linkToDropRef.current, .2, 2000)
        observer(containerRef.current, arrowRef.current, .2, 1400)

        arrObserver(linkToDropRef.current, ctaRef.current, .2, 0, 50)
        arrObserver(taglineRef.current, newEraRef.current, 0.2, 0, 50);
        arrObserver(taglineRef.current, sameEnergyRef.current, 0.2, 500, 50);
        arrObserver(taglineRef.current, diffDimensionRef.current, 0.2, 1000, 50);
    }, []);

    return (
        <div className="new-drop-hero" ref={containerRef}>
            <Link className='new-drop-hero__link' ref={linkToDropRef}>
                <h2>{WordToChars('Discrover The Drop', 'new-drop-hero__link-text fade-in-md', ctaRef)}</h2>
                <svg ref={arrowRef} className='arrow fade-in-md' viewBox="0 0 97 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="88" height="8" transform="translate(0 40.0322)" fill="white" />
                    <rect width="61.6619" height="8" transform="translate(52.6475) rotate(45)" fill="white" />
                    <rect width="61.6619" height="8" transform="translate(47 81.6338) rotate(-45)" fill="white" />
                </svg>
            </Link>
            <div ref={taglineRef} className='absolute flex flex-col items-end bottom-0 right-0 text-white m-3'>
                {WordToChars('New Era', 'hero-banner__tagline-item fade-in-sm duration-600', newEraRef, { fontSize: 'clamp(1rem, 1.7dvw, 1.5rem)' })}
                {WordToChars('Same Energy', 'hero-banner__tagline-item fade-in-sm duration-600', sameEnergyRef, { fontSize: 'clamp(1rem, 1.7dvw, 1.5rem)' })}
                {WordToChars('Different Dimension', 'hero-banner__tagline-item fade-in-sm duration-600', diffDimensionRef, { fontSize: 'clamp(1rem, 1.7dvw, 1.5rem)' })}
            </div>
        </div>
    );
}

const Filters = ({ selectedGlobal, setSelectedGlobal }) => {
    const [globalFilters] = useState([
        { id: 1, value: 'All' },
        { id: 2, value: 'New Drop' },
        { id: 3, value: 'Tops' },
        { id: 4, value: 'Shoes' },
        { id: 5, value: 'Bottoms' },])

    const filtersContainerRef = useRef(null)
    const filtersRef = useRef([])

    useEffect(() => {
        arrObserver(filtersContainerRef.current, filtersRef.current, .2, 0, 75, true)
    }, []);

    return (
        <div className='flex justify-between mx-7.5 my-[clamp(1.5rem,5dvw,5rem)]' ref={filtersContainerRef}>
            {globalFilters.map((globalFilter, i) => {
                return (
                    <span key={i} ref={(el) => {
                        if (filtersRef && filtersRef.current && el && !filtersRef.current.includes(el)) {
                            filtersRef.current.push(el)
                        }
                    }} className={`filters__item  ${selectedGlobal.value === globalFilter.value ? 'font-bold' : ''}`}
                        onClick={() => { setSelectedGlobal(globalFilter) }} >{globalFilter.value}</span>
                )
            })}
            <span ref={(el) => {
                if (filtersRef && filtersRef.current && el && !filtersRef.current.includes(el)) {
                    filtersRef.current.push(el)
                }
            }} className='filters__item'>All Filters</span>
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
        }, {
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
        }, {
            id: 5,
            name: 'Alexander Digenova Leather Bomber',
            img: '/product1.png',
            price: 182960
        }, {
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

    const container = useRef(null)
    const productsRef = useRef([])

    useEffect(() => {
        observer(container.current, container.current, .2, 0)
        arrObserver(container.current, productsRef.current, .2, 0, 50,)
    }, []);


    return (
        <>
            <div ref={container} className="grid grid-cols-3 fade-in-md md:grid-cols-4 lg:grid-cols-5 divide-y divide-x border-t divide-[#E4E4E4] border-[#E4E4E4]">
                {products.map((product, i) => (
                    <div key={i} ref={(el) => {
                        if (productsRef && productsRef.current && el && !productsRef.current.includes(el)) {
                            productsRef.current.push(el)
                        }
                    }} className='fade-in-md relative overflow-hidden w-full h-full pb-4.5 flex flex-col justify-center items-center aspect-48/50 last:border-r last:border-b first:border-l border-[#E4E4E4]'>
                        <img src={product.img} className='w-[75%] ' alt="" />
                        <span className='absolute bottom-0 left-0 font-[330] m-1 md:m-1.25 lg:m-1.5 xl:m-1.75 2xl:m-2' style={{ fontSize: 'clamp(0.75rem, 1.3dvw, 1rem)' }}>{product.name}</span>
                        <span className='absolute bottom-0 right-0 font-[330] m-1 md:m-1.25 lg:m-1.5 xl:m-1.75 2xl:m-2' style={{ fontSize: 'clamp(0.75rem, 1.3dvw, 1rem)' }}><span className='currency'>₽</span> {product.price}</span>
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

    const containerRef = useRef(null)
    const joinKushRef = useRef([])
    const subtitle = useRef(null)
    const arrowRef = useRef(null)
    const LinkToTelegram = useRef(null)
    const LinkToTelegramText = useRef([])

    const cursorRef = useRef(null);
    const ReviewCardRef = useRef(null);

    const [insideContainer, setInsideContainer] = useState(false);

    const reviews = [
        {
            id: 1,
            comment: '1asdadsad'
        },
        {
            id: 2,
            comment: '2asdasdadadsdasdasds'
        },
        {
            id: 3,
            comment: '3asdsadasdasdasddsasadadadadsad'
        },
        {
            id: 4,
            comment: '4asdadasdsdadasdadsadasdasdadasdaddasdadsad'
        },
    ]

    const lastCoordsRef = useRef({ x: 0, y: 0 });
    const iterationRef = useRef(0);
    const posRef = useRef({ x: 0, y: 0 });
    const activeReviewRef = useRef(reviews[0]);
    const [, forceUpdate] = useState(0); // to trigger re-render when activeReview changes

    useEffect(() => {
        observer(LinkToTelegram.current, LinkToTelegram.current, .2, 1500)
        observer(LinkToTelegram.current, arrowRef.current, .2, 900)
        observer(subtitle.current, subtitle.current, .3, 50)

        arrObserver(containerRef.current, joinKushRef.current, .2, 0, 60)
        arrObserver(LinkToTelegram.current, LinkToTelegramText.current, .2, 0, 70)
    }, []);

    useEffect(() => {
        let animationFrameId;

        const updatePosition = () => {
            if (ReviewCardRef.current) {
                ReviewCardRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
            }
            animationFrameId = requestAnimationFrame(updatePosition);
        };

        if (insideContainer) {
            animationFrameId = requestAnimationFrame(updatePosition);
        } else {
            if (ReviewCardRef.current) {
                ReviewCardRef.current.style.transform = `translate(0px, 0px)`;
            }
            posRef.current = { x: 0, y: 0 };
            cancelAnimationFrame(animationFrameId);
        }

        return () => cancelAnimationFrame(animationFrameId);
    }, [insideContainer]);

    const handleMouseMove = (e) => {
        if (!insideContainer) return;

        const rect = containerRef.current.getBoundingClientRect()

        if (
            e.clientY < rect.top ||
            e.clientY > rect.bottom
        ) {
            posRef.current = { x: 0, y: 0 };
            return;
        }

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const curCoords = {
            x: (e.clientX - rect.x) - centerX,
            y: (e.clientY - rect.y) - centerY,
        }
        const reviewAllCoords = {
            x: curCoords.x,
            y: curCoords.y
        }

        const lastCoords = lastCoordsRef.current

        if (Math.abs(curCoords.x - lastCoords.x) >= 50 ||
            Math.abs(curCoords.y - lastCoords.y) >= 50
        ) {
            iterationRef.current = (iterationRef.current + 1) % reviews.length
            activeReviewRef.current = reviews[iterationRef.current]
            forceUpdate(n => n + 1);

            lastCoords.x = curCoords.x
            lastCoords.y = curCoords.y
        }
        posRef.current = reviewAllCoords;
    }

    return (
        <div ref={containerRef} onMouseEnter={() => setInsideContainer(true)} onMouseLeave={() => setInsideContainer(false)} onMouseMove={handleMouseMove} className='w-full max-h-202 aspect-19/9 pb-[clamp(0px,4dvw,40px)] 2xl:pb-[clamp(0px,6dvw,60px)]  uppercase relative flex flex-col items-center justify-center  bg-[#d1d1d193] cursor-none'>
            <ReviewCard review={activeReviewRef.current} ref={ReviewCardRef} pos={posRef.current} />
            <div className='flex items-center flex-col'>
                <span>{WordToChars('Join Kush', 'join-kush__title fade-in-lg', joinKushRef)}</span>
                <span>{WordToChars('World', 'join-kush__title fade-in-lg', joinKushRef)}</span>
            </div>
            <span className='fade-in-md text-center pt-[3dvw] 2xl:pt-[5dvw]' style={{ fontSize: 'clamp(0.75rem, 1.3dvw, 1rem)' }} ref={subtitle}>Join the <span className='font-extrabold text-center'>KUSH community</span> and be the first to know <br /> about new releases, special offers, and everything <br /> happening in <span className='font-extrabold'>the world of KUSH.</span></span>

            <a ref={LinkToTelegram} href='https://t.me/+dMw3Ead6dZJiODMy' alt='' className='join-kush__link '>
                <h2 className='' style={{ fontSize: 'clamp(1.25rem, 4dvw, 4.5rem)' }}>{WordToChars('telegram', ' leading-none font-semibold lowercase ', LinkToTelegramText)}</h2>
                <svg ref={arrowRef} className='arrow fill-black' viewBox="0 0 97 88" fill="none" xmlns="http://www.w3.org/2000/svg">
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