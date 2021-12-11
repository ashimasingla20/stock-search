import { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchBar } from "./SearchBar";
import { fetchKeyword } from "../store/actions/search";
import styled from "styled-components";
import SearchResults from "./SearchResults";

const SectionConatiner = styled.section`
	max-width: 750px;
	margin: 0 auto;
`;

function StockPicker() {
	const dispatch = useDispatch();
	const [val, setVal] = useState("");

	function onChange(e) {
		setVal(e.target.value);
		dispatch(fetchKeyword(e.target.value));
	}
	return (
		<>
			<section>
				<h1 className="ExchangeRate-header">Stock Picker</h1>
			</section>
			<SectionConatiner>
				<SearchBar val={val} onChange={onChange} />
			</SectionConatiner>
			<SectionConatiner>
				<SearchResults />
			</SectionConatiner>
		</>
	);
}
export default StockPicker;
