import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import ReservationForm from './ReservationForm';
import Header from './Header';
import Login from './Login';
import SignUp from './SignUp';
import Welcome from './Welcome';
import ReservationDetails from './ReservationDetails'
import DisplayReservations from './DisplayReservations';

const App = () => {
    return (
        <div className="ui container">
            <div>
                <BrowserRouter>
                <Header />
                    <Switch>
                        <Route path='/' exact component={Welcome}/>
                        <Route path='/sign-in' exact component={Login}/>
                        <Route path='/sign-up' exact component={SignUp}/>
                        <Route path='/reservation-form' exact component={ReservationForm}/>
                        <Route path='/reservation/details/:id' exact component={ReservationDetails}/>
                        <Route path='/reservations/user/:driverId' exact component={DisplayReservations}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
