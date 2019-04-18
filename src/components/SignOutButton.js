import React, { Component }  from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import fbConfig from '../config/fbConfig';

class SignOutButton extends Component {

    onSignOutClick = () => {
        fbConfig.auth().signOut()
    }

    render(){
        return (
            <Button onClick={this.onSignOutClick}>
                Sign Out
            </Button>
        )
    }
}

export default SignOutButton;