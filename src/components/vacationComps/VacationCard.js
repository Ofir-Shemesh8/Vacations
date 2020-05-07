import React from 'react';
import {Card, Button} from 'react-bootstrap';
import Moment from 'react-moment';

const vacationCard = (props) => {

    return(
        <Card style={{ width: '18rem', display: "inline-block", margin: "auto" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
            <Card.Title>{props.cardDest}</Card.Title>
            <Card.Text>
            {props.cardDesc}
            </Card.Text>
            <Card.Title>Price - ${props.cardPrice}</Card.Title>
            <Card.Text><Moment format="DD/MM/YYYY">{props.start}</Moment>- 
                       <Moment format="DD/MM/YYYY">{props.end}</Moment>
            </Card.Text>
            {props.admin ? <Button variant="danger" type="submit" className="btn btn-info" onClick={props.deleteHandler}>Remove vacation</Button>
             :<Button variant="primary" type="submit" className="btn btn-info">add Follow</Button>}
        </Card.Body>
        </Card>
    );
}

export default vacationCard;