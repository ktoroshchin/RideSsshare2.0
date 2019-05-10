import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from '../../actions/authAction';
import { connect } from 'react-redux';
import { Menu, Segment, Grid, Button } from 'semantic-ui-react';
import SignedInLinks from './SignedInLinks';

const Header = (props) => { 
    const { auth } = props;
    const links = auth.uid ? <SignedInLinks/> : null
    const driverSignInButton = auth.uid ? null : <Button basic inverted>I am a driver</Button>
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Segment inverted>    
                        <Menu stackable inverted pointing secondary>
                            <Menu.Item>
                                <Link to='/'><h1>RideSsshare</h1></Link>
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Menu.Item >
                                    <Link to={`/sign-in`}>
                                      {driverSignInButton}   
                                    </Link>
                                </Menu.Item>
                            </Menu.Menu>
                            {links}
                        </Menu>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    

    )
}


const mapStateToProps = (state) => {
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