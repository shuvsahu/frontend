import React, { Component } from 'react'
import { PublicLayout, PrivateLayout } from "../layouts"
import { postAPI } from '../utils/api'

class Navigation extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         token:localStorage.getItem('token')
      }
    }

    componentDidMount(){
        postAPI("http://localhost:8080/user/login",{
            "username": "shubham@gmail.com",
            "password": "1234"
        }).then((response)=>{
            const {data:{data}} = response
            console.log("This is login response",data.accessToken)
        }).catch((error)=>{})
    }
    
    login = (data)=>{
        console.log("This is test",data)

    //    this.setState({token:data.token})
    //    localStorage.setItem('token',data.token)
    }

    
    
    logout = ()=>{
        localStorage.removeItem('token')
        this.setState({token:null})
    }

    render() {
        const { token } = this.state
        return token?<PrivateLayout handleLogout={this.logout} />:<PublicLayout handleLogin={this.login} />
    }
}

export default Navigation