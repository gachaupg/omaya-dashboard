import { useState } from 'react';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi'; // Import icons from react-icons library

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center mt-24 gap-6 flex-col">
      <h2 className="text-2xl">Welcome</h2>
      <p>Please login</p>
      <img src="https://res.cloudinary.com/pitz/image/upload/v1707497590/logo-hiXpVEuB-removebg-preview_jnnrfa.png" alt="" />
      <form style={{width:'45%'}} className="abt flex flex-col gap-5" action="">
        <div className="relative">
          <FiMail className="absolute top-3 left-3 text-gray-400" />
          <input className="pl-10 border border-green-400 h-12 w-full rounded-2xl" type="email" placeholder="Enter your Email" />
        </div>
        <div className="relative">
          <FiLock className="absolute top-3 left-3 text-gray-400" />
          <input className="pl-10 border border-green-400 h-12 w-full rounded-2xl" type={showPassword ? 'text' : 'password'} placeholder="Enter your Password" />
          <span onClick={togglePasswordVisibility} className="absolute top-3 right-3 cursor-pointer">
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <button className="border border-green-400 h-12 w-full rounded-2xl bg-green-500 text-white">Log in</button>
      </form>
    </div>
  );
};

export default Login;
