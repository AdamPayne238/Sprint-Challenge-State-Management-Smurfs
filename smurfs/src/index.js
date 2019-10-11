import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

//ADD LATER WHEN REDUCER IS SET UP
import rootReducer from "./reducer";

//Define store with Create Store
const store = createStore(rootReducer, applyMiddleware(thunk));
//Define rootElement
const rootElement = document.getElementById('root');

ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>,
rootElement

);


// , document.getElementById("root"));
