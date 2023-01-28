import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return  <footer className="container">
        <hr className="mt-5" style={{ borderTop: "1px solid #5a606b" }}></hr>
        <div className="row mt-3 mb-5">
        <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
        <h4 style={{color: "#939cad"}}>О кинотеатре</h4>
        <p>
            Link — это домашний онлайн-кинотеатр, который всегда с вами. Смотрите любимые телеканалы, сериалы, фильмы и мультфильмы на смартфоне, планшете и компьютере.
        </p>
        <p>
            Устройте кинотеатр у себя дома и проведите семейные вечера в приятной домашней обстановке.
        </p>
        <ul className="list-inline">
            <li className="list-inline-item">
            <Link to="/" style={{ color: "#f4c10f" }}>
                <i className="fab fa-facebook"></i>
            </Link>
            </li>
            <li className="list-inline-item">
            <Link to="/" style={{ color: "#f4c10f" }}>
                <i className="fab fa-youtube"></i>
            </Link>
            </li>
            <li className="list-inline-item">
            <Link to="/" style={{ color: "#f4c10f" }}>
                <i className="fab fa-twitter"></i>
            </Link>
            </li>
            <li className="list-inline-item">
            <Link to="/" style={{ color: "#f4c10f" }}>
                <i className="fab fa-instagram"></i>
            </Link>
            </li>
        </ul>
        </div>
        <div className="col-md-4 col-sm-6" style={{ color: "#5a606b" }}>
        <h4 style={{color: "#939cad"}}>Оставайтесь на связи</h4>
        <ul className="list-unstyled">
            <li>
            <p>
                <strong>
                <i className="fas fa-map-marker-alt"></i> Адрес:
                </strong>{" "}
                г.Новосибирск, Российская Федерация
            </p>
            </li>
            <li>
            <p>
                <strong>
                <i className="fas fa-map-marker-alt"></i> Телефон:
                </strong>{" "}
                +7 (383-2) 00 00 00
            </p>
            </li>
            <li>
            <p>
                <strong>
                <i className="fas fa-envelope"></i> Email:
                </strong>{" "}
                support@Link.ru
            </p>
            </li>
        </ul>
        </div>
    </div>
</footer>

}


export default Footer;