import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import {  Grid, Segment, Form, Divider, Button } from 'semantic-ui-react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fbConfig from '../config/fbConfig';
import { connect } from 'react-redux';
import { signIn } from '../actions/authAction';

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
        this.props.signIn(this.state)
    }

    renderAuthorization = () => {
        const { auth } = this.props;
        const authError = this.props.authError.authError ? <p>{this.props.authError.authError}</p> : false;
        if(!auth.uid){
            return (
                <Segment placeholder>
                    <Grid columns={2} relaxed='very' stackable>
                    
                    <Grid.Column>
                        <div>
                        <Form onSubmit={this.onLoginAttempt}>
                            <Form.Input onChange={this.onInputChange} name='email'  icon='mail' iconPosition='left' label='Email' placeholder='email' />
                            <Form.Input onChange={this.onInputChange} name='password' icon='lock' iconPosition='left' label='Password' placeholder='password' type='password' />
                    
                            <Button content='Login' fluid primary />                  
                        </Form>
                            <br/>
                            <Button content='Sign Up' fluid positive />
                        {authError}
                        </div>
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
        auth: state.firebase.auth,
        authError: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (credentials) => dispatch(signIn(credentials))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SocialLogin);
