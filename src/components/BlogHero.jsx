import React from "react";

function BlogHero(){
    return(
        <div className="hero aboutHero blogHero">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="slide">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 left align-self-center">
                                        <h2 className="updatedSectionMainHeading">Blog Posts</h2>
                                        <h1>Serving Technology Better</h1>
                                        <p>Xharptech Blogs helps you make the best decisions for your business. We write blogs about the latest trends in UI/UX web design and development, and we also provide tips and advice to help you get the most out of your web and mobile projects so you can make an informed decision.</p>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 right align-self-center">
                                        <img src="/assets/images/blog-hero.png" alt="hero-image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}
            </div>
        </div>
    );
}

export default BlogHero;