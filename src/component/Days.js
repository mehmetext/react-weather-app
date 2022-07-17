import Day from "./Day";
import { useWeather } from "../context/WeatherContext";

export default function Days() {
	const { days } = useWeather();

	return (
		<div className="days">
			{days.map((day, i) => (
				<Day key={i} day={day} />
			))}
		</div>
	);
}
