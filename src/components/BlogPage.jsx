import React, {useEffect, useState} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import BlogHero from './BlogHero';
import PostTeaser from './PostTeaser';
import {Helmet} from "react-helmet";
import PostTeaser2 from './PostTeaser2';
import PostTeaser1 from './PostTeaser1';
import Loader from './Loader';

function BlogPage(){
    var [loader, setLoader] = useState('block');
    
    useEffect(() => {
        window.scrollTo(0, 0)
        setLoader('none')
    }, [])
    
    return(
        <>        
            <Helmet>
                <meta charSet="utf-8" />
                <title>Blogs | Meet Xharptech</title>
                <meta name="keywords" content="web design and development services, mobile development services, e-commerce development, top-quality results, industry experience" />
                <meta name="description" content="Our team specializes in providing top-quality web design and development, mobile development and e-commerce development services. We have a team of individuals who have exceptional skills through profound industry experience which result in high-quality results delivery." />
            </Helmet>
            {(loader=='block') && <Loader display={loader} />}
            <Navigation path='/blogs' />
            <div className="blogPage">
                <BlogHero />
                <div className="blogPosts">
                    <h1><br />Don't miss out our Blogs</h1>
                    <p>From technology to digitalization, we have got everything for you</p>
                    <div className="posts">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser1 />
                                </div>
                                <div className="col-lg-4 col-md-4 col-12">
                                    <PostTeaser2/>
                                </div>
                            </div>
               
                           
                        </div>
                    </div>
                    <button className='nextBut'>NEXT <i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default BlogPage;