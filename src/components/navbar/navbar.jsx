import React from "react";
import '../navbar/navbar.css';
import LOGO from "../assets/logo.JPG"
export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg fixed-top">
            <a href="https://goforward.com/carepod" className="navbar-brand me-2"><img src={LOGO} width={16} height={16} alt=""/> FORWARD</a>
            <div className="offcanvas offcanvas-end w-100" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
                <div className="offcanvas-header">
                    <a href="https://goforward.com/carepod" className="offcanvas-title fs-4"><img src={LOGO} className="logo" alt=""/> FORWARD</a>
                    <button type="button" className="btn-close fs-4" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                        <a className="nav-link mx-lg-3" aria-current="page" href="#home">How It Works</a>
                        </li>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                        <a className="nav-link mx-lg-3" aria-current="page" href="#health">Health Domains</a>
                        </li>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                        <a className="nav-link mx-lg-3" aria-current="page" href="#doctors">Doctors</a>
                        </li>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                        <a className="nav-link mx-lg-3" aria-current="page" href="#reviews">Reviews</a>
                        </li>
                        <li className="nav-item" data-bs-dismiss="offcanvas">
                        <a className="nav-link mx-lg-3" aria-current="page" href="#location">Locations</a>
                        </li>
                        <li className="nav-item dropdown" >
                        <a className="nav-link mx-lg-3 dropdown-toggle" aria-current="page" id="aboutUsDropdown" aria-expanded="false" data-bs-toggle="dropdown" role="button" href="#contact">About Us </a>
                        <ul className="dropdown-menu" aria-labelledby="aboutUsDropdown">
                                <li><a className="dropdown-item" href="#team" data-bs-dismiss="offcanvas">Our Team</a></li>
                                <li><a className="dropdown-item" href="#mission" data-bs-dismiss="offcanvas">Our Mission</a></li>
                                <li><a className="dropdown-item" href="#careers" data-bs-dismiss="offcanvas">Careers</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <button className="navBtn">Become a Member</button>
            <button className="navbar-toggler"type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="bi bi-justify fs-4"></span>
            </button>
        </nav>
    )
}