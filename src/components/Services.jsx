import React, { useEffect } from "react";

function Services(){

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return(
        <div className="servicess">
            <h3 data-aos="fade-down" data-aos-delay="80" data-aos-duration="800">OUR SERVICES</h3>
            <h1 className="sectionMainHeading" data-aos="fade-up" data-aos-delay="80" data-aos-duration="800">We take digital experience<br />to the next level</h1>
            <div className="servicesCards">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/web.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>UI/UX</h4>
                                    <h5>UI/UX design </h5>
                                    <p><a href="/services#service-1">View Details<i class="fas fa-angle-right"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/app.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>MOBILE</h4>
                                    <h5>Design & development</h5>
                                    <p><a href="/services#service-2">View Details<i class="fas fa-angle-right"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/dev.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>WEB</h4>
                                    <h5>Design & development</h5>
                                    <p><a href="/services#service-4">View Details<i class="fas fa-angle-right"></i></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6" data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">
                            <div className="serviceCard">
                                <div className="cardHeader">
                                    <img src="/assets/images/brand.png" alt="" />
                                </div>
                                <div className="cardBody">
                                    <h4>Ecommerce & others</h4>
                                    <h5>Design & development</h5>
                                    <p><a href="/services#service-6">View Details<i class="fas fa-angle-right"></i></a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;