import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function AboutBanner(){
    return(
        <div className="becomeBanner aboutBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 align-self-center left">
                        <h1>Our Achievements</h1>
                        <h3>Helping our clients by thorough & exceptional design & development</h3>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 align-self-center right">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>
                                    <CountUp end={72} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                    </CountUp>+
                                </h2>
                                <h4>Successful Projects</h4>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>
                                    <CountUp end={20} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                    </CountUp>+
                                </h2>
                                <h4>Team Members</h4>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                                <h2>
                                    <CountUp end={10} redraw={true}>
                                                {({ countUpRef, start }) => (
                                                    <VisibilitySensor onChange={start} delayedCall>
                                                        <span ref={countUpRef} />
                                                    </VisibilitySensor>
                                                )}
                                    </CountUp>
                                </h2>
                                <h4>Years of Experience</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;