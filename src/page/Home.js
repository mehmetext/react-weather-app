import axios from "axios";
import { useEffect } from "react";
import Days from "../component/Days";
import SelectCity from "../component/SelectCity";
import { useWeather } from "../context/WeatherContext";
import { cities } from "../data";

export default function Home() {
	const { city, dispatch } = useWeather();

	useEffect(() => {
		(async () => {
			dispatch({ type: "SET_LOADING", value: true });

			const cityMap = cities.find((i) => i.id === +city);

			const { data } = await axios(
				`https://api.openweathermap.org/data/2.5/onecall?lat=${cityMap.latitude}&lon=${cityMap.longitude}&appid=2cd4d9bbf610a9094b053c67f9bb7872`
			);

			dispatch({ type: "SET_DAYS", value: data.daily });

			dispatch({ type: "SET_LOADING", value: false });
		})();
	}, [city, dispatch]);

	return (
		<div className="container">
			<SelectCity />
			<Days />
		</div>
	);
}
