import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet";
import Navigation from "./Navigation";
import AboutHero from "./AboutHero";
import AboutBanner from "./AboutBanner";
import Team from './Team'
import TestimonialsUpdated from "./TestimonialsUpdated";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";
import Loader from './Loader';

function AboutPage(){
    var [loader, setLoader] = useState('block');
    
    useEffect(() => {
        window.scrollTo(0, 0);
        setLoader('none')
    }, [])
    
    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About Us | Meet Xharptech</title>
                <meta name="keywords" content="web design and development services, mobile development services, e-commerce development, top-quality results, industry experience" />
                <meta name="description" content="Our team specializes in providing top-quality web design and development, mobile development and e-commerce development services. We have a team of individuals who have exceptional skills through profound industry experience which result in high-quality results delivery." />
            </Helmet>
            {(loader=='block') && <Loader display={loader} />}
            <Navigation path='/about' />
            <div className="aboutPage">
                <AboutHero />
                <AboutBanner />
                {/* <Team /> */}
                <div className="aboutInfo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-6 col-sm-12 imageDiv"  data-aos="flip-right" data-aos-delay="100" data-aos-duration="600">
                                <img src="/assets/images/aboutInfoImage.png" alt="people-handshake-image" />
                            </div>
                            <div className="col-lg-7 col-md-6 col-sm-12" data-aos="flip-left" data-aos-delay="100" data-aos-duration="600">
                                <div className="text align-self-center">                                    
                                      <h1>Who We Are</h1>
                                    <h4>
                                   
We are a one-stop-shop for web and mobile app designing & development. We have a team of individuals who have exceptional skills through profound industry experience which result in high-quality results delivery. XharpTech develops long-term relationships with its customers and our vision is to provide world-class IT solutions to customers all over the globe. Our aim is to deliver the finest available solutions to our clients and we want to make certain that our solutions assist them in growing their brand.

                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TestimonialsUpdated />
            </div>
            <ContactEmail />
            <Footer />
        </>
    );
}

export default AboutPage;