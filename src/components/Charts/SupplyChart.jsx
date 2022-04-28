import { Box, useColorModeValue } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

import { constructOptions, constructData } from "./data";

import Banner from "./Banner";

const SupplyChart = () => {
	return (
		<Box
			border={"1px solid"}
			borderColor={useColorModeValue("gray.300", "gray.700")}
			p="3"
			shadow={"xl"}
			rounded={"lg"}
			position="relative"
		>
			<Banner />
			<Box p="3">
				<Line
					options={constructOptions("top", "SUPPLY")}
					data={constructData("rgb(229, 62, 62)", "rgba(229, 62, 62, 0.5)")}
				/>
			</Box>
		</Box>
	);
};

export default SupplyChart;
