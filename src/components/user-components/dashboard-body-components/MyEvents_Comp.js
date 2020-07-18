import React from 'react';

import './DashboardBody_Sass.scss';   //  Import the SCSS

import QR_Code from "../../../assets/images/qr_code.png";
import Attendees from "../../../assets/images/icons/user_icon.png";

function MyEventsComp(props) {
    return (
    <div className="myEventCardWrapper">  {/* CARD WRAPPER */}
        <div className="row m-0 p-0">
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 my-lg-4">
                <div className="myEventsCards">
                    <div className="cardInnerWrapper">
                        <div className="myEventDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                    </div>
                    <hr className="card--hr" />
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 my-lg-4">
                <div className="myEventsCards">
                    <div className="cardInnerWrapper">
                        <div className="myEventDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                        <h3 className="my--event--title">Digital Marketing</h3>
                    </div>

                    <hr className="card--hr" />

                    <div className="row mx-0 text-center">
                        <div className="attendees col-6">
                            <img src={ Attendees } alt="Attendees"/>
                            <span className="badge"><small className="text-light">12</small></span>
                        </div>

                        <div className="available--seats col-6">
                            <img src={ Attendees } alt="Attendees"/>
                            <span className="badge"><small className="text-light">12</small></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 my-lg-4">
                <div className="myEventsCards">
                    <div className="cardInnerWrapper">
                        <div className="myEventDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                        <h3 className="my--event--title">Digital Marketing</h3>
                    </div>

                    <hr className="card--hr" />

                    <div className="row mx-0 text-center">
                        <div className="attendees col-6">
                            <img src={ Attendees } alt="Attendees"/>
                            <span className="badge"><small className="text-light">12</small></span>
                        </div>

                        <div className="available--seats col-6">
                            <img src={ Attendees } alt="Attendees"/>
                            <span className="badge"><small className="text-light">12</small></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 my-3 my-lg-4">
                <div className="myEventsCards">
                    <div className="cardInnerWrapper">
                        <div className="myEventDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                        <h3 className="my--event--title">Digital Marketing</h3>
                    </div>

                    <hr className="card--hr" />

                    <div className="row mx-0 text-center">
                        <div className="attendees col-6">
                            <img src={ Attendees } alt="Attendees"/>
                            <span className="badge"><small className="text-light">12</small></span>
                        </div>

                        <div className="available--seats col-6">
                            <img src={ Attendees } alt="Attendees"/>
                            <span className="badge"><small className="text-light">12</small></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default MyEventsComp;