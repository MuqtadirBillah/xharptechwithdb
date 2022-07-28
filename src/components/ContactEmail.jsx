import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function ContactEmail(){
    
    var [email, setEmail] = useState('');
    const emailCollectionRef = collection(db, "emailCollection");

    const createUser = async () => {
        await addDoc(emailCollectionRef, { email: email });
        toast(`Email registered!`);
    };

    return(
        <div className="contactEmail">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left d-flex align-items-center justify-content-center" data-aos="flip-down" data-aos-delay="100" data-aos-duration="800">
                        <img src="/assets/images/emailUpdated.png" alt="email-icon" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right d-flex align-items-center"  data-aos="zoom-in" data-aos-delay="100" data-aos-duration="600">
                        <div>
                            <h1 data-aos="fade-down" data-aos-delay="100" data-aos-duration="800">Get in touch!</h1>
                            <h4 data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">Our sales team is ready to help from 9 AM-6 PM OST. Our chat support is available 24/7</h4>
                            <div className="emailInput">
                                <input type="email" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} name="" id="" />
                                <button data-aos="fade-up"onClick={()=>{createUser()}} data-aos-delay="100" data-aos-duration="800">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactEmail;