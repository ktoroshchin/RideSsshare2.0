import React, { Component } from 'react'
import { Dropdown, Form, Icon } from 'semantic-ui-react';
import { createItinerary } from '../actions/createItinerary';
import { renderDaysOfOperation } from '../services/reservationFormHelpers';
import { connect } from 'react-redux';
import '../styles/CreateItinerary.css'
class CreateItinerary extends Component {
    state = {
        departure_from: '',
        destination: '',
        departure_time: '',
        days_of_operation: '',
        pick_up_address: '',
        drop_off_address: '',
        notes: '',
        price: '',
    }

    isFormValid = () => {
        const { 
            departure_from, 
            destination, 
            departure_time, 
            days_of_operation, 
            pick_up_address, 
            drop_off_address, 
            notes,
            price 
        } = this.state;

        return departure_from && destination && departure_time && days_of_operation && pick_up_address && drop_off_address && notes && price 
    }


    handleInputChange = (e,{value, name}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault()
       this.props.createItinerary(this.state)
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
                    <label>Departure time:</label>
                    <Form.Input 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='time'/>} 
                        iconPosition='left' 
                        name='departure_time'
                        value={this.state.departure_time}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Days of operation</label>
                    <Dropdown 
                        onChange={this.handleInputChange} 
                        icon={<i className="icon-color calendar icon"></i>}  
                        name='days_of_operation'
                        multiple
                        selection 
                        options={renderDaysOfOperation()}
                    /> 
                </Form.Field>

                <Form.Field>
                    <label>Pick-up address</label>
                    <Form.Input 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='home'/>} 
                        iconPosition='left' 
                        name='pick_up_address'
                        value={this.state.pick_up_address}
                    />
                </Form.Field>
    
                <Form.Field>
                    <label>Drop-off address</label>
                    <Form.Input 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='building'/>} 
                        iconPosition='left' 
                        name='drop_off_address'
                        value={this.state.drop_off_address}
                    />
                </Form.Field>

                <Form.Field>
                    <label>Notes</label>
                    <Form.Input 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='comment'/>} 
                        iconPosition='left' 
                        name='notes'
                        value={this.state.notes}
                        placeholder='Here you can leave some notes for your passengers. Tell them about your car, experience and services you provide.'
                    />
                </Form.Field>

                <Form.Field>
                    <label>Price</label>
                    <Form.Input 
                        onChange={this.handleInputChange} 
                        icon={<Icon color='red' name='dollar sign'/>} 
                        iconPosition='left' 
                        name='price'
                        value={this.state.price}
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

const mapDispatchToProps = (dispatch) => {
    return {
        createItinerary: (itinerary) => dispatch(createItinerary(itinerary))
    }
}

export default connect(null, mapDispatchToProps)(CreateItinerary);
