import { FC } from "react";

interface AuthInputProps {
  placeHolder: string;
  handleChange: any;
  type: string;
}
const AuthInput: FC<AuthInputProps> = ({ handleChange, placeHolder, type }) => {
  return (
    <input
      type={type}
      className="border border-primaryGray p-4 w-full text-md rounded-md placeholder:placeholder-primaryGray "
      placeholder={placeHolder}
      onChange={handleChange}
    />
  );
};
export default AuthInput;
