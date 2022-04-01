import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Card from "../components/Card/Card";

import "../assets/css/home.css";

// Images Desktop
import ImgSlide1 from "../assets/images/pages/toppromo-460.png";
import ImgSlide2 from "../assets/images/pages/toppromo-455.png";
import ImgSlide3 from "../assets/images/pages/toppromo-278.jpg";
// Images Mobile
import ImgSlideMobile1 from "../assets/images/pages/toppromomobile-460.png";
import ImgSlideMobile2 from "../assets/images/pages/toppromomobile-455.png";
import ImgSlideMobile3 from "../assets/images/pages/toppromomobile-278.jpg";
import React from "react";
// Images Big Cards
import ImgBC1 from "../assets/images/pages/rubrique_44.jpg";
import ImgBC2 from "../assets/images/pages/rubrique_65.jpg";
// Images Small Cards
import ImgSC1 from "../assets/images/pages/vn.jpg";
import ImgSC2 from "../assets/images/pages/vo.jpg";
import ImgSC3 from "../assets/images/pages/rubrique_3.jpg";
import ImgSC4 from "../assets/images/pages/rubrique_21.jpg";
// Icons
import Icon1 from "../assets/images/pages/i-contact.png";
import Icon2 from "../assets/images/pages/i-affaire.png";
import Icon3 from "../assets/images/pages/i-volant.png";
import Icon4 from "../assets/images/pages/i-nl.png";

const slidesDesktop = [
    {
        src: ImgSlide1,
        altText: "Offre pare-brise"
    },
    {
        src: ImgSlide2,
        altText: "La nouvelle BMW Série 2 Active Tourer"
    },
    {
        src: ImgSlide3,
        altText: "Les offres du moment chez Horizon."
    }
];

const slidesMobile = [
    {
        src: ImgSlideMobile1,
        altText: "Offre pare-brise"
    },
    {
        src: ImgSlideMobile2,
        altText: "La nouvelle BMW Série 2 Active Tourer"
    },
    {
        src: ImgSlideMobile3,
        altText: "Les offres du moment chez Horizon."
    }
];
  

const Home = ({ isDesktopOrLaptop, isTabletOrMobile }) => {
    return (
        <React.Fragment>
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
                renderThumbs={(children) => null}
                showArrows={true}
            >
                {isDesktopOrLaptop ? slidesDesktop.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.src} alt={slide.altText} />
                    </div>
                )) : slidesMobile.map((slide, index) => (
                    <div key={index}>
                        <img src={slide.src} alt={slide.altText} />
                        <p className="slide-title">{slide.altText}</p>
                    </div>
                ))}
            </Carousel>
            <section>
                <div className="main-section">
                    <h1>Horizon se tient à votre disposition dans ses 6 points de vente et services.</h1>
                    <div>
                        <div>
                            <Link to="/">
                                <span>Horizon</span>
                                <span>La Défense</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <span>Horizon</span>
                                <span>Charles Pozzi</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <span>Horizon</span>
                                <span>Saint-Gratien</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <span>Horizon</span>
                                <span>Saint-Ouen l'Aumône</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <span>Horizon</span>
                                <span>Rouen</span>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <span>Horizon</span>
                                <span>Dieppe</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="separator-box-shadow"></div>
                <div className="main-section-2">
                    <h2>Choisissez votre BMW.</h2>
                    <div>
                        <div>
                            <span>Par modèle</span>
                            <div>
                                <Link to="/">1</Link>
                                <Link to="/">2</Link>
                                <Link to="/">3</Link>
                                <Link to="/">4</Link>
                                <Link to="/">5</Link>
                                <Link to="/">6</Link>
                                <Link to="/">7</Link>
                                <Link to="/">8</Link>
                                <Link to="/">X</Link>
                                <Link to="/">Z</Link>
                                <Link to="/">M</Link>
                                <Link to="/">i</Link>
                            </div>
                        </div>
                        <div>
                            <span>Par carrosserie</span>
                            <div>
                                <Link to="/">Berline</Link>
                                <Link to="/">Break</Link>
                                <Link to="/">Cabriolet</Link>
                                <Link to="/">Compacte</Link>
                                <Link to="/">Coupé</Link>
                                <Link to="/">Monospace</Link>
                                <Link to="/">SUV</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-section-3">
                    <div className="big-card-list-container">
                        <Card
                            imgSrc={ImgBC1}
                            title="La nouvelle BMW Série 2 Active Tourer."
                            text="Préparez-vous à agrandir la famille avec notre compacte familiale : la nouvelle BMW Série 2 Active Tourer."
                        />
                        <Card
                            imgSrc={ImgBC2}
                            title="Horizon s'engage."
                            text="Nos concessions Horizon sont déjà présentes dans ce mouvement circulaire. Nos ateliers sont principalement concernés par celui-ci au quotidien."
                        />
                    </div>
                    <div className="small-card-list-container">
                        <Card
                            link="/car"
                            imgSrc={ImgSC1}
                            title="Nos BMW neuves."
                            text="BMW 320d Touring 190 ch Finition Luxury pour 58 900 € TTC."
                        />
                        <Card
                            imgSrc={ImgSC2}
                            title="Nos BMW d'occasion."
                            text="BMW i3 170 ch Edition 360 Atelier 37 745 km pour 24 940 € TTC."
                        />
                        <Card
                            imgSrc={ImgSC3}
                            title="Financement."
                            text="Votre BMW i3 Atelier pour 195 euros par mois, garantie et entretien inclus (36 mois / 30 000 km)."
                        />
                        <Card
                            imgSrc={ImgSC4}
                            title="Service."
                            text="Changez votre pare-brise et profitez de 150 € TTC d'accessoires offerts ou d'une remise allant jusqu'à 100 € TTC."
                        />
                    </div>
                </div>
                <div className="main-section-4">
                    <div className="bg-image-cover">
                        <h2>Un budget, une BMW chez Horizon.</h2>
                        <div>
                            <Link to="/"><span>Moins de 400 €</span><span>par mois</span></Link>
                            <Link to="/"><span>400 à 500 €</span><span>par mois</span></Link>
                            <Link to="/"><span>500 à 600 €</span><span>par mois</span></Link>
                            <Link to="/"><span>600 à 700 €</span><span>par mois</span></Link>
                            <Link to="/"><span>700 à 800 €</span><span>par mois</span></Link>
                            <Link to="/"><span>800 € et plus</span><span>par mois</span></Link>
                        </div>
                    </div>
                    <div className="list-icons">
                        <Link to="/"><img src={Icon1} alt="Contactez-nous" /><span>Contactez-nous</span></Link>
                        <Link to="/"><img src={Icon2} alt="Les Affaires Horizon" /><span>Les Affaires Horizon</span></Link>
                        <Link to="/"><img src={Icon3} alt="Réservez votre essai" /><span>Réservez votre essai</span></Link>
                        <Link to="/"><img src={Icon4} alt="Newsletter Horizon BMW" /><span>Newsletter Horizon BMW</span></Link>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Home;