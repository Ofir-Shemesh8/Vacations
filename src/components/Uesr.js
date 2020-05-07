import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import VacationCard from './vacationComps/VacationCard';

export default class Uesr extends Component {
    state = {
        vacations: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/users/user' ,{ 
            method: 'GET',
            headers: {
                'Content-Type': 'applications/json'}
            }).then(response => response.json())
            .then(data => {
                this.setState({vacations: data})
                console.log(data)
            });
    }

    render() {
        return (
            <div id="user">
                <div>
                    <nav>
                        <h4 id="userP">Welcome Back- {this.props.name}</h4>
                        <Link to="/login">
                        <button className="btn btn-danger" id="userbtn">logOut</button>
                        </Link>
                    </nav>
                </div>
                {this.state.vacations.map(vacation => (
                    <VacationCard
                    key={vacation.vacation_id} 
                    imgSrc={vacation.vacation_image} 
                    cardDest={vacation.vacation_destanation} 
                    cardDesc={vacation.vacation_description} 
                    cardPrice={vacation.vacation_price}
                    start={vacation.vacation_start}
                    end={vacation.vacation_end}
                    />
                ))}
            </div>
        );
    }
}

