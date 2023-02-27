import React, { Component } from 'react'
import PublicLayoutComponent from '../components'

class PublicLayout extends Component {

  render() {
    const {handleLogin} = this.props
    return (
      <PublicLayoutComponent handleLogin={handleLogin} />
    )
  }
}

export default PublicLayout;
