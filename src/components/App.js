import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
//components
import ReservationForm from './ReservationForm';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import Welcome from './Welcome';
import ReservationDetails from './ReservationDetails'
import DisplayReservations from './DisplayReservations';
import CreateItinerary from './CreateItinerary';
import ModalConfirmationOnItineraryCreate from './ModalConfirmationOnItineraryCreate';
import ModalConfirmation from './ModalConfirmation';



const App = () => {
    return (
            <BrowserRouter>
                <Header />
                    <Container>
                        <Switch>
                            <Route path='/' exact component={Welcome}/>
                            <Route path='/sign-in' exact component={Login}/>
                            <Route path='/sign-up' exact component={SignUp}/>
                            <Route path='/reservation-form' exact component={ReservationForm}/>
                            <Route path='/user/reservation-details/:id' exact component={ReservationDetails}/>
                            <Route path='/user/reservations/:driverId' exact component={DisplayReservations}/>
                            <Route path='/user/create-itinerary/:driverId' exact component={CreateItinerary}/>
                            <Route path='/user/create-itinerary-confirmation/:driverId' exact component={ModalConfirmationOnItineraryCreate}/>
                            <Route path='/reservationconfirmation' exact component={ModalConfirmation}/>                        </Switch>
                    </Container>
            </BrowserRouter>
    )
}

export default App;
