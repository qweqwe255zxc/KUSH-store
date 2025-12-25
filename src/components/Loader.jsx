import React from 'react';
import loaderImg from '../assets/img/loader.png'

const Loader = () => {
    return (<img className='w-6 md:w-7.5 lg:w-9 xl:w-10.5 2xl:w-12 loader' src={loaderImg} alt="loading..." />
    );
};

export default Loader;