import React from 'react';

import '../IndividualDashBoard_Sass.scss';   //  Import the SCSS

import ProfilePix from "../../../assets/images/profile_pix.png";
import FaceBook from '../../../assets/images/icons/facebook_icon.png';
import Twitter from '../../../assets/images/icons/twitter_icon.png';
import Instagram from '../../../assets/images/icons/instagram_icon.png';

function MyAccountComp(props) {
    return (
    <div className="myAccountWrapper container">  {/* CARD WRAPPER */}
        <div className="myAccountInnerWrapper row mx-0 p-0">
            <div className="profileImageWrapper col-md-6 p-0">
                <img src={ ProfilePix } className="profileImage img-fluid" alt="Profile pix"/>
            </div>
            <div className="profileDetailWrapper col-md-6">
                <h3>Osondu Tochukwu</h3>
                <p>Full-Stack Developer</p>

                <div className="socialMedia">
                    <img src={ FaceBook } alt="Facebook"/>
                    <span>FaceBook</span>
                </div>
                <div className="socialMedia">
                    <img src={ Twitter } alt="Twitter"/>
                    <span>Twitter</span>
                </div>
                <div className="socialMedia">
                    <img src={ Instagram } alt="Instagram"/>
                    <span>Instagram</span>
                </div>

                <button type="submit" className="btn--custom btn mt-3 w-100 font-weight-bold">EDIT PROFILE</button>
            </div>
        </div>
    </div>

    );
}

export default MyAccountComp;