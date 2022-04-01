import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useMediaQuery } from 'react-responsive';

import routesList from "./routes";

import Header from "../Header/Header";
import MobileMenu from "../Menu/MobileMenu";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";

import "../../assets/css/router.css"

const CustomRouter = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 860px)' });
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 859px)' });
    const [isScrollTop, setIsScrollTop] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    
    const isMenuOpen = (state) => {
        setIsOpen(state.isOpen);
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setIsScrollTop(window.pageYOffset === 0);
        });
    },[]);

    return (
        <Router>
            <div id="outer-container">
                {isTabletOrMobile && <MobileMenu isScrollTop={isScrollTop} isMenuOpen={isMenuOpen} isOpen={isOpen} />}
                <Header isDesktopOrLaptop={isDesktopOrLaptop} isTabletOrMobile={isTabletOrMobile} isScrollTop={isScrollTop} />
                
                <section id="page-wrap" className={isOpen ? "page-wrap-menu-open" : ""}>
                    <Routes>
                        {routesList.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={<route.component isDesktopOrLaptop={isDesktopOrLaptop} isTabletOrMobile={isTabletOrMobile} />}
                                    render={props => <route.component {...props} />}
                                />
                            )
                        )}
                    </Routes>
                    <Footer />
                </section>

                <Sidebar />
            </div>
        </Router>
    );
}

export default CustomRouter;