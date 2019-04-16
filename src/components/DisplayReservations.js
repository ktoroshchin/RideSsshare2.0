import React, { Component } from 'react';
import SingleReservation from './SingleReservation'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect} from 'react-redux-firebase';

class DisplayReservations extends Component {

    componentWillMount(){

    }

    renderReservations = (props) => {
        return this.props.reservations.map((order, index, array) => {
            return (
                <SingleReservation
                    key={order.id}
                    index={index}
                    id={order.id}
                    driver_id={order.driver_id}
                    name={order.name}
                    departure_from={order.departure_from}
                    departure_time={order.departure_time}
                    destination={order.destination}
                    number_of_passengers={order.number_of_passengers}
                    phone_number={order.phone_number}
                />
            )
        })
    }

    render() {
        if(this.props.reservations === undefined){
            return <div>Loading...</div>
        }
        return (
            <div>
                {this.renderReservations()}
            </div>
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



