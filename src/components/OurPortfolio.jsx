import React from "react";

function OurPortfolio() {
  return (
    <div className="ourPortfolio">
      <div className="container">
        <div className="row">
          <div className="row ourHeading">
            <div
              className="col-lg-12 col-md-12 col-sm-12 align-self-center ourLeft"
              data-aos="fade-in"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <h2
                className="updatedSectionMainHeading"
                data-aos="slide-down"
                data-aos-delay="100"
                data-aos-duration="600"
              >
                Our Portfolio
              </h2>
              <h1>Our Recent works</h1>
            </div>
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-12 align-self-center ourRight"
              data-aos="slide-down"
              data-aos-delay="100"
              data-aos-duration="600"
            >
              <a href="/services" > <button>VIEW ALL</button></a>
            </div>
          </div>
          <div className="tiless">
            <div className="row">
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
                      Fealty provides people with an opportunity to buy a module
                      to give discounts for their e-commerce store
                    </p>
                  </div>
                </div>
              </div>
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
                    An amazing application for Hotel Management. This app helps
                    managers to supervise daily operations in the Hotel
                  </p>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPortfolio;
