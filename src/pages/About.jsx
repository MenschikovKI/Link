import React from "react";

// --- импортируем компоненты страницы
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
          <Header/>

      <div className="container">
      <div className="row mt-2">
        <div className="col">
        <p className="font-weight-bold" style={{ color: "#939cad", fontSize: "2rem"  }}>
            О Нас</p>
        </div>
      </div>
      
      <p className="font-weight-light" style={{ color: "#5a606b" }}>
      Медиасервис «Link» предоставляет информацию о кинофильмах, телесериалах, в том числе кадры,
      трейлеры, постеры, обои, а также данные о персонах, связанных с кино- и телепроизводством: 
      актёрах, режиссёрах, продюсерах, сценаристах, операторах, композиторах, художниках и монтажёрах. 
      </p>
      <p className="font-weight-light" style={{ color: "#5a606b" }}>
      Пользователи могут ставить оценки фильмам и сериалам, добавлять их в ожидаемые, писать рецензии, 
      покупать билеты в кинотеатры на сайте с компьютера или мобильных устройств. 
      Имеется онлайн-кинотеатр с фильмами и сериалами без отдельной платы. Медиасервисом Link можно пользоваться 
      на Android и iOS, Apple TV, Smart TV (LG, Samsung и телевизоры на базе Android TV), игровые консоли PlayStation 4 и PlayStation 5.
      </p>
      
      <p className="font-weight-light" style={{ color: "#5a606b" }}>
      Для зарегистрированных пользователей существует опция добавления и уточнения информации, касающейся фильмов,
      в том числе новых, а также о персонах, их участии в фильмах, фактах биографии, семье. Каждое действие проходит
       премодерацию, продолжительность которой зависит от популярности персоны или рейтинга фильма.
      </p>
       
    </div>


          
      <Footer/>
    </div>
    );
}
      
export default About;