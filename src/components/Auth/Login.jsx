import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail('')
        setPassword('')
    }

   

    

  return (
    <div className="relative h-screen bg-linear-to from-white via-gray-100 to-gray-300">
      
      <div className="absolute z-10 text-[20rem] top-[15%] left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold tracking-[3rem] text-[#ededed]">
        <h1 className="text-[20rem] font-bold tracking-[3rem] select-none">
          Login
        </h1>
      </div>
      {/* heading */}
      <div className="absolute z-50 h-[65%] w-[30%] bg-white/60 backdrop-blur-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white shadow-2xl min-w-md">
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#c4c4c4]">
            <h1 className="font-roboto text-lg font-semibold tracking-wide text-gray-800">Log in</h1>
            <RxCross2 />
        </div>
        
        {/* form */}
        <div className="w-[70%] mx-auto mt-16">
            <h1 className="text-4xl font-bold text-[#444444] text-nowrap">Welcome to EMS</h1>
            <form action="" className="mt-10" onSubmit={(e) => {
                handleSubmit(e)
            }}>
                <p className="mt-3 mb-1">Email address</p>
                <input type="text" placeholder="Enter email address" className="border-2 border-[#7e7e7e] outline-0 px-4 py-1.5 rounded-lg w-full"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                />
                <div className="mt-5 mb-1 flex items-center justify-between">
                    <p className="">Password</p>
                    <p className="text-sm text-blue-600 cursor-pointer ">Reset password</p>
                </div>
                <input type="password" name="" placeholder="Enter Password" id="" className="border-2 border-[#7e7e7e] outline-0 px-4 py-1.5 rounded-lg w-full"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                }}/>
                <div className="w-full flex gap-3 mt-10 ">
                    <button className="bg-black text-white w-30 px-3 py-2 rounded-lg ">Login</button>
                    <button className="border border-[#acacac] px-3 py-2 rounded-lg w-65">Create an Account</button>
                </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
