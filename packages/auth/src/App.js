import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import SignIn from './components/Signin';
import SignUp from './components/Signup';

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
    productionPrefix: 'au'
});

export default({history, onSignIn}) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/auth/signin/">
                            <SignIn onSignIn={onSignIn}/>
                        </Route>
                        <Route exact path="/auth/signup/">
                            <SignUp onSignIn={onSignIn}/>
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}