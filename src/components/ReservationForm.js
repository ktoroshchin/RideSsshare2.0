import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createReservation } from '../actions/createReservation';
import { firestoreConnect } from 'react-redux-firebase';
import { Dropdown, Form, Input, Button } from 'semantic-ui-react';
class ReservationForm extends Component {
    state = {
        driver_id:'',
        name:'',
        email: '',
        phone_number: '',
        destination: '',
        departure_from: '',
        departure_time: '',
        departure_date: '',
        number_of_passengers: '',
        comments: ''
    }

    handleInputChange = (e,{value, name}) => {
        this.setState({
            [name]: value
        })
    }

    // handleDriverChoice = (e, {value, name}) => {
    //     console.log(e.target)
    //     this.setState({
    //         [name]: value
    //     })   
    // }

    handleSubmit = (e) => { 
        e.preventDefault()
        this.props.createReservation(this.state)
    }

    renderDrivers = () => {
        const { users } = this.props;
        const options = users.map(driver => {
            return {
                key: driver.id, text: driver.firstName + " " + driver.lastName, value: driver.id
            }  
        })
        return options;
    }


  render() {
      const { users } = this.props;
      if(!users){
          return <div>Loading</div>
      }
    return (

            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Choose driver:</label>
                    <Dropdown onChange={this.handleInputChange} placeholder='Choose driver' name='driver_id' clearable selection options={this.renderDrivers()}/>    
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <Input onChange={this.handleInputChange} name="name" value={this.state.name} placeholder="Name"/>
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <Input onChange={this.handleInputChange} name="email" value={this.state.email} placeholder="Email"/>
                </Form.Field>
                <Form.Field>
                    <label>Phone number</label>
                    <Input onChange={this.handleInputChange} name="phone_number" value={this.state.phone_number} placeholder="phone number"/>
                </Form.Field>
                <Form.Field>
                    <label>Departure date</label>
                    <Input onChange={this.handleInputChange} name="departure_date" value={this.state.departure_date} placeholder="departure date"/>
                </Form.Field>
                <Form.Field>
                    <label>Destination</label>
                    <Input onChange={this.handleInputChange} name="destination" value={this.state.destination} placeholder="destination"/>
                </Form.Field>
                <Form.Field>
                    <label>Departure from</label>
                    <Input onChange={this.handleInputChange} name="departure_from" value={this.state.departure_from} placeholder="departure from"/>
                </Form.Field>
                <Form.Field>
                    <label>Departure time</label>
                    <Input onChange={this.handleInputChange} name="departure_time" value={this.state.departure_time} placeholder="departure time"/>
                </Form.Field>
                <Form.Field>
                    <label>Number of passenger</label>
                    <Input onChange={this.handleInputChange} name="number_of_passengers" value={this.state.number_of_passengers} placeholder="number of passengers"/>
                </Form.Field>
                <Form.Field>
                    <label>Comments</label>
                    <Input onChange={this.handleInputChange} name="comments" value={this.state.comments} placeholder="comments"/>
                </Form.Field>
                <Button type="submit">Submit</Button>
            </Form>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReservation: (reservation) => dispatch(createReservation(reservation))
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'} 
    ])
)(ReservationForm)
 