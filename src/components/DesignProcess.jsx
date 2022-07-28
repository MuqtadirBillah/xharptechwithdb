import React, { useState } from "react";
import Slider from "react-slick";

function DesignProcess(){

    var [heading, setHeading] = useState('kick-off');
    var [para, setPara] = useState('A project kickoff introduces the team to the client’s project, its goals, purposes, and sets of tasks to complete.');
    var [output, setOutput] = useState([
        {point:'Getting to know the client'},
        {point:'Project introduction'},
        {point:'Goals and expectations'},
        {point:'Work specifics and details'}
    ]);
    var [img, setImg] = useState('kickoff');
    var [no, setNo] = useState(1);
    var [kick, setkick] = useState('active');
    var [research, setReseach] = useState('cardIn');
    var [ideation, setIdeation] = useState('cardIn');
    var [testing, setTesting] = useState('cardIn');
    var [design, setDesign] = useState('cardIn');
    var [implementt, setImplementt] = useState('cardIn');
    var [improve, setImprove] = useState('cardIn');
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5.5,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    };

    function kickfn(){
        setkick('active');
        setReseach('cardIn');
        setIdeation('cardIn');
        setTesting('cardIn');
        setDesign('cardIn');
        setImplementt('cardIn');
        setImprove('cardIn');
        setHeading('kick-off');
        setImg('kickoff');
        setNo(1);
        setPara('A project kickoff introduces the team to the client’s project, its goals, purposes, and sets of tasks to complete.');;
        setOutput([
            {point:'Getting to know the client'},
            {point:'Project introduction'},
            {point:'Goals and expectations'},
            {point:'Work specifics and details'}
        ]);
    }
    function researchfn(){
        setkick('cardIn');
        setReseach('active');
        setIdeation('cardIn');
        setTesting('cardIn');
        setDesign('cardIn');
        setImplementt('cardIn');
        setImprove('cardIn');
        setHeading('research');
        setImg('research');
        setNo(2);
        setPara('Discovering qualitative and quantitative data is an improtant stage for making valuable data-driven decisions');;
        setOutput([
            {point:'Competitor research'},
            {point:'Desgin solution analysis'},
            {point:'Usability testing'},
            {point:'Scope'}
        ]);
    }
    function ideationfn(){
        setkick('cardIn');
        setReseach('cardIn');
        setIdeation('active');
        setTesting('cardIn');
        setDesign('cardIn');
        setImplementt('cardIn');
        setImprove('cardIn');
        setHeading('ideation');
        setImg('ideation');
        setNo(3);
        setPara('This creative brainstorming process sketchs the core ideas and deicision that will then govern the project.');;
        setOutput([
            {point:'User personas'},
            {point:'Customer journey flow'},
            {point:'User stories'},
            {point:'User flows'}
        ]);
    }
    function testingfn(){
        setkick('cardIn');
        setReseach('cardIn');
        setIdeation('cardIn');
        setTesting('active');
        setDesign('cardIn');
        setImplementt('cardIn');
        setImprove('cardIn');
        setHeading('Testing & validation');
        setImg('test');
        setNo(4);
        setPara('Here, the project ideas are given a test drive and evaluated t=for their work in action.');;
        setOutput([
            {point:'Wireframes'},
            {point:'Prototypes'},
            {point:'Mock-ups'},
        ]);
    }
    function designfn(){
        setkick('cardIn');
        setReseach('cardIn');
        setIdeation('cardIn');
        setTesting('cardIn');
        setDesign('active');
        setImplementt('cardIn');
        setImprove('cardIn');
        setHeading('design');
        setImg('design');
        setNo(5);
        setPara('This stage welds all validated ideas into practical designs that fulfill all user needs and business goals.');;
        setOutput([
            {point:'Sketching'},
            {point:'Visual Design'},
            {point:'User Interface'},
            {point:'Motion Design'}
        ]);
    }
    function implementtfn(){
        setkick('cardIn');
        setReseach('cardIn');
        setIdeation('cardIn');
        setTesting('cardIn');
        setDesign('cardIn');
        setImplementt('active');
        setImprove('cardIn');
        setHeading('implement');
        setImg('implement');
        setNo(6);
        setPara('Once designs are refined and approve, this stage will make sure to hand over polished and organized design components to the development team.');
        setOutput([
            {point:'UI Kit / Documentation'},
            {point:'Design Review'},
            {point:'Coding'}
        ]);
    }
    function improvefn(){
        setkick('cardIn');
        setReseach('cardIn');
        setIdeation('cardIn');
        setTesting('cardIn');
        setDesign('cardIn');
        setImplementt('cardIn');
        setImprove('active');
        setHeading('improve');
        setImg('improve');
        setNo(7);
        setPara('Final checkups and improvements ensure high-end results that will cover all of the missing points and set your brand apart.');
        setOutput([
            {point:'Getting to know the client'},
            {point:'Project introduction'},
            {point:'Goals and expectations'},
            {point:'Work specifics and details'}
        ]);
    }

    return(
        <div className="designProcess">
            <div className="headings">
                <h5>OUR DESIGN PROCESS</h5>
                <h1 className="sectionMainHeading">How we deliver great results</h1>
            </div>
            <div className="processSteps">
                <div className="container-fluid">
                    <div className="row">
                        <div className="stepNo">
                            <h2>STAGE {no} OF 7</h2>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 left d-flex align-items-start">
                            <div>
                                <h1>{heading}</h1>
                                <h4>{para}</h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 mid d-flex align-items-start">
                            <div>
                                <h1>output includes</h1>
                                <h4>
                                    <ul>
                                        {
                                            output.map(({point})=>{
                                                return(
                                                    <li>{point}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </h4>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 right d-flex align-items-start">
                            <img src={"/assets/images/"+img+".png"} alt="" />
                        </div>
                    </div>
                    <div className="stepsCards">
                        <Slider {...settings}>
                            <div>
                                <div className="cardd d-flex align-items-center">
                                    <div className={''+kick} onClick={()=>{kickfn()}}>
                                        <h5>STAGE 1</h5>
                                        <h3>kick-off</h3>
                                        <center>
                                            <img src="/assets/images/kickoff.png" alt="" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="cardd d-flex align-items-center">
                                    <div className={''+research} onClick={()=>{researchfn()}}>
                                        <h5>STAGE 2</h5>
                                        <h3>research</h3>
                                        <center>
                                            <img src="/assets/images/research.png" alt="" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="cardd d-flex align-items-center">
                                    <div className={''+ideation} onClick={()=>{ideationfn()}}>
                                        <h5>STAGE 3</h5>
                                        <h3>ideation</h3>
                                        <center>
                                            <img src="/assets/images/ideation.png" alt="" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="cardd d-flex align-items-center">
                                    <div className={''+testing} onClick={()=>{testingfn()}}>
                                        <h5>STAGE 4</h5>
                                        <h3>testing & validation</h3>
                                        <center>
                                            <img src="/assets/images/test.png" alt="" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="cardd d-flex align-items-center">
                                    <div className={''+design} onClick={()=>{designfn()}}>
                                        <h5>STAGE 5</h5>
                                        <h3>design</h3>
                                        <center>
                                            <img src="/assets/images/design.png" alt="" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="cardd d-flex align-items-center">
                                    <div className={''+implementt} onClick={()=>{implementtfn()}}>
                                        <h5>STAGE 6</h5>
                                        <h3>implement</h3>
                                        <center>
                                            <img src="/assets/images/implement.png" alt="" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="cardd d-flex align-items-center">
                                    <div className={''+improve} onClick={()=>{improvefn()}}>
                                        <h5>STAGE 7</h5>
                                        <h3>improve</h3>
                                        <center>
                                            <img src="/assets/images/improve.png" alt="" />
                                        </center>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                        <div className="swipe">
                            <h5 className=" pulse-Infinite"><i class="fas fa-angle-double-left"></i> Swipe Left & Right <i class="fas fa-angle-double-right"></i></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesignProcess;