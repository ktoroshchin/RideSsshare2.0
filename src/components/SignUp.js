import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Form } from 'semantic-ui-react';

class SignUp extends Component {
    render(){
        return (
            ReactDOM.createPortal(
            <div>
                <Modal>
                    <Modal.Content>
                        <Form>
                            <Form.Input  name='email'  icon='mail' iconPosition='left' label='Email' placeholder='email' />
                            <Form.Input  name='password' icon='lock' iconPosition='left' label='Password' placeholder='password' type='password' />
                    
                            <Button content='Login' fluid primary />                  
                        </Form>   
                    </Modal.Content>
                </Modal>
            </div>, 
            document.getElementById('signup')
            )
        )
    }
}

export default SignUp
