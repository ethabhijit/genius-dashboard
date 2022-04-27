import {
	Box,
	Flex,
	Link,
	Button,
	Menu,
	useDisclosure,
	useColorModeValue,
	Stack,
	useColorMode,
	HStack,
	IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import Logo from "../assets/images/logo.png";

const Links = [
	{
		url: "https://mirror.xyz/justinrogers.eth/pECbFkbLM9YfArHI_wu7w3bjxpyk-nVIqZQWpNyrkWI",
		title: "Whitepaper",
	},
	{
		url: "https://img1.wsimg.com/isteam/ip/4d93e3a1-5e93-4de2-8697-5460f49e37ce/Genius%20Roadmap.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:984,h:2278",
		title: "Roadmap",
	},
];

const NavLink = ({ children, href }) => (
	<Link
		px={2}
		py={1}
		rounded={"md"}
		_hover={{
			textDecoration: "none",
			bg: useColorModeValue("gray.200", "gray.700"),
		}}
		href={href}
		target="_blank"
	>
		{children}
	</Link>
);

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					<IconButton
						size={"md"}
						icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
						aria-label={"Open Menu"}
						display={{ md: "none" }}
						onClick={isOpen ? onClose : onOpen}
					/>

					<HStack spacing={8} alignItems={"center"}>
						<Box>
							<img src={Logo} alt="Logo" width="50px" />
						</Box>
					</HStack>

					<Flex alignItems={"center"}>
						<Stack direction={"row"} spacing={7}>
							<Menu>
								<HStack
									as={"nav"}
									spacing={4}
									display={{ base: "none", md: "flex" }}
								>
									{Links.map(({ url, title }) => (
										<NavLink key={url} href={url}>
											{title}
										</NavLink>
									))}
								</HStack>
							</Menu>
							<Button onClick={toggleColorMode}>
								{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
							</Button>
						</Stack>
					</Flex>
				</Flex>

				{isOpen ? (
					<Box pb={4} display={{ md: "none" }}>
						<Stack as={"nav"} spacing={4}>
							{Links.map(({ url, title }) => (
								<NavLink key={url} href={url}>
									{title}
								</NavLink>
							))}
						</Stack>
					</Box>
				) : null}
			</Box>
		</>
	);
};

export default Navbar;
