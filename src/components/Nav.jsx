import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <>
      <header className="head">
        <nav className="nav">
          <button className="toggle-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button className="cart-btn">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
          <img src={logo} alt="logo" className="nav-logo" />
          <ul className="links">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/">Productos</Link>
            </li>
            <li>
              <Link to="/">Contactanos</Link>
            </li>
            <li>
              <Link to="/">Sobre nosotros</Link>
            </li>
          </ul>
        </nav>
        <ul className="toggle-links">
          <li>
            <Link className="toggle-link" to="/">Inicio</Link>
          </li>
          <li>
            <Link className="toggle-link" to="/">Productos</Link>
          </li>
          <li>
            <Link className="toggle-link" to="/">Contactanos</Link>
          </li>
          <li>
            <Link className="toggle-link" to="/">Sobre nosotros</Link>
          </li>
          <button className="toggle-cart-btn">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </ul>
      </header>
    </>
  );
};

export default Nav;
