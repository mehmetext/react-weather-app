export const getDayName = (dt) => {
	const day = new Date(dt * 1000).getDay();
	let dayStr = "";

	switch (day) {
		case 0:
			dayStr = "Pazartesi";
			break;
		case 1:
			dayStr = "Salı";
			break;
		case 2:
			dayStr = "Çarşamba";
			break;
		case 3:
			dayStr = "Perşembe";
			break;
		case 4:
			dayStr = "Cuma";
			break;
		case 5:
			dayStr = "Cumartesi";
			break;
		case 6:
			dayStr = "Pazar";
			break;
		default:
			dayStr = "Pazartesi";
			break;
	}

	return dayStr;
};
