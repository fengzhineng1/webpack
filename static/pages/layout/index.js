import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './index.less'

class Layout extends Component {
  render () {
    return (
      <div className="home">
        <div className="home-title">
          云淡风轻
        </div>
        <div className='home-menu'>        
          <div>
            <Link 
              to='/home'
              className='home-menu-link'
              activeClassName='home-menu-active'
            >
              home
            </Link>
          </div>
          <div>
           <Link 
              to='/categories'
              className='home-menu-link'
              activeClassName='home-menu-link'
            >
              categories
            </Link>
          </div>   
          <div>
            <Link 
              to='/home'
              className='home-menu-link'
              activeClassName='home-menu-link'
            >
              home
            </Link>
          </div>   
          <div>
            <Link 
              to='/home'
              className='home-menu-link'
              activeClassName='home-menu-link'
            >
              home
            </Link> 
         </div> 
      </div>
      </div>
    )
  }
}

export default Layout

