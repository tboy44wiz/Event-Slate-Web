//  Importing Action Type String from the Redux Actions
import { SET_IS_LOGGED_IN, SAVE_USER_DATA } from "../actions/signUpAndLoginActions";


//  Create the Application Initial State.
const initialSignUpAndLoginState = {
    fullName: "",
    email: "",
    contact: "",
    biography: "",
    socialMedia: "",
    image: "",
    isLoggedIn: false,
};


export const signUpAndLoginReducer = (state = initialSignUpAndLoginState, action) => {
    //console.log(`ROUTE TYPE::: ${action.type}`);
    //console.log(`ROUTE PAYLOAD::: ${action.payload}`);
    //console.log(`ACTION DATA::: ${JSON.stringify(state)}`);
    switch (action.type) {

        case SET_IS_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload,
            };

        case SAVE_USER_DATA:
            return {
                ...state,
                fullName: action.payload.Names,
                email: action.payload.Email,
                contact: action.payload.Contact,
                biography: action.payload.Biography,
                socialMedia: action.payload.SocialMedia,
                image: action.payload.Image,
            };

        default: return state;
    }
};

