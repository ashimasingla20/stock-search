import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchKeyword } from "../store/actions/search";
export function SearchBar() {
	const dispatch = useDispatch();
	const [val, setVal] = useState("");
	function onChange(e) {
		setVal(e.target.value);
		dispatch(fetchKeyword(e.target.value));
	}
	return (
		<form className="ExchangeRate-form">
			<input
				aria-label="Search term for stock"
				type="text"
				value={val}
				onChange={onChange}
				autoFocus
			/>
		</form>
	);
}
