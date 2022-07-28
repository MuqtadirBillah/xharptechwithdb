import React from "react";

function SingleService(props){
    return(
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 left d-flex align-items-center">
                <div>                                        
                    <h2>{props.heading}</h2>
                    <p>{props.subText}</p>
                </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 mid">
                <img src={props.img} />
            </div>
            {/* <div className="col-lg-2 col-md-2 col-sm-12 right d-flex align-items-center">
                <h1><a href={props.link}><i class="fas fa-arrow-right"></i></a></h1>
            </div> */}
        </div>
    );
}

export default SingleService;