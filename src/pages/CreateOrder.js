import React from "react";
import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";

const CreateOrder = () => {
  const [product_name, setProduct_name] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [sub_total, setSub_total] = useState("");
  const navigate = useNavigate();

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      let data = {
        product_name: product_name,
        phone_number: phone_number,
        price: price,
        description: description,
        sub_total: sub_total,
      };

      const res = await api.user.addOrder(data);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center">
      <form onSubmit={handleOrder} className="w-80  py-20">
        <div>
          <label
            htmlFor="product"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Product
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="product_name"
            type="text"
            placeholder="Enter product's name"
            value={product_name}
            onChange={(e) => setProduct_name(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="price"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Price
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="price"
            type="text"
            placeholder="Enter product's price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="desc"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Description
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="desc"
            type="text"
            placeholder="Enter product's description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="phone_number"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Phone Number
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="phone_number"
            type="text"
            placeholder="Enter your phone number"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="sub_total"
            className="block text-base text-[#FAFAFA] pb-2 font-poppins-regular"
          >
            Sub total <span className="text-red-600">*</span>
          </label>
          <input
            className="w-80 text-sm py-2  rounded-lg border border-[#36415C] font-poppins-regular  mb-3 px-2 text-[#A4B4CB] bg-[#36415C]"
            id="sub_total"
            type="text"
            placeholder="Enter sub total"
            value={sub_total}
            onChange={(e) => setSub_total(e.target.value)}
            required
          />
        </div>
        <div className="text-center px-10">
          <button
            type="submit"
            className="bg-[#3AC2CB] px-4 py-1 hover:bg-black my-auto w-32 h-8 text-white rounded-2xl"
          >
            Create order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
