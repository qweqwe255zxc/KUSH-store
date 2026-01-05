import googleIco from '../../assets/img/google.svg'
import appleIco from '../../assets/img/apple-white.svg'

const SocialAuthButtons = () => {
  return (
    <>
      <p className="grid grid-cols-[1fr_auto_1fr] uppercase items-center gap-2 ">
        <span className="h-px bg-black"></span>
        or
        <span className="h-px bg-black"></span>
      </p>
      <div className="grid">
        <button type="button" className="form-controls uppercase gap-1 bg-black  text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]"><img src={googleIco} className='h-3/5' alt="" /> Log in with Google</button>
        <button type="button" className="form-controls uppercase gap-1 bg-black  text-white mt-1.25 cursor-pointer hover:bg-[#3c3c3c] active:bg-[#242424]"><img src={appleIco} className='h-3/5' alt="" /> Log in with Apple</button>
      </div>
    </>

  );
};

export default SocialAuthButtons;