import React from "react";

function ServicesHero(){
    return(
        <div className="hero servicesHero">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide d-block w-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h2 className="updatedSectionMainHeading highText">Our Services</h2>
                                        <h1>We take great pride in providing top notch services to our clients.</h1>
                                        <p>XharpTech is a progressive and well-established web design, mobile app development, and software company. We deliver turnkey digital solutions to small businesses and help them to expand their online presence with beautiful UI/UX, web development, engaging mobile apps, and efficient software development</p>
                                        <a href='http://calendly.com/xharptech'  target="_blank"><button>BOOK A MEETING</button></a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right align-self-center">
                                        <img src="/assets/images/servicesHero1.png" alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
}

export default ServicesHero;