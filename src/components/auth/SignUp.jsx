import { useState } from "react"
import SocialAuthButtons from "./SocialAuthButtons.jsx"
import { validateEmail, validateName, validatePassword } from "../../utils/validate.js"
import Tooltip from "./Tooltip.jsx"

const SignUp = ({ setMode }) => {

    const [errors, setErrors] = useState({})
    const [showSuccess, setShowSuccess] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        repeatPassword: ''
    })

    const handleFormData = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        console.log(name, value);
    }

    const validateFormData = () => {
        const allErrors = {}


        const nameValid = validateName(formData.name)
        if (!nameValid.valid) allErrors.name = nameValid.messages

        const surnameValid = validateName(formData.surname)
        if (!surnameValid.valid) allErrors.surname = surnameValid.messages

        const emailValid = validateEmail(formData.email)
        if (!emailValid.valid) allErrors.email = emailValid.messages

        const passwordValid = validatePassword(formData.password, formData.repeatPassword)
        if (!passwordValid.valid) allErrors.password = passwordValid.messages

        setErrors(allErrors)

        if (Object.keys(allErrors).length === 0) {
            console.log(formData, 'correct',);
            console.warn('need to connect to database');
            setFormData({
                name: '',
                surname: '',
                email: '',
                password: '',
                repeatPassword: ''
            })
            setShowSuccess(true)
        } else {
            console.log(allErrors, 'incorrect');
        }
    }

    return (
        <div className="rounded-xs p-3 grid gap-2.5 fixed top-1/2 left-1/2 w-110 bg-white -translate-y-1/2 -translate-x-1/2 " onKeyDown={(e) => {
            if (e.key === 'Enter') {
                validateFormData()
            }
        }}>
            <h2 className="uppercase text-center text-xl leading-none">Register</h2>
            <form action="" className="grid justify-items-center gap-1.25">
                <div className='flex w-full gap-1.25 justify-between'>
                    <input type="text" name="name" value={formData.name} className='form-controls bg-[#EFEFEF]' onChange={(e) => handleFormData(e)} id="name" placeholder='Name' autoComplete="on" spellCheck='false' required />
                    <input type="text" name="surname" value={formData.surname} className='form-controls bg-[#EFEFEF]' onChange={(e) => handleFormData(e)} id="surname" placeholder='Surname' autoComplete="on" spellCheck='false' required />
                </div>
                <input type="email" name="email" value={formData.email} className='form-controls bg-[#EFEFEF]' onChange={(e) => handleFormData(e)} id="email" autoComplete="on" placeholder="Email" spellCheck='false' required />
                <input type="password" name="password" value={formData.password} className='form-controls bg-[#EFEFEF]' onChange={(e) => handleFormData(e)} id="password" placeholder="Password" spellCheck='false' required />
                <input type="password" name="repeatPassword" value={formData.repeatPassword} className='form-controls bg-[#EFEFEF]' onChange={(e) => handleFormData(e)} id="repeatPassword" placeholder="Repeat password" spellCheck='false' required />
                <Tooltip errors={errors} showSuccess={showSuccess} type={'signUp'} />
                <button type="button" onClick={validateFormData} className="form-controls uppercase bg-black transition-all duration-300 text-white mt-1.25 cursor-pointer p-0.5hover:bg-[#3c3c3c] active:bg-[#242424]">Sign up</button>
            </form >
            <p className="uppercase text-center  leading-none" >Already have an account? <button onClick={() => setMode('signIn')} className="rounded-xs uppercase bg-gray-200 cursor-pointer p-0.5">Sign in</button></p>
            <SocialAuthButtons />
        </div >
    )
}

export default SignUp