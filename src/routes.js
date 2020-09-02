import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/main'
import Techno from './pages/Technologys'
import Login from './pages/loginPage'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/products/:id' component={Techno} />
            <Route exact path='/login' component={Login} />
        </Switch>
    </BrowserRouter>
)

export default Routes