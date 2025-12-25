import { Link } from 'react-router-dom';
import logo from '../../../assets/img/logo.png'
// import loader from '../../assets/img/loader.png'
import Loader from '../../ui/Loader';
import './footer.css'
const Footer = () => {
    return (
        <footer className="grid grid-cols-[2fr_1fr_2fr] mx-5 my-[7dvw] ">
            <div className='flex flex-col items-start justify-center gap-2.5'>
                <Link to='/'><img src={logo} alt="logo" className='w-60 md:w-75 lg:w-90 xl:w-105 2xl:w-120' /></Link>
                <div className='flex gap-2.5'>
                    <a className='hf-link-container group cursor-pointer' href='#'><div className="hf-link-text p-1" >telegram</div></a>
                    <a className='hf-link-container group cursor-pointer' href='#'><div className="hf-link-text p-1" >tiktok</div></a>
                </div>
            </div>
            <div className='flex items-center justify-center'><Loader /></div>
            <div className='flex gap-x-[9dvw] gap-y-[2dvw] items-center justify-end pr-[2.5dvw] lg:flex-row flex-col'>
                <div className='sources'>
                    <h2 className='text-[clamp(.875rem,1.6dvw,1.5rem)] font-semibold before:content-["/"] top-0 left-0'>nav</h2>
                    <div className='flex flex-col self-end'>
                        <Link to='/catalog' className='text-[clamp(.75rem,1.4dvw,1.25rem)]'>catalog</Link>
                        <Link to='/kushverse' className='text-[clamp(.75rem,1.44vw,1.25rem)]'>kushvrse</Link>
                        <Link to='/contacts' className='text-[clamp(.75rem,1.4dvw,1.25rem)]'>contacts</Link>
                    </div>
                </div>
                <div className='sources'>
                    <h2 className='text-[clamp(.875rem,1.6dvw,1.5rem)] font-semibold before:content-["/"] uppercase '>other</h2>
                    <div className='flex flex-col self-end'>
                        <a href="" className='text-[clamp(.75rem,1.4dvw,1.25rem)] '>faq</a>
                        <a href="" className='text-[clamp(.75rem,1.4dvw,1.25rem)] '>sizes</a>
                        <a href="" className='text-[clamp(.75rem,1.4dvw,1.25rem)] '>delivery</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;

