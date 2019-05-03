import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Container, Dimmer, Loader } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';

//styles
import '../styles/DisplayReservations.css'

//Components
import SingleReservation from './SingleReservation'


class DisplayReservations extends Component {

    renderReservations = () => {
        return this.props.reservations.map((order, index) => {
            return (
                <SingleReservation
                    key={order.id}
                    index={index}
                    id={order.id}
                    name={order.name}
                    email={order.email}
                    driver_id={order.driver_id}
                    departure_from={order.departure_from}
                    departure_time={order.departure_time}
                    departure_date={order.departure_date}
                    destination={order.destination}
                    number_of_passengers={order.number_of_passengers}
                    phone_number={order.phone_number}
                    comments={order.comments}
                />
            )
        })
    }

    render() {
        const { reservations } = this.props;
        const { auth } = this.props;

        if(!auth.uid) return <Redirect to='/sign-in'/>
        return (
            <Container className='display-reservations'>
                {this.renderReservations()}
            </Container>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log(state.firestore.ordered.reservations)
    const { reservations = [] } = state.firestore.ordered;
    return {
        reservations: reservations.filter(reservation => reservation.driver_id === ownProps.match.params.driverId),
        auth: state.firebase.auth
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'reservations'}
    ])
)(DisplayReservations)



