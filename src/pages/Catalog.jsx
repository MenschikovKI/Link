import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";


// --- импортируем API для получения данных
import {
  fetchGenre,
  fetchMovieByGenre,
} from "../service";


const Catalog = () => {
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const genreList = genres.map((item, index) => {
    return (
      <li className="list-inline-item" key={index}>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={() => {
            handleGenreClick(item.id);
          }}
        >
          {item.name}
        </button>
      </li>
    );
  });

  const movieList = movieByGenre.slice(0, 20).map((item, index) => {
    return (
      <div className="col-md-3 col-sm-6" key={index}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            <img className="img-fluid" src={item.poster} alt={item.title}></img>
          </Link>
        </div>
        <div className="mt-3">
          <p style={{ fontWeight: "bolder" }}>{item.title}</p>
          <p>Рейтинг: {item.rating}</p>
          <ReactStars
            count={item.rating}
            size={20}
            color1={"#f4c10f"}
          ></ReactStars>
        </div>
      </div>
    );
  });







    return (
          <div className="container">
        {/* ============================================================================= */}
              {/* Подбор по жанру */}
              <p className="mt-5" style={{ color: "#939cad", fontSize: "2rem", fontWeight: "bolder" }}>
                Подобрать по жанру</p>
              
              {/* Список жанров */}
              <div className="row mt-3">
                <div className="col">
                  <ul className="list-inline">{genreList}</ul>
                </div>
              </div>
              {/* Список фильмов по жанру */}
              <div className="row mt-1">
                <div className="col">
                  <div className="float-right">
                    <i className="far fa-arrow-alt-circle-right"></i>
                  </div>
                </div>
              </div>
              <div className="row mt-2">{movieList}</div>
            </div>

    );
}
      
export default Catalog
