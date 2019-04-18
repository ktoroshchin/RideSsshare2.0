import React, { Component } from 'react';
import SingleReservation from './SingleReservation'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';
import { Container } from 'semantic-ui-react';

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
        if(this.props.reservations === undefined){
            return <div>Loading...</div>
        }
        return (
            <Container>
                {this.renderReservations()}
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reservations: state.firestore.ordered.reservations
    }
}



export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'reservations'}
    ])
)(DisplayReservations)


