import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Page from 'bundle-loader?lazy&name=page!pages'
import Page2 from 'bundle-loader?lazy&name=page2!pages/page2'
import Bundle from './bundle'

const Loading = () => {
  return <div>Loading</div>
}

const createComponent = (component) => (
  <Bundle load={component}>
    {
      (Component) => Component ? <Component /> : <Loading />
    }
  </Bundle>
)

const getRoute = () => (
  <Router>
    <div>
      <div>
        <div><Link to='/pages'>page</Link></div>
        <div><Link to='/pages2'>page2</Link></div>
      </div>
      <Switch>
        <Route path='/pages' component={createComponent(Page)}  />
        <Route path='/pages2' component={createComponent(Page2)}  />
      </Switch>
    </div>
  </Router>
)

export default getRoute
