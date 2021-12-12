import { useDispatch } from "react-redux";
import { SearchBar } from "./SearchBar";
import { fetchKeyword } from "../store/actions/search";
import styled from "styled-components";
import SearchResults from "./SearchResults";
import { debounce } from "@material-ui/core";

const SectionConatiner = styled.section`
	max-width: 750px;
	margin: 0 auto;
`;

function StockPicker() {
	return (
		<>
			<section>
				<h1 className="StockPicker-header">Stock Picker</h1>
			</section>
			<SectionConatiner>
				<SearchBar />
			</SectionConatiner>
			<SectionConatiner>
				<SearchResults />
			</SectionConatiner>
		</>
	);
}
export default StockPicker;
