import { API_HOST, API_KEY } from "../envConst";
const getData = async (url, params = {}) => {
	try {
		let appendedParams = { ...params, apikey: API_KEY };
		let query = appendedParams
			? Object.keys(appendedParams)
					.map(
						k =>
							`${encodeURIComponent(k)}=${encodeURIComponent(
								appendedParams[k]
							)}`
					)
					.join("&")
			: "";
		const response = await fetch(`${API_HOST}${url}?${query}`);
		const retResponse = await response.json();
		if (response.ok) {
			return retResponse;
		}
	} catch (error) {
		return error;
	}
};
export default getData;
