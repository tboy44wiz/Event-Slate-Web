import {applyMiddleware, compose, createStore} from "redux";

//  Import the "rootReducer" Function.
import rootReducer from "./rootReducer";
//import {signUpAndLoginReducer} from "./reducers/signUpAndLoginReducers";

//  Create the Redux Store and name it "store".
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true, traceLimit: 25 }))  || compose();
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware()),
);

export default store;