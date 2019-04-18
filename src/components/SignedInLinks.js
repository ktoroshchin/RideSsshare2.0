import React from 'react';
import { connect } from 'react-redux' ;
import { Menu, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { signOut } from '../actions/authAction';

const signedInLinks = (props) => {
    const { displayName, photoURL } = props.firebase;
    return (          
        <Menu.Item position='right'>
            <h4>Hello, {displayName}</h4>
            <Image src={photoURL} size='mini' circular/>
            <Link to='/'><Button onClick={props.signOut}>Sign Out</Button></Link>
        </Menu.Item>
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