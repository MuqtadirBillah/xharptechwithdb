import React from "react";

function AboutHero(){
    return(
        <div className="hero aboutHero">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h2 className="updatedSectionMainHeading">About us</h2>
                        
                                        <p>XharpTech provides IT solutions that help businesses grow and expand their online presence. Our goal is to give digital solutions to our customers by developing and designing their websites, mobile apps & software. We give the best solutions and experience to help our clients flourish in this digital era.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right align-self-center">
                                        <img src="/assets/images/aboutHero.png" alt="hero-image" />
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

export default AboutHero;