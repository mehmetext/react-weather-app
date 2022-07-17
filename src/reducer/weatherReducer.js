export default function weatherReducer(state, action) {
	switch (action.type) {
		case "SET_CITY":
			return { ...state, city: action.value };
		case "SET_LOADING":
			return { ...state, loading: action.value };

		case "SET_DAYS":
			console.log(action.value);
			return { ...state, days: action.value };

		default:
			return { ...state };
	}
}
