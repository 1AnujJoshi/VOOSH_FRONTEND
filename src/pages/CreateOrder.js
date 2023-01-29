import React from "react";

const CreateOrder = () => {
  return (
    <div className="flex justify-center">
      <form className="w-80  py-20">
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
            required
          />
        </div>
        <div className="text-center px-10">
          <button className="bg-[#3AC2CB] px-4 py-1 hover:bg-black my-auto w-32 h-8 text-white rounded-2xl">
            Create order
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrder;
