import { combineReducers } from "redux";
import { signUpAndLoginReducer } from "./reducers/signUpAndLoginReducers";
import { dashBoardReducer } from "./reducers/dashBoardReducer";


const rootReducer = combineReducers({
    signUpAndLogin: signUpAndLoginReducer,
    dashBoard: dashBoardReducer,
});

export default rootReducer;