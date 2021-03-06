import React, { Component } from 'react';

class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }

    componentDidMount(){
       window.gapi.load('client: auth2', () => {
           window.gapi.client.init({
            'clientId': '702069338704-llavfob2u6hoe4kj62agf254v9ud7je0.apps.googleusercontent.com',
            'scope': 'profile'
           })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange()
                this.auth.isSignedIn.listen(this.onAuthChange)

            })
        })
    }

    onAuthChange = () => {
        this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton = () => {
        if(this.state.isSignedIn === null){
            return null;
        } else if(this.state.isSignedIn){
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }
        return (
            <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon"/>
                Sign In with Google
            </button>
        )

        
    }



    render(){
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
}

export default GoogleAuth;