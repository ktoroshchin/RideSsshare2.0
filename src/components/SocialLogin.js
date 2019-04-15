import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import fbConfig from '../config/fbConfig';

class SocialLogin extends Component {
    state = { isSignedIn: false}

    uiConfig = {
        signInFlow: 'popup',
        signInOptions: [
            fbConfig.auth.GoogleAuthProvider.PROVIDER_ID,
            fbConfig.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccessWithAuthResult: (data) => console.log(data) 
        }   
    };
    

    componentDidMount(){
       fbConfig.auth().onAuthStateChanged((user) => {
           console.log(user.emailVerified)
           this.setState({ isSignedIn: !!user })
       })
    }

    onSignOutClick = () => {
        fbConfig.auth().signOut()
    }

    renderAuthButtons = () => {
        if(this.state.isSignedIn){
            return <button onClick={this.onSignOutClick} className="ui red button">Sign Out</button>
        }
        return(
            <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={fbConfig.auth()}
            />
        )
    }

  render() {
    return (
      <div>{this.renderAuthButtons()}</div>
    )
  }
}
export default SocialLogin;
