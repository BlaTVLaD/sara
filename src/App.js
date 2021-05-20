import logo from './Components/picture/logo.jpg'
import chan from './Components/picture/telechan.jpg'
import './App.css';
import './Components/css/index.css';
import './Components/css/bootstrap.css';
import './Components/css/bootstrap-grid.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ino.css';
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import { faViber } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect } from 'react-router';
import React, { Component } from "react";
import { render } from "react-dom";
import FormContainer from "./Components/Form/containers/FormContainer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function App() {
   return (
   <Router>
    <div className="App">
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 icon-menu">
        <div className="my-0 mr-md-auto font-weight-normal">

          <i className="fas fa-map-marker-alt">  <FontAwesomeIcon icon={ faMapMarkerAlt } /></i>
            <a href="https://www.tripadvisor.ru/Attractions-g298482-Activities-Kostroma_Kostroma_Oblast_Central_Russia.html" className="city"> Кострома</a>
        </div>
        <nav className="my-2 my-md-0 mr-md-3">
            <a className="fab fa-whatsapp fa-2x" href = "https://wa.me/79641515577">  <FontAwesomeIcon icon={faWhatsapp } /></a>
            <a className="fab fa-telegram fa-2x" href = "https://t.me/autoinomarochka">  <FontAwesomeIcon icon={faTelegram} /></a>
            <a className="fab fa-viber fa-2x"> <FontAwesomeIcon icon={faViber} /></a>
        </nav>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 main-menu">
        <div className="my-0 mr-md-auto font-weight-normal">
            <a href="#" className="navbar-left picturelogo">
              <img src={logo} />
            </a>

        </div>

        <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" > <Link to="/" >Новости</Link></a>
        <a class="p-2 text-dark" > <Link to="/service" >Сервису</Link></a>
        <a class="p-2 text-dark" > <Link to="/contact" >Контакты</Link></a>
        <a class="p-2 text-dark" > <Link to="/deliver" >Доставка</Link></a>
      </nav>

    </div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 icon-tel">
        <div className="my-0 mr-md-auto font-weight-normal"></div>
        <nav className="my-2 my-md-0 mr-md-3">
          <span className="tel">+7(4942)62‒08‒72</span>
        </nav>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 icon-tel">
        <div className="my-0 mr-md-auto font-weight-normal"></div>
        <nav className="my-2 my-md-0 mr-md-3">
          <span className="tel">+7 (964)151‒55‒77</span>
        </nav>
      </div>

        <Switch>
            <Route exact path="/">
                <News />
            </Route>
            <Route path="/service">
                <Service />
            </Route>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/deliver">
                <Deliver />
            </Route>
        </Switch>

        <footer className="footer mt-auto py-3 footerstyle">
            <div className="container">
                <span className="text-muted">Иномарочка 2021©</span>
            </div>
        </footer>
    </div>

</Router>
 );
}

function News() {
    return (
        <div className="container priority ">
            <div className="row">
                <div className="col-sm shadow-sm p-3 mb-5 bg-white rounded prio-left"> <FormContainer/>
                    <a href= "https://t.me/inomarochkakos"> Форма для заказа </a>
                </div>
                <div className="col-sm shadow-sm p-3 mb-5 bg-white rounded prio-center"  > <img alt src = {chan}/>
                    <a href= "https://t.me/inomarochkakos"> Новостной канал в Telegram  </a>
                </div>
            </div>
        </div>
    );
}

function Service() {
    return (
        <div>
            <h2>Сервису</h2>
        </div>
    );
}

function Contact() {
    return (
        <div>
            <h2>Контакты</h2>
        </div>
    );
}

function Deliver() {
    return (
        <div>
            <h2>Доставка</h2>
        </div>
    );
}