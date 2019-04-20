import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Modal, Form } from 'semantic-ui-react';
import { signUp } from '../actions/authAction';

class SignUp extends Component {

    state = { 
        open: true,
        email: '',
        password: '',
        first_name: '',
        last_name: ''
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSignUpAttempt = () => {
        this.props.signUp(this.state)
    }

    renderSignUp = () => {
        const { open } = this.state;
        const { auth } = this.props;
        if(!auth.uid){
            return(
                <div>
                    <Modal open={open}>
                        <Modal.Content>
                            <Form onSubmit={this.onSignUpAttempt}>
                                <Form.Input onChange={this.onInputChange} name='email'  icon='mail' iconPosition='left' label='Email' placeholder='email' />
                                <Form.Input onChange={this.onInputChange} name='password' icon='lock' iconPosition='left' label='Password' placeholder='password' type='password' />
                                <Form.Input onChange={this.onInputChange} name='first_name'  label='First Name' placeholder='First Name' />
                                <Form.Input onChange={this.onInputChange} name='last_name' label='Last Name' placeholder='Last Name' type='password' />
                        
                                <Button content='Sign Up' fluid positive />
                                <br/>
                                <Link to='/signin'><Button content='Cancel' fluid negative /></Link>                  
                            </Form>
                        </Modal.Content>
                    </Modal>
                </div>
            )
        }
        return <Redirect to='/displayreservations'/>
    }

    render(){
        return (
            <div>{this.renderSignUp()}</div>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
