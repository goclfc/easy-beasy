import { FC, useState } from "react"
import AuthInput from "./AuthInput"
import { AiOutlineEye } from "react-icons/ai";
interface PasswordProps {
    handleChange:any
}
const PasswordInput:FC<PasswordProps> = (props)=>{
    const [passwordIsVisible,setPasswordIsVissible] = useState(false)
    const toggleShowPassowrd = ()=>{
        setPasswordIsVissible(!passwordIsVisible)
    }
    return (
        <div className="relative w-full">
            <AuthInput placeHolder={"Password"} handleChange={props.handleChange} type={passwordIsVisible? "text":"password"} />
            <div className="absolute right-2 top-4 cursor-pointer" onClick={toggleShowPassowrd}><AiOutlineEye color={passwordIsVisible? "#2280EF":"gray"} size="24px"/></div>
        </div>
    )
}
export default PasswordInput