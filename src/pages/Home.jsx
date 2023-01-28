import React, { useState, useEffect } from "react";

// --- импортируем части страниц
import Header from "../components/Header";
import Footer from "../components/Footer";

// --- импортируем API для получения данных
import {
  fetchMovies,
  fetchGenre,
  fetchMovieByGenre,
  fetchPersons,
  fetchTopratedMovie,
} from "../service";

import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Home = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [genres, setGenres] = useState([]);
  const [movieByGenre, setMovieByGenre] = useState([]);
  const [persons, setPersons] = useState([]);
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setNowPlaying(await fetchMovies());
      setGenres(await fetchGenre());
      setMovieByGenre(await fetchMovieByGenre(28));
      setPersons(await fetchPersons());
      setTopRated(await fetchTopratedMovie());
    };

    fetchAPI();
  }, []);

  const handleGenreClick = async (genre_id) => {
    setMovieByGenre(await fetchMovieByGenre(genre_id));
  };

  const movies = nowPlaying.slice(0, 5).map((item, index) => {
    return (
      <div style={{ height: 500, width: "100%" }} key={index}>
        <div className="carousel-center">
          <img style={{ height: 600 }} src={item.backPoster} alt={item.title} />
        </div>
        <div className="carousel-center">
          <i
            className="far fa-play-circle"
            style={{ fontSize: 95, color: "#f4c10f" }}
          ></i>
        </div>
        <div
          className="carousel-caption"
          style={{ textAlign: "center", fontSize: 35 }}
        >
          {item.title}
        </div>
      </div>
    );
  });

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

  const movieList = movieByGenre.slice(0, 4).map((item, index) => {
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

  const trendingPersons = persons.slice(0, 4).map((p, i) => {
    return (
      <div className="col-md-3 text-center" key={i}>
        <img
          className="img-fluid rounded-circle mx-auto d-block"
          src={p.profileImg}
          alt={p.name}
        ></img>
        <p className="font-weight-bold text-center">{p.name}</p>
        <p
          className="font-weight-light text-center"
          style={{ color: "#5a606b" }}
        >
          В тренде {p.known}
        </p>
      </div>
    );
  });

  const topRatedList = topRated.slice(0, 4).map((item, index) => {
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
  <div>

    {/* ============================================================================= */}
    {/* Навигационное меню */}
    <Header/>

    {/* ============================================================================= */}
    {/* Карусель из видео которые сейчас находятся в прокате*/}
    <div className="container">
      <div className="row mt-2">
        <div className="col">
        <p className="font-weight-bold" style={{ color: "#939cad", fontSize: "2rem"  }}>
            Сейчас смотрят</p>
          <RBCarousel
            autoplay={true}
            pauseOnVisibility={true}
            slidesshowSpeed={5000}
            version={4}
            indicators={false}
          >
            {movies}
          </RBCarousel>
        </div>
      </div>

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

      {/* ============================================================================= */}
      {/* Популярные актеры */}
      <div className="row mt-5">
        <div className="col">
          <p className="font-weight-bold" style={{ color: "#939cad", fontSize: "2rem"  }}>
            Популярные лица на этой неделе</p>
        </div>
      </div>
      {/* Список популярных актеров */}
      <div className="row mt-1">
        <div className="col">
          <div className="float-right">
            <i className="far fa-arrow-alt-circle-right"></i>
          </div>
        </div>
      </div>
      <div className="row mt-1">{trendingPersons}</div>


    </div>
    
    {/* ============================================================================= */}
    {/* Подвал */}
    <Footer/>
  </div>
  );
  
}
export default Home;