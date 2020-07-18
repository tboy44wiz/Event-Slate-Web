import React from 'react';

import './DashboardBody_Sass.scss';   //  Import the SCSS

import Calender from "../../../assets/images/icons/calender_icon.png";
import Speakers from "../../../assets/images/icons/speakers_icon.png";
import Sponsors from "../../../assets/images/icons/donate_icon.png";
import Exhibitors from "../../../assets/images/icons/exhibitors_ico.png";
import Contact from "../../../assets/images/icons/contact_icon.png";
import Map from "../../../assets/images/icons/map_icon.png";

function DashboardComp(props) {
    return (
    <div className="cardWrapper">  {/* CARD WRAPPER */}
        <div className="row m-0 p-0">
            <div className="col-sm-6 col-md-4 my-3 my-lg-4 px-4">
                <div className="cards">
                    <div className="cardInner">
                        <div className="cardInnerWrapper">
                            <img src={ Calender } className="card--icons" alt="Calender"/>
                            <div className="cardTypoWrapper">
                                <h3 className="cards-header">6</h3>
                                <p className="cards-sub--header">Agenda</p>
                            </div>
                        </div>
                        <hr className="card--hr" />
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 my-lg-4 px-4">
                <div className="cards">
                    <div className="cardInner">
                        <div className="cardInnerWrapper">
                            <img src={ Speakers } className="card--icons" alt="Calender"/>
                            <div className="cardTypoWrapper">
                                <h3 className="cards-header">5</h3>
                                <p className="cards-sub--header">Speakers</p>
                            </div>
                        </div>
                        <hr className="card--hr" />
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 my-lg-4 px-4">
                <div className="cards">
                    <div className="cardInner">
                        <div className="cardInnerWrapper">
                            <img src={ Sponsors } className="card--icons" alt="Calender"/>
                            <div className="cardTypoWrapper">
                                <h3 className="cards-header">2</h3>
                                <p className="cards-sub--header">Sponsors</p>
                            </div>
                        </div>
                        <hr className="card--hr" />
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-md-4 my-3 my-lg-4 px-4">
                <div className="cards">
                    <div className="cardInner">
                        <div className="cardInnerWrapper">
                            <img src={ Exhibitors } className="card--icons" alt="Calender"/>
                            <div className="cardTypoWrapper">
                                <h3 className="cards-header">3</h3>
                                <p className="cards-sub--header">Exhibitors</p>
                            </div>
                        </div>
                        <hr className="card--hr" />
                    </div>
                </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 my-lg-4 px-4">
                <div className="cards">
                    <div className="cardInner">
                        <div className="cardInnerWrapper">
                            <img src={ Contact } className="card--icons" alt="Calender"/>
                            <div className="cardTypoWrapper">
                                <h3 className="cards-header">.</h3>
                                <p className="cards-sub--header">Contact</p>
                            </div>
                        </div>
                        <hr className="card--hr" />
                    </div>

                </div>
            </div>
            <div className="col-sm-6 col-md-4 my-3 my-lg-4 px-4">
                <div className="cards">
                    <div className="cardInner">
                        <div className="cardInnerWrapper">
                            <img src={ Map } className="card--icons" alt="Calender"/>
                            <div className="cardTypoWrapper">
                                <h3 className="cards-header">.</h3>
                                <p className="cards-sub--header">Map</p>
                            </div>
                        </div>
                        <hr className="card--hr" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}

export default DashboardComp;