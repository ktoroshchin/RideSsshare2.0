import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createReservation } from '../actions/createReservation';

import { Dropdown, Form, Input, Icon, Dimmer, Loader } from 'semantic-ui-react';
import '../index.css'

//reservation form helpers
import { renderNumOfPass, renderTimeOptions, renderDestinations } from '../services/reservationFormHelpers';

//date picker package
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { 
    driverIdValidator, 
    clientNameValidator,
    clientEmailValidator,
    clientPhoneValidator,
    destinationValidator,
    departureFromValidator,
    departureTimeValidator,
    departureDateValidator,
    numberOfPassValidator,
    commentsValidator
} from '../actions/reservationFormValidation';


class ReservationForm extends Component {
    state = {
        driver_id:'',
        name:'',
        email: '',
        phone_number: '',
        destination: '',
        departure_from: '',
        departure_time: '',
        departure_date: new Date(),
        number_of_passengers: '',
        comments: '',
    }

    isFormValid = () => {
        const { driver_id, name, email, phone_number, destination, departure_from, departure_time, number_of_passengers } = this.state;
        return driver_id && name && email && phone_number && destination && departure_from && departure_time && number_of_passengers
    }


    handleInputChange = (e,{value, name}) => {
        this.setState({
            [name]: value
        })
    }

    handleDateChange = (date) => {
        this.setState({
            departure_date: date
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        const { formValidations } = this.props;
        console.log(formValidations)
        // this.props.driverIdValidator(this.state)
        // this.props.clientNameValidator(this.state)
        // this.props.clientEmailValidator(this.state)
        // this.props.clientPhoneValidator(this.state)
        // this.props.destinationValidator(this.state)
        // this.props.departureFromValidator(this.state)
        // this.props.departureTimeValidator(this.state)
        // this.props.departureDateValidator(this.state)
        // this.props.numberOfPassValidator(this.state)
        // this.props.commentsValidator(this.state)
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
      const { formValidations } = this.props;
        if(!users){
            return (
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
            )
        }
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Choose driver:</label>
                    <Dropdown 
                        onBlur={() => this.props.driverIdValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='user'/>}  
                        name='driver_id' 
                        clearable 
                        selection 
                        options={this.renderDrivers()}
                    />
                    {formValidations.driver_id_error ? <span>{formValidations.driver_id_error}</span> : null}   
                </Form.Field>
                <Form.Field>
                    <label>Name</label>
                    <Input 
                        onBlur={()=> this.props.clientNameValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='info'/>} 
                        iconPosition='left' 
                        name="name" 
                        value={this.state.name}
                    />
                    {formValidations.name_error ? <span>{formValidations.name_error}</span> : null}
                </Form.Field>
                <Form.Field>
                    <label>Email</label>
                    <Input 
                        onBlur={() => this.props.clientEmailValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='mail'/>} 
                        iconPosition='left' 
                        name="email" 
                        value={this.state.email}
                    />
                    {formValidations.email_error ? <span>{formValidations.email_error}</span> : null}
                </Form.Field>
                <Form.Field>
                    <label>Phone number</label>
                    <Input 
                        onBlur={() => this.props.clientPhoneValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='phone'/>} 
                        iconPosition='left' 
                        name="phone_number" 
                        value={this.state.phone_number}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Departure date</label>
                    <DatePicker
                        onBlur={()=> this.props.departureDateValidator(this.state)}
                        selected={this.state.departure_date}
                        onChange={this.handleDateChange}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Destination</label>
                    <Dropdown 
                        onBlur={() => this.props.destinationValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='marker'/>}  
                        name='destination' 
                        clearable 
                        selection 
                        options={renderDestinations()}
                    /> 
                </Form.Field>
                <Form.Field>
                    <label>Departure from</label>
                    <Dropdown 
                        onBlur={() => this.props.departureFromValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='marker'/>}  
                        name='departure_from' 
                        clearable 
                        selection 
                        options={renderDestinations()}
                    />    
                </Form.Field>
                <Form.Field>
                    <label>Departure time</label>
                    <Dropdown 
                        onBlur={() => this.props.departureTimeValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='time'/>} 
                        name="departure_time" 
                        value={this.state.departure_time} 
                        options={renderTimeOptions()} 
                        selection 
                        clearable 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Number of passenger</label>
                    <Dropdown 
                        onBlur={() => this.props.numberOfPassValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='users'/>} 
                        name="number_of_passengers" 
                        value={this.state.number_of_passengers} 
                        options={renderNumOfPass()} 
                        selection 
                        clearable 
                    />
                </Form.Field>
                <Form.Field>
                    <label>Comments</label>
                    <Input 
                        onBlur={() => this.props.commentsValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='comment'/>} 
                        iconPosition='left' 
                        name="comments" 
                        value={this.state.comments}
                    />
                </Form.Field>
                <Form.Button 
                    fluid 
                    disabled={!this.isFormValid()}  
                    type="submit">
                    Submit
                </Form.Button>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        formValidations: state.formValidations
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createReservation: (reservation) => dispatch(createReservation(reservation)),
        driverIdValidator: (reservation) => dispatch(driverIdValidator(reservation)),
        clientNameValidator: (reservation) => dispatch(clientNameValidator(reservation)),
        clientEmailValidator: (reservation) => dispatch(clientEmailValidator(reservation)),
        clientPhoneValidator: (reservation) => dispatch(clientPhoneValidator(reservation)),
        destinationValidator: (reservation) => dispatch(destinationValidator(reservation)),
        departureFromValidator: (reservation) => dispatch(departureFromValidator(reservation)),
        departureTimeValidator: (reservation) => dispatch(departureTimeValidator(reservation)),
        departureDateValidator: (reservation) => dispatch(departureDateValidator(reservation)),
        numberOfPassValidator: (reservation) => dispatch(numberOfPassValidator(reservation)),
        commentsValidator: (reservation) => dispatch(commentsValidator(reservation))
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'users'} 
    ])
)(ReservationForm)
 