import React from 'react'
import {Form, Button } from 'react-bootstrap'

export default function LoginForm(props){
    return (
<Form onSubmit={props.submit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" id="userName"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" id="password"/>
  </Form.Group>
  
  <Button variant="primary" type="submit" className="btn-primary">submit</Button>
</Form>


    )
}