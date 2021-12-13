import React from "react";
import loadable from "@loadable/component";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./style.css";
import { store } from "./store/store.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//loadable components
const StockPicker = loadable(() => import("./container/StockPicker"));
const Stock = loadable(() => import("./container/Stock"));

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Switch>
					<Route path="/" exact component={StockPicker} />
					<Route path="/stock/:symbol" exact component={Stock} />
				</Switch>
			</div>
		</Router>
	</Provider>,
	document.getElementById("root")
);
