import React from "react";

function Team(){
    return(
        <div className="team">
            <div className="container-fluid">
                <h1 className="sectionMainHeading">Founders</h1>
                <div className="in">
                    <div className="backShape"></div>
                    <div className="container">
                        <div className="row members">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-12 align-self-center singleMember">
                                        <img src="/assets/images/personplaceholder.png" alt="team-member-image" />
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-12 align-self-center">
                                        <div>
                                            <h3>Jeffery Broen</h3>
                                            <h5>Creativer Director</h5>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-12 align-self-center singleMember">
                                        <img src="/assets/images/personplaceholder.png" alt="team-member-image" />
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-12 align-self-center">
                                        <div>
                                            <h3>Jeffery Broen</h3>
                                            <h5>Creativer Director</h5>
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                                        </div>
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

export default Team;