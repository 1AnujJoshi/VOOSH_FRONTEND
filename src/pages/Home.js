import React, { useState, useEffect } from "react";
import api from "../api/api";

const Home = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone_number: "",
  });
  const [orders, setOrders] = useState([]);
  const getOrders = async () => {
    const res = await api.user.getOrder();
    setOrders(res.data.orders);
  };
  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      let details = JSON.parse(localStorage.getItem("user"));
      setUserDetails({
        name: details.name,
        phone_number: details.phone_number,
      });
    }
    getOrders();
  }, []);
  return (
    <div>
      <div className=" w-screen text-center py-20 align-middle">
        <h1 className="text-white text-2xl py-6">Home Page</h1>
        {userDetails.name === "" ? (
          <h1 className="text-[#3AC2CB]  text-2xl">
            You need to Log-in / Sign-up{" "}
          </h1>
        ) : (
          <div className=" justify-center">
            {orders.length === 0 ? (
              <h1 className="text-[#3AC2CB]  text-2xl">
                You can create an order!!{" "}
              </h1>
            ) : (
              ""
            )}
            {orders.map((order, i) => (
              <div
                key={i}
                className="text-[#3AC2CB]  mx-auto my-2 w-1/2 mx-36 px-9 py-6 text-start border border-b-l"
              >
                <ul className="list-disc"></ul>
                <li>Order ID: {order?._id}</li>
                <li> Product Name: {order?.product?.product_name}</li>
                <li>Price: {order?.product?.price}</li>
                <li>Description: {order?.product?.desc}</li>
                <li>Phone Number: {order?.phone_number}</li>
                <li>Sub Total:{order?.sub_total}</li>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
