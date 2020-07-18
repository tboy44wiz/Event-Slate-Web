import React, {Component} from 'react';
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import './IndividualDashBoard_Sass.scss';   //  Import the SCSS

//  Import Redux Actions
import { saveSingleUserData, showLeftDrawerMenu, showHideProfileOptionDropdown } from '../../redux/actions/dashBoardActions'

import LeftMenuDrawerComp from "./LeftMenuDrawer_Comp";

import USerImage from '../../assets/images/icons/user_icon.png'
import HamburgerIcon from '../../assets/images/icons/hamburger_icon.png'
import DashboardBodyContainerComp from "./DashboardBodyContainer_Comp";

class IndividualDashBoardComp extends Component {
    constructor(props, {match}) {
        super(props, match);

        this.state = {
            isLoggedOut: false,
        };
    };

    componentDidMount() {
        this.checkLoginStatus();
    };
    checkTokenExpiration = () => {
        //  Get content of the Browsers Local Storage.
        const savedLoginData = JSON.parse(localStorage.getItem("loginData"));
        //console.log(`TOKEN::: ${savedLoginData.Token}`);

        //  Decode the Token.
        const decodedToken = jwt_decode(savedLoginData.Token, {complete: true});
        //console.log(`EXPIRED TIME::: ${decodedToken.exp}`);

        //  Get the current time.
        const currentTime = new Date() / 1000
        //console.log(`CURRENT TIME::: ${currentTime}`);

        //  Compare the current time with the expiration time in the decoded token.
        return decodedToken.exp > currentTime ;
    };
    checkLoginStatus = () => {
        //  Get content of the Browsers Local Storage
        const savedLoginData = JSON.parse(localStorage.getItem("loginData"));

        if (savedLoginData && this.checkTokenExpiration()) {
            const decodedToken = jwt_decode(savedLoginData.Token, { complete: true });
            const individualID = decodedToken.Individuals_ID;

            //  Make network call to the EndPoint and fetch the Individuals Data.
            axios(`http://localhost:5000/api/individuals/${individualID}`)
                .then((response) => {
                    //console.log(`INDIVIDUAL::: ${JSON.stringify(response.data)}`);

                    //  Save to the Store
                    this.props.saveSingleUser(response.data.Individual);
                })
                .catch((error) => {
                    console.log(`ERROR::: ${error}`);
                });
            return;
        }
        this.setState({
            ...this.state, isLoggedOut: true,
        });
    };

    handleShowLeftDrawer = () => {
        return this.props.showLeftDrawer(true);
    };

    handleShowHideProfileOption = () => {
        console.log(this.props.isShowHideProfileOptionDropdownActive);
        return this.props.showHideProfileOption(!this.props.isShowHideProfileOptionDropdownActive);
    };


    render() {
        const { isLoggedOut } = this.state;
        const { isShowHideProfileOptionDropdownActive } = this.props;

        if (isLoggedOut) {
            return <Redirect to="/auth/login"/>
        }

        return (
            <div className="dashBoardWrapper">

                {/* Show the Left Menu Drawer */}
                <LeftMenuDrawerComp />

                {/*DashBoard Menu*/}
                <div className="dashBoardMenu">
                    <div className="d-flex">
                        <img src={ HamburgerIcon } onClick={ this.handleShowLeftDrawer } className="hamburger--icon mr-5" alt="HamburgerIcon"/>
                        <h4 className="dashboard--title">DashBoard</h4>
                    </div>

                    {/* Profile Pix and Option Dropdown */}
                    <div className="profileOptionWrapper">
                        <img src={ USerImage } onClick={ this.handleShowHideProfileOption } className="profile--image" alt="UserImage"/>
                        {
                            (isShowHideProfileOptionDropdownActive) ? (
                                <ul className="hide--dropdown">
                                    <li>
                                        <div className="profileDropDownName">
                                            <h5>Tochukwu</h5>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="profileSettingsWrapper">
                                            <button className="btn btn-sm">Your Profile</button>
                                            <button className="btn btn-sm">Settings</button>
                                        </div>
                                    </li>
                                    <li>Logout</li>
                                </ul>
                            ) : (
                                <></>
                            )
                        }
                    </div>
                </div>


                {/* Dashboard Body Wrapper */}
                <DashboardBodyContainerComp pathname={this.props.history.location.pathname} />
            </div>
        );
    };
}



//  Get the "State" from Redux.
const mapStateToProps = (state) => {
    return {
        fullName: state.signUpAndLogin.fullName,
        email: state.signUpAndLogin.email,
        contact: state.signUpAndLogin.contact,
        biography: state.signUpAndLogin.biography,
        socialMedia: state.signUpAndLogin.socialMedia,
        image: state.signUpAndLogin.image,
        isLoggedIn: state.signUpAndLogin.isLoggedIn,

        isLeftDrawerActive: state.dashBoard.isLeftDrawerActive,
        isShowHideProfileOptionDropdownActive: state.dashBoard.isShowHideProfileOptionDropdownActive,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveSingleUser: (userData) => {
            dispatch(saveSingleUserData(userData));
        },

        showLeftDrawer: (isVisible) => {
            dispatch(showLeftDrawerMenu(isVisible));
        },

        showHideProfileOption: (isVisible) => {
            dispatch(showHideProfileOptionDropdown(isVisible));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(IndividualDashBoardComp));