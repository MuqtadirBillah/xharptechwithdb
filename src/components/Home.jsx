import React, {useEffect} from 'react';
import {Helmet} from "react-helmet";
import Navigation from './Navigation';
import Hero from './Hero';
import Services from './Services';
import Companies from './Companies';
import Testimonials from './Testimonials';
import TestimonialsUpdated from './TestimonialsUpdated';
import Hot from './Hot';
import Achievements from './Achievemnents';
import BecomeBanner from './BecomeBanner';
import OurPortfolio from './OurPortfolio';
import Work from './Work';
import Contact from './Contact';
import ContactEmail from './ContactEmail';
import Footer from './Footer';
import {Route, Link, Routes, useLocation} from 'react-router-dom';
import Loader from './Loader';
import { useState } from 'react';

function Home(){

    var [loader, setLoader] = useState('block');

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoader('none');
    }, [])
    const location = useLocation();

    return(
        <>
            <Navigation path='/' />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Xharptech: An Award-Winning Design Agency | App Development | E-Commerce</title>
                <meta name="keywords" content="ui/ux design, app development, e-commerce, web design, website development" />
                <meta name="description" content="We are an award-winning design and development agency with a global portfolio. Our team specializes in UI/UX design and development, eCommerce, and many more. Let us help you create an amazing website or application." />            
                <meta property="og:image" itemprop="image" content="https://xharptech.com/assets/images/logo.png" />
            </Helmet>
            {(loader=='block') && <Loader display={loader} />}
            <div className="home">
                <Hero />
                <Services />
                {/* <Companies /> */}
                {/* <Testimonials />
                <Hot /> */}
                <Achievements />
                <TestimonialsUpdated />
                <BecomeBanner />
                <OurPortfolio />
                {/* <Work /> */}
                {/* <Contact /> */}
                <ContactEmail />
                <Footer />
            </div>
        </>
    );
}

export default Home;