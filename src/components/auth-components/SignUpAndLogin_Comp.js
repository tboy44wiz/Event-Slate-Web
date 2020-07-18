import React from 'react';
import {Redirect, withRouter} from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

import './SignUpAndLogin_Sass.scss';
import 'react-toastify/dist/ReactToastify.css';

import { setIsLoggedIn, saveLoggedInUserData, } from "../../redux/actions/signUpAndLoginActions";

import {
    individualLoginValidator,
    individualSignUpValidator,
    organizationLoginValidator,
    organizationSignUpValidator
} from '../../utils/yup_validator';

import UserIcon from '../../assets/images/icons/user_icon.png';
import EmailIcon from '../../assets/images/icons/email_icon.png';
import PasswordIcon from '../../assets/images/icons/password_icon.png';
import EyeOpenIcon from '../../assets/images/icons/eye_open_icon.png';
import EyeCloseIcon from '../../assets/images/icons/eye_close_icon.png';
import GoogleIcon from '../../assets/images/icons/google_icon.png';
import FacebookIcon2 from '../../assets/images/icons/facebook_icon2.png';

//  Call th Toast Configuration method.
toast.configure();

class SignUpAndLogin_Comp extends React.Component {
    constructor(props, {match}) {
        super(props);
        this.state = {
            showLoginForm: true,
            showSignUpForm: false,
            showPassword: false,
            selectedUserOption: "",
            fullName: "",
            email: "",
            password: "",
            infoMessage: [],
            currentLink: "login",
        }
    };

    componentDidMount() {
        this.checkTokenExpiration();
        console.log(this.props);
    };

    checkTokenExpiration = () => {
        //  Get content of the Browsers Local Storage.
        const savedLoginData = JSON.parse(localStorage.getItem("loginData"));

        //  Check if "savedLoginData" exist.
        if (!savedLoginData) {
            return console.log("Local Storage is Empty...");
        }

        //  Decode the Token.
        const decodedToken = jwt_decode(savedLoginData.Token, {complete: true});

        //  Get the current time.
        const currentTime = new Date() / 1000;

        //  Compare the current time with the expiration time in the decoded token.
        if (decodedToken.exp > currentTime) {
            this.props.setLoggedIn(true);
        }
        else {
            this.props.setLoggedIn(false);
        }
    };

    showLogin = () => {
        this.setState({
            currentLink: "login",
            showPassword: false,
            selectedUserOption: "",
            email: "",
            password: "",
            infoMessage: [],
        });
        this.props.history.replace("/auth/login");
    };
    showSignUp = () => {
        this.setState({
            currentLink: "signup",
            selectedUserOption: "",
            fullName: "",
            email: "",
            infoMessage: [],
        });
        this.props.history.replace("/auth/signup");
    };


    handleInputChange = (e) => {
        this.setState({
            ...this.state, [e.target.name]: e.target.value,
            infoMessage: [],
        });
    };
    handleSelectedUserOption = (e) => {
        this.setState({
            ...this.state,
            selectedUserOption: e.target.value,
            infoMessage: [],
        });
    };
    handleShowPassword = () => {
        this.setState({
            ...this.state,
            showPassword: !this.state.showPassword,
        })
    };


    successToast= (message) => {
        return toast.success(message, {position: "top-center", pauseOnHover: true, autoClose: 10000,});
    }
    warningToast= (message) => {
        return toast.warn(message, );
    }
    errorToast= (message) => {
        return toast.error(message, {position: "top-center", pauseOnHover: true, autoClose: 10000,});
    }

    handleSignUpSubmission = async (event) => {
        event.preventDefault();

        //  Clear the state infoMessage
        this.setState({
            ...this.state,
            infoMessage: "",
            showPassword: false,
        });

        const { selectedUserOption, fullName, email } = this.state;

        //  Check if User type radio option is selected
        if (selectedUserOption === "") {
            this.setState({
                ...this.state, infoMessage: (this.state.infoMessage.includes("Please select a user type.")) ? (
                    this.state.infoMessage
                ) : (
                    this.state.infoMessage.concat("Please select a user type.")
                ),
            }, () => {
                this.warningToast(this.state.infoMessage[0]);
            });
            return;
        }

        //  Validate the form data which is the "reqBody" using yup and then call the API.
        try {
            const value = (selectedUserOption === "individual") ? (
                await individualSignUpValidator.validate(
                    {
                        SelectedUser_Type: selectedUserOption,
                        Individuals_Name: fullName,
                        Individuals_Email: email,
                    },
                )
            ) : (
                await organizationSignUpValidator.validate(
                    {
                        SelectedUser_Type: selectedUserOption,
                        Organizations_Name: fullName,
                        Organizations_Email: email,
                    },
                )
            );

            //  Make network call to the EndPoint
            axios({
                method: "post",
                url: (selectedUserOption === "individual") ? (
                    `http://localhost:5000/api/individuals/signup`
                ) : (
                    `http://localhost:5000/api/organizations/signup`
                ),
                data: value,
                headers: { 'Content-Type': 'application/json' },
            })
                .then((response) => {
                    //console.log(response.data);
                    if (response.data.Status === false) {
                        return this.errorToast(response.data.Message);
                    }
                    this.successToast(response.data.Message);
                    //this.props.saveUser(response.data);
                })
                .catch((error) => {
                    this.errorToast(error.message);
                });

            //  Clear the Form fields
            this.setState({
                ...this.state,
                selectedUserOption: "",
                fullName: "",
                email: "",
            });
        }
        catch (error) {
            this.setState({
                ...this.state, infoMessage: this.state.infoMessage.concat(error.errors[0]),
            });
            this.warningToast(this.state.infoMessage);
        }
    };
    handleLoginSubmission = async (event) => {
        event.preventDefault();

        //  Clear the state infoMessage
        this.setState({
            ...this.state,
            infoMessage: "",
            showPassword: false,
        });

        const { selectedUserOption, email, password } = this.state;

        //  Check if User type radio option is selected
        if (selectedUserOption === "") {
            this.setState({
                ...this.state, infoMessage: (this.state.infoMessage.includes("Please select a user type.")) ? (
                    this.state.infoMessage
                ) : (
                    this.state.infoMessage.concat("Please select a user type.")
                ),
            }, () => {
                this.warningToast(this.state.infoMessage[0]);
            });
            return;
        }

        //  Validate the form data which is the "reqBody" using yup and then call the API.
        try {
            //  Check the selected individual to be able to know which form data to validate.
            const value = (selectedUserOption === "individual") ? (
                await individualLoginValidator.validate(
                    {
                        Individuals_Email: email,
                        Individuals_Password: password,
                    },
                )
            ) : (
                await organizationLoginValidator.validate(
                    {
                        Organizations_Email: email,
                        Organizations_Password: password,
                    }
                )
            );

            //  Make network call to the EndPoint
            axios({
                method: "post",
                url: (selectedUserOption === "individual") ? (
                    `http://localhost:5000/api/individuals/login`
                ) : (
                    `http://localhost:5000/api/organizations/login`
                ),
                data: value,
                headers: { 'Content-Type': 'application/json' },
            })
                .then((response) => {
                    if (response.data.Status === false) {
                        return this.errorToast(response.data.Message);
                    }
                    //  Save to the Browser Local Storage or Session.
                    localStorage.setItem("loginData", JSON.stringify({
                        Status: response.data.Status,
                        Token: response.data.Token,
                    }));

                    //  Save to the Redux Store.
                    this.props.saveUserData(response.data.Individual);

                    //  Check for Login Token and then set the Login status.
                    if (response.data.Status === true) {
                        this.props.history.push("/home");
                    }
                    //this.checkTokenExpiration();
                    this.successToast(response.data.Message);
                })
                .catch((error) => {
                    console.log(error);
                    this.errorToast(error.message);
                });

            //  Clear the Form fields.
            this.setState({
                ...this.state,
                selectedUserOption: "",
                email: "",
                password: "",
            })
        }
        catch (error) {
            this.setState({
                ...this.state, infoMessage: this.state.infoMessage.concat(error.errors[0]),
            });
            this.warningToast(this.state.infoMessage);
        }
    };



