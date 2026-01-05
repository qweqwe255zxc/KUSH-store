import SocialAuthButtons from "./SocialAuthButtons"

const SignIn = ({ setMode }) => {
    return (
        <div className="rounded-xs p-3 grid gap-2.5 fixed top-1/2 left-1/2 w-110 bg-white -translate-y-1/2 -translate-x-1/2 ">
            <h2 className="uppercase text-center text-xl leading-none">Log in</h2>
            <form action="" className="grid justify-items-center gap-1.25">
                <input type="email" name="email" className='form-controls bg-[#EFEFEF]' id="email" autoComplete="on" placeholder="email" spellCheck='false' required />
                <input type="password" name="password" className='form-controls bg-[#EFEFEF]' id="password" placeholder="password" spellCheck='false' required />
                <button type="button" className="form-controls uppercase bg-black transition-all duration-300 text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]">Log in</button>
            </form>
            <p className="uppercase text-center  leading-none" >Don’t have an account? <button onClick={() => setMode('signUp')} className="rounded-xs uppercase bg-gray-200 cursor-pointer p-0.5">Sign up</button></p>
            <SocialAuthButtons />
        </div>
    )
}

export default SignIn