import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     store={store}
                     dispatch={store.dispatch.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
        ,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state)
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();