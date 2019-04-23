import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Modal, Button, Grid } from  'semantic-ui-react';

class Welcome extends Component {

  state = { open: true }

  render() {
    const open = this.state.open;

    return (
      <Container>
        <Modal open={open} basic>
          <Grid>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Link to='reservation-form'><Button fluid size='massive' inverted color='green'>I need a ride</Button></Link>
              </Grid.Column>
              <Grid.Column>
                <Link to='sign-in'><Button fluid size='massive' inverted color='blue'>I am a driver</Button></Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal>
      </Container>
    )
  }
}

export default Welcome;
