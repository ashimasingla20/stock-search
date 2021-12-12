import { SearchBar } from "../components/SearchBar";
import styled from "styled-components";
import SearchResults from "../components/SearchResults";

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
