import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import GoogleAuth from './GoogleAuth';
import SignOutButton from './SignOutButton';
import { connect } from 'react-redux';
import { Image, Menu, Segment } from 'semantic-ui-react';
// import { firebaseConnect } from 'react-redux-firebase';

class Header extends Component {

    renderSignOut = () => {
        const { isEmpty, displayName, photoURL } = this.props.firebase;
        if(isEmpty){
            return null;
        }
        return (           
            <Menu.Item position='right'>
                <h4>Hello, {displayName}</h4>
                <Image src={photoURL} size='mini' circular/>
                <Link to='/'><SignOutButton/></Link>
            </Menu.Item>
        )
    }


    render(){    
        return (
            <Segment inverted>
                
                <Menu inverted secondary>
                    <Menu.Item>
                        <Link to='/' className='item'>
                            RideSsshare
                        </Link>
                    </Menu.Item>
                    {this.renderSignOut()}
                </Menu>
            </Segment>
        

        )
    }
}

const mapStateToProps = (state) => {
    console.log(state.firebase);
    return {
        firebase: state.firebase.auth
    }
}



export default connect(mapStateToProps)(Header);