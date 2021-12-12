import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchBar } from "./SearchBar";
import { fetchKeyword } from "../store/actions/search";
import { getKeyword } from "../store/search";
import styled from "styled-components";
import SearchResults from "./SearchResults";

const SectionConatiner = styled.section`
	max-width: 750px;
	margin: 0 auto;
`;

function StockPicker() {
	const dispatch = useDispatch();
	const keywordVal = useSelector(getKeyword);
	const [val, setVal] = useState(keywordVal);

	function onChange(e) {
		setVal(e.target.value);
		dispatch(fetchKeyword(e.target.value));
	}
	return (
		<>
			<section>
				<h1 className="StockPicker-header">Stock Picker</h1>
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
