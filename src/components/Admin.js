import React, { Component } from 'react'
import AddVac from './adminComps/AddVac'
import {Link} from 'react-router-dom'
import VacationCard from './vacationComps/VacationCard';

export default class Admin extends Component {
    constructor(){
        super();
        this.state = {
            firstName:"",
            lastName:"",
            userName:"",
            password:"",
            vacations: [],
            isAdmin: true,
            vacationId: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/admin/admin' ,{ 
            method: 'GET',
            headers: {
                'Content-Type': 'applications/json'}
            }).then(response => response.json())
            .then(data => {
                this.setState({vacations: data})
                console.log(data)
            });
    }

    handleSubmit(e) {
        // e.preventDefault();
        let Description = document.querySelector('#Description').value
        let Destanation = document.querySelector('#Destanation').value
        let Image = document.querySelector('#Image').value
        let forth = document.querySelector('#forth').value
        let back = document.querySelector('#back').value
        let price = document.querySelector('#price').value

        let obj = { Description, Destanation, Image, forth, back, price }
        let vacJson = JSON.stringify(obj)
        console.log(vacJson)
        fetch('http://localhost:3001/admin/addvacation', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: vacJson
        }).then(response => {
            console.log(response)
            if (!response.ok) {
                throw new Error('HTTP ERROR' + response.status)
            } else {
                return response.text()
            }
        }).then(data => {
            // this.props.history.push('/admin')
        })
    }

    deleteHandler(key) { 
        // e.preventDefault();
        let id = key;
        const obj = {id};
        let regJson = JSON.stringify(obj)
        console.log("from regjson "+ regJson)
        fetch('http://localhost:3001/admin/delvacation', {
            method: 'DELETE',
            headers: {
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json'
            },
            // mode: 'no-cors',
            body: regJson
    }).then(response => {
        console.log(response)
        if (!response.ok) {
            throw new Error('HTTP ERROR' + response.status)
        }
    }).then(data => {
        // this.props.history.push('/admin')
    })
}

    render() {
        return (
            <>
                <h4>Hello dear admin</h4>
                <Link to="/login">
                <button className="btn btn-danger" id="userbtn">logOut</button>     
                </Link>         
                <AddVac submit={this.handleSubmit}/>
                {this.state.vacations.map(vacation => (
                    <VacationCard
                    key={vacation.vacation_id} 
                    imgSrc={vacation.vacation_image} 
                    cardDest={vacation.vacation_destanation} 
                    cardDesc={vacation.vacation_description} 
                    cardPrice={vacation.vacation_price}
                    start={vacation.vacation_start}
                    end={vacation.vacation_end}
                    admin={this.state.isAdmin}
                    deleteHandler={() => this.deleteHandler(vacation.vacation_id)}
                    />
                ))}

            </>
        )
    }
}
