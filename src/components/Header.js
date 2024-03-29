import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="header flex justify-between px-2 shadow-lg mb-4">
      <div className="logo-container">
        <a>
          <img
            className="logo w-24"
            alt="logo of food delivery app"
            src={LOGO_URL}
          />
        </a>
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About </Link>
          </li>

          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart - ({cartItems.length})</Link>
          </li>
          <button
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("Logout")
                : setLoginBtn("Login");
              // setLoginBtn(loginBtn);
            }}
          >
            {loginBtn}
          </button>

          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
