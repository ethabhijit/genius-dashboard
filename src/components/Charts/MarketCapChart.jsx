import { Box, useColorModeValue } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

import { constructOptions, constructData } from "./data";

import CommingSoon from "./CommingSoon";

const MarketCapChart = () => {
	return (
		<Box
			border={"1px solid"}
			borderColor={useColorModeValue("gray.300", "gray.700")}
			shadow={"xl"}
			rounded={"lg"}
			position="relative"
		>
			<CommingSoon />
			<Box p="3">
				<Line
					options={constructOptions("top", "MARKET CAP")}
					data={constructData("rgb(49, 130, 206)", "rgba(49, 130, 206, 0.5)")}
				/>
			</Box>
		</Box>
	);
};

export default MarketCapChart;
