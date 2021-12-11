import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchKeyword } from "../store/actions/search";
import styled from "styled-components";

const Input = styled.input`
	margin: 0 auto;
	width: 100%;
	background: none;
	font-size: 2em;
	font-family: "Orbitron", sans-serif;
	text-align: center;
	color: rgb(0 0 0 / 50%);
	border: 1px solid rgba(0, 0, 0, 0.3);
	padding: 20px;
	/* border-radius: 8px; */
	box-sizing: border-box;
`;
export function SearchBar({ onChange, val }) {
	const dispatch = useDispatch();

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
