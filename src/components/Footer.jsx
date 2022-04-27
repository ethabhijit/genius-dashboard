import { Box, Container, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
	return (
		<Box
			bg={useColorModeValue("gray.50", "gray.900")}
			color={useColorModeValue("gray.700", "gray.200")}
			mt="5"
		>
			<Container maxW={"6xl"} py={4}>
				<Text align="center">
					Copyright © 2022 iSG Labs - All Rights Reserved.
				</Text>
			</Container>
		</Box>
	);
};

export default Footer;
