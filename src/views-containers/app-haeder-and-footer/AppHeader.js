import React from 'react';
import {Navbar, Nav, Collapse} from 'bootstrap-4-react'
import {Link} from "react-router-dom";

import './header-and-footer.scss';

function AppHeader(props) {
    return (
        <Navbar expand="lg" dark className= "app--navBar px-4 w-100">
            <Link to="/">
                <Navbar className="p-0">
                    <h5 className="ml-0 mb-0 font-weight-bold" id="brand_name"><span>E</span>ventSlate</h5>
                </Navbar>
            </Link>

            <Navbar.Toggler target="#navbarNav" />
            <Collapse navbar id="navbarNav" className= "justify-content-end">
                <Navbar.Nav className= "">
                    <Link to="/"><Nav className= "menu_link mr-3">Home</Nav></Link>
                    <Link to="/about-me"><Nav className= "menu_link mr-3">About Us</Nav></Link>
                    <Link to="/portfolio"><Nav className= "menu_link mr-3">Events</Nav></Link>
                    {/*<Link to="/contact"><Nav className= "menu_link mr-3">Gallery</Nav></Link>*/}
                    <Link to="/contact"><Nav className= "menu_link">Contact Us</Nav></Link>
                </Navbar.Nav>
            </Collapse>
        </Navbar>
    );
}

export default AppHeader;