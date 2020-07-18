// Actions Variables
export const SAVE_SINGLE_INDIVIDUAL = "SAVE_SINGLE_INDIVIDUAL";
export const SHOW_LEFT_DRAWER_MENU = "SHOW_LEFT_DRAWER_MENU";
export const HIDE_LEFT_DRAWER_MENU = "HIDE_LEFT_DRAWER_MENU";
export const SHOW_HIDE_PROFILE_OPTION_DROPDOWN = "SHOW_HIDE_PROFILE_OPTION_DROPDOWN";


export const saveSingleUserData = (userData) => {
    return {
        type: SAVE_SINGLE_INDIVIDUAL,
        payload: userData,
    };
};

export const showLeftDrawerMenu = (isVisible) => {
    return {
        type: SHOW_LEFT_DRAWER_MENU,
        payload: isVisible,
    };
};

export const hideLeftDrawerMenu = (isVisible) => {
    return {
        type: HIDE_LEFT_DRAWER_MENU,
        payload: isVisible,
    };
};

export const showHideProfileOptionDropdown = (isVisible) => {
    return {
        type: SHOW_HIDE_PROFILE_OPTION_DROPDOWN,
        payload: isVisible,
    };
};