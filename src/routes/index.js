import React from 'react'
import { Route, IndexRoute } from 'react-router'
import WelcomeHome from '../components/WelcomeHome.js'
import TestIncrementor from '../components/TestIncrementor'

const Routes = (
    <Route path="/">
        <IndexRoute component={WelcomeHome} />
        <Route path="increment" component={TestIncrementor} />
    </Route>
);

export default Routes
