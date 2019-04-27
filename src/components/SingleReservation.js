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
        const { departure_from, departure_date, departure_time, destination, driver_id, email, index, comments, name, number_of_passengers, phone_number } = this.props;
        console.log(departure_date.seconds)

        return (
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                    <Icon name='dropdown' />
                        ORDER # 
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