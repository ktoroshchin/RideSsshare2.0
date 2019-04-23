import React, { Component } from 'react';
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
                <Button fluid size='massive' inverted color='green'>I need a ride</Button>
              </Grid.Column>
              <Grid.Column>
                <Button fluid size='massive' inverted color='blue'>I am a driver</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal>
      </Container>
    )
  }
}

export default Welcome;
