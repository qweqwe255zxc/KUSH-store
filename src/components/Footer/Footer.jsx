import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png'
import loader from '../../assets/img/loader.png'
import './footer.css'
const Footer = () => {
    return (
        <footer className="grid grid-cols-[2fr_1fr_2fr] mx-5 my-[7dvw]">
            <div>
                <Link to='/'><img src={logo} alt="logo" className='w-60 md:w-75 lg:w-90 xl:w-105 2xl:w-120' /></Link>
                <div className='flex mt-2.5 gap-2.5'>
                    <a className='link-container group cursor-pointer' href='#'><div className="link-text p-1" >telegram</div></a>
                    <a className='link-container group cursor-pointer' href='#'><div className="link-text p-1" >tiktok</div></a>
                </div>
            </div>
            <div className='flex items-center justify-center'><img className='w-6 md:w-7.5 lg:w-9 xl:w-10.5 2xl:w-12 loader' src={loader} alt="" /></div>
            <div className='flex gap-[9dvw] items-center justify-end mr-[2.5dvw]'>
                <div className='sources'>
                    <h2 className='text-sm md:text-base lg:text-xl 2xl:text-2xl font-semibold before:content-["/"] top-0 left-0'>nav</h2>
                    <div className='flex flex-col self-end'>
                        <Link to='/catalog' className='text-xs md:text-sm lg:text-base 2xl:text-xl'>catalog</Link>
                        <Link to='/kushverse' className='text-xs md:text-sm lg:text-base 2xl:text-xl'>kushvrse</Link>
                        <Link to='/contacts' className='text-xs md:text-sm lg:text-base 2xl:text-xl'>contacts</Link>
                    </div>
                </div>
                <div className='sources'>
                    <h2 className='text-sm md:text-base lg:text-xl 2xl:text-2xl font-semibold before:content-["/"] uppercase '>other</h2>
                    <div className='flex flex-col self-end'>
                        <a href="" className='text-xs md:text-sm lg:text-base 2xl:text-xl '>faq</a>
                        <a href="" className='text-xs md:text-sm lg:text-base 2xl:text-xl '>sizes</a>
                        <a href="" className='text-xs md:text-sm lg:text-base 2xl:text-xl '>delivery</a>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;