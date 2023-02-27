import React, { Component } from 'react'
import { LoginComponent } from "../components";

class Login extends Component {
  render() {
    const {handleLogin} = this.props;
    return (
      <LoginComponent handleLogin={handleLogin} />
    )
  }
}

export default Login
