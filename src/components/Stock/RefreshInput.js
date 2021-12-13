import { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { colors } from "../../styleConstants";
import { setRefreshTime } from "../../store/actions/stockDetail";

const Input = styled.input`
	background: red;
	margin: 0 auto;
	width: 85%;
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
	display: flex;
`;
const Button = styled.button`
	background: none;
	border: 0;
	cursor: pointer;
	display: flex;
	align-self: center;
	border: 1px solid ${colors.LIGHT_BLACK};
	padding: 20px;
	border-radius: 8px;
`;

export function RefreshInput() {
	const dispatch = useDispatch();
	const [currentMin, setCurrentMin] = useState(setRefreshTime);
	const onChangeLocal = e => {
		setCurrentMin(e.target.value);
	};

	const onSubmit = e => {
		e.preventDefault();
		dispatch(setRefreshTime(currentMin));
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
