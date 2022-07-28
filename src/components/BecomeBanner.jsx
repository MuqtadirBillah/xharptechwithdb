import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function BecomeBanner(){
    return(
        <div className="becomeBanner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 align-self-center left">
                        <h1>An Award-Winning <br />Desing & Development Agency</h1>
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

export default BecomeBanner;