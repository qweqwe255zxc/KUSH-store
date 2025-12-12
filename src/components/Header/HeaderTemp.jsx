import './HeaderTemp.css';
import logo from '../../assets/img/logo.png';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const headerRef = useRef(null);
    const targetTransforms = useRef(new Map())
    const currentTransforms = useRef(new Map());
    const requestRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!headerRef.current) return;
            const links = headerRef.current.querySelectorAll('.header-link-container');
            const linksArr = Array.from(links)
            // console.log(linksArr);
            const distances = linksArr.map(link => {
                const rect = link.getBoundingClientRect();
                const CenterX = rect.left + rect.width / 2; // 500 + 50 / 2 = 525
                const CenterY = rect.top + rect.height / 2; // 100 + 20 / 2 = 110
                return Math.hypot(e.clientX - CenterX, e.clientY - CenterY); // Корень((500 - 525 )^2  + (130 - 110)^2) = корень из 25^2 + 20^2 ~ 32 пикселя
            })
            // console.log(distances);
            const closestIndex = distances.indexOf(Math.min(...distances))

            linksArr.forEach((link, i) => {
                const rect = link.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const distanceX = e.clientX - centerX;
                const distanceY = e.clientY - centerY;
                const distance = Math.max(distances[i], 5); // чтобы не было деления на 0
                const maxDistance = 100

                if (i === closestIndex && distance < maxDistance) {
                    const strength = (1 - distance / maxDistance) * 30;
                    targetTransforms.current.set(link, {
                        x: (distanceX / distance) * strength,
                        y: (distanceY / distance) * strength,
                    })

                } else {

                    targetTransforms.current.set(link, { x: 0, y: 0 })
                }
            })
        }
        const animate = () => {

            targetTransforms.current.forEach((target, link) => {
                let { x: currX, y: currY } = currentTransforms.current.get(link) || { x: 0, y: 0 };
                const lerp = .75;
                const nextX = currX + (target.x - currX) * lerp;
                const nextY = currY + (target.y - currY) * lerp;
                link.style.transform = `translate(${nextX}px, ${nextY}px)`;
                currentTransforms.current.set(link, { x: nextX, y: nextY });
            });
            requestRef.current = requestAnimationFrame(animate);
        }

        window.addEventListener('mousemove', handleMouseMove);
        requestRef.current = requestAnimationFrame(animate);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        }

    }, []);

    return (
        <>
            <header ref={headerRef}>
                <a className='logo-container' href=""><img src={logo} className='logo' alt="" /></a>
                <nav>
                    <ul className="nav-list">
                        <li className='header-link-container'><Link className="header-link nav-link" to="/">catalog</Link></li>
                        <li className='header-link-container'><Link className="header-link nav-link" to="/kushverse">kushverse</Link></li>
                        <li className='header-link-container'><Link className="header-link nav-link" to="/contacts">contacts</Link></li>
                    </ul>
                </nav>
                <div className='cart-container'>
                    <div className="header-link-container">
                        <a href="#" className='header-link cart-btn'>
                            <span>cart</span>
                            <svg className='cart-svg' viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.50416 15C4.09128 15 3.73783 14.8531 3.44381 14.5594C3.14979 14.2656 3.00277 13.9125 3.00277 13.5C3.00277 13.0875 3.14979 12.7344 3.44381 12.4406C3.73783 12.1469 4.09128 12 4.50416 12C4.91704 12 5.27049 12.1469 5.56452 12.4406C5.85854 12.7344 6.00555 13.0875 6.00555 13.5C6.00555 13.9125 5.85854 14.2656 5.56452 14.5594C5.27049 14.8531 4.91704 15 4.50416 15ZM12.0111 15C11.5982 15 11.2448 14.8531 10.9507 14.5594C10.6567 14.2656 10.5097 13.9125 10.5097 13.5C10.5097 13.0875 10.6567 12.7344 10.9507 12.4406C11.2448 12.1469 11.5982 12 12.0111 12C12.424 12 12.7774 12.1469 13.0715 12.4406C13.3655 12.7344 13.5125 13.0875 13.5125 13.5C13.5125 13.9125 13.3655 14.2656 13.0715 14.5594C12.7774 14.8531 12.424 15 12.0111 15ZM3.86607 3L5.66774 6.75H10.9226L12.987 3H3.86607ZM3.15291 1.5H14.2256C14.5134 1.5 14.7324 1.62813 14.8825 1.88438C15.0326 2.14062 15.0389 2.4 14.9013 2.6625L12.2363 7.4625C12.0987 7.7125 11.9141 7.90625 11.6827 8.04375C11.4512 8.18125 11.1978 8.25 10.9226 8.25H5.32992L4.50416 9.75H13.5125V11.25H4.50416C3.94114 11.25 3.51575 11.0031 3.22798 10.5094C2.94022 10.0156 2.92771 9.525 3.19045 9.0375L4.20388 7.2L1.50139 1.5H0V0H2.43975L3.15291 1.5Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>
            <div>
                <span>Studio </span>
            </div>
        </>
    );
};

export default Header;