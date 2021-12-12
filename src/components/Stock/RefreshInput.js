import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { colors } from "../../styleConstants";

const Input = styled.input`
	background: red;
	margin: 0 auto;
	width: 100%;
	background: none;
	font-size: 1em;
	font-family: "Orbitron", sans-serif;
	text-align: center;
	color: ${colors.BLACK_SECONDARY};
	border: 1px solid ${colors.BLACK_PRIMARY};
	padding: 20px;
	box-sizing: border-box;
	position: relative;
	-moz-appearance: textfield;
`;

const Form = styled.form`
	padding-top: 20px;
	max-width: 750px;
	position: relative;
`;
const Button = styled.button`
	position: absolute;
	right: 0;
	top: 50%;
	background: none;
	border: 0;
	cursor: pointer;
	display: flex;
	align-self: center;
`;

export function RefreshInput({ onChangeMins, refreshMin }) {
	// const debouncedFetchResults = useCallback(debounce(onChangeMins, 1000), []);
	const [currentMin, setCurrentMin] = useState(refreshMin);
	const onChangeLocal = e => {
		setCurrentMin(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		onChangeMins(currentMin);
	};
	return (
		<Form className="ExchangeRate-form" onSubmit={onSubmit}>
			<Input
				placeholder="Enter time for refresh data"
				aria-label="Enter time for refresh data"
				type="number"
				value={currentMin}
				onChange={onChangeLocal}
				autoFocus
			/>
			<Button>submit</Button>
		</Form>
	);
}
