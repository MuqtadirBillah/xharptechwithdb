import React from "react";

function Feedback(){
    return(
        <div className="feedback">
            <h1 className="sectionMainHeading">Feedback from our<br />clients</h1>
            <div className="container-fluid">
                <div className="row feedbackRow">
                    <div className="col-lg-7 col-md-8 col-sm-12">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorum neque cumque id unde eius eos temporibus praesentium nihil. Asperiores maiores amet expedita tempore quod obcaecati vero quisquam in quibusdam. Vero soluta magni necessitatibus mollitia iure repellat, a fugiat autem harum eum expedita aspernatur, inventore perspiciatis sint ipsam! Asperiores neque dolores eligendi ipsa id deleniti in expedita nemo enim dignissimos!</h5>
                                    <div className="info">
                                        <h5>Name</h5>
                                        <h4>Designation</h4>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorum neque cumque id unde eius eos temporibus praesentium nihil. Asperiores maiores amet expedita tempore quod obcaecati vero quisquam in quibusdam. Vero soluta magni necessitatibus mollitia iure repellat, a fugiat autem harum eum expedita aspernatur, inventore perspiciatis sint ipsam! Asperiores neque dolores eligendi ipsa id deleniti in expedita nemo enim dignissimos!</h5>
                                    <div className="info">
                                        <h5>Name</h5>
                                        <h4>Designation</h4>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas dolorum neque cumque id unde eius eos temporibus praesentium nihil. Asperiores maiores amet expedita tempore quod obcaecati vero quisquam in quibusdam. Vero soluta magni necessitatibus mollitia iure repellat, a fugiat autem harum eum expedita aspernatur, inventore perspiciatis sint ipsam! Asperiores neque dolores eligendi ipsa id deleniti in expedita nemo enim dignissimos!</h5>
                                    <div className="info">
                                        <h5>Name</h5>
                                        <h4>Designation</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center">
                        <div className="carouselControlClass">
                            <button type="button" className="carouselControl" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><i class="fas fa-arrow-left"></i></button><br />
                            <button type="button" className="carouselControl" data-bs-target="#carouselExampleControls" data-bs-slide="next"><i class="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Feedback;