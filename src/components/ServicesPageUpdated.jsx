import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import Navigation from "./Navigation";
import ServicesHero from "./ServicesHero";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function ServicesPageUpdated(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    var imageBackStyle = {
        // backgroundImage: `url("/assets/images/service-back.png")`,
        // backgroundSize: 'contain',
        // backgroundRepeat: 'no-repeat'
    }

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Our Services - Xharptech | Design & Development</title>
                <meta name="keywords" content="web design, mobile app development, software development, user experience design, application development, custom web development, user friendly" />
                <meta name="description" content="We are a full-service design and development agency. We offer everything from UI/UX and Web Development to E-Commerce and Mobile applications. Get A Quote Now" />
            </Helmet>
            <Navigation path='/services' />
            <div className="servicesPageUpdated">
                <ServicesHero />
                <div className="mainContent container">
                    <h1>Empowering your web identity
                    <br />design and development at its best</h1>
                    <p>Xharptech provides a suite of web development services to help you develop your company's online presence. <br />From web design to development, we have the expertise in design and development to take your business to the next level.</p>
                    <div className="services" id="service-1">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" style={imageBackStyle}>
                                <img src="/assets/images/service-webdesign.png" alt='web-design-image' />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>1.	UI/UX DESIGN</h2>
                                    <h5>Our team of skilled individuals works on providing detailed and intricate User Experience Design. Our goal is to make sure that our product is not only user-friendly but also unique and brand new to the market.  
                                    </h5></div>
                            </div>
                        </div>
                        <hr />
                        <div className="row" id="service-2">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>2.	WEB DESIGNING </h2>
                                    <h5>A complete series of steps are taken to design and conceptualize a brand new website or redesign an already given one by our team of designers. The designing team and development team often work hand-in-hand to make sure that the designs made also hold structure and can be used efficiently by any user.  </h5>
                            
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-appdesign.png" alt='web-design-image' />
                            </div>
                        </div>
                        <hr />
                        <div className="row" id="service-3">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-development.png" alt='web-design-image' />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>3.	WEB DEVELOPMENT </h2>
                                    <h5>With the help of the latest technologies and themes available in the market, we work on the development and building of websites. The development is done keeping the theme of the company in mind and we make sure to add all the client demands in our plan to produce an end result that will help your company grow and build a name for your brand in the market.  </h5>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row" id="service-4">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>4.	MOBILE APP DESIGNING </h2>
                                    <h5>Our team works on creating unique and trendy designs. We follow the rule of designing applications that are simple as well as are in-line with the trends of today. Our designers spend hours gathering up data on the client’s needs and vision and in the end, produce a design that exceeds customer expectations.</h5>
                                
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-branding.png" alt='web-design-image' />
                            </div>
                        </div>
                        <div className="row" id="service-5">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-development.png" alt='web-design-image' />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>5.	MOBILE APP DEVELOPMENT  </h2>
                                    <h5>Same as the development procedure of our websites, the mobile apps we develop are focused on creating apps that fulfill the needs of the client. Our team of hardworking developers works day and night to create a user-friendly and easy-to-understand design to meet the client’s needs. </h5>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row" id="service-6">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>6.	E-COMMERCE </h2>
                                    <h5>Here at XharpTech, we cover all your technology-related needs for an e-commerce business. From tech-savvy expert coders to business developers, we have different people for all your queries and to help your business grow. </h5>
                                
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-branding.png" alt='web-design-image' />
                            </div>
                        </div>
                        <hr />
                        <div className="row" id="service-7">
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceImg d-flex align-items-center" style={imageBackStyle} data-aos="flip-left" data-aos-delay="100" data-aos-duration="600" >
                                <img src="/assets/images/service-development.png" alt='web-design-image' />
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 serviceText d-flex align-items-center">
                                <div>
                                    <h2>7.	SOFTWARE DEVELOPMENT</h2>
                                    <h5>From banking to retail, healthcare to automation, here at XharpTech, we work on developing software for a wide range of niches. From designing, planning, engineering, prototyping, testing, and development, our team works on covering all areas of software development.  </h5>
                                </div>
                            </div>
                        </div>
                  
                    </div>
                </div>
            </div>
            <ContactEmail />
            <Footer />
        </>
    );
}

export default ServicesPageUpdated;
