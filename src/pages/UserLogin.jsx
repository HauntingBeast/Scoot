import React from "react";
import logo2 from "../assets/logo.png";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="p-7 ">
      <div>
        <img className=" w-2/5 mb-5" src={logo2} alt="logo" />
        <form>
          <h3 className="text-xl font-medium mb-2">What's your email </h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Your Email "
          />
          <h3 className="text-lg font-medium mb-2">What's your password </h3>
          <input
            required
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password "
          />
          <button className="flex items-center mb-3 text-lg font-medium justify-center w-full bg-black text-white py-3 rounded mt-5 ">
            {" "}
            Login
          </button>
          <p>
            New Here?{" "}
            <Link to="/signup" className="hover:underline mb-2 text-blue-600">
              Create Account.
            </Link>
          </p>
        </form>
      </div>
      <div>
        <button className="flex items-center justify-center text-lg font-semibold w-full bg-[#10b461] text-white py-3 rounded mt-5 ">
          Sign in As Captain{" "}
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
