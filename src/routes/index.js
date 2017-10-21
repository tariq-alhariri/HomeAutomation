import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import Signup from './Signup';

export default () => (
    <Router>
        <Scene Key="root">
            <Scene
                Key="Login"
                component={Login}
                title="login page"
                hideNavBar
            />
            <Scene
                Key="Signup"
                component={Signup}
                initial={true}
                title="signup page "
                hideNavBar
            />
        </Scene>
    </Router>
);
