import { store } from "../../store/store";
import { screen, render } from "@testing-library/react";
import MockReduxProvider from "../../utils/MockProvider";
import StockPicker from "../../container/StockPicker";
import wait from "../../utils/testUtils";

export default wait;

test("renders title", () => {
	render(
		<MockReduxProvider store={store}>
			<StockPicker />
		</MockReduxProvider>
	);
	const linkElement = screen.getByText(/Stock Picker/i);
	expect(linkElement).toBeInTheDocument();
});
describe("Tests on Stock Search component.", () => {
	let container;

	beforeEach(() => {
		container = render(
			<MockReduxProvider>
				<StockPicker />
			</MockReduxProvider>
		).container;
	});

	it("Should render properly on user's screen with all children components.", async () => {
		wait;
		await wait(20); // Wait for all mock APIs inside useEffect to resolve for countries and states.
		expect(container.querySelector("input")).not.toBeNull(); // Phone Input Field.
		expect(
			container.querySelector("input").getAttribute("placeholder")
		).toMatch(/Search term for stock/i);
	});
});
