import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";


import rootReducer from "./store/rootReducer";
import App from './App';

import './assets/styles.css';


let store = createStore(rootReducer, applyMiddleware(thunk));

const index = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    index,
    document.getElementById('root')
);
