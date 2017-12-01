import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from 'pages/home'
import Categories from 'pages/categories'
import Layout from 'pages/layout'

const getRoute = () => (
  <Router>
    <div>
      <div>
        <Layout />
      </div>
      <Switch>
        <Route path='/home' component={Home}  />
        <Route path='/categories' component={Categories}  />
      </Switch>
    </div>
  </Router>
)

export default getRoute
