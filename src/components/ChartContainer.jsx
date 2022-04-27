import { Box, SimpleGrid } from "@chakra-ui/react";

import PriceChart from "./Charts/PriceChart";
import SupplyChart from "./Charts/SupplyChart";
import MarketCapChart from "./Charts/MarketCapChart";

const ChartContainer = () => {
	return (
		<>
			<Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
					<PriceChart />
					<SupplyChart />
					<MarketCapChart />
				</SimpleGrid>
			</Box>
		</>
	);
};

export default ChartContainer;
