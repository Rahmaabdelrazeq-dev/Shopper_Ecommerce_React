import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
            Shop
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/mens">
            Men
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/womens">
            Women
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none", color: "inherit" }} to="/kids">
            Kids
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login">
          {" "}
          <button>Login</button>
        </Link>

        <Link to="/cart">
          {" "}
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
