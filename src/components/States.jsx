import {
	Box,
	SimpleGrid,
	Stat,
	StatLabel,
	StatNumber,
	useColorModeValue,
} from "@chakra-ui/react";

const StatsCard = (props) => {
	const { title, stat } = props;

	return (
		<Stat
			px={{ base: 4, md: 8 }}
			py={"5"}
			shadow={"xl"}
			border={"1px solid"}
			borderColor={useColorModeValue("gray.300", "gray.700")}
			rounded={"lg"}
		>
			<StatLabel fontWeight={"medium"} isTruncated textTransform="uppercase">
				{title}
			</StatLabel>
			<StatNumber fontSize={"2xl"} fontWeight={"medium"}>
				{stat}
			</StatNumber>
		</Stat>
	);
};

const States = () => {
	return (
		<Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
			<SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
				<StatsCard title={"Next Rebase"} stat={"12h:30m:7s"} />
				<StatsCard title={"Oracle Rate"} stat={"$1.173"} />
				<StatsCard title={"Price Target"} stat={"$1.093"} />
				<StatsCard title={"Total Supply"} stat={"10m"} />
			</SimpleGrid>
		</Box>
	);
};

export default States;
