import { useSelector } from "react-redux";
import { fetchKeyword } from "../store/actions/search";
import styled from "styled-components";
import { colors } from "../styleConstants";

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
	/* border-radius: 8px; */
	box-sizing: border-box;
`;
export function SearchBar({ onChange, val }) {
	// const val = useSelector(fetchKeyword);
	return (
		<form className="ExchangeRate-form">
			<Input
				aria-label="Search term for stock"
				type="text"
				value={val}
				onChange={onChange}
				autoFocus
			/>
		</form>
	);
}
