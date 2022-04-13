import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import "../styles/Nav.css";

const Nav = () => {
  const responsiveLinks = React.createRef();

  const toggleLinks = () => {
    responsiveLinks.current.classList.toggle("show-links");
  };

  return (
    <>
      <header className="head">
        <nav className="nav">
          <button onClick={() => toggleLinks()} className="toggle-btn">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="input-container">
            <input type="text" className="nav-search" />
            <FontAwesomeIcon icon={faSearch}  className="lupa"/>
          </div>
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
        <ul ref={responsiveLinks} className="toggle-links">
          <li>
            <Link className="toggle-link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className="toggle-link" to="/">
              Productos
            </Link>
          </li>
          <li>
            <Link className="toggle-link" to="/">
              Contactanos
            </Link>
          </li>
          <li>
            <Link className="toggle-link" to="/">
              Sobre nosotros
            </Link>
          </li>
          <button className="cart-btn">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </ul>
      </header>
    </>
  );
};

export default Nav;
