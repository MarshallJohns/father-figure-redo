import React from 'react'
import Landing from './Components/Landing/Landing'
import Home from './Components/Home/Home'
import { Switch, Route } from 'react-router-dom'

export default (
    <Switch>
        <Route exact path='/' component={Landing} />
        <Route path='/home' component={Home} />
    </Switch>
)