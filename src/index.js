import React from "react";
import ReactDOM from "react-dom";
import { ExchangeRate } from "./components/ExchangeRate";
import { Provider } from "react-redux";
import "./style.css";
import { store } from "./store/store.js";
import { getInitialData } from "./store/actions/rates";
//to dispatch initially for first time we can use this as well
//store.dispatch(getInitialData);
ReactDOM.render(
	<Provider store={store}>
		<ExchangeRate />
	</Provider>,
	document.getElementById("root")
);
