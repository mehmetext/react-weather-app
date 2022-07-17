import { getDayName } from "../functions";

export default function Day({ day }) {
	let dayOfMonth = new Date().getDate();
	return (
		<div
			className={`day ${
				dayOfMonth === new Date(day.dt * 1000).getDate() ? "today" : ""
			}`}
		>
			<div className="day-name">{getDayName(day.dt)}</div>
			<img
				alt=""
				src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
			/>
			<div className="day-degrees">
				<span>{Math.round(day.temp.max - 273.15)}°</span>
				<span>{Math.round(day.temp.min - 273.15)}°</span>
			</div>
		</div>
	);
}
