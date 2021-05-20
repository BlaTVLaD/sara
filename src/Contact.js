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

function Contact() {
    return (
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
                    <a class="p-2 text-dark" href="#">Новости</a>
                    <a class="p-2 text-dark" href="#">Сервису</a>
                    <a class="p-2 text-dark" href="contact.html">Контакты</a>
                    <a class="p-2 text-dark" href="#">Доставка</a>
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
        </div>


);
}

export default Contact;