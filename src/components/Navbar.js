import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone_number: "",
  });
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  useEffect(() => {
    if (localStorage.getItem("user") !== null) {
      let details = JSON.parse(localStorage.getItem("user"));
      setUserDetails({
        name: details.name,
        phone_number: details.phone_number,
      });
    }
  }, []);
  return (
    <div className="flex justify-between bg-black align-middle">
      <div className="h-10  bg-black flex align-middle justify-end px-4 gap-1">
        <Link
          to="/"
          className=" bg-black text-white align-middle py-2 h-8 my-auto text-2xl px-5"
        >
          VOOSH
        </Link>
      </div>

      <div className="h-16  bg-black flex align-middle justify-end px-4 gap-1">
        {userDetails.name === "" ? (
          <Link
            to="/login"
            className="h-16  bg-black flex align-middle justify-end px-4 gap-1"
          >
            <button className="bg-[#3AC2CB] px-4 py-1 hover:bg-black my-auto w-24 h-8 text-white rounded-2xl">
              Login
            </button>
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-[#3AC2CB] px-4 py-1 hover:bg-black my-auto w-24 h-8 text-white rounded-2xl"
          >
            Logout
          </button>
        )}
        {userDetails.name === "" ? (
          <Link
            to="/sign-up"
            className="h-16 bg-black flex align-middle justify-end px-4 gap-1"
          >
            <button className="bg-[#3AC2CB] px-4 py-1 hover:bg-black my-auto w-24 h-8 text-white rounded-2xl">
              Sign up
            </button>
          </Link>
        ) : (
          ""
        )}

        {userDetails.name !== "" ? (
          <Link
            to="/create-order"
            className="h-16 bg-black flex align-middle justify-end px-4 gap-1"
          >
            <button className="bg-[#3AC2CB] px-4 py-1 hover:bg-black my-auto w-32 h-8 text-white rounded-2xl">
              Create Order
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
