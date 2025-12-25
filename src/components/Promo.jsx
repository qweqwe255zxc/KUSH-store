import React, { useRef, useEffect } from 'react';
import WordToChars from './WordToChars.jsx';
import { useLocation } from 'react-router-dom';
import { arrObserver } from '../utils/utils.js';

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
    <div className='flex items-center justify-between p-5 ' ref={container}>  {/* grid grid-cols-[2fr_1fr_2fr] my-[clamp(1.875rem,3dvw,5rem)] */}
      {/* <span className='header-promo justify-start'>Studio</span> */}
      {WordToChars('Studio', 'promo justify-start fade-in-lg', studioWordRef)}
      <span className='location text-[clamp(0.75rem,1.3dvw,1rem)]' >{middletext}</span>
      {/* style={{ fontSize: 'clamp(0.75rem, 1.3dvw, 1rem)' }} */}
      {/* <span className='header-promo justify-end mr-[1.5dvw] uppercase'>Kush</span> */}
      <div className='mr-[1.3dvw]'>{WordToChars('KUSH', 'promo justify-end fade-in-lg', kushWordRef)}</div>
    </div>
  );
};

export default Promo;