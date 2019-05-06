import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from  'semantic-ui-react';

class ModalConfirmationOnItineraryCreate extends Component {

    state = { open: true}

    render(){
        const { driverId } = this.props.match.params;
        const { open } = this.state;
        return(
            <Modal open={open} dimmer='inverted' onClose={this.close}>
                <Modal.Header>Confirmation</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <h4>You have created itinerary. It is now available online for potential customers.</h4>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Link to={`/user/reservations/${driverId}`}><Button secondary>Back to reservations</Button></Link>
                    <Link to={`/user/create-itinerary/${driverId}`}><Button color='red'>Create another itinerary</Button></Link>
                </Modal.Actions>
            </Modal>
        )
    }
};

export default ModalConfirmationOnItineraryCreate;