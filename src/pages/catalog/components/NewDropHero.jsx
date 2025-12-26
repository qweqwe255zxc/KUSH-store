import { Link, useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import SplitText from '../../../components/common/SplitText.jsx';
import { arrObserver, observer } from '../../../utils/observers.js';

const NewDropHero = () => {
    // {setSelectedCategory}
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

    const navigate = useNavigate()

    const handleClick = () => {
        // setSelectedCategory(2)
        navigate('/catalog/new-drop')

        const filtersEl = document.getElementById('filters')
        if (filtersEl) {
            filtersEl.scrollIntoView({ behavior: 'smooth', block: "start" })
        }
    }

    return (
        <a onClick={() => handleClick()} className="cursor-pointer new-drop-hero flex" alt='new drop' ref={containerRef}>
            <div className='new-drop-hero__link' ref={linkToDropRef}>
                <h2>
                    <SplitText word={'Discrover The Drop'} classes={'new-drop-hero__link-text fade-in-md'} refArr={ctaRef} />
                </h2>
                <svg ref={arrowRef} className='arrow fade-in-md' viewBox="0 0 97 88" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="88" height="8" transform="translate(0 40.0322)" fill="white" />
                    <rect width="61.6619" height="8" transform="translate(52.6475) rotate(45)" fill="white" />
                    <rect width="61.6619" height="8" transform="translate(47 81.6338) rotate(-45)" fill="white" />
                </svg>
            </div>
            <div ref={taglineRef} className='absolute flex flex-col items-end bottom-0 right-0 text-white m-3'>
                {/* {SplitText('New Era', 'hero-banner__tagline-item fade-in-sm duration-600', newEraRef)} */}
                <SplitText word={'New Era'} classes={'hero-banner__tagline-item fade-in-sm duration-600'} refArr={newEraRef} />
                <SplitText word={'Same Energy'} classes={'hero-banner__tagline-item fade-in-sm duration-600'} refArr={sameEnergyRef} />
                <SplitText word={'Different Dimension'} classes={'hero-banner__tagline-item fade-in-sm duration-600'} refArr={diffDimensionRef} />
            </div>
        </a>
    );
}

export default NewDropHero;