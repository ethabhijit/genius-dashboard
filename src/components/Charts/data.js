import faker from "faker";

export const constructOptions = (position = "top", text) => {
	return {
		responsive: true,
		plugins: {
			legend: {
				position,
				display: false,
			},
			title: {
				display: true,
				text,
			},
		},
	};
};

export const constructData = (borderColor, backgroundColor) => {
	const labels = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	return {
		labels,
		datasets: [
			{
				data: labels.map(() =>
					faker.datatype.number({ min: 0, max: 1000 })
				),
				borderColor,
				backgroundColor,
			},
		],
	};
};
