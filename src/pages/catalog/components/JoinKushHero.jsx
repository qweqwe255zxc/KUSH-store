import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../../../components/common/SplitText.jsx';
import { arrObserver, observer } from '../../../utils/observers.js';
import ReviewCard from '../../../components/common/Review.jsx';
import { useProducts } from '../../../features/product/useProducts.jsx';


const JoinKushHero = () => {

    const containerRef = useRef(null)
    const joinKushRef = useRef([])
    const subtitle = useRef(null)
    const arrowRef = useRef(null)
    const LinkToTelegram = useRef(null)
    const LinkToTelegramText = useRef([])


    useEffect(() => {
        observer(LinkToTelegram.current, LinkToTelegram.current, .2, 1500)
        observer(LinkToTelegram.current, arrowRef.current, .2, 900)
        observer(subtitle.current, subtitle.current, .3, 50)

        arrObserver(containerRef.current, joinKushRef.current, .2, 0, 60)
        arrObserver(LinkToTelegram.current, LinkToTelegramText.current, .2, 0, 70)

    }, []);

    const { products } = useProducts();
    const [reviewPos, setReviewPos] = useState({ x: 0, y: 0 });
    const [activeProduct, setActiveProduct] = useState(null);
    const [isInside, setIsInside] = useState(false);

    const lastCoordsRef = useRef({ x: 0, y: 0 })
    const iterationRef = useRef(0)
    const ReviewCardRef = useRef(null)
    const lerp = .2

    useEffect(() => {

        let animationFrameId;

        const animateBack = () => {

            setReviewPos(prev => {

                let newX = prev.x + (0 - prev.x) * lerp
                let newY = prev.y + (0 - prev.y) * lerp

                if (Math.abs(newX) < .5 && Math.abs(newY) < .5) {
                    return { x: 0, y: 0 }
                }

                animationFrameId = requestAnimationFrame(animateBack)
                return { x: newX, y: newY }
            });
        };
        if (!isInside) {
            animationFrameId = requestAnimationFrame(animateBack)
        }
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };

    }, [isInside]);

    const handleMouseMove = (e) => {
        const rect = containerRef.current.getBoundingClientRect()


        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom
        let targetCoords = {
            x: 0,
            y: 0
        }
        if (!inside) {
            setIsInside(false)
            return
        }

        // if (inside) {
        setIsInside(true)

        targetCoords.x = e.clientX - (rect.left + centerX)
        targetCoords.y = e.clientY - (rect.top + centerY)

        const lastCoords = lastCoordsRef.current
        const distance = 250
        if (Math.abs(targetCoords.x - lastCoords.x) >= distance ||
            Math.abs(targetCoords.y - lastCoords.y) >= distance
        ) {
            if (!products.length) return;

            iterationRef.current = (iterationRef.current + 1) % products.length;
            setActiveProduct(products[iterationRef.current]);
            lastCoords.x = targetCoords.x
            lastCoords.y = targetCoords.y
        }
        setReviewPos((prev) => ({
            x: prev.x + (targetCoords.x - prev.x) * lerp,
            y: prev.y + (targetCoords.y - prev.y) * lerp
        }))
        // }

    }

    const handleMouseLeave = () => {

        setIsInside(false);
        lastCoordsRef.current = { x: 0, y: 0 };
    };
    // useEffect(() => {
    //     if (products.length && !activeProduct) {
    //         setActiveProduct(products[0]);
    //     }
    // }, [products, activeProduct]);
    // useEffect(() => {
    //     if (products.length) {
    //         setActiveProduct(prev => prev || products[0]);
    //     }
    // }, [products]);
    useEffect(() => {
        if (products.length) {
            const id = setTimeout(() => {
                setActiveProduct(prev => prev || products[0]);
            }, 0);
            return () => clearTimeout(id);
        }
    }, [products]);
    return (
        <div ref={containerRef} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove} className='cursor-default w-full max-h-202 aspect-19/9 pb-[clamp(0px,4dvw,40px)] 2xl:pb-[clamp(0px,6dvw,60px)]  uppercase relative flex flex-col items-center justify-center  bg-[#efefef] border border-gray-400'>
            {activeProduct && (
                <ReviewCard
                    review={activeProduct}
                    ref={ReviewCardRef}
                    pos={reviewPos}
                    isInside={isInside}
                />
            )}
            <div className='flex items-center flex-col'>
                <span>
                    <SplitText word={'Join Kush'} classes={'join-kush__title fade-in-lg'} ref={joinKushRef} />
                </span>
                <span>
                    <SplitText word={'World'} classes={'join-kush__title fade-in-lg'} ref={joinKushRef} />
                </span>
            </div>
            <span className='fade-in-md text-center pt-[3dvw] 2xl:pt-[5dvw] text-[clamp(0.75rem,1.35dvw,1.175rem)]' ref={subtitle}>Join the <span className='font-extrabold text-center'>KUSH community</span> and be the first to know <br /> about new releases, special offers, and everything <br /> happening in <span className='font-extrabold'>the world of KUSH.</span></span>

            <a ref={LinkToTelegram} href='https://t.me/+dMw3Ead6dZJiODMy' alt='' className='join-kush__link '>
                <h2 className=''>
                    <SplitText word={'telegram'} classes={'text-[clamp(20px,4dvw,72px)] leading-none font-semibold lowercase'} ref={LinkToTelegramText} />
                </h2>
                <svg ref={arrowRef} className='arrow fill-black' viewBox="0 0 97 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="88" height="8" transform="translate(0 40.0322)" />
                    <rect width="61.6619" height="8" transform="translate(52.6475) rotate(45)" />
                    <rect width="61.6619" height="8" transform="translate(47 81.6338) rotate(-45)" />
                </svg>
            </a>
            <span className='absolute bottom-0 right-0 m-3 text-[clamp(0.75rem,1.2dvw,1rem)]'>&copy;studio kush 2025</span>

        </div>
    )
}

export default JoinKushHero;