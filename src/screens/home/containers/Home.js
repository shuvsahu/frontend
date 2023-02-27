import React, { Component } from 'react'
import { useLocation } from 'react-router'
import withRouter from '../../../utils/withRouterHOC'
import { HomeComponent } from '../components'

class Home extends Component {
    // componentDidMount(){
    //     this.props.handleLogin("This is a login")
    // }
    render() {
        // console.log("all the props",this.props)
        return (
            <HomeComponent />
        )
    }
}

export default Home
