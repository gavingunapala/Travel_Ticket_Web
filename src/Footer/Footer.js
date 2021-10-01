import React from "react";
import '../CSS/Footer/Footer.css';

const Footer = ()=>{
    return(
        <div>
            <footer id="footerpad">
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css"
                    rel='stylesheet' type='text/css' />
                <div className="row">
                    <div className="col-sm-6 col-md-4 footer-navigation">
                        <h3><a href="#">Travel <span>Ticket </span></a></h3>
                        <p className="links">
                            <a href="/">Home</a><strong> · </strong>
                            <a href="#">Journey</a><strong> · </strong>
                            <a href="#">Ticket Bookings</a><strong> · </strong>
                            <a href="#">Contact</a>
                        </p>
                        <p className="company-name" id="ft">Travel Ticket © 2021 </p>
                    </div>
                    <div className="col-sm-6 col-md-4 footer-contacts">
                        <div><span className="fa fa-map-marker footer-contacts-icon"> </span>
                            <p><span className="new-line-span">Travel Ticket,</span> Cinnamon Gardens, Colombo</p>
                        </div>
                        <div><i className="fa fa-phone footer-contacts-icon"></i>
                            <p className="footer-center-info email text-left"> +94 112345678</p>
                        </div>
                        <div><i className="fa fa-envelope footer-contacts-icon"></i>
                            <p><a href="#" target="_blank">travelticket@gmail.com</a></p>
                        </div>
                    </div>

                    <div className="col-md-4 footer-about">
                        <h4>About the company</h4>
                        <p>  </p>
                        <div className="social-links social-icons"><a href="#"><i className="fa fa-facebook"></i></a><a
                            href="#"><i className="fa fa-twitter"></i></a><a href="#"><i className="fa fa-instagram"></i></a><a
                            href="#"><i className="fa fa-whatsapp"></i></a></div>
                    </div>
                </div>
                <p className="copyright text-muted text-center" id='copyright'>CSSE 2021 | Web Design by Runtime Terror</p>

            </footer>
        </div>
    );
}
export default Footer;
