import React from "react";

import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Modèles</Link>
                    <div className="menu-sub-items">
                        <ul>
                            <li><a href="">Gamme BMW</a></li>
                            <li><a href="">BMW neuves</a></li>
                            <li><a href="">Affaires Horizon</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/">Occasions</Link>
                </li>
                <li>
                    <Link to="/">Offres & Financements</Link>
                    <div className="menu-sub-items">
                        <ul>
                            <li><a href="">Particuliers</a></li>
                            <li><a href="">Entreprises</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/">Actualités</Link>
                    <div className="menu-sub-items">
                        <ul>
                            <li><a href="">Produits</a></li>
                            <li><a href="">Technologies</a></li>
                            <li><a href="">Événements</a></li>
                            <li><a href="">Bonnes adresses</a></li>
                            <li><a href="">Horizon TV</a></li>
                            <li><a href="">Revue de presse</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/">Services</Link>
                    <div className="menu-sub-items">
                        <ul>
                            <li><a href="">Services</a></li>
                            <li><a href="">Accessoires</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/">Offres d'emploi</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;