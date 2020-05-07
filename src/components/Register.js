import React, { Component } from 'react'
import RegisterForm from './registerComps/RegisterForm'
import {Link} from 'react-router-dom'

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: ""
        }
    }

    handleSubmit(e) {

        let userName = document.querySelector('#userName').value
        let password = document.querySelector('#password').value
        let fname = document.querySelector('#fname').value
        let lname = document.querySelector('#lname').value

        let obj = { userName, password, fname, lname }
        let regJson = JSON.stringify(obj)
        fetch('http://localhost:3001/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: regJson
        }).then(response => {
            if (!response.ok) {
                throw new Error('HTTP ERROR' + response.status)
            } else {
                return response.text()
            }
        }).then(data => {
            console.log(data)
        })

    }

    render() {
        return (
            <>


                <RegisterForm submit={this.handleSubmit} />

                <p>Allready a member? <Link to="login">Login</Link>
                </p>
            </>
        )
    }
}
