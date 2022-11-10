import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./Components/Router";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <Router/>
        </Provider>
    </BrowserRouter>,
);
