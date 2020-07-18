import React from 'react';
import {Link} from 'react-router-dom';

import './header-and-footer.scss';

import FaceBook from '../../assets/images/icons/facebook_icon.png';
import Twitter from '../../assets/images/icons/twitter_icon.png';
import Instagram from '../../assets/images/icons/instagram_icon.png';

function AppFooter(props) {
    const year = new Date().getFullYear();

    return (
        <div className= "appFooterBar px-4">
            <div className="row m-0 py-2">
                <div className=" col-sm-12 px-0">
                    {/*Copyright*/}
                    <p className="copy--right mt-3 text-center text-sm-left">Copyright ©  { year }
                        <Link to="/" className= "footer__link">
                            <strong> EventSlate. </strong>
                        </Link>
                       <span className= "d-none d-md-inline-flex d-md-inline-flex">
                            Powered by <a href= "http://www.goldensofttech.com" target= "_blank" rel="noopener noreferrer" className= "footer__link font-weight-bold ml-1">Golden Software Technology.</a>
                       </span>
                        <span className= "d-none d-xl-inline-flex ">
                            <span className= "ml-3" style={{color: "#E96317", fontSize: 26}}>|</span>
                            <Link to="/" className= "footer__link mt-2">
                                <span className="copy-right ml-xl-5 mr-lg-3">Terms of Use </span>
                            </Link>
                            <span className= "" style={{color: "#E96317", fontSize: 26}}>|</span>
                            <Link to="/" className= "footer__link mt-2">
                                <span className="copy-right ml-xl-5 mr-lg-3">Privacy Policy</span>
                            </Link>
                            <span className= "" style={{color: "#E96317", fontSize: 26}}>|</span>
                        </span>
                    </p>
                    <div className= "socialMediaIcons d-none d-sm-inline-flex">
                        <img src={FaceBook} className= "mr-3" alt= "Facebook_icon"/>
                        <img src={Twitter} className= "mr-3" alt= "Twitter_icon"/>
                        <img src={Instagram} className= "" alt= "Instagram_icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppFooter;
