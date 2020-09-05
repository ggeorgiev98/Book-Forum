import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home-page';
import LoginPage from './pages/login-page'
import UserContext from './context';


const Navigation = () => {

    const context = useContext(UserContext);
    const loggedIn = context.user && context.user.loggedIn;

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/login'>
                    {loggedIn ? (<Redirect to='/'/>) : (<LoginPage/>)}
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;