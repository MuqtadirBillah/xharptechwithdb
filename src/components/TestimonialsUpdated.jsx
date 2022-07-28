import React, { useState, useRef } from "react";
import Slider from "react-slick";
import Tilt from 'react-tilt'

function TestimonialsUpdated(){

    function nextSlider(){
        customeSlider.current.slickNext()
    }
    function prevSlider(){

    }

    const customeSlider = useRef();
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1
                }
            }
        ]
    };

    var tiltOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            10,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
        speed:          200,    // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,   // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)"    // Easing on enter/exit.
    }

    function nextSlider(){
        customeSlider.current.slickNext()
    }
    function prevSlider(){
        customeSlider.current.slickPrev()
    }

    return(
        <div className="testimonials testimonialsUpdated">
            <div className="container">
                <div className="row">            
                    <h1 className="updatedSectionMainHeading" data-aos="slide-down" data-aos-delay="100" data-aos-duration="600">Testimonials</h1>
                </div>
                <div className="row whatHeading">
                    <div className="col-lg-12 col-md-8 col-sm-12 align-self-center whatLeft" data-aos="slide-up" data-aos-delay="100" data-aos-duration="600">
                        <h1>What People says about us</h1>
                    </div>
                    <div className="whatRight">
                        <button className="sliderControlBut" onClick={()=>{prevSlider()}}><i class="fas fa-chevron-circle-left"></i></button>
                        <button className="sliderControlBut" onClick={()=>{nextSlider()}}><i class="fas fa-chevron-circle-right"></i></button>
                    </div>
                    <div className="whatRightPhone">
                        <button className="sliderControlBut" onClick={()=>{prevSlider()}}><i class="fas fa-chevron-circle-left"></i></button>
                        <button className="sliderControlBut" onClick={()=>{nextSlider()}}><i class="fas fa-chevron-circle-right"></i></button>
                    </div>
                </div>
                <div className="row reviews">
                    <div className="slider">
                        <Slider {...settings} ref={customeSlider}>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>
                                            The team at XharpTech are experts in their field. We have worked with them on a number of projects, and they always go above and beyond to deliver top-quality work. They are always up for a challenge and are always willing to think outside the box to come up with innovative solutions. We would highly recommend their services to anyone looking for a premier web design & mobile app development
                                            </p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    {/* <div className="col-lg-2 col-md-2 col-sm-2 col-4  align-self-center">
                                                        <img src="/assets/images/client.png" alt="" />
                                                    </div> */}
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-8  align-self-center">
                                                        <h2>Cree Robinson</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>
                                            We have been extremely happy with the quality of XharpTech's work. They produced high-quality designs for our eCommerce store and developed our mobile app on time and on budget. They are great to work with and are always willing to go the extra mile to make sure their clients are happy. We would highly recommend XharpTech to anyone looking for quality web design & development.
                                            </p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    {/* <div className="col-lg-2 col-md-2 col-sm-2 col-4  align-self-center">
                                                        <img src="/assets/images/client.png" alt="" />
                                                    </div> */}
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-8  align-self-center">
                                                        <h2>Richardo Hinds</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>Xharptech has provided me with an amazing web development service. Once I came up with a unique Web functionality for my E-Commerce Store. I thought it might be daunting for them, but I was amazed at how quickly they were able to understand my demands and came up with a solid website that perfectly represents my brand. I would highly recommend their services to anyone in need of a professional web development service</p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    {/* <div className="col-lg-2 col-md-2 col-sm-2 col-4  align-self-center">
                                                        <img src="/assets/images/client.png" alt="" />
                                                    </div> */}
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-8  align-self-center">
                                                        <h2>Julia Micheal</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>I found Xharptech to be very professional in their approach to design and development. They took the time to understand my requirements and came up with a great solution. The end result was a high-quality mobile application that met all my expectations. I would definitely recommend Xharptech to anyone looking for a reliable and talented team to work with.</p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    {/* <div className="col-lg-2 col-md-2 col-sm-2 col-4  align-self-center">
                                                        <img src="/assets/images/client.png" alt="" />
                                                    </div> */}
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-8  align-self-center">
                                                        <h2>Anna Jordan</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                            <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                                <Tilt className="Tilt" options={tiltOptions}>
                                    <div className="singleCard">
                                        <div className="reviewCard">
                                            <div className="rating">
                                                <span className="ratingNo">5.00</span> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i> <i class="fas fa-star filled"></i>
                                            </div>
                                            <div className="comments">
                                                <p>The mobile application designed and developed by Xharptech for my business has really helped me take my business to the next level. Their team of developers was very professional and helped me every step of the way, from designing the app to launching it on the App Store. I’m very happy with the end result and would recommend their services to anyone looking for a high-quality mobile application</p>
                                            </div>
                                            <div className="client">
                                                <div className="row">
                                                    {/* <div className="col-lg-2 col-md-2 col-sm-2 col-4  align-self-center">
                                                        <img src="/assets/images/client.png" alt="" />
                                                    </div> */}
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-8  align-self-center">
                                                        <h2>Gopal Verma</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tilt>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialsUpdated;