import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware,  compose } from 'redux';
import { Provider } from 'react-redux';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import thunk from 'redux-thunk';
import reducers from './reducers';
import fbConfig from './config/fbConfig';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, 
    composeEnhancers(
        applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

