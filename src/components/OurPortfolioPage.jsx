import React, {useEffect, useState} from 'react';
import { Helmet } from "react-helmet";
import Navigation from "./Navigation";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";
import Loader from './Loader';

function OurPortfolioPage() {
  var [loader, setLoader] = useState('block');
    
  useEffect(() => {
      window.scrollTo(0, 0);
      setLoader('none')
  }, [])
  
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Portfolio | XharpTech – Successful Projects</title>
        <meta
          name="keywords"
          content="ui/ux design, web design, digital design, portfolio, web development, mobile application, xharptech"
        />
        <meta
          name="description"
          content="Our portfolio speaks for itself, we have created top-notch digital & stunning digital experiences for our clients. Visit our website to see how we can help you with your ui/ux needs."
        />
      </Helmet>
            {(loader=='block') && <Loader display={loader} />}
      <Navigation  path='/our-portfolio' />
      <div className="ourPortfolio ourPortfolioPage">
        <div className="hero portfolioHero">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="slide">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                        <h2 className="updatedSectionMainHeading">Portfolio</h2>
                        <h1>Our Work</h1>
                        <p>
                          Our Solid Commitment And Work Ethic To Projects
                          Reflects Satisfaction From Our Clients.
                        </p>
                        <a href="http://calendly.com/xharptech"  target="_blank">
                          <button>BOOK A MEETING</button>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 right align-self-center">
                        <img
                          src="/assets/images/portHeroImg.png"
                          alt="hero-image"
                        />
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
        <div className="container">
          <div className="row">
            <h3 className="updatedSectionMainHeading">Our Portfolio</h3>
            <div className="row ourHeading">
              <div className="col-lg-12 col-md-12 col-sm-12 align-self-center ourLeft">
                <h1>LOOK & FEEL</h1>
              </div>
            </div>
            <div className="tiless">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/138158225/Food-Delivery-E-Commerce-Website"  target="_blank">
                      <img
                        src="/assets/images/XT-Portfolio/Food-Delivery-E-Commerce-Website.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>Simply Good Food</h3>
                      <p>
                        Simply Good Food is an app to order healthy meals any
                        time, anywhere. Simply Good Food, you can order fresh,
                        healthy meals from your favorite local restaurants and
                        have them delivered right to your door
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/137294127/WordPress-Website-Desing-and-Development"  target="_blank">
                      <img
                        src="/assets/images/XT-Portfolio/WordPress-Website-Desing-and-Development.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>Fealty</h3>
                      <p>
                        Fealty provides people with an opportunity to buy a
                        module to give discounts for their e-commerce store
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/138292503/Academy-Managment-System"  target="_blank">
                      {" "}
                      <img
                        src="/assets/images/XT-Portfolio/Academy-Managment-System.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>Artemis</h3>
                      <p>
                        Artemis is the best Google Analytics Course provider.
                        Artemis makes it easy for beginners to learn digital
                        marketing with a focus on Google Analytics. T
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/137294019/Learning-Management-Portal"  target="_blank">
                      <img
                        src="/assets/images/XT-Portfolio/Learning-Management-Portal.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>School Portal</h3>
                      <p>
                        A unique learning management system for school. On this
                        portal, we can schedule meetings, upload lectures, give
                        grades after the test, and many more.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <a href="https://www.behance.net/gallery/137979347/Gaming-Website-Designs"  target="_blank">
                    {" "}
                    <img
                      src="/assets/images/XT-Portfolio/Gaming-Website-Designs.jpg"
                      alt=""
                    />
                  </a>
                  <div className="content">
                    <h3>GaryTeams</h3>
                    <p>
                      An innovative application For Corporate Teams To learn and
                      train through innovative games.
                    </p>
                  </div>
                </div>
        
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/134448973/Wix-Design-and-Development-Beauty-App"  target="_blank">

                      <img
                        src="/assets/images/XT-Portfolio/Wix-Design-and-Development-Beauty-App.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>Hair Scout</h3>
                      <p>
                        Hair Scout is an online platform for connecting hair
                        brands and shoppers in one place
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <a href="https://www.behance.net/gallery/138158405/Hotel-Management-System"  target="_blank">
                    <img
                      src="/assets/images/XT-Portfolio/Hotel-Management-System.jpg"
                      alt=""
                    />
                  </a>
                  <div className="content">
                    <h3>Hotel Management System</h3>
                    <p>
                      An amazing application for Hotel Management. This app
                      helps managers to supervise daily operations in the Hotel
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <img
                    src="/assets/images/XT-Portfolio/Shopify-Website-4.jpg"
                    alt=""
                  />
                  <div className="content">
                    <h3>Kiala</h3>
                    <p>
                      Kiala Nutrition is a brand that provides science-backed
                      vitamins/supplements which are a precise blend of quality
                      ingredients.
                    </p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/138292577/Marketing-Dashboard-Designs"  target="_blank">
                      <img
                        src="/assets/images/XT-Portfolio/Marketing-Dashboard-Designs.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>XMarkettools</h3>
                      <p>
                        Marketing dashboard for designs of companies. XMarket
                        Tools are made to analyze product design and analytics
                        on a user-friendly interface
                      </p>
                    </div>
                  </div>
                </div>
         
             
              </div>
              <div className="row">
        
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/137767669/Cryptocurrency-Website-and-Dashboard-Designs"  target="_blank">
                      <img
                        src="/assets/images/XT-Portfolio/Crypto-website-and-Desbord-Design.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>Panda Dao</h3>
                      <p>
                        Panda Dao is a technology company that specializes in
                        building Decentralized Finance products for the
                        community. The company builds products for the community
                        on Binance's Smart Chain.
                      </p>
                    </div>
                  
                  
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/139256377/Webflow-Design-Development"  target="_blank">
                      {" "}
                      <img
                        src="/assets/images/XT-Portfolio/Webflow-2.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>Big Rocket</h3>
                      <p>
                        A full-service creative digital agency takes brands to
                        infinity & beyond through design and development
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div>
                    <a href="https://www.behance.net/gallery/138516051/WordPress-E-commerce-Website"  target="_blank">
                      <img
                        src="/assets/images/XT-Portfolio/WordPress-E-commerce-Website.jpg"
                        alt=""
                      />
                    </a>
                    <div className="content">
                      <h3>Rino Pelle</h3>
                      <p>
                        A luxurious clothing brand providing unique outfits for
                        gorgeous ladies to sparkle in every season
                      </p>
                    </div>
                  </div>
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

export default OurPortfolioPage;
