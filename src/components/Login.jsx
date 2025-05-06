// import React from "react";

// const Login = () => {

//     const onSubmitHandler = async(e) =>{
//         try {

//         } catch (error) {

//         }
//     }

//   return (
//     <div className="min-h-screen flex items-center justify-center w-full">
//       <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
//         <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
//         <form onSubmit={onSubmitHandler}>
//           {" "}
//           <div className="mb-3 min-w-70">
//             <p className="text-sm font-medium text-gray-700 mb-2">
//               Email Address
//             </p>
//             <input
//               className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
//               type="email"
//               placeholder="your@email.com"
//               required
//             />
//           </div>
//           <div className="mb-3 min-w-70">
//             <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
//             <input
//               className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none "
//               type="password"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>
//           <button
//             className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black"
//             type="submit"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin ", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="bg-white shadow-2xl rounded-xl flex flex-col md:flex-row w-full max-w-6xl min-h-[500px] overflow-hidden border border-gray-200">
        {/* Left Branding Panel */}
        <div className="hidden md:flex flex-col justify-center items-start bg-gray-50 px-12 py-14 w-1/2">
          <div className="text-5xl font-extrabold mb-6 text-gray-800 leading-tight">
            <div className="flex items-center gap-2">
              <span className="text-4xl">✳️</span> Hello
            </div>
            <div className="text-pink-400">
              Admin! <span className="inline-block">👋🏼</span>
            </div>
          </div>
          <p className="text-gray-600 text-[15px] leading-relaxed mb-10 pr-6">
            <span className="font-medium text-gray-800">
              Login to your Admin Panel
            </span>{" "}
            and take full control of your e-commerce operations. Easily manage{" "}
            <span className="font-semibold text-black">products</span>, update{" "}
            <span className="font-semibold text-black">delivery status</span>,
            handle
            <span className="font-semibold text-black">inventory</span>, and
            monitor all your
            <span className="font-semibold text-black">orders</span> in one
            place. <br />
            <br />
            <span className="text-gray-700">
              Simplify your workflow and ensure smooth operations — all from
              your dashboard.
            </span>
          </p>
          <p className="text-xs text-gray-400 mt-auto">
            © 2025 Worncom. All rights reserved.
          </p>
        </div>

        {/* Right Login Form */}
        <div className="w-full md:w-1/2 px-12 py-14 bg-white flex flex-col justify-center">
          <img className="mb-5" src={assets.logo2} alt="" />

          <h2 className="text-2xl text-center font-bold text-gray-800 mt-5 mb-8">
            Welcome Back!
          </h2>

          <form onSubmit={onSubmitHandler}>
            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition duration-300 shadow"
            >
              Login Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
