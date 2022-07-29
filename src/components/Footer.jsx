import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Footer(){

    var d = new Date();
    var year = d.getFullYear();
    
    var [email, setEmail] = useState('');
    const emailCollectionRef = collection(db, "emailCollection");

    const createUser = async () => {
        await addDoc(emailCollectionRef, { email: email });
        toast(`Email registered!`);
    };

    return(
        <div className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12 left" data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                        <img src="/assets/images/logo.png" alt="" />
                        <p>Follow us</p>
                        <h5>
                            <a href='https://web.facebook.com/xharptech.official/' ><span className="facebook"><i class="fab fa-facebook-f"></i></span></a>
                            <a href='https://twitter.com/XharpTech' ><span className="twitter"><i class="fab fa-twitter"></i></span></a>
                            <a href='https://www.instagram.com/xharptech_official/' ><span className="instagram"><i class="fab fa-instagram"></i></span></a>
                            <a href='https://www.linkedin.com/company/xharptech' ><span className="linkedin"><i class="fab fa-linkedin-in"></i></span></a>
                        </h5>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 mid" data-aos="fade-in" data-aos-delay="100" data-aos-duration="600">
                        <h3>We are located in</h3>
                        <div className="info">
                            <div className="row">
                                <div className="col-1 d-flex align-items-center">
                                    <p><i class="fas fa-map-marker-alt"></i></p>
                                </div>
                                <div className="col-11 d-flex align-items-center">
                                    <p>Frankfurt (Germany)<br /> Karachi (Pakistan)</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 d-flex align-items-center">
                                    <p><i class="fas fa-phone-alt"></i></p>
                                </div>
                                <div className="col-11 d-flex align-items-center">
                                    <p>+92 305 4111759</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-1 d-flex align-items-center">
                                    <p><i class="fa fa-envelope"></i></p>
                                </div>
                                <div className="col-11 d-flex align-items-center">
                                    <p>info@xharptech.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 right" data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                        <h3>SOCIAL & NEWSLETTER</h3>
                        <h1>Get the latest news<br />about DB</h1>
                        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Your email address" name="" id="" />
                        <button onClick={createUser}>Subscribe</button>
                    </div>
                </div>
                <div className="row bottom">
                    <hr />
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 left">
                            <h6>2022 © Xharpteh</h6>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right">
                            <ul>
                                
                                    
                                <li>
                                <Link to="/about">
                                    About Us
                                    </Link>
                                </li>
                                <li>
                                <Link to="/services">
                                    Services
                                    </Link>
                                </li>
                                <li>
                                <Link to="/our-portfolio">
                                   Portfolio
                                   </Link>
                                </li>
                                <li>
                                    <Link to="/contact">
                                    Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;