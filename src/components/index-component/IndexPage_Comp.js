import React, {Component} from 'react';
import { Link } from "react-router-dom";
import { Nav } from "bootstrap-4-react";

import './IndexPage_Sass.scss';

import EventSlateLogo from "../../assets/images/eventSlate_logo.png";
import PromoImage1 from "../../assets/images/promo_image1.png";

class IndexPage_Comp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Welcome to the Page."
        };
    };

    sayGoodBye = () => {
        this.setState({
            message: "GoodBye from this Page."
        });
    };

    render() {
        return (
            <div className="indexPageWrapper">
                <div className="loginWrapperButton">
                    <Link to="/auth/login">
                        <Nav className= "text--orange font-weight-bold small">
                            <button className= "btn--custom--outline btn-sm font-weight-bold text-decoration-none my-1">Login</button>
                        </Nav>
                    </Link>
                </div>

                <div className="container indexInnerWrapper">
                    <div className="row m-0">
                        {/*======= LEFT COLUMN ======*/}
                        <div className="col-sm-12 col-md-6 m-0 p-0">
                            <div className="leftContents pt-lg-5">
                                <img src={EventSlateLogo} className="" alt="Logo_Image" width="64"/>
                                <p className="pt-4">We will help you <span className="typeWriting">Identify your needs.</span>
                                </p>
                                <br/>
                                <div className="textInABoxWrapper">
                                    <p>Plan your activities and control your Events with ease</p>
                                </div>
                            </div>
                        </div>

                        {/*======= RIGHT COLUMN ======*/}
                        <div className="col-sm-12 col-md-6 d-none d-md-inline-block">
                            <div className="rightContents p-sm-2 p-md-4 px-lg-5">
                                <img src={ PromoImage1 } className="img-fluid" alt="vector"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default IndexPage_Comp;