import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
const Signup = () => {
  const [name, setName] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      let data = {
        name: name,
        phone_number: phone_number,
        password: password,
      };
      const res = await api.user.signup(data);

      if (res.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleSignup} className="w-80  py-20">
        <div>
          <label
            htmlFor="name"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Name <span className="text-red-600">*</span>
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
            onChange={(e) => setPhone_number(e.target.value)}
            value={phone_number}
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
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
