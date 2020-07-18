//  Action variables
export const SET_IS_LOGGED_IN = "SET_IS_LOGGED_IN";
export const SAVE_USER_DATA = "SAVE_USER_DATA";


/*  Create "Action Creators. This is a JavaScript Function that returns an "Action" which is a JavaScript Object.
*   This Object MUST have a "type" property. It might also have other optional properties like the "payload".
*/

export const setIsLoggedIn = (isLoggedIn) => {
    return {
        type: SET_IS_LOGGED_IN,
        payload: isLoggedIn,
    };
};
export const saveLoggedInUserData = (userData) => {
    return {
        type: SAVE_USER_DATA,
        payload: userData,
    };
};


