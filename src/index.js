import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store'

import App from './App';
import './index.css';

const root = document.getElementById('root')

if(!!root){
    render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App /> 
            </ConnectedRouter>
        </Provider>,
        root
    );
}
