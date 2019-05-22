import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Grid, Dropdown, Form, Icon, Container, Button } from 'semantic-ui-react';
import { createItinerary } from '../../actions/createItinerary';
import { renderDaysOfOperation } from '../../services/reservationFormHelpers';
import { connect } from 'react-redux';
class CreateItinerary extends Component {

    labelColor = {
        color: 'white'
    }

    state = {
        departure_from: '',
        destination: '',
        departure_time: '',
        days_of_operation: '',
        pick_up_address: '',
        drop_off_address: '',
        notes: '',
        price: '',
        phone_number: '',
        redirect: false,
        loading: false
    }

    isFormValid = () => {
        const { 
            departure_from, 
            destination, 
            departure_time, 
            days_of_operation, 
            pick_up_address, 
            drop_off_address, 
            phone_number,
            notes,
            price 
        } = this.state;

        return departure_from && destination && departure_time && days_of_operation && pick_up_address && drop_off_address && phone_number && notes && price 
    }


    handleInputChange = (e,{value, name}) => {
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => { 
        e.preventDefault()
        this.props.createItinerary(this.state)
        this.setState({loading: true})
        setTimeout(() => this.setState({
            redirect: true,
            loader: false
        }), 3000)
    }

 

  render() {
    const { driverId } =this.props.match.params; 
    const { redirect } = this.state;
        if(redirect){
            return <Redirect to={`/user/create-itinerary-confirmation/${driverId}`}/>
        }
        return (
            <Container className='create-itinerary-container' fluid>
                <Grid columns={1}>
                    <Grid.Row>
                        <Grid.Column textAlign='center' color='white'>
                            <h1 style={this.labelColor}>Create itinerary and it will be available for your clients online</h1>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                 
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label style={this.labelColor}>Departure from:</label>
                        <Form.Input     
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='marker'/>} 
                            iconPosition='left' 
                            name='departure_from'
                            value={this.state.departure_from}       
                        /> 
                    </Form.Field>
                
                    <Form.Field>
                        <label style={this.labelColor}>Destination</label>
                        <Form.Input 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='marker'/>} 
                            iconPosition='left' 
                            name='destination'
                            value={this.state.destination}       
                        />
                    </Form.Field>
                
                    <Form.Field>
                        <label style={this.labelColor}>Departure time:</label>
                        <Form.Input 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='time'/>} 
                            iconPosition='left' 
                            name='departure_time'
                            value={this.state.departure_time}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Days of operation</label>
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
                        <label style={this.labelColor}>Pick-up address</label>
                        <Form.Input 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='home'/>} 
                            iconPosition='left' 
                            name='pick_up_address'
                            value={this.state.pick_up_address}
                        />
                    </Form.Field>
        
                    <Form.Field>
                        <label style={this.labelColor}>Drop-off address</label>
                        <Form.Input 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='building'/>} 
                            iconPosition='left' 
                            name='drop_off_address'
                            value={this.state.drop_off_address}
                        />
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Your phone number</label>
                        <Form.Input     
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='tty'/>} 
                            iconPosition='left' 
                            name='phone_number'
                            value={this.state.phone_number}       
                        /> 
                    </Form.Field>

                    <Form.Field>
                        <label style={this.labelColor}>Notes</label>
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
                        <label style={this.labelColor}>Price</label>
                        <Form.Input 
                            onChange={this.handleInputChange} 
                            icon={<Icon color='red' name='dollar sign'/>} 
                            iconPosition='left' 
                            name='price'
                            value={this.state.price}
                        />
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

const mapDispatchToProps = (dispatch) => {
    return {
        createItinerary: (itinerary) => dispatch(createItinerary(itinerary))
    }
}

export default connect(null, mapDispatchToProps)(CreateItinerary);
