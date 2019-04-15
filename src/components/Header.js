import React from 'react';
import { Link } from 'react-router-dom';
// import GoogleAuth from './GoogleAuth';
// import SignOutButton from './SignOutButton';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to='/' className='item'>
                RideSsshare
            </Link>
            <div className="right menu">
                {/* <GoogleAuth /> */}
            </div>
        </div>
    )
}

export default Header;