import React, { Component } from 'react';
import { Accordion, Icon, Segment } from 'semantic-ui-react';


class SingleReservation extends Component{

    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }
    render(){
        const { activeIndex } = this.state

        return (
            <Accordion fluid styled>
                <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                ORDER # 
                </Accordion.Title>
                <Accordion.Content active={activeIndex === 0}>
                <Segment.Group>
                    <Segment>Departure Date:</Segment>
                    <Segment>Customer Name:</Segment>
                    <Segment>Customer email:</Segment>
                    <Segment>Going to:</Segment>
                    <Segment>Leaving from:</Segment>
                    <Segment>Departure Time:</Segment>
                    <Segment>Comments:</Segment>
                    <Segment>Number of passengers:</Segment>
                    <Segment>Phone number:</Segment>
                </Segment.Group>
                </Accordion.Content>
            </Accordion>
        )
    }
}

export default SingleReservation;