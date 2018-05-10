
import * as React from "react";
import * as ReactDOM from "react-dom";
import * as Actions  from "./actions";

import { createStore } from "redux";
import { reducer } from "./reducers";

import Application from "./components/Application";

import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById("application"));