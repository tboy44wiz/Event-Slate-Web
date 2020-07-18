import { SHOW_LEFT_DRAWER_MENU, HIDE_LEFT_DRAWER_MENU, SHOW_HIDE_PROFILE_OPTION_DROPDOWN } from '../actions/dashBoardActions'
//SAVE_SINGLE_INDIVIDUAL

const initialDashBoardState = {
    fullName: "",
    email: "",
    contact: "",
    biography: "",
    socialMedia: "",
    image: "",
    isLeftDrawerActive: true,
    isShowHideProfileOptionDropdownActive: false,
};

export const dashBoardReducer = (state = initialDashBoardState, action) => {
    switch (action.type) {
        case SHOW_LEFT_DRAWER_MENU:
            return {
                ...state,
                isLeftDrawerActive: action.payload,
            };

        case HIDE_LEFT_DRAWER_MENU:
            return {
                ...state,
                isLeftDrawerActive: action.payload,
            };

        case SHOW_HIDE_PROFILE_OPTION_DROPDOWN:
            return {
                ...state,
                isShowHideProfileOptionDropdownActive: action.payload,
            }

        default:
            return state;
    }
};