import React, { Component } from 'react';
import { Accordion, Icon, Segment } from 'semantic-ui-react';


class SingleReservation extends Component{

    state = { activeIndex: null }

    handleClick = (e, titleProps) => {
        console.log(titleProps)
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render(){
        console.log(this.props)
        const { activeIndex } = this.state
        const { departure_from, departure_date, departure_time, destination, driver_id, email, index, comments, name, number_of_passengers, phone_number } = this.props;

        return (
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                <Icon name='dropdown' />
                ORDER # 
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>
                <Segment.Group>
                    <Segment>Departure Date: {departure_date} </Segment>
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