import React from "react";

function Hero(){
    return(
        <div className="hero">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active align-self-center">
                        <div className="slide d-block w-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h1>We Develop the<br /><span className="highText">Visual Identity</span><br />of Your Business</h1>
                                        <a href='http://calendly.com/xharptech'  target="_blank"><button>BOOK A MEETING</button></a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right">
                                        <img src="/assets/images/home-slider-1.png" alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item align-self-center">
                        <div className="slide d-block w-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h1>Serving Technology<br />Better Through insightful<br /><span className="highText">Design, UX & Strategy</span><br />of Your Business</h1>
                                        <a href='http://calendly.com/xharptech'  target="_blank"><button>BOOK A MEETING</button></a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right">
                                        <img src="/assets/images/home-slider-2.png" alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item align-self-center">
                        <div className="slide d-block w-100">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h1>Designers With<br /><span className="highText">GLOBAL PORTFOLIO</span></h1>
                                        <a href="https://calendly.com/xharptech"  target="_blank">  <button>BOOK A MEETING</button></a>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right">
                                        <img src="/assets/images/home-slider-3.png" alt="hero-image" />
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

export default Hero;