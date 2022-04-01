import { useState } from "react";

import { slide as Menu } from 'react-burger-menu';

import ArrowRight from "../../assets/images/menu-next.png";
import ArrowLeft from "../../assets/images/menu-back.png";

import '../../assets/css/mobileMenuStyle.css';

const MobileMenu = ({ isScrollTop, isMenuOpen, isOpen }) => {
    const [menuModeles, setMenuModeles] = useState(false);
    const [menuOffresFinancements, setMenuOffresFinancements] = useState(false);
    const [menuActualites, setMenuActualites] = useState(false);
    const [menuServices, setMenuServices] = useState(false);

    return (
        <Menu
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
            customBurgerIcon={
                <div className={`menu-icon-container ${isOpen ? "menu-open" : ""} ${isScrollTop ? "" : "menu-scroll"}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            }
            onStateChange={isMenuOpen}
            noOverlay={true}
            noTransition={true}
            width={'100%'}
            left
        >
            <span className="menu-item" onClick={() => setMenuModeles(true)}><span>Modèles</span><img src={ArrowRight} alt="Sous menu >" /></span>
            <div id="modeles" className={`sub-menu-container ${menuModeles ?"sub-menu-container-open" : ""}`}>
                <span className="bm-item menu-item" onClick={() => setMenuModeles(false)}><img src={ArrowLeft} alt="< menu principal" /><span>Modèles</span></span>
                <a className="bm-item menu-item" href="/">Gamme BMW</a>
                <a className="bm-item menu-item" href="/">BMW neuves</a>
                <a className="bm-item menu-item" href="/">Styles de vie</a>
                <a className="bm-item menu-item" href="/">Affaires horizon</a>
            </div>
            <a className="menu-item" href="/">Occasions</a>
            <span className="menu-item" onClick={() => setMenuOffresFinancements(true)}><span>Offres & financements</span><img src={ArrowRight} alt="Sous menu >" /></span>
            <div id="offresFinancements" className={`sub-menu-container ${menuOffresFinancements ?"sub-menu-container-open" : ""}`}>
                <span className="bm-item menu-item" onClick={() => setMenuOffresFinancements(false)}><img src={ArrowLeft} alt="< menu principal" /><span>Offres & financements</span></span>
                <a className="bm-item menu-item" href="/">Particuliers</a>
                <a className="bm-item menu-item" href="/">Entreprises</a>
            </div>
            <span className="menu-item" onClick={() => setMenuActualites(true)}><span>Actualités</span><img src={ArrowRight} alt="Sous menu >" /></span>
            <div id="actualites" className={`sub-menu-container ${menuActualites ?"sub-menu-container-open" : ""}`}>
                <span className="bm-item menu-item" onClick={() => setMenuActualites(false)}><img src={ArrowLeft} alt="< menu principal" /><span>Actualités</span></span>
                <a className="bm-item menu-item" href="/">Produits</a>
                <a className="bm-item menu-item" href="/">Technologies</a>
                <a className="bm-item menu-item" href="/">événements</a>
                <a className="bm-item menu-item" href="/">Bonnes adresses</a>
                <a className="bm-item menu-item" href="/">Horizon TV</a>
                <a className="bm-item menu-item" href="/">Revue de presse</a>
            </div>
            <span className="menu-item" onClick={() => setMenuServices(true)}><span>Services</span><img src={ArrowRight} alt="Sous menu >" /></span>
            <div id="services" className={`sub-menu-container ${menuServices ?"sub-menu-container-open" : ""}`}>
                <span className="bm-item menu-item" onClick={() => setMenuServices(false)}><img src={ArrowLeft} alt="< menu principal" /><span>Services</span></span>
                <a className="bm-item menu-item" href="/">Services</a>
                <a className="bm-item menu-item" href="/">Accessoires</a>
            </div>
            <a className="menu-item" href="/">Offres d'emploi</a>
        </Menu>
    );
}

export default MobileMenu;