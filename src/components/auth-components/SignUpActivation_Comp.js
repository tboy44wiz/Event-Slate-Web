import React from 'react';
import axios from 'axios';
import {toast} from "react-toastify";
import jwt_decode from 'jwt-decode';

import { individualSignUpActivationValidator, organizationSignUpActivationValidator } from '../../utils/yup_validator';

import EventSlateLogo from '../../assets/images/eventSlate_logo.png'
import PhoneIcon from '../../assets/images/icons/phone_icon.png';
import PasswordIcon from '../../assets/images/icons/password_icon.png';
import EyeOpenIcon from '../../assets/images/icons/eye_open_icon.png';
import EyeCloseIcon from '../../assets/images/icons/eye_close_icon.png';
//import PhotoIcon from '../../assets/images/icons/photo_icon.png';

//  Call th Toast Configuration method.
toast.configure();

class SignUpActivation_Comp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showPassword: false,
            showConfirmPassword: false,
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            imageFile: "",
            infoMessage: [],
        }
    };


    handleInputChange = (e) => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value,
            infoMessage: [],
        })
    };

    handleShowPassword = () => {
        this.setState({
            ...this.state, showPassword: !this.state.showPassword,
        })
    };
    handleShowConfirmPassword = () => {
        this.setState({
            ...this.state, showConfirmPassword: !this.state.showConfirmPassword,
        })
    };
    uploadFile = (e) => {
    }


    defaultToast= (message) => {
        return toast(message, {position: "top-center", pauseOnHover: true,});
    }
    successToast= (message) => {
        return toast.success(message, {position: "top-center", pauseOnHover: true, autoClose: 10000,});
    }
    warningToast= (message) => {
        return toast.warn(message, {position: "top-center", pauseOnHover: true, autoClose: 10000,});
    }
    errorToast= (message) => {
        return toast.error(message, {position: "top-center", pauseOnHover: true, autoClose: 10000,});
    }

    handleActivationSubmission = async (event) => {
        event.preventDefault();

        //  Clear the state infoMessage
        this.setState({
            infoMessage: [],
            showPassword: false,
            showConfirmPassword: false,
        });

        /*  Get the "activationToken" from the URL params which comes with the props and Destructure the content of the
        *   decoded "activationToken".
        */
        const activationToken = this.props.match.params.activationToken;
        const { SelectedUser_Type } = jwt_decode(activationToken);

        //  Destructure the content of the state.
        const {phoneNumber, password, confirmPassword } = this.state;

        //  Validate the form data which is the "reqBody" using yup
        try {
            const value = (SelectedUser_Type === "individual") ? (
                await individualSignUpActivationValidator.validate(
                    JSON.stringify({
                        Individuals_ContactNumber: phoneNumber,
                        Individuals_Password: password,
                        Individuals_PasswordConfirm: confirmPassword,
                        //Individuals_Image: imageFile,
                    })
                )
            ) : (
                await organizationSignUpActivationValidator.validate(
                    JSON.stringify({
                        Organizations_ContactNumber: phoneNumber,
                        Organizations_Password: password,
                        Organizations_PasswordConfirm: confirmPassword,
                        //Individuals_Image: imageFile,
                    })
                )
            )

            //  Make network call to the EndPoint
            axios({
                method: "post",
                url: (SelectedUser_Type === "individual") ? (
                    `http://localhost:5000/api/individuals/signup/activate/${activationToken}`
                ) : (
                    `http://localhost:5000/api/organizations/signup/activate/${activationToken}`
                ),
                data: value,
                headers: { 'Content-Type': 'application/json' },
            })
                .then((response) => {
                    //console.log(response.data);
                    if (response.data.Status === false) {
                        return this.errorToast(response.data.Message);
                    }
                    return this.successToast(response.data.Message);
                })
                .catch((error) => {
                    //console.log(error);
                    this.errorToast(error.message);
                });

            //  Clear the Form fields
            this.setState({
                ...this.state,
                phoneNumber: "",
                password: "",
                confirmPassword: "",
                imageFile: "",
            });
        }
        catch (error) {
            this.setState({
                ...this.state, infoMessage: this.state.infoMessage.concat(error.errors[0]),
            });
            this.warningToast(this.state.infoMessage[0]);
        }
    }

    render() {
        const { showPassword, showConfirmPassword, phoneNumber, password, confirmPassword, imageFile, infoMessage } = this.state;
        return (
            <div className="container-fluid p-0">
                <div className="row mx-0 my-5 py-5">
                    {/*======= LEFT COLUMN ======*/}
                    <div className="col-sm-12 col-md-6">
                        <div className="text-light">
                            <img src={EventSlateLogo} className="" alt="Logo_Image" width="64"/>
                            <p className="we_will_help_you pt-4">We will help you <span className="font-weight-bold">Identify your needs.</span>
                            </p>
                            <br/>
                            <div className="">
                                <p>Plan your activities and control your Events with ease</p>
                            </div>
                        </div>
                    </div>

                    {/*======= RIGHT COLUMN ======*/}
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center text-left">
                        <div className="form_container">
                            <form onSubmit={this.handleActivationSubmission}>
                                <h4 className="text-center font-weight-bolder mb-1">Welcome Back</h4>
                                <p className="text-center text_small">Please complete your signup</p>

                                {/*<p>{phoneNumber} {password} {confirmPassword} {imageFile}</p>*/}
                                <p className= "small text-danger my-0">{infoMessage}</p>
                                <div className="input_box">
                                    <img src={PhoneIcon} className="input_icons" alt="User_Icon"/>
                                    <input type="tel" name="phoneNumber"
                                           value={phoneNumber}
                                           onChange={ this.handleInputChange }
                                           className="form_input bg-transparent font-weight-bold"
                                           placeholder="Contact Number"
                                    />
                                </div>

                                <div className="input_box">
                                    <img src={PasswordIcon} className="input_icons" alt="User_Icon"/>
                                    <input type={(showPassword) ? "text" : "password"} name="password"
                                           value={password}
                                           onChange={ this.handleInputChange }
                                           className="form_input bg-transparent font-weight-bold"
                                           placeholder="Password"
                                    />
                                    <img src={(showPassword) ? EyeOpenIcon : EyeCloseIcon} onClick={ this.handleShowPassword } className="input_icon_suffix myCursor" height="35" alt="User_Icon"/>
                                </div>

                                <div className="input_box">
                                    <img src={PasswordIcon} className="input_icons" alt="User_Icon"/>
                                    <input type={(showConfirmPassword) ? "text" : "password"} name="confirmPassword"
                                           value={confirmPassword}
                                           onChange={ this.handleInputChange }
                                           className="form_input bg-transparent font-weight-bold"
                                           placeholder="Confirm Password"
                                    />
                                    <img src={(showConfirmPassword) ? EyeOpenIcon : EyeCloseIcon} onClick={ this.handleShowConfirmPassword } className="input_icon_suffix myCursor" height="35" alt="User_Icon"/>
                                </div>

                                <div className="input_box overflow-hidden" >
                                    {/*<img src={PhotoIcon} className="input_icons" alt="User_Icon"/>*/}
                                    <input type="file" name="imageFile" accept="image/*"
                                           value={imageFile}
                                           onChange={ this.handleInputChange }
                                           className="form_input file_upload m-1 bg-transparent font-weight-bold"
                                           onClick={this.uploadFile}
                                    />
                                </div>

                                <button type="submit" className="btn_custom btn mt-3 w-100 font-weight-bold">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpActivation_Comp;