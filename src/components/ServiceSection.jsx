import React from "react";
import SingleService from "./SingleService";

function ServiceSection(){
    return(
        <div className="serviceSection">
            <h5>OUR SERVICES</h5>
            <h1 className="sectionMainHeading">We take pride in<br />designing extraordinary<br />products for you</h1>
            <h2>With our honest approach, we wish to create a trustworthy environment, where our promises towards the clients are always kept</h2>
            <div className="servicesMain">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-sm-12 left-main">
                            <img src="/assets/images/design.png" alt="design-image" />
                        </div>
                        <div className="col-lg-9 col-md-10 col-sm-12 right-main">
                            <h2 className="serviceSingleHeading">1.	UI/UX DESIGN</h2>
                            <p>Our team of skilled individuals works on providing detailed and intricate User Experience Design. Our goal is to make sure that our product is not only user-friendly but also unique and brand new to the market. </p>
                            <div className="singleService">
                                <SingleService
                                    heading='CRM REDESIGN'
                                    subText='Research - Workshops - Prototyping - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                                <SingleService
                                    heading='ROCKSERVE'
                                    subText='Research - Workshops - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                                <SingleService
                                    heading='MEDITATION LANDING'
                                    subText='Research - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                                <SingleService
                                    heading='FOODY'
                                    subText='Research - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                            </div>
                        </div>                        
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-sm-12 left-main">
                            <img src="/assets/images/design.png" alt="design-image" />
                        </div>
                        <div className="col-lg-9 col-md-10 col-sm-12 right-main">
                            <h2 className="serviceSingleHeading">Mobile Design</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta delectus! Voluptas reiciendis distinctio minus mollitia, molestias odio expedita error delectus vitae inventore repellat non tempora voluptate, consequuntur nobis porro obcaecati possimus sint beatae itaque explicabo dolorem ipsum accusamus. Reprehenderit aperiam magni aliquam architecto rem magnam expedita odit porro minima?</p>
                            <div className="singleService">
                                <SingleService
                                    heading='BOXING & FITNESS'
                                    subText='Research - Workshops - Prototyping - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                                <SingleService
                                    heading='RUNNING APP CONCEPT'
                                    subText='Research - Workshops - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                            </div>
                        </div>                        
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-sm-12 left-main">
                            <img src="/assets/images/dev.png" alt="design-image" />
                        </div>
                        <div className="col-lg-9 col-md-10 col-sm-12 right-main">
                            <h2 className="serviceSingleHeading">Development</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta delectus! Voluptas reiciendis distinctio minus mollitia, molestias odio expedita error delectus vitae inventore repellat non tempora voluptate, consequuntur nobis porro obcaecati possimus sint beatae itaque explicabo dolorem ipsum accusamus. Reprehenderit aperiam magni aliquam architecto rem magnam expedita odit porro minima?</p>
                            <div className="singleService">
                                <SingleService
                                    heading='MY WATER APP - IOS'
                                    subText='Research - Workshops - Prototyping - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                                <SingleService
                                    heading='STORIES APP - IOS'
                                    subText='Research - Workshops - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                            </div>
                        </div>                        
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-sm-12 left-main">
                            <img src="/assets/images/brand.png" alt="design-image" />
                        </div>
                        <div className="col-lg-9 col-md-10 col-sm-12 right-main">
                            <h2 className="serviceSingleHeading">Branding</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta delectus! Voluptas reiciendis distinctio minus mollitia, molestias odio expedita error delectus vitae inventore repellat non tempora voluptate, consequuntur nobis porro obcaecati possimus sint beatae itaque explicabo dolorem ipsum accusamus. Reprehenderit aperiam magni aliquam architecto rem magnam expedita odit porro minima?</p>
                            <div className="singleService">
                                <SingleService
                                    heading='HIREBEE BRANDING'
                                    subText='Research - Workshops - Prototyping - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                            </div>
                        </div>                        
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-lg-3 col-md-2 col-sm-12 left-main">
                            <img src="/assets/images/motion.png" alt="design-image" />
                        </div>
                        <div className="col-lg-9 col-md-10 col-sm-12 right-main">
                            <h2 className="serviceSingleHeading">Motion</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, dicta delectus! Voluptas reiciendis distinctio minus mollitia, molestias odio expedita error delectus vitae inventore repellat non tempora voluptate, consequuntur nobis porro obcaecati possimus sint beatae itaque explicabo dolorem ipsum accusamus. Reprehenderit aperiam magni aliquam architecto rem magnam expedita odit porro minima?</p>
                            <div className="singleService">
                                <SingleService
                                    heading='MY WATER - DEMO'
                                    subText='Research - Workshops - Prototyping - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                                <SingleService
                                    heading='RUNNING APP - PROMO'
                                    subText='Research - Workshops - Prototyping - UI/UX design'
                                    img='https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="service-img'
                                    link='/' 
                                />
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;