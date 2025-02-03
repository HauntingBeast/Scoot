import React, { useState } from "react";
import logo2 from "../assets/logo.png";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  // const [email, setEmail] = useState(" ");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setCaptainData({
      email: email,
      password: password,
    });
    setEmail("");
    setPassword("");
    console.log(captainData);
  };

  return (
    <div className="p-7 flex flex-col h-screen justify-between">
      <div>
        <img className=" w-2/5 mb-5" src={logo2} alt="logo" />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl font-medium mb-2">What's your email </h3>
          <input
            required
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <h3 className="text-lg font-medium mb-2">What's your password </h3>
          <input
            required
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            placeholder="Password "
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="flex items-center mb-3 text-lg font-medium justify-center w-full bg-black text-white py-3 rounded mt-5 ">
            {" "}
            Login
          </button>
          <p className="text-center">
            Join Us!{" "}
            <Link
              to="/captainSignup"
              className="hover:underline mb-2 text-blue-600"
            >
              Register as a captain
            </Link>
          </p>
        </form>
      </div>
      <div>
        <Link
          to="/login"
          className="flex items-center justify-center text-lg font-semibold w-full bg-[#d5622d] text-white py-3 rounded mt-5 "
        >
          Sign in As User{" "}
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
