import { FC } from "react";
import { motion } from "framer-motion";
import companyLogo from '../../assets/images/logo/companyLogo.png'
interface LayoutProps {
  children: any;
}
const LoginLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-screen flex overflow-hidden bg-blue-300 flex-wrap font-robotoLight">
      <div className="flex w-full sm:w-1/2 ">
        <div className="mt-40 ml-20 w-full">

        <div className="logo w-1/4">
          <img src={companyLogo} alt='company logo' className="w-full h-auto"/> 
        </div>
        <div className="description text-3xl text-dark">
          Easy if you try!
        </div>
        </div>
      </div>
      <motion.div
        className="flex w-full sm:w-1/2 bg-white p-6  stroke-neutral-500 drop-shadow-2xl rounded-xl justify-center"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex w-3/5 mt-20"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LoginLayout;
