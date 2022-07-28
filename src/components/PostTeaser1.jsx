import React from "react";
import { Link } from 'react-router-dom';

function PostTeaser1(){
    return(
        <div className='singlePost'>
            <div className="postHeader">
            <a href='/blog/blog2'>  <img src="/assets/images/pexels-monstera-9429405.jpg" alt="post-image" /></a>
            </div>
            <div className="postBody">
            <a href='/blog/blog2'><h4>How To Build A Brand From Scratch: A Step-by-Step Guide For Beginners (2022)</h4></a>
                <p>There are so many amazing brands out there that it's hard to imagine a time when they didn't exist.</p>
            
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



export default PostTeaser1;
