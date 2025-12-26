import React, { useRef, useEffect } from 'react';
import SplitText from '../common/SplitText.jsx';
import { useLocation } from 'react-router-dom';
import { arrObserver } from '../../utils/observers.js';

const Promo = () => {
  const location = useLocation()

  let middletext = 'shop'

  if (location.pathname == '/catalog') {
    middletext = 'shop'
  } else if (location.pathname == '/contact') {
    middletext = 'contact'
  } else if (location.pathname == '/kushverse') {
    middletext = 'kushverse'
  }

  const container = useRef(null);
  const studioWordRef = useRef([]);
  const kushWordRef = useRef([]);

  useEffect(() => {
    arrObserver(container.current, studioWordRef.current, .2, 0, 33)
    arrObserver(container.current, kushWordRef.current, .2, 0, 33)
  }, []);

  return (
    <div className='flex items-center justify-between p-5' ref={container}>  {/* grid grid-cols-[2fr_1fr_2fr] my-[clamp(1.875rem,3dvw,5rem)] */}
      <SplitText word={'Studio'} classes={'promo justify-start fade-in-lg'} ref={studioWordRef} />
      <span className='location text-[clamp(0.75rem,1.3dvw,1rem)]' >{middletext}</span>
      <div className='mr-[1.3dvw]'>
        <SplitText word={'KUSH'} classes={'promo justify-start fade-in-lg'} ref={kushWordRef} />
      </div>
    </div>
  );
};

export default Promo;