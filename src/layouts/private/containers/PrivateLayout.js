import React, { Component } from 'react'
import PrivateLayoutComponent from '../components'

class PrivateLayout extends Component {
  render() {
    const { handleLogout} = this.props
    return (
      <PrivateLayoutComponent handleLogout={handleLogout} />
    )
  }
}

export default PrivateLayout
