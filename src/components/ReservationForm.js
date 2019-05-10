import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { createReservation } from '../actions/createReservation';
import { Dropdown, Form, Icon, Dimmer, Loader, Button, Container } from 'semantic-ui-react';

//styles
import '../styles/ReservationForm.css';

//reservation form helpers
import { renderNumOfPass, renderTimeOptions, renderDestinations, renderDepartures, renderDrivers } from '../services/reservationFormHelpers';

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

    labelColor = {
        color: 'white'
    }

    state = {
        driver_id:'',
        departure_from: '',
        destination: '',
        departure_date: new Date(),
        departure_time: '',
        number_of_passengers: '',
        name:'',
        email: '',
        phone_number: '',
        comments: '',
        redirect: false,
        loading: false
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
        let foundErrors = Object.keys(formValidations).filter((value) => {
            return formValidations[value] !== null;
        })
        if(foundErrors.length === 0){
            console.log("Submitted to firebase")
            this.props.createReservation(this.state)
            this.setState({loading: true})
            setTimeout(() => this.setState({
                redirect: true,
                loader: false
            }), 3000)   
        }
    }



    
  render() {
      const { redirect } = this.state;
      const { users } = this.props;
      const { formValidations } = this.props;
        if(!users){
            return (
                <Dimmer active>
                    <Loader>Loading</Loader>
                </Dimmer>
            )
        }
        if(redirect){
            return <Redirect to='/reservationconfirmation'/>
        }
        return (
            <Container className='reservation-form-container'>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Field>
                        <label style={this.labelColor}>Departure from</label>
                        <Dropdown 
                            onBlur={() => this.props.departureFromValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<i className="icon-color marker icon"></i>}  
                            name='departure_from'
                            error={formValidations.departure_from_error ? true : false} 
                            clearable 
                            selection
                            options={renderDepartures(users)}             
                        />
                        {formValidations.departure_from_error ? <span className='error-message'>{formValidations.departure_from_error}</span> : null}    
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Destination</label>
                        <Dropdown 
                            onBlur={() => this.props.destinationValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<i className="icon-color marker icon"></i>}  
                            name='destination'
                            error={formValidations.destination_error ? true : false} 
                            options={renderDestinations(users, this.state.departure_from)}         
                            clearable 
                            selection
                        /> 
                        {formValidations.destination_error ? <span className='error-message'>{formValidations.destination_error}</span> : null}
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Departure date</label>
                        <DatePicker
                            onBlur={()=> this.props.departureDateValidator(this.state)}
                            selected={this.state.departure_date}
                            onChange={this.handleDateChange}
                            error={formValidations.departure_date_error ? true : false}
                        />
                        {formValidations.departure_date_error ? <span className='error-message'>{formValidations.departure_date_error}</span> : null}
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Departure time</label>
                        <Dropdown 
                            onBlur={() => this.props.departureTimeValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<i className="icon-color time icon"></i>} 
                            name="departure_time"
                            error={formValidations.departure_time_error ? true : false} 
                            value={this.state.departure_time} 
                            options={renderTimeOptions(users, this.state.departure_from, this.state.destination)}
                            selection 
                            clearable  
                        />
                        {formValidations.departure_time_error ? <span className='error-message'>{formValidations.departure_time_error}</span> : null}
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Choose driver:</label>
                        <Dropdown 
                            onBlur={() => this.props.driverIdValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<i className="icon-color mail icon"></i>}  
                            name='driver_id'
                            error={formValidations.driver_id_error ? true : false}
                            clearable 
                            selection 
                            options={renderDrivers(users, this.state.departure_from, this.state.destination, this.state.departure_time)}
                        />
                        {formValidations.driver_id_error ? <span className="error-message">{formValidations.driver_id_error}</span> : null}   
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Number of passenger</label>
                        <Dropdown 
                            onBlur={() => this.props.numberOfPassValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<i className="icon-color users icon"></i>} 
                            name="number_of_passengers"
                            error={formValidations.number_of_passengers_error ? true : false} 
                            value={this.state.number_of_passengers} 
                            options={renderNumOfPass()} 
                            selection 
                            clearable 
                        />
                        {formValidations.number_of_passengers_error ? <span className='error-message'>{formValidations.number_of_passengers_error}</span> : null}
                    </Form.Field>
                
                    <Form.Field>
                        <label style={this.labelColor}>Name</label>
                        <Form.Input 
                            onBlur={()=> this.props.clientNameValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='info'/>} 
                            iconPosition='left' 
                            name="name"
                            error={formValidations.name_error ? true : false}                     
                            value={this.state.name}       
                        />
                        {formValidations.name_error ? <span className='error-message'>{formValidations.name_error}</span> : null}
                    </Form.Field>
                
                    <Form.Field>
                        <label style={this.labelColor}>Email</label>
                        <Form.Input 
                            onBlur={() => this.props.clientEmailValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='mail'/>} 
                            iconPosition='left' 
                            name="email"
                            error={formValidations.email_error ? true : false} 
                            value={this.state.email}
                        />
                        {formValidations.email_error ? <span className="error-message">{formValidations.email_error}</span> : null}
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Phone number</label>
                        <Form.Input 
                            onBlur={() => this.props.clientPhoneValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='phone'/>} 
                            iconPosition='left' 
                            name="phone_number"
                            error={formValidations.phone_number_error ? true : false} 
                            value={this.state.phone_number}
                        />
                        {formValidations.phone_number_error ? <span className='error-message'>{formValidations.phone_number_error}</span> : null}
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Comments</label>
                        <Form.Input 
                            onBlur={() => this.props.commentsValidator(this.state)} 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='comment'/>} 
                            iconPosition='left' 
                            name="comments"
                            error={formValidations.comments_error ? true : false} 
                            value={this.state.comments}
                        />
                        {formValidations.comments_error ? <span className='error-message'>{formValidations.comments_error}</span> : null}
                    </Form.Field>

                    <Button 
                        content='Submit' 
                        secondary 
                        fluid 
                        loading={this.state.loading}
                        disabled={!this.isFormValid()}
                        type='Submit'
                    />
                </Form>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        formValidations: state.formValidations,
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
        {collection: 'users'}, 
    ])
)(ReservationForm)
 