import React from 'react'
import {Form, Button } from 'react-bootstrap'
export default function RegisterForm(props){
return(
<Form onSubmit={props.submit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Username</Form.Label>
    <Form.Control type="text" placeholder="Username" id="userName"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" placeholder="Password" id="password"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>First name</Form.Label>
    <Form.Control type="text" placeholder="First name" id="fname"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Last name</Form.Label>
    <Form.Control type="text" placeholder="Last name" id="lname"/>
  </Form.Group>
  <Button variant="primary" type="submit" className="btn btn-info">submit</Button>
</Form>
)}
