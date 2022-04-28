import { Box } from "@chakra-ui/react";

const Banner = () => {
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
			Coming soon...
		</Box>
	);
};

export default Banner;
