import { createContext, useContext, useReducer } from "react";
import weatherReducer from "../reducer/weatherReducer";

const Context = createContext();

const Provider = ({ children }) => {
	const [state, dispatch] = useReducer(weatherReducer, {
		city: 68,
		loading: false,
		days: [],
	});

	const data = {
		...state,
		dispatch,
	};

	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useWeather = () => useContext(Context);

export default Provider;
