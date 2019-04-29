import React from 'react';
import { connect } from 'react-redux' ;
import { Menu, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { signOut } from '../actions/authAction';

const signedInLinks = (props) => {
    const { displayName, photoURL, uid } = props.firebase;
    return (
        <Menu.Menu position='right'>    
            <Menu.Item >
                <h4>Hello, {displayName}</h4>
                <Image src={photoURL} size='mini' circular/> 
                <Link to={`/user/reservations/create-itinerary/${uid}`}><Button basic inverted>Create itinerary</Button></Link>
            </Menu.Item>
        
            <Menu.Item position='right'>
                <Link to='/'><Button basic inverted onClick={props.signOut}>Sign Out</Button></Link>
            </Menu.Item>
        </Menu.Menu>
    )
};

const mapStateToProps = (state) => {
    return {
        firebase: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(signedInLinks);