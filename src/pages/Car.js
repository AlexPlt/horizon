import React, { useState } from "react";

import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { Collapse } from 'reactstrap';

import "../assets/css/car.css";

import backgroundHeader from "../assets/images/pages/bandeau-vn2.png";
import critair1 from "../assets/images/pages/car/critair_1.png";
import critair2 from "../assets/images/pages/car/critair_2.png";
// Images Mobile
import ImgSlideMobile1 from "../assets/images/pages/car/2603_1.png";
import ImgSlideMobile2 from "../assets/images/pages/car/2603_2.jpg";
import ImgSlideMobile3 from "../assets/images/pages/car/2603_3.jpg";
// Images Mobile 2
import ImgSlideMobile21 from "../assets/images/pages/car/2514_1.png";
import ImgSlideMobile22 from "../assets/images/pages/car/2750_1.png";
import ImgSlideMobile23 from "../assets/images/pages/car/2747_1.png";
import ImgSlideMobile24 from "../assets/images/pages/car/2506_1.png";
// Images Desktop
import ImgSlide1 from "../assets/images/pages/car/2603_1.png";
import ImgSlide2 from "../assets/images/pages/car/2603_2.jpg";
import ImgSlide3 from "../assets/images/pages/car/2603_3.jpg";

const slidesMobile = [
    {
        src: ImgSlideMobile1
    },
    {
        src: ImgSlideMobile2
    },
    {
        src: ImgSlideMobile3
    }
];

const slidesMobile2 = [
    {
        src: ImgSlideMobile21,
        title: "BMW 320d xDrive 190ch Berline",
        infos: [
            {
                text: "68 150 €",
                number: null
            },
            {
                text: "Diesel",
                number: null
            },
            {
                text: "Crit'air",
                number: 2
            }
        ]
    },
    {
        src: ImgSlideMobile22,
        title: "BMW 330e 292 ch Berline Finition M Sport",
        infos: [
            {
                text: "67 110 €",
                number: null
            },
            {
                text: "Hybride rechargeable",
                number: null
            }
        ]
    },
    {
        src: ImgSlideMobile23,
        title: "BMW 330e 292 ch Touring Finition M Sport",
        infos: [
            {
                text: "72 285 €",
                number: null
            }
        ]
    },
    {
        src: ImgSlideMobile24,
        title: "BMW 330i xDrive 258ch Touring",
        infos: [
            {
                text: "72 720 €",
                number: null
            },
            {
                text: "Essence",
                number: null
            },
            {
                text: "Crit'air",
                number: 1
            }
        ]
    }
];

const Car = ({ isDesktopOrLaptop, isTabletOrMobile }) => {
    const [collapse, setCollapse] = useState(true);

    const toggle = () => {
        setCollapse(!collapse);
    }

    return (
        <React.Fragment>
            <img src={backgroundHeader} className="bg-image" alt="" />
            <div className="section-header-car">
                <h1>BMW 320d xDrive 190ch Touring neuve.</h1>
                <div className="btn-banner">
                    <Link to="/" className="btn-back"><span className="btn-back-icon"></span>Retour</Link>
                    <Link to="/car" className="btn-fb"><span className="btn-fb-icon"></span>Partager</Link>
                </div>
            </div>
            <div className="section-container-car">
                <div className="main-section-car">
                    {isDesktopOrLaptop ? (
                        <div className="main-pictures">
                            <div className="car-big-picture">
                                <img src={critair2} alt="Crit'Air 2" className="label-eco" />
                                <a href={ImgSlide1} target="_blank"><img src={ImgSlide1} /></a>
                            </div>
                            <div className="car-small-picture">
                                <a href={ImgSlide1} target="_blank"><img src={ImgSlide2} /></a>
                                <a href={ImgSlide1} target="_blank"><img src={ImgSlide3} /></a>
                            </div>
                            <div className="text-information">
                                <p>Offre réservée aux particuliers, dans la limite des stocks disponibles. Document non contractuel (sous réserve d'erreur ou d'omission).</p>
                                <p>* Hors frais d'immatriculation et de mise à la route.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="main-carousel">
                            <img src={critair2} alt="Crit'Air 2" className="label-eco" />
                            <Carousel
                                autoPlay={true}
                                infiniteLoop={true}
                                interval={5000}
                                renderArrowPrev={(onClickHandler, hasPrev, label) => null}
                                renderArrowNext={(onClickHandler, hasNext, label) => null}
                                showThumbs={false}
                                showArrows={false}
                                showStatus={false}
                            >
                                {slidesMobile.map((slide, index) => (
                                    <div key={index}>
                                        <img src={slide.src} alt={slide.altText} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    )}
                </div>
                <div>
                    <div className="main-section-car-2">
                        <div className="info-address">
                            <p>Service commercial</p>
                            <p>Tél. : 01 75 18 56 13</p>
                            <p className="important">Horizon Saint-Ouen l'Aumône</p>
                            <p>15, rue Louis Delage</p>
                            <p>95310 Saint-Ouen l'Aumône</p>
                        </div>
                        <div className="info-price">
                            <div>
                                <Link to="/car">Demander un essai</Link>
                            </div>
                            <div className="price-details">
                                <p>Prix catalogue : <span>68 730 € TTC</span></p>
                                <p>Prix spécial :</p>
                                <p>61 900 € TTC*</p>
                                <p>Avantage client : 6 830 €</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-section-car-3">
                        <p className={`btn-toggle${collapse ? " btn-toggle-open" : ""}`} onClick={toggle}>
                            {collapse ? <i className="fa-solid fa-sort-down"></i> : <i className="fa-solid fa-caret-right"></i>}
                            <span>Caractéristiques</span>
                        </p>
                        <Collapse isOpen={collapse}>
                            <div className="card-collapse">
                                <ul>
                                    <li>
                                        <span>Référence</span>
                                        <span>WBA31DZ020FM20941</span>
                                    </li>
                                    <li>
                                        <span>Energie</span>
                                        <span>Diesel</span>
                                    </li>
                                    <li>
                                        <span>Nb places</span>
                                        <span>5</span>
                                    </li>
                                    <li>
                                        <span>Nb portes</span>
                                        <span>5</span>
                                    </li>
                                    <li>
                                        <span>Couleur</span>
                                        <span>Saphirschwarz Métal</span>
                                    </li>
                                    <li>
                                        <span>Intérieur</span>
                                        <span>Sellerie Cuir "Vernasca" Schwarz av</span>
                                    </li>
                                    <li>
                                        <span>Boîte</span>
                                        <span>Automatique</span>
                                    </li>
                                    <li>
                                        <span>Puiss. réelle</span>
                                        <span>190 ch</span>
                                    </li>
                                    <li>
                                        <span>Puiss. fiscale</span>
                                        <span>10 cv</span>
                                    </li>
                                    <li>
                                        <span>Emissions de CO<sub>2</sub></span>
                                        <span>143 g/km</span>
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                        <p className={`btn-toggle${!collapse ? " btn-toggle-open" : ""}`} onClick={toggle}>
                            {collapse ? <i className="fa-solid fa-caret-right"></i> : <i className="fa-solid fa-sort-down"></i>}
                            <span>Finitions et options</span>
                        </p>
                        <Collapse isOpen={!collapse}>
                            <div className="card-collapse-2">
                                <ul>
                                    <li>Saphirschwarz métal</li>
                                    <li>Sellerie Cuir "Vernasca" Schwarz avec surpiqures decoratives</li>
                                    <li>Contenance du reservoir de carburant superieure</li>
                                    <li>Jantes alliage 19" style 791M bicolores/RSC</li>
                                    <li>Suppression de la fonction tactile de l'écran de conrtrôle</li>
                                    <li>Shadow-Line brillant BMW Individual avec dotation elargie</li>
                                    <li>Omission Affichage Tete Haute HUD</li>
                                    <li>Omission Regulateur de vitesse actif</li>
                                    <li>Pack Confort</li>
                                    <li>Pack Innovation</li>
                                    <li>Finition M Sport</li>
                                    <li>Pack Evasion</li>
                                </ul>
                            </div>
                        </Collapse>
                        <p className="text-information-mobile">* Hors frais d'immatriculation et de mise à la route. Document non contractuel (sous réserve d'erreur ou d'omission).</p>
                    </div>
                </div>
            </div>
            <div className="main-section-car-4">
                <h3>Vous pourriez être intéressé par cette sélection :</h3>
                {isDesktopOrLaptop ? (
                    <div className="about-car">
                        {slidesMobile2.map((slide, index) => (
                            <div key={index} className="about-car-item">
                                <img src={slide.src} alt={slide.title} />
                                <p className="slide-title">{slide.title}</p>
                                <ul className="slide-infos-list">
                                    {slide.infos.map((info, index) => (
                                        <li key={index} className="slide-item-infos">
                                            {info.text}
                                            {info.number === 1 && <img src={critair1} alt="Crit'air 1" />}
                                            {info.number === 2 && <img src={critair2} alt="Crit'air 2" />}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="about-carousel">
                        <Carousel
                            autoPlay={true}
                            infiniteLoop={true}
                            interval={5000}
                            renderArrowPrev={(onClickHandler, hasPrev, label) => (
                                <button type="button" aria-label={label} className={hasPrev ? "control-arrow control-prev" : "control-disabled"} onClick={onClickHandler} />
                            )}
                            renderArrowNext={(onClickHandler, hasNext, label) => (
                                <button type="button" aria-label={label} className={hasNext ? "control-arrow control-next" : "control-disabled"} onClick={onClickHandler} />
                            )}
                            showThumbs={false}
                            showArrows={true}
                            showStatus={false}
                        >
                            {slidesMobile2.map((slide, index) => (
                                <div key={index}>
                                    <img src={slide.src} alt={slide.title} />
                                    <p className="slide-title">{slide.title}</p>
                                    <ul className="slide-infos-list">
                                        {slide.infos.map((info, index) => (
                                            <li key={index} className="slide-item-infos">
                                                {info.text}
                                                {info.number === 1 && <img src={critair1} alt="Crit'air 1" />}
                                                {info.number === 2 && <img src={critair2} alt="Crit'air 2" />}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Car;