import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Modal, Button, Grid } from  'semantic-ui-react';

class ModalConfirmation extends Component {

    state = { open: true}

    render(){
        const { open } = this.state;
        return(
            <Modal open={open} dimmer='inverted' onClose={this.close}>
                <Modal.Header>Confirmation</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <h4>Thank you for using RideSsshare, driver will contact you shortly.</h4>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Link to='/reservation-form'><Button secondary>Submit another reservation</Button></Link>
                    <Link to='/'><Button color='red'>Exit</Button></Link>
                </Modal.Actions>
            </Modal>
        )
    }
};

export default ModalConfirmation;