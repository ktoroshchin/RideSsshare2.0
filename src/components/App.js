import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
//components
import ReservationForm from './ReservationForm';
import Header from '../components/Header/Header';
import Login from '../components/Login/Login';
import SignUp from '../components/Login/SignUp';
import Welcome from './Welcome';
import DisplayReservations from '../components/DriverAccount/DisplayReservations';
import CreateItinerary from '../components/DriverAccount/CreateItinerary.js';
import ModalConfirmationOnItineraryCreate from '../components/DriverAccount/ModalConfirmationOnItineraryCreate';
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
                            <Route path='/user/reservations/:driverId' exact component={DisplayReservations}/>
                            <Route path='/user/create-itinerary/:driverId' exact component={CreateItinerary}/>
                            <Route path='/user/create-itinerary-confirmation/:driverId' exact component={ModalConfirmationOnItineraryCreate}/>
                            <Route path='/reservationconfirmation' exact component={ModalConfirmation}/>                        </Switch>
                    </Container>
            </BrowserRouter>
    )
}

export default App;
