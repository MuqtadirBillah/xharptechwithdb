import React, {useEffect, useState} from 'react';
import emailjs from "emailjs-com";
import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Contact from "./Contact";
import ContactEmail from "./ContactEmail";
import Footer from "./Footer";
import ContactHero from "./ContactHero";
import {Helmet} from "react-helmet";

function ContactPage(){
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    
    var bannerStyle = {
        backgroundImage: `url("/assets/images/banner-back.jpg")`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    }
    
    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [message, setMessage] = useState("");
    var [status, setStatus] = useState("asdasd");
    var [warning, setWarning] = useState("");

    function send(){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name==="" || email==="" || message===""){
            setWarning("Please fill all the fields");
        }
        else{
            if(re.test(String(email).toLowerCase())){
                const templateParams = {
                    message: message,
                    from_name: name,
                    user_Email: email,
                    to_name: "XharpTech"
                };
                emailjs.send('service_rklssjm','template_11r5cjy', templateParams, '9RLRzgg3BfbvwurXn')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    if(response.status=="200"){
                        console.log("Success");
                        setEmail("");
                        setName("");
                        setMessage("");
                        setStatus("Message Sent!")
                        alert('Message sent successfully!')
                    }
                },
                (err) => {
                    console.log('FAILED...', err);
                    setStatus("Something went wrong!");
                    alert('Something went wrong!');
                });
                // setStatus("Message sent!");
            }
            else{
                setWarning("Invalid Email address");
            }
        }
    }

    return(
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us | Meet Xharptech</title>
                <meta name="keywords" content="web design and development services, mobile development services, e-commerce development, top-quality results, industry experience" />
                <meta name="description" content="Our team specializes in providing top-quality web design and development, mobile development and e-commerce development services. We have a team of individuals who have exceptional skills through profound industry experience which result in high-quality results delivery." />
            </Helmet>
            <Navigation />
            <div className="contactPage">
                <ContactHero />
                <div className="container containerForm">
                    <div className="row mainRow">
                        <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                            <div className="container">
                                <div className="contactForm">
                                    <h1>Contact us</h1>
                                    <h3>We are here to help you! How can we help you?</h3>
                                    <div className="innerForm">
                                        <input type="text" placeholder="Name" name="" id="" onChange={(e)=>{setName(e.target.value); setWarning(''); setStatus('');}} value={name} />
                                        <input type="email" placeholder="Email Address"onChange={(e)=>{setEmail(e.target.value); setWarning(''); setStatus('');}} value={email}  name="" id="" />
                                        <textarea name="" placeholder="Your Message"onChange={(e)=>{setMessage(e.target.value); setWarning(''); setStatus('');}} values={message} id="" cols="30" rows="10"></textarea>
                                        <p><sub className="warning">{warning}</sub></p>
                                        <button className="sendBut" onClick={()=>{send()}}>SEND</button>
                                        <img src="/assets/images/or.png" alt="" />
                                        <a href='http://calendly.com/xharptech' target="_blank"><button className="sendBut">Book A Meeting</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 right align-self-center">
                            <div className="container">
                                <div className="up">
                                    <img src="/assets/images/contactImg.png" alt="illustration" />
                                </div>
                                <div className="down">
                                    <div className="row">
                                        <div className="col-1">
                                            <h3><i class="fas fa-map-marker-alt"></i></h3>
                                        </div>
                                        <div className="col-11">
                                            <h4>Frankfurt (Germany), Karachi (Pakistan).</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <h3><i class="fas fa-envelope"></i></h3>
                                        </div>
                                        <div className="col-11">
                                            <h4>info@xharptech.com</h4>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-1">
                                            <h3><i class="fas fa-phone-alt"></i></h3>
                                        </div>
                                        <div className="col-11">
                                            <h4>+92305 3417175</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactEmail />
            <Footer />
        </>
    );
}

export default ContactPage;