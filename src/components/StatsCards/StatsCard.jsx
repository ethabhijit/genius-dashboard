import {
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

export default StatsCard;
