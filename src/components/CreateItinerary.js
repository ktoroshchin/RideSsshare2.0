import React, { Component } from 'react'
import { Dropdown, Form, Icon, Dimmer, Loader } from 'semantic-ui-react';


class CreateItinerary extends Component {
    state = {
        departure_from: '',
        destination: '',
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

    handleSubmit = (e) => { 
        e.preventDefault()
       
    }

  render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label>Departure from:</label>
                    <Form.Input 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='marker'/>} 
                        iconPosition='left' 
                        name='departure_from'
                        value={this.state.departure_from}       
                    /> 
                </Form.Field>
               
                <Form.Field>
                    <label>Destination</label>
                    <Form.Input 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='marker'/>} 
                        iconPosition='left' 
                        name='destination'
                        value={this.state.destination}       
                    />
                </Form.Field>
               
                <Form.Field>
                    <label>Email</label>
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
                    <label>Phone number</label>
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
                    <label>Departure date</label>
                    <DatePicker
                        onBlur={()=> this.props.departureDateValidator(this.state)}
                        selected={this.state.departure_date}
                        onChange={this.handleDateChange}
                        error={formValidations.departure_date_error ? true : false}
                    />
                    {formValidations.departure_date_error ? <span className='error-message'>{formValidations.departure_date_error}</span> : null}
                </Form.Field>

                <Form.Field>
                    <label>Destination</label>
                    <Dropdown 
                        onBlur={() => this.props.destinationValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='marker'/>}  
                        name='destination'
                        error={formValidations.destination_error ? true : false} 
                        clearable 
                        selection 
                        options={renderDestinations()}
                    /> 
                    {formValidations.destination_error ? <span className='error-message'>{formValidations.destination_error}</span> : null}
                </Form.Field>

                <Form.Field>
                    <label>Departure from</label>
                    <Dropdown 
                        onBlur={() => this.props.departureFromValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='marker'/>}  
                        name='departure_from'
                        error={formValidations.departure_from_error ? true : false} 
                        clearable 
                        selection 
                        options={renderDestinations()}
                    />
                    {formValidations.departure_from_error ? <span className='error-message'>{formValidations.departure_from_error}</span> : null}    
                </Form.Field>

                <Form.Field>
                    <label>Departure time</label>
                    <Dropdown 
                        onBlur={() => this.props.departureTimeValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='time'/>} 
                        name="departure_time"
                        error={formValidations.departure_time_error ? true : false} 
                        value={this.state.departure_time} 
                        options={renderTimeOptions()} 
                        selection 
                        clearable 
                    />
                    {formValidations.departure_time_error ? <span className='error-message'>{formValidations.departure_time_error}</span> : null}
                </Form.Field>

                <Form.Field>
                    <label>Number of passenger</label>
                    <Dropdown 
                        onBlur={() => this.props.numberOfPassValidator(this.state)} 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='users'/>} 
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
                    <label>Comments</label>
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

export default CreateItinerary;
