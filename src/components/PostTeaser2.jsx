import React from "react";
import { Link } from 'react-router-dom';

function PostTeaser2(){
    return(
        <div className='singlePost'>
            <div className="postHeader">
            <a href='/blog/blog3'>  <img src="/assets/images/pexels-designecologist-1779487.jpg" alt="post-image" /></a>
            </div>
            <div className="postBody">
                <a href='/blog/blog3'><h4>10 UI/UX DESIGN TIPS TO MAKE YOUR WEBSITE MORE USER-FRIENDLY:</h4></a>
                <p>When it comes to design, there are two schools of thoughts: UI and UX. UI, or user interface, focuses...</p>
            
            </div>
            <div className="postAuthor">
                <div className="row">
                    <div className="col-lg-2 col-md-3 col-3 left">
                        <img src="/assets/images/team-icon.png" alt="Author-image" />
                    </div>
                    <div className="col--lg-10 col-md-9 col-9 align-self-center right">
                        <p>Xharptech | 2022</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostTeaser2;