import React, { Component } from 'react';
import { Accordion, Icon, Segment } from 'semantic-ui-react';
import moment from 'moment';


class SingleReservation extends Component{

    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render(){
        const { activeIndex } = this.state
        const { departure_from, departure_date, departure_time, destination, email, index, comments, name, number_of_passengers, phone_number } = this.props;

        return (
            
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                    <div className="reserv-content">
                            <Icon className='icon-color-disp-reservation' name='car'></Icon>
                            <h4 className='departure-city'>{departure_from}</h4> 
                            <Icon className='icon-color-disp-reservation' name='long arrow alternate right'></Icon>
                            <h4 className='destination-city'>{destination}</h4>
                            <span>on</span>
                            <h4 className='departure-time'>{moment.unix(departure_date.seconds).format("MM/DD/YYYY")}</h4> 
                    </div>
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                    <Segment.Group>
                        <Segment>Departure Date: {moment.unix(departure_date.seconds).format("MM/DD/YYYY")} </Segment>
                        <Segment>Customer Name: {name} </Segment>
                        <Segment>Customer email: {email} </Segment>
                        <Segment>Destination: {destination} </Segment>
                        <Segment>Departure from: {departure_from} </Segment>
                        <Segment>Departure Time: {departure_time} </Segment>
                        <Segment>Comments: {comments} </Segment>
                        <Segment>Number of passengers: {number_of_passengers} </Segment>
                        <Segment>Phone number: {phone_number} </Segment>
                    </Segment.Group>
                </Accordion.Content>
            </Accordion>
        )
    }
}

export default SingleReservation;