import React from "react";
import {useNavigate} from 'react-router-dom'

function WorkCard(props){

    const navigate = useNavigate();

    function redirect(link){
        navigate(link);
    }

    return(
        <div className="workCard" onClick={()=>{redirect(props.link)}}>
            <div className="cardHeader">
                <img src="/assets/images/sunset.jpg" alt="" />
            </div>
            <div className="cardBody">
                <h2>{props.heading}</h2>
                <h4>{props.text}</h4>
            </div>
        </div>
    );
}

export default WorkCard;