import { Box, useColorModeValue } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";

import { constructOptions, constructData } from "./data";

import Banner from "./Banner";

const PriceChart = () => {
	return (
		<Box
			border={"1px solid"}
			borderColor={useColorModeValue("gray.300", "gray.700")}
			shadow={"xl"}
			rounded={"lg"}
			position="relative"
		>
			<Banner />
			<Box p="3">
				<Line
					options={constructOptions("top", "PRICE")}
					data={constructData("rgb(56, 161, 105)", "rgba(56, 161, 105, 0.5)")}
				/>
			</Box>
		</Box>
	);
};

export default PriceChart;
