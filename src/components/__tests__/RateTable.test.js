import { Provider } from "react-redux";
import { store } from "../../store/store";
import { screen, render } from "@testing-library/react";
import { ExchangeRate } from "../ExchangeRate";

test("renders title", () => {
	render(
		<Provider store={store}>
			<ExchangeRate />
		</Provider>
	);
	const linkElement = screen.getByText(/exchange Rates/i);
	expect(linkElement).toBeInTheDocument();
});
