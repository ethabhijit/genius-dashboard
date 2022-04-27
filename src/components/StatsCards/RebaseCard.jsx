import { useState, useEffect } from "react";
import moment from "moment-timezone";

import StatsCard from "./StatsCard";

const RebaseCard = () => {
	const [countHours, setCountHours] = useState("");
	const [countMinutes, setCountMinutes] = useState("");
	const [countSeconds, setCountSeconds] = useState("");

	const countDownDate =
		parseInt(moment().format("H")) < 16
			? new Date(`${moment().format("YYYY-MM-D")} 24:00:00`).getTime()
			: new Date(
					`${moment().add(1, "days").format("YYYY-MM-D")} 24:00:00`
			  ).getTime();

	useEffect(() => {
		setInterval(function () {
			const now = new Date().getTime();
			const timeleft = countDownDate - now;

			const hours = Math.floor(
				(timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
			);
			const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

			setCountHours(hours);
			setCountMinutes(minutes);
			setCountSeconds(seconds);
		}, 1000);
	}, [countDownDate]);

	return (
		<StatsCard
			title={"Next Rebase"}
			stat={`${countHours || "00"}h:${countMinutes || "00"}m:${
				countSeconds || "00"
			}s`}
		/>
	);
};

export default RebaseCard;
