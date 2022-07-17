import "./styles.css";
import Home from "./page/Home";

import WeatherProvider from "./context/WeatherContext";

function App() {
	return (
		<WeatherProvider>
			<Home />
		</WeatherProvider>
	);
}

export default App;
