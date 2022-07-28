import React from "react";
import Navigation from "./Navigation";
import WorkCard from "./WorkCard";
import Contact from "./Contact";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";

function WorkPage(){

    var bannerStyle = {
        backgroundImage: `url("/assets/images/banner-back.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <>
            <Navigation />
            <div className="workPage">
                <di className="container-fluid">
                    <div className="banner" style={bannerStyle}>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12">
                                    <h1 data-aos="fade-up"  data-aos-delay="80" data-aos-duration="800">Our Services</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="workMain">
                        <h5 data-aos="fade-down"  data-aos-delay="80" data-aos-duration="800">OUR WORK</h5>
                        <h1 className="sectionMainHeading" data-aos="fade-up"  data-aos-delay="80" data-aos-duration="800">Look and feel!</h1>
                        <div className="workShowcase">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll" data-aos="flip-right"  data-aos-delay="80" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-8 col-md-7 col-sm-12 coll" data-aos="flip-left"  data-aos-delay="80" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5 col-md-2 col-sm-12 coll" data-aos="flip-right"  data-aos-delay="100" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-3 col-sm-12 coll" data-aos="flip-up"  data-aos-delay="100" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll" data-aos="flip-left"  data-aos-delay="100" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-7 col-md-7 col-sm-12 coll" data-aos="flip-right"  data-aos-delay="80" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-5 col-md-5 col-sm-12 coll" data-aos="flip-left"  data-aos-delay="80" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll"  data-aos="flip-right"  data-aos-delay="80" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll"  data-aos="flip-down"  data-aos-delay="80" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-12 coll" data-aos="flip-left"  data-aos-delay="80" data-aos-duration="800">
                                        <WorkCard
                                            heading='Lorem ipsum dolor sit amet consectetur adipisicing.'
                                            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia laudantium maiores velit quod blanditiis quaerat vitae ullam ratione sequi et?'
                                            link='/'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </di>
                <Contact />
                <ContactEmail />
                <Footer />
            </div>
        </>
    );
}

export default WorkPage;