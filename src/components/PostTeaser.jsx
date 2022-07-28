import React from "react";
import { Link } from 'react-router-dom';

function PostTeaser(){
    return(
        <div className='singlePost'>
            <div className="postHeader">
            <a href='/blog/blog1'>
                <img src="/assets/images/pexels-pixabay-270360.jpg" alt="post-image" /></a>
            </div>
            <div className="postBody">
                <a href='/blog/blog1'><h4>10 UI/UX DESIGN TIPS TO MAKE YOUR WEBSITE MORE USER-FRIENDLY:</h4></a>
                <p>Your website is the most crucial marketing tool you have. It is the first thing your customer...</p>
            
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


export default PostTeaser;
