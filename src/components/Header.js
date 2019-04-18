import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import GoogleAuth from './GoogleAuth';
import { signOut } from '../actions/authAction';
import { connect } from 'react-redux';
import { Menu, Segment } from 'semantic-ui-react';
import SignedInLinks from './SignedInLinks';

const Header = (props) => { 
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks/> : null
    return (
        <Segment inverted>    
            <Menu inverted secondary>
                <Menu.Item>
                    <Link to='/' className='item'>
                        RideSsshare
                    </Link>
                </Menu.Item>
                {links}
            </Menu>
        </Segment>
    

    )
}


const mapStateToProps = (state) => {
    console.log(state.firebase);
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);