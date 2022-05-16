import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import {createStore} from "redux";
import {rootReducer} from "./store/reducers";

export const ACTION_CHANGE_CURRENT_VALUE = 'ACTION_CHANGE_CURRENT_VALUE';
export const ACTION_CHANGE_LIKED = 'ACTION_CHANGE_LIKED';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <App />
    </Provider>
);