    render() {
        const { isLoggedIn } = this.props;
        const { currentLink, selectedUserOption, showPassword, fullName, email, password, infoMessage } = this.state;

        if (isLoggedIn) {
            return <Redirect to={"/home"} />
        }

        return (
            <div className="SignUpAndLoginWrapper">
                {/*=======  ======*/}
                <div className="formContainer">
                    {
                        (currentLink === "login") ? (
                            /*====== Login Form =======*/
                            <form onSubmit={this.handleLoginSubmission } >
                                <h4 className="form---heading text-center font-weight-bolder mb-1">Login</h4>
                                <p className="form---sub--heading text-center small">Keep connected? Login with your personal details</p>
                                <p className="mt-4 small">I am an:
                                    <label className="mx-3">
                                        <input type="radio" name="userType"
                                               value="individual"
                                               onChange={ this.handleSelectedUserOption }
                                               checked={ selectedUserOption === "individual" }
                                               className="mr-1"
                                        />
                                        Individual
                                    </label>
                                    <label className="ml-1">
                                        <input type="radio" name="userType"
                                               value="organization"
                                               onChange={ this.handleSelectedUserOption }
                                               checked={ selectedUserOption === "organization" }
                                               className="mr-1"
                                        />
                                        Organization
                                    </label>
                                </p>


                                <p className= "small text-danger my-0">{infoMessage}</p>
                                <div className="inputBox">
                                    <img src={ EmailIcon } className="input--icons" alt="User_Icon"/>
                                    <input type="text" name="email"
                                           value={email}
                                           onChange={ this.handleInputChange }
                                           className="form--input bg-transparent font-weight-bold"
                                           placeholder="Email"
                                    />
                                </div>
                                <div className="inputBox">
                                    <img src={ PasswordIcon } className="input--icons" alt="User_Icon"/>
                                    <input type={ (showPassword) ? "text" : "password" } name="password"
                                           value={ password }
                                           onChange={ this.handleInputChange }
                                           className="form--input bg-transparent font-weight-bold"
                                           placeholder="Password"
                                    />
                                    <img src={ (showPassword) ? EyeOpenIcon : EyeCloseIcon } onClick={ this.handleShowPassword } className="input--icons--suffix myCursor" alt="User_Icon"/>
                                </div>
                                <button type="submit" className="btn--custom btn mt-3 w-100 font-weight-bold">LOGIN</button>
                                <p className="small mt-3 mb-0">Don't have an account? &nbsp;
                                    <span onClick={ this.showSignUp } className="already--signedUp font-weight-bold">SignUp</span>
                                </p>
                            </form>
                        ) : (
                            /*====== SignUp Form =======*/
                            <form onSubmit={this.handleSignUpSubmission} >
                                <h4 className="text-center font-weight-bolder mb-1">SignUp</h4>
                                <p className="form---sub--heading text-center small">Give us your name and email address.</p>
                                <p className="mt-4 small">I am an:
                                    <label className="mx-3">
                                        <input type="radio" name="userType"
                                               value="individual"
                                               onChange={ this.handleSelectedUserOption }
                                               checked={ selectedUserOption === "individual" }
                                               className="mr-1"
                                        />
                                        Individual
                                    </label>
                                    <label className="ml-1">
                                        <input type="radio" name="userType"
                                               value="organization"
                                               onChange={ this.handleSelectedUserOption }
                                               checked={ selectedUserOption === "organization" }
                                               className="mr-1"
                                        />
                                        Organization
                                    </label>
                                </p>

                                <p className= "small text-danger my-0">{ infoMessage }</p>
                                <div className="inputBox">
                                    <img src={ UserIcon } className="input--icons" alt="User_Icon"/>
                                    <input type="text" name="fullName"
                                           value={ fullName }
                                           onChange={ this.handleInputChange }
                                           className="form--input bg-transparent font-weight-bold"
                                           placeholder="Enter FullName"
                                    />
                                </div>
                                <div className="inputBox">
                                    <img src={ EmailIcon } className="input--icons" alt="User_Icon"/>
                                    <input type="email" name="email"
                                           value={ email }
                                           onChange={ this.handleInputChange }
                                           className="form--input bg-transparent font-weight-bold"
                                           placeholder="Email"
                                    />
                                </div>
                                <button type="submit" className="btn--custom btn w-100 font-weight-bold">GET STARTED</button>
                                <p className="mt-3 text-center">or continue with:</p>
                                <div className="d-flex justify-content-between">
                                    <button className="btn--custom--outline">
                                        <img src={ GoogleIcon } className="mr-3" alt="Google_Icon"/>
                                        google
                                    </button>
                                    <button className="btn--custom--outline">
                                        <img src={ FacebookIcon2 } className="mr-3" alt="Google_Icon"/>
                                        facebook
                                    </button>
                                </div>
                                <p className="sma mt-3 mb-0">Already have an account? &nbsp;
                                    <span onClick={ this.showLogin } className="already--signedUp font-weight-bold">Login</span>
                                </p>
                            </form>
                        )
                    }
                </div>
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setLoggedIn: (isLoggedIn) => {
            dispatch(setIsLoggedIn(isLoggedIn));
        },
        saveUserData: (userData) => {
            dispatch(saveLoggedInUserData(userData));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SignUpAndLogin_Comp));