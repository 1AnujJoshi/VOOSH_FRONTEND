import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import api from "../api/api";
var axios = require("axios");
var qs = require("qs");
const Login = () => {
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      let data = {
        phone_number: phone_number,
        password: password,
      };
      const res = await api.user.login(data);

      localStorage.setItem("user", JSON.stringify(res.data.data.record));
      localStorage.setItem("token", res.data.data.token);
      if (res.status === 200) {
        <Navigate to="/" />;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleLogin} className="w-80  py-20">
        <div>
          <label
            htmlFor="phone_number"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Phone Number <span className="text-red-600">*</span>
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="phone_number"
            type="text"
            placeholder="Enter your phone number"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Password <span className="text-red-600">*</span>
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="text-center px-10">
          <button
            type="submit"
            className="bg-[#3AC2CB] px-4 py-1 hover:bg-black my-auto w-24 h-8 text-white rounded-2xl"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
