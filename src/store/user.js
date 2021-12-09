const initialState = {
	name: "Ashima"
};
export function userReducer(state = initialState, action) {
	switch (action.type) {
		default:
			return state;
	}
}
//selectors
export const getName = state => state.users.name;
