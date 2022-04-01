import { Link } from "react-router-dom";

import '../../assets/css/footer.css';

const Footer = ({ isDesktopOrLaptop, isTabletOrMobile }) => {
    return (
        <div className="footer">
            <footer>
                <div className="footer-social-media">
                    <div>
                        <p>Rejoignez-nous</p>
                    </div>
                    <div>
                        <ul>
                            <li><Link className="footer-icon icon-google" to="/"></Link></li>
                            <li><Link className="footer-icon icon-facebook" to="/"></Link></li>
                            <li><Link className="footer-icon icon-youtube" to="/"></Link></li>
                            <li><Link className="footer-icon icon-linkedin" to="/"></Link></li>
                            <li><Link className="footer-icon icon-instagram" to="/"></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-menu">
                    <div>
                        <ul>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Espace candidats</Link></li>
                            <li><Link to="/">Offres d'emploi</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Plan du site</Link></li>
                            <li><Link to="/">Cookies</Link></li>
                            <li><Link to="/">Mentions légales</Link></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><Link to="/">Newsletter</Link></li>
                            <li><Link to="/">Horizon MINI</Link></li>
                            <li><Link to="/">Horizon Ride BMW Motorrad</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;