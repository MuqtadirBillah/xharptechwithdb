import React from "react";
import Slider from "react-slick";
import Tilt from 'react-tilt'

function Work(){

    var workOnebackStyle = {
        backgroundImage: `url("/assets/images/work1.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle2 = {
        backgroundImage: `url("/assets/images/work2.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle3 = {
        backgroundImage: `url("/assets/images/work3.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    var workOnebackStyle4 = {
        backgroundImage: `url("/assets/images/work4.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4.2,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2.2,
              slidesToScroll: 2,
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

    return(
        <div className="work">
            <h5 data-aos="fade-down" data-aos-delay="80" data-aos-duration="800">OUR WORK</h5>
            <h1 className="sectionMainHeading" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800">Just look at it!</h1>
            <div className="slider">
                <Slider {...settings}>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <Tilt className="Tilt" options={tiltOptions}>
                            <div className="singleWork" style={workOnebackStyle}>
                                <div className="no">
                                    <div><span className="lineIn">---</span> 01</div>
                                </div>
                                <div className="credit">
                                    <p>Shinuya, Japan</p>
                                    <h1>Photo by Benjamin Hung</h1>
                                    <button className="slideInUp">View in Unsplash</button>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <Tilt className="Tilt" options={tiltOptions}>
                            <div className="singleWork" style={workOnebackStyle2}>
                                <div className="no">
                                    <div><span className="lineIn">---</span> 02</div>
                                </div>
                                <div className="credit">
                                    <p>Shinuya, Japan</p>
                                    <h1>Photo by Benjamin Hung</h1>
                                    <button className="slideInUp">View in Unsplash</button>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <Tilt className="Tilt" options={tiltOptions}>
                            <div className="singleWork" style={workOnebackStyle3}>
                                <div className="no">
                                    <div><span className="lineIn">---</span> 03</div>
                                </div>
                                <div className="credit">
                                    <p>Shinuya, Japan</p>
                                    <h1>Photo by Benjamin Hung</h1>
                                    <button className="slideInUp">View in Unsplash</button>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <Tilt className="Tilt" options={tiltOptions}>
                            <div className="singleWork" style={workOnebackStyle4}>
                                <div className="no">
                                    <div><span className="lineIn">---</span> 04</div>
                                </div>
                                <div className="credit">
                                    <p>Shinuya, Japan</p>
                                    <h1>Photo by Benjamin Hung</h1>
                                    <button className="slideInUp">View in Unsplash</button>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                    <div data-aos="flip-right" data-aos-delay="110" data-aos-duration="800">
                        <Tilt className="Tilt" options={tiltOptions}>
                            <div className="singleWork" style={workOnebackStyle}>
                                <div className="no">
                                    <div><span className="lineIn">---</span> 05</div>
                                </div>
                                <div className="credit">
                                    <p>Shinuya, Japan</p>
                                    <h1>Photo by Benjamin Hung</h1>
                                    <button className="slideInUp">View in Unsplash</button>
                                </div>
                            </div>
                        </Tilt>
                    </div>
                </Slider>
                <div className="swipe pulse-Infinite">
                    <i class="fas fa-angle-double-left"></i>Swipe Left & Right<i class="fas fa-angle-double-right"></i>
                </div>
            </div>
        </div>
    );
}

export default Work;