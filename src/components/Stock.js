import { useEffect } from "react";
import getData from "../utils/fetchAPI";

const Stock = () => {
	useEffect(() => {
		// dispatch(changeCurrencyCode(currencyCode));
		getData("query", {
			function: "OVERVIEW",
			symbol: "IBM"
		});
	}, []);
	return <div>Stock</div>;
};
export default Stock;
