import React, { Component } from 'react'
import {CustomMenuComponent } from '../components'
import withRouter from '../../../../utils/withRouterHOC'

class CustomMenu extends Component {
  
  navigateTo = (menuItem) =>{
    console.log("menuItem", menuItem)
    const {navigate} = this.props
    navigate(`/${menuItem.key}`)
  }
  
  render() {
    return (
      <CustomMenuComponent navigateTo={this.navigateTo} />
    )
  }
}

export default withRouter(CustomMenu)
