import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { colors } from "../../styleConstants";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { ErrorCard } from "../common/ErrorCard";
import { fetchKeyword } from "../../store/actions/search";
import { getKeyword } from "../../store/search";
import { debounce } from "../../utils/debounce";

const Input = styled.input`
	margin: 0 auto;
	width: 100%;
	background: none;
	font-size: 2em;
	font-family: "Orbitron", sans-serif;
	text-align: center;
	color: ${colors.BLACK_SECONDARY};
	border: 1px solid ${colors.BLACK_PRIMARY};
	padding: 20px;
	box-sizing: border-box;
	position: relative;
`;

const SearchButtonContainer = styled.button`
	position: absolute;
	right: 0;
	height: 81px;
	width: 75px;
	background: none;
	border: 0;
	cursor: pointer;
`;

const Form = styled.form`
	max-width: 750px;
	position: relative;
`;

export function SearchBar() {
	let history = useHistory();
	const keywordVal = useSelector(getKeyword);
	const [error, setError] = useState("");
	const [val, setVal] = useState(keywordVal);
	const dispatch = useDispatch();
	function fetchResults(value) {
		dispatch(fetchKeyword(value));
	}

	const debouncedFetchResults = useCallback(debounce(fetchResults, 1000), []);

	const onChangeLocal = e => {
		if (e.keycode == 13) {
			e.preventDefault();
		}
		setError("");
		setVal(e.target.value);
		debouncedFetchResults(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		const url = `/stock/${val}`;
		if (val.length) {
			history.push(url);
		} else {
			setError("Please enter a vaild Input");
		}
	};
	return (
		<Form className="ExchangeRate-form" onSubmit={onSubmit}>
			<Input
				placeholder="Search term for stock"
				aria-label="Search term for stock"
				type="text"
				value={val}
				onChange={onChangeLocal}
				autoFocus
			/>
			<SearchButtonContainer>
				<SearchIcon classes={{ root: "search-glass" }} />
			</SearchButtonContainer>
			{error && <ErrorCard error={error} />}
		</Form>
	);
}
