import React from 'react';
import { connect } from 'react-redux';
import {NavLink, withRouter} from "react-router-dom";

import './IndividualDashBoard_Sass.scss';   //  Import the SCSS

//  Import Redux Actions
import { hideLeftDrawerMenu } from '../../redux/actions/dashBoardActions'

//import AppLogo from "../../assets/images/eventSlate_logo.png";
import UserIcon from "../../assets/images/icons/user_icon.png";
import HamburgerIcon from "../../assets/images/icons/hamburger_icon.png";

class LeftMenuDrawer_Comp extends React.Component {

    handleHideLeftDrawer = () => {
        return this.props.hideLeftDrawer(false);
    };
    handleLogout = () => {
        //localStorage.removeItem("loginData");
        this.props.history.push("/auth/login");
    }

    render() {
        const { isLeftDrawerActive } = this.props;
        const showHideLeftDrawer = (isLeftDrawerActive) ? ("leftDrawerWrapper showDrawer") : ("leftDrawerWrapper hideDrawer")

        return (
            <div className={showHideLeftDrawer}>

                <button className="closeButton" onClick={ this.handleHideLeftDrawer } />

                <div className="drawerHeader">
                    <img src={ UserIcon } className="profile--image mr-2" alt="UserLogo"/>
                    <strong className="font-weight-bold" id="brand__name">Osondu Tochukwu</strong>
                    <small>Online <span id="online" /></small>
                </div>

                <ul>
                    <NavLink to="/home" activeClassName="selected">
                        <li>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>Dashboard</span>
                        </li>
                    </NavLink>
                    <NavLink to="/my-account" activeClassName="selected">
                        <li>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>My Account</span>
                        </li>
                    </NavLink>
                    <NavLink to="/my-events" activeClassName="selected">
                        <li>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>My Events</span>
                        </li>
                    </NavLink>
                    <NavLink to="/nearby-events" activeClassName="selected">
                        <li>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>Nearby Events</span>
                        </li>
                    </NavLink>
                    <NavLink to="/upcoming-events" activeClassName="selected">
                        <li>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>Upcoming Events</span>
                        </li>
                    </NavLink>
                    <NavLink to="/notifications" activeClassName="selected">
                        <li>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>Notifications </span>
                            <span className="badge"><small className="text-light">12</small></span>
                        </li>
                    </NavLink>
                    <NavLink to="/settings" activeClassName="selected">
                        <li>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>Settings</span>
                        </li>
                    </NavLink>
                    <NavLink to="#">
                        <li className="mt-5" onClick={ this.handleLogout }>
                            <img src={ HamburgerIcon } className="hamburger--icon mr-2" alt="HamburgerIcon"/>
                            <span>Logout</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        );
    }
}

//  Get the "State" from Redux.
const mapStateToProps = (state) => {
    return {
        isLeftDrawerActive: state.dashBoard.isLeftDrawerActive,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        hideLeftDrawer: (isVisible) => {
            dispatch(hideLeftDrawerMenu(isVisible));
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LeftMenuDrawer_Comp));