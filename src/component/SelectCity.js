import { cities } from "../data";
import { useWeather } from "../context/WeatherContext";

export default function SelectCity() {
	const handleChange = (e) => {
		dispatch({ type: "SET_CITY", value: e.target.value });
	};

	const { city, dispatch, loading } = useWeather();

	return (
		<div className="select-country">
			<select
				disabled={loading}
				name="country"
				onChange={handleChange}
				defaultValue={city}
			>
				{cities.map((currentCity) => (
					<option key={currentCity.id} value={currentCity.id}>
						({currentCity.id}) {currentCity.name}
					</option>
				))}
			</select>
			{loading && (
				<div className="select-country-loading">Yükleniyor...</div>
			)}
		</div>
	);
}
