
import { useRef, useState } from 'react';
import useLockBodyScroll from '../../hooks/useLockBodyScroll';
import SignIn from './SignIn';
import SignUp from './SignUp';

const AuthModal = ({ isOpen, setIsOpen }) => {

    const [mode, setMode] = useState('signIn');
    const modalRef = useRef(null)
    const modalOverlayRef = useRef(null)
    useLockBodyScroll(isOpen)

    const handleOverlayClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsOpen(false)
        }
    }
    if (!isOpen) {
        return null
    }
    return (
        <>
            <div className='w-screen h-screen fixed left-0 top-0 z-1000 backdrop-blur-lg backdrop-brightness-50' onClick={(e) => handleOverlayClick(e)} ref={modalOverlayRef}>
                <div ref={modalRef}>{mode === 'signIn' ? <SignIn setMode={setMode} /> : <SignUp setMode={setMode} />}</div>
            </div>
            
        </>
    );
};
export default AuthModal;