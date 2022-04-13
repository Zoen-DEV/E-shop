import React, { useState, useEffect } from "react";
import axios from "axios";
import '../styles/Movies.css';

const Movies = () => {
  const [api, setApi] = useState();
  const url_api = "https://ghibliapi.herokuapp.com/films/";

  useEffect(() => {
    apiReq();
  }, []);

  const apiReq = async () => {
    try {
      const movies = await axios.get(url_api);
      setApi(movies.data);
    } catch (error) {
      console.error(error);
    }
  };
  if(!api){
      return console.log('Cargando...')
  }

  return (
    <>
      {api.map((item) => {
        return (
          <li className="movie-container" key={item.id}>
            <h3 className="movie-title">{item.title}</h3>
            <h4 className="movie-original-title">{item.original_title}</h4>
            <h4  className="movie-date">{item.release_date}</h4>
            <img className="movie-img" src={item.image} />
          </li>
        );
      })}
    </>
  );
};

export default Movies;
