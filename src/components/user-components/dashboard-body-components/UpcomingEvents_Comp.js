import React from 'react';

import './DashboardBody_Sass.scss';   //  Import the SCSS

import QR_Code from "../../../assets/images/qr_code.png";

function UpcomingEventsComp(props) {
    return (
    <div className="nearbyEventsCardWrapper">  {/* CARD WRAPPER */}
        <div className="row p-0">
            <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center my-3 my-lg-4">
                <div className="nearbyEventsCards">
                    <div className="cardInnerWrapper">
                        <div>
                            <h2 className="my--event--title">Music Carnival</h2>
                            <p className="my--event--description">Anything can go here. This is a little description of the event.</p>
                        </div>
                        <div className="nearbyEventsDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center  my-3 my-lg-4">
                <div className="nearbyEventsCards">
                    <div className="cardInnerWrapper">
                        <div>
                            <h2 className="my--event--title">Music Carnival</h2>
                            <p className="my--event--description">Anything can go here. This is a little description of the event.</p>
                        </div>
                        <div className="nearbyEventsDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center  my-3 my-lg-4">
                <div className="nearbyEventsCards">
                    <div className="cardInnerWrapper">
                        <div>
                            <h2 className="my--event--title">Music Carnival</h2>
                            <p className="my--event--description">Anything can go here. This is a little description of the event.</p>
                        </div>
                        <div className="nearbyEventsDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center  my-3 my-lg-4">
                <div className="nearbyEventsCards">
                    <div className="cardInnerWrapper">
                        <div>
                            <h2 className="my--event--title">Music Carnival</h2>
                            <p className="my--event--description">Anything can go here. This is a little description of the event.</p>
                        </div>
                        <div className="nearbyEventsDateWrapper">
                            <p className="my-0">FRI</p>
                            <h2 className="my-0">26</h2>
                            <p className="my-0">SEP</p>
                            <img src={QR_Code} alt="QR_Code"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default UpcomingEventsComp;