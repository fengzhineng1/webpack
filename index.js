
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import getRouter from './router/router.js'
import './index.less'

const app = document.createElement('div')
document.body.appendChild(app)

const renderWithHotLoader = (getRouters) => {
  ReactDOM.render(
    <AppContainer>
      {getRouters()}
    </AppContainer>, app)
}
renderWithHotLoader(getRouter)
if (module.hot) {
  module.hot.accept('./router/router.js', () => {
    const getRouter = require('./router/router').default
    renderWithHotLoader(getRouter())
  })
}
ReactDOM.render(getRouter(), app)
