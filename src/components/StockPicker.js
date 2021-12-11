import { useSelector } from "react-redux";
import { getSearchData } from "../store/search";
import { SearchBar } from "./SearchBar";

function StockPicker() {
	const data = useSelector(getSearchData);
	return (
		<>
			<section>
				<h1 className="ExchangeRate-header">Stock Picker</h1>
			</section>
			<section>
				<SearchBar />
			</section>
			<section>
				<ul>
					{data &&
						data.map((ele, index) => {
							return <li>{ele["2. name"]}</li>;
						})}
				</ul>
			</section>
		</>
	);
}
export default StockPicker;
