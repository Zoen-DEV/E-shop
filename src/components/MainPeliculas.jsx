import React from "react";
import Movies from "./Movies";
import "../styles/Movies.css";
import "../styles/MainHome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MainPeliculas = () => {
  return (
    <>
      <form className="form-movies">
        <div className="input-container">
          <input type="text" className="nav-search" placeholder="Buscar pelicula" />
          <FontAwesomeIcon icon={faSearch} className="lupa" />
        </div>
      </form>
      <ul className="movies">
        <Movies />
      </ul>
    </>
  );
};

export default MainPeliculas;
