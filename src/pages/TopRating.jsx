import React, { useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

// --- импортируем API для получения данных
import {
  fetchTopratedMovie,
} from "../service";

const TopRating = () => {

  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
    setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);


  const topRatedList = topRated.slice(0, 20).map((item, index) => {
    return (
      <div className="col-md-3" key={index}>
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
      {/* Рейтинг лучших фильмов */}
      <div className="row mt-5">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#939cad", fontSize: "2rem" }}>
            Рейтинг лучших фильмов</p>
        </div>
      </div>
      {/* Список лучших фильмов */}
      <div className="row mt-1">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className="row mt-1">{topRatedList}</div>


  </div>
  );
}

export default TopRating;