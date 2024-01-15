import React from "react";
import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="flex justify-between mx-5">
        <img src={LOGO} alt="logo" width={250} />

        <ul className="flex items-center gap-10">
          <li>Search</li>
          <li>Cart</li>
          <li>User</li>
          <li>
            <button
              onClick={handleSignOut}
              className="bg-red-700 hover:bg-red-600 text-white rounded-md font-medium px-2 py-1"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
