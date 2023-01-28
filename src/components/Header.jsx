import React from "react";
import {Link} from "react-router-dom";


//import {Heart, Bag, Person, } from "react-bootstrap-icons";
import {Container, Form} from "react-bootstrap";

import logo from "../images/logo.png"

const Header = () => {

    return <header className="container-fluid bg-black">
        <Container className="h-100 pt-2 pb-2">
            <div className="d-flex align-items-center h-100 justify-content-between">
                <nav className="d-flex align-items-center" style={{gap: "2rem"}}>
                <Link to="/" className="text-light text-decoration-none">
                    <div className="container">
                        <Link className="navbar-brand" to="#">
                            <img src={logo} alt="Link"/>
                        </Link>
                    </div>
                </Link>
                <Link to="/" className="text-light text-decoration-none">Главная</Link>
                <Link to="/catalog" className="text-light text-decoration-none">Каталог</Link>
                <Link to="/films" className="text-light text-decoration-none">Фильмы</Link>
                <Link to="/serials" className="text-light text-decoration-none">Сериалы</Link>
                <Link to="/toprating" className="text-light text-decoration-none">TOP 250</Link>
                <Link to="/favorites" className="text-light text-decoration-none">Избранное</Link>
                <Link to="/about" className="text-light text-decoration-none">О нас</Link>
                </nav>
                <Form>
                    <Form.Control type="search" placeholder="Поиск"/>
                </Form>

            </div>
            <hr className="mt-2" style={{ borderTop: "1px solid #5a606b" }}></hr>
        </Container>
        
    </header>
}


export default Header;