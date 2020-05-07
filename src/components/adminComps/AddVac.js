import React from 'react'
import Popup from "reactjs-popup";
import {Form, Button } from 'react-bootstrap'

export default function AddVac(props) {
    return (
        <div>
            <Popup trigger={<button className="btn btn-success" id="adminbtn"> Add Vacation</button>} position="bottom">
                <div>
                <Form onSubmit={props.submit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Vacation description</Form.Label>
    <Form.Control type="text" placeholder="Description" id="Description"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Vacation destanation</Form.Label>
    <Form.Control type="text" placeholder="Destanation" id="Destanation"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Vacation image url</Form.Label>
    <Form.Control type="text" placeholder="Image url" id="Image"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Forth</Form.Label>
    <Form.Control type="date" placeholder="" id="forth"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Back</Form.Label>
    <Form.Control type="date" placeholder="" id="back"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="Price" id="price"/>
  </Form.Group>
  <Button variant="primary" type="submit" className="btn btn-info">submit</Button>
</Form>
                </div>
            </Popup>
        </div>
    )
}
