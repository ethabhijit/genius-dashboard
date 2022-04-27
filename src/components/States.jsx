import { Box, SimpleGrid } from "@chakra-ui/react";

import RebaseCard from "./StatsCards/RebaseCard";
import OracleRateCard from "./StatsCards/OracleRateCard";
import PriceTarget from "./StatsCards/PriceTarget";
import SupplyCard from "./StatsCards/SupplyCard";

const States = () => {
	return (
		<Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
			<SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
				<RebaseCard />
				<OracleRateCard />
				<PriceTarget />
				<SupplyCard />
			</SimpleGrid>
		</Box>
	);
};

export default States;
