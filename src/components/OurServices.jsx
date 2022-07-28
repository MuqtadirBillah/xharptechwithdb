import React from "react";
import Navigation from "./Navigation";
import DesignProcess from "./DesignProcess";
import ServiceSection from "./ServiceSection";
import Contact from "./Contact";
import ContactEmail from "./ContactEmail";

function OurServices(){

    var bannerStyle = {
        backgroundImage: `url("/assets/images/banner-back.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <>
            <Navigation />
            <div className="ourServices">
                <div className="banner" style={bannerStyle}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <h1>Our Services</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <DesignProcess /> */}
                <ServiceSection />
                <Contact />
                <ContactEmail />
            </div>
        </>
    );
}

export default OurServices;