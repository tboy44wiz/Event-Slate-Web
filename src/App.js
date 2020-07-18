import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.scss';

import AppHeader from "./views-containers/app-haeder-and-footer/AppHeader";
import AppFooter from "./views-containers/app-haeder-and-footer/AppFooter";
import IndexPageContainer from "./views-containers/IndexPageContainer";
import SignUpAndLogin_Comp from "./components/auth-components/SignUpAndLogin_Comp";
import SignUpActivation_Comp from "./components/auth-components/SignUpActivation_Comp";
import UsersContainer from "./views-containers/UserContainer";

function App() {
  return (
      <BrowserRouter>
        <div className="App mh-100">
            <div className="mainContainer p-0">
                <header>
                    <AppHeader />
                </header>

                <div className="appBodyContainer">
                    <Route path="/" exact component={ IndexPageContainer } />
                    <Route path="/:routeName" exact component={ UsersContainer } />

                    {/* AUTH Routes */}
                    <Route exact path= "/auth/:routeName" component={ SignUpAndLogin_Comp }  />
                    <Route exact path= "/auth/activate/:activationToken" component={ SignUpActivation_Comp } />
                    <Route exact path= "/auth/activate" component={ SignUpActivation_Comp } />
                </div>

                <footer>
                    <AppFooter />
                </footer>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
