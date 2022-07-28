import React from "react";

function Hot(){

    var backStyle = {
        backgroundImage: `url("/assets/images/backBanner.png")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }

    return(
        <div className="hot">
            <h5 data-aos="fade-down" data-aos-delay="80" data-aos-duration="600">HOT!</h5>
            <h1 className="sectionMainHeading" data-aos="fade-up" data-aos-delay="80" data-aos-duration="600">Became a Top Agency<br  />in just a year</h1>
            <div className="stats" data-aos="flip-up" data-aos-delay="100" data-aos-duration="500">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h1 className="h1Num">72+</h1>
                            <h3>Successful projects</h3>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <h1 className="h1Num">20+</h1>
                            <h3>Team members</h3>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 rightMost">
                            <div className="tick">
                                <img src="/assets/images/tick.png" alt="" />
                            </div>
                            <h1 className="h1Num">10</h1>
                            <h3>Years of experience</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hot;