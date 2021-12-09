import { Provider } from "react-redux";
import { store } from "./store/store";
import { render } from "@testing-library/react";
function ReduxProvider({ childeren }) {
	return <Provider store={store}>{childeren}</Provider>;
}

const reduxRender = (ui, options) =>
	render(ui, { wrapper: ReduxProvider, ...options });
export * from "@testing-library/jest-dom";
export { reduxRender as render };
