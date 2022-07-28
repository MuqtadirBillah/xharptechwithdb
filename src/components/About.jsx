import React from "react";
import { Parallax, Background } from "react-parallax";
import Navigation from "./Navigation";
import Team from "./Team";
import Feedback from "./Feedback";
import Contact from "./Contact";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function About(){

    var bannerStyle = {
        backgroundImage: `url("/assets/images/banner-back.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }

    var parallaxStyle = {
        backgroundImage: `url("/assets/images/pencil-banner.jpg")`

    }

    return(
        <>
            <Navigation />
            <div className="about">
                <div className="banner" style={bannerStyle}>
                    <h1 data-aos="fade-up"  data-aos-delay="100" data-aos-duration="800">About</h1>
                </div>
                <div className="container-fluid">
                    <div className="aboutMain">
                        <h5 data-aos="fade-down"  data-aos-delay="80" data-aos-duration="800">ABOUT</h5>
                        <h1 className="sectionMainHeading" data-aos="fade-up"  data-aos-delay="80" data-aos-duration="800">our story</h1>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-7 col-md-8 col-sm-12" data-aos="fade-up"  data-aos-delay="100" data-aos-duration="800">
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, in possimus. Odio porro fugiat culpa, inventore saepe consectetur ipsum harum non? Itaque perferendis pariatur, placeat aperiam voluptas assumenda! Et id perferendis sapiente explicabo ipsam minima, cum consequatur facilis exercitationem! Explicabo.</h3>
                                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, necessitatibus? Minus magni maxime facere a nemo dicta molestias voluptates quibusdam? Earum blanditiis omnis modi recusandae excepturi deserunt, laborum autem nihil sapiente quia impedit itaque. Sint commodi ipsa consequatur beatae sed suscipit obcaecati libero, pariatur, nesciunt dolor excepturi officia perspiciatis veritatis?</h3>
                                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, beatae perspiciatis. Deleniti accusantium adipisci laboriosam mollitia quos vero officiis, magnam consectetur quas iure unde totam fugiat eligendi dolor eveniet placeat quo assumenda, molestias architecto reprehenderit, maxime molestiae. Asperiores saepe, vel fugit minus error, obcaecati nesciunt impedit fugiat nam natus illum accusantium cum quasi ipsam? Hic magni quaerat modi? Est rem alias tenetur minus distinctio magni doloremque nihil commodi consequuntur? Ratione et, earum dolorem assumenda mollitia eaque iure eius illum delectus!</h3>
                                </div>
                            </div>
                            <div className="row parallaxRow" data-aos="flip-up"  data-aos-delay="80" data-aos-duration="800">
                                <Parallax bgImage={'/assets/images/parallax.png'} strength={1100}  className='d-flex align-items-center'>
                                    <div className=' parallaxIn d-flex align-items-center'>
                                        <div className="">
                                            <h1 className="sectionMainHeading">our Goal</h1>
                                            <h2>Helping our clients grow by thoughtful and exceptional design.</h2>
                                        </div>
                                    </div>
                                </Parallax>
                            </div>
                            {/* <Team /> */}
                        </div>
                    </div>
                </div>
                {/* <Feedback /> */}
            </div>
            <Contact />
            <ContactEmail />
            <Footer />
        </>
    );
}

export default About;