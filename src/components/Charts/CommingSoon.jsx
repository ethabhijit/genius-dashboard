import { Box } from "@chakra-ui/react";

const CommingSoon = () => {
	return (
		<Box
			width="100%"
			height="100%"
			position="absolute"
			backdropFilter="blur(1px)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontWeight="bold"
      fontSize="1.5rem"
		>
			Comming soon...
		</Box>
	);
};

export default CommingSoon;
