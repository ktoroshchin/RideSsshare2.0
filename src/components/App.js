import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import ReservationForm from './ReservationForm';
import Header from './Header';
import SocialLogin from './SocialLogin';
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
                        <Route path='/signin' exact component={SocialLogin}/>
                        <Route path='/reservation' exact component={ReservationForm}/>
                        <Route path='/reservation/details/:id' exact component={ReservationDetails}/>
                        <Route path='/displayreservations' exact component={DisplayReservations}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default App;
