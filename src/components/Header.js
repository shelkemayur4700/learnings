import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";
import UserContext from "../utills/UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  console.log("data", loggedInUser);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="">
        <img
          className="w-20 p-2 "
          src="https://w7.pngwing.com/pngs/55/100/png-transparent-swiggy-hd-logo-thumbnail.png"
          alt="brand_logo"
        />
      </div>
      <div className="flex items-center px-2 ">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            {" "}
            Status:- {onlineStatus === true ? "Online" : "Offline"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/About">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="font-bold px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
