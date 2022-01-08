import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div id="foot" className="row">
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4 className="ps-3">BD Electic</h4>
                <p>Electrical BD" is the most Trusted Online Industrial Automation Electrical Goods, Sales, Supply and Repairs sites in Bangladesh.</p>
                
       
        
                
                
                </div>

            </div>
            <div className="col-md-3 mt-3">
                <div style={{marginLeft:"15px"}}>
                <h4>Contact Us</h4>
                <p>
                <li>Email:ahmod.fateh@gmail.com</li> 
                <li>Phone: +8801717918508</li> 
                <li>Address: Sylhet,Bangladesh</li> 
                </p>
                </div>

            </div>
            <div className="col-md-3 mt-3 ">
                <div style={{marginLeft:"15px"}}>
                <h4>Quality & Innonation</h4>
                <li>High Quality Phone</li>
                <li>Good customer service</li>
                <li>Cheep Price</li>
               
                

            </div>
                </div>
            <div className="col-md-3 mt-3 d-flex ">
                <div style={{marginLeft:"15px"}}>
                <h4>Follow Us</h4>
                <a href="https://web.facebook.com/profile.php?id=100004528784980"><i className="fab fa-facebook-square text-primary fs-2 me-2"></i></a>
                <a href="https://www.youtube.com/c/KasirAhmod"><i className="fab fa-youtube-square text-danger fs-2 me-2"></i></a>
                
                <i className="fab fa-instagram-square fs-2 me-2"></i>
                <i className="fab fa-snapchat fs-2 text-warning me-2"></i>
                </div>
            </div>
            
        </div>
        <div className="footer2 " >
                <small className="d-flex justify-content-center">  <Link className="nav-link fs-5 text-light" to="/policy"><small>Policy & policy | Terms of Services | Cookies</small></Link></small>
                <small className="d-flex justify-content-center">© 2021 all rights reserved by <span>bd Elictic's</span> 
               </small>
            </div>
        </div>
    );
};

export default Footer;