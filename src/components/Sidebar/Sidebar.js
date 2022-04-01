import { Link } from "react-router-dom";

import { useMediaQuery } from 'react-responsive';

import "../../assets/css/sidebar.css";

import SidebarIcon1 from "../../assets/images/sidebar/brochure.png";
import SidebarIcon2 from "../../assets/images/sidebar/drive.png";
import SidebarIcon3 from "../../assets/images/sidebar/offer.png";
import SidebarIcon4 from "../../assets/images/sidebar/atelier.png";

const Sidebar = () => {
    const desktopSidebar = useMediaQuery({ query: '(min-width: 550px)' });

    return desktopSidebar ? (
        <div className="sidebar-container">
            <span><img src={SidebarIcon1} alt="Catalogue" /><Link to="/">Catalogue</Link></span>
            <span><img src={SidebarIcon2} alt="Réserver un essai BMW" /><Link to="/">Réserver un essai</Link></span>
            <span><img src={SidebarIcon3} alt="Estimer une reprise" /><Link to="/">Estimation de reprise</Link></span>
            <span><img src={SidebarIcon4} alt="Rendez-vous atelier" /><Link to="/">RDV atelier</Link></span>
        </div>
    ) : (
        <div className="mobile-sidebar-container">
            <Link to="/"><img src={SidebarIcon1} alt="Catalogue" /><span>Catalogue</span></Link>
            <Link to="/"><img src={SidebarIcon2} alt="Réserver un essai BMW" /><span>Réserver un essai</span></Link>
            <Link to="/"><img src={SidebarIcon3} alt="Estimer une reprise" /><span>Estimation de reprise</span></Link>
            <Link to="/"><img src={SidebarIcon4} alt="Rendez-vous atelier" /><span>RDV atelier</span></Link>
        </div>
    );
}

export default Sidebar;