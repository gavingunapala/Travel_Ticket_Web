import React from "react";
import '../CSS/Header/Header.css';
import img from '../Images/travel logo.jpeg'

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-md fixed-top bg-dark">
                <div className="container">
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span
                        className="visually-hidden">Toggle navigation</span><span
                        className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav flex-grow-1 justify-content-between">
                            <div className="logo"><img src={img} id="logoImage"/></div>
                            <li className="company-name" id='company'>Travel Ticket</li>
                            <li className="nav-item"><a className="nav-link" id='log'>             </a></li>
                            <li className="nav-item"><a className="nav-link" id='log'>             </a></li>
                            <li className="nav-item"><a className="nav-link" id='log'>             </a></li>
                            <li className="nav-item"><a className="nav-link" id='log'>             </a></li>
                            <li className="nav-item"><a className="nav-link" id='log'>             </a></li>
                            <li className="nav-item"><a className="nav-link" id='log'>             </a></li>
                            <li className="nav-item"><a className="nav-link" id='log'>             </a></li>
                            <li className="nav-item"><a className="nav-link" id='sign'>           </a></li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}
export default Header;
