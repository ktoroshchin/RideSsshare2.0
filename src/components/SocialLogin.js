import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {  Grid, Segment, Form, Divider, Button } from 'semantic-ui-react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fbConfig from '../config/fbConfig';
import { connect } from 'react-redux';
import { authAction } from '../actions/authAction';

class SocialLogin extends Component {
    state = { 
        email: '',
        password: ''
    }

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            fbConfig.auth.GoogleAuthProvider.PROVIDER_ID,
            fbConfig.auth.FacebookAuthProvider.PROVIDER_ID,
            fbConfig.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: false
        }       
    };

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onLoginAttempt = () => {
        this.props.authAction(this.state)
    }

    renderAuthorization = () => {
        if(this.props.firebase.isEmpty){
            return (
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                    
                    <Grid.Column>
                        <Form onSubmit={this.onLoginAttempt}>
                            <Form.Input onChange={this.onInputChange} name='email'  icon='mail' iconPosition='left' label='Email' placeholder='email' />
                            <Form.Input onChange={this.onInputChange} name='password' icon='lock' iconPosition='left' label='Password' placeholder='password' type='password' />
                    
                            <Button content='Login' primary />
                        </Form>
                    </Grid.Column>
                
                    <Grid.Column verticalAlign='middle'>
                        <StyledFirebaseAuth
                             uiConfig={this.uiConfig}
                             firebaseAuth={fbConfig.auth()}
                        />
                    </Grid.Column>
                    </Grid>
                
                    <Divider vertical hidden>Or</Divider>
                </Segment>
            )        
        }
        return(
            <Redirect to='/displayreservations'/>
        )
    }

  render() {
        return (
            <div>{this.renderAuthorization()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase.auth
    }
}

export default connect(mapStateToProps, { authAction })(SocialLogin);
