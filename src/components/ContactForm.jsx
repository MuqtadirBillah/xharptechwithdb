import React, {useState} from "react";
import emailjs from "emailjs-com";

function ContactForm(){

    var [name, setName] = useState("");
    var [email, setEmail] = useState("");
    var [message, setMessage] = useState("");
    var [status, setStatus] = useState("");
    var [warning, setWarning] = useState("");

    function send(){
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(name==="" || email==="" || message===""){
            setWarning("Please fill all the fields");
        }
        else{
            if(re.test(String(email).toLowerCase())){
                // setStatus("All set");
                // const templateParams = {
                //     message: message,
                //     from_name: "Musab Abbasi",
                //     user_Email: "abbasimusab2000@gmail.com",
                //     to_name: "Musab"
                // };
                const templateParams = {
                    message: message,
                    from_name: name,
                    user_Email: email,
                    to_name: "XharpTech"
                };
                emailjs.send('your service ID','your template ID', templateParams, 'Your user ID')
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    if(response.status=="200"){
                        console.log("Success");
                        setEmail("");
                        setName("");
                        setMessage("");
                        setStatus("Message Sent!")
                    }
                },
                (err) => {
                    console.log('FAILED...', err);
                    setStatus("Something went wrong!");
                });
                // setStatus("Message sent!");
            }
            else{
                setWarning("Invalid Email address");
            }
        }
    }

    return(
        <div className="contactForm">
            <div className="form" data-aos="flip-up" data-aos-delay="80" data-aos-duration="800">
                <div className="container-fluid">
                    <h1 className="contactHeading">Contact Us<hr /></h1>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="">NAME <span className="impStar">*</span></label><br />
                            <input type="text" placeholder="NAME" name="" id="" />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <label htmlFor="">EMAIL ADDRESS <span className="impStar">*</span></label><br />
                            <input type="text" placeholder="EMAIL ADDRESS" name="" id="" />
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="">PHONE <span className="impStar">*</span></label><br />
                            <input type="tel" placeholder="PHONE NUMBER" onChange={(e)=>{setMessage(e.target.value)}} name="" id="" />
                        </div>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="">YOUR MESSAGE <span className="impStar">*</span></label><br />
                            <textarea name="" id="" placeholder="YOUR MESSAGE" onChange={(e)=>{setMessage(e.target.value)}} value={message} cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <button onClick={()=>{send()}}>SEND MESSAGE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;