import { Link } from "react-router-dom";
import AuthInput from "../../components/authInputs/AuthInput";
import { SetStateAction, useState } from "react";
import PasswordInput from "../../components/authInputs/PasswordInput";

const Login = () => {
    const [userName,setUserName] = useState<string>()
    const [password,setPassword] = useState<string>()
    const handleUserNameChange = (e: { target: { value: SetStateAction<string | undefined>; }; }) => {
        setUserName((e.target.value))
    }
    const handlePasswordChange = (e: { target: { value: SetStateAction<string | undefined>; }; }) => {
        setPassword((e.target.value))
    }
    
    console.log(userName,password)
  return (
    <div className="w-full">
      <div className="text-3xl  text-primaryTextGray my-6">Authorization</div>
      <div className="input my-4">

        <AuthInput placeHolder={"Username or Eamil"} handleChange={handleUserNameChange} type={"text"} />
      </div>
      <div className="input my-4">

        <PasswordInput handleChange={handlePasswordChange} />
      </div>
      <Link to="../register">Authorization</Link>
    </div>
  );
};
export default Login;
