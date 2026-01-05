import googleIco from '../../assets/img/google.svg'
import appleIco from '../../assets/img/apple-white.svg'
import { useState } from 'react';

const SignIn = ({ setMode }) => {
    return (
        <div className="rounded-md p-3 grid gap-2.5 z-100 fixed top-1/2 left-1/2 w-110 bg-white -translate-y-1/2 -translate-x-1/2 ">
            <h2 className="uppercase text-center text-xl leading-none">Log in</h2>
            <form action="" className="grid justify-items-center gap-1.25">
                <input type="email" name="email" className='form-controls bg-[#EFEFEF]' id="email" autoComplete="on" placeholder="email" />
                <input type="password" name="password" className='form-controls bg-[#EFEFEF]' id="password" placeholder="password" />
                <button type="button" className="form-controls uppercase bg-black transition-all duration-300 text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]">Log in</button>
            </form>
            <p className="uppercase text-center  leading-none" >Don’t have an account? <button onClick={() => setMode('signUp')} className="uppercase bg-gray-200 rounded-md p-0.5">Sign up</button></p>
            <p className="grid grid-cols-[1fr_auto_1fr] uppercase items-center gap-2 ">
                <span className="h-px bg-black"></span>
                or
                <span className="h-px bg-black"></span>
            </p>
            <div className="grid">
                <button type="button" className="form-controls uppercase gap-1 bg-black  text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]"><img src={googleIco} className='h-3/5' alt="" /> Log in with Google</button>
                <button type="button" className="form-controls uppercase gap-1 bg-black  text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]"><img src={appleIco} className='h-3/5' alt="" /> Log in with Apple</button>
            </div>
        </div>
    )
}

const SignUp = ({ setMode }) => {
    return (
        <div className="rounded-md p-3 grid gap-2.5 z-100 fixed top-1/2 left-1/2 w-110 bg-white -translate-y-1/2 -translate-x-1/2 ">
            <h2 className="uppercase text-center text-xl leading-none">Register</h2>
            <form action="" className="grid justify-items-center gap-1.25">
                <div className='flex w-full gap-1.25 justify-between'>
                    <input type="text" name="name" className='form-controls bg-[#EFEFEF]' id="name" placeholder='Name' autoComplete="on" />
                    <input type="text" name="surname" className='form-controls bg-[#EFEFEF]' id="surname" placeholder='Surname' autoComplete="on" />
                </div>
                <input type="email" name="email" className='form-controls bg-[#EFEFEF]' id="email" autoComplete="on" placeholder="Email" />
                <input type="password" name="password" className='form-controls bg-[#EFEFEF]' id="password" placeholder="Password" />
                <input type="password" name="repeatPassword" className='form-controls bg-[#EFEFEF]' id="repeatPassword" placeholder="Repeat password" />
                <button type="button" className="form-controls uppercase bg-black transition-all duration-300 text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]">Sign up</button>
            </form>
            <p className="uppercase text-center  leading-none" >Already have an account? <button onClick={() => setMode('signIn')} className="uppercase bg-gray-200 rounded-md  p-0.5">Sign in</button></p>
            <p className="grid grid-cols-[1fr_auto_1fr] uppercase items-center gap-2 ">
                <span className="h-px bg-black"></span>
                or
                <span className="h-px bg-black"></span>
            </p>
            <div className="grid">
                <button type="button" className="form-controls uppercase gap-1 bg-black  text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]"><img src={googleIco} className='h-3/5' alt="" />Continue with Google</button>
                <button type="button" className="form-controls uppercase gap-1 bg-black  text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]"><img src={appleIco} className='h-3/5' alt="" />Continue with Apple</button>
            </div>

        </div>
    )
}

const AuthModal = () => {

    const [mode, setMode] = useState('signUp');
    // 0 - SignIn
    // 1 - SignUp

    return (

        <>
            {mode === 'signIn' ? <SignIn setMode={setMode} /> : <SignUp setMode={setMode} />}
        </>
    );
};
export default AuthModal;