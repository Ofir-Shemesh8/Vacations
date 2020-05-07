import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'

// import {connect} from 'react-redux'

import LoginForm from './loginComps/LoginForm'


export default class Login extends Component {
    
    state = {
        redirect: false,
        isAdmin: false,
        username: null
      }

      
handleLogin = e =>{
    e.preventDefault();
    let userName = document.querySelector('#userName').value
    let password = document.querySelector('#password').value
    if(userName === "a") {
        this.setState({isAdmin: true});
    }
    this.setState({username: userName});
    let obj = {userName, password}
    console.log(obj)
    let regJson = JSON.stringify(obj)
fetch('http://localhost:3001/users/login',{
    method: 'POST',
    headers:{
        'Content-Type' : 'application/json'
    },
    body: regJson
}).then(response =>{
if(!response.ok){
    throw new Error ('HTTP ERROR' + response.status)
} else if(response.status === 200){
        this.setRedirect();
    return response.text()
}
}).then(data =>{
    console.log("from.then" + data)
})

}
setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
        if(!this.state.isAdmin) {
            return <Redirect to='/user' name={this.state.username} /> 
        } else {
            return <Redirect to='/admin' />
        }
    }
  }

    render() {
        return (
            <>
            {this.renderRedirect()}
           <LoginForm submit={this.handleLogin} name={this.state.username}/>
           <p>Want to be part of our community? <Link to="/register">Register</Link>
           </p>
           </>
        )
    }
}


