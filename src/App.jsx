import { ChakraProvider } from "@chakra-ui/react";

import States from "./components/States";
import Navbar from "./components/Navbar";



const App = () => {
	return (
		<ChakraProvider>
			<div className="App">
				<Navbar />
				<States />
			</div>
		</ChakraProvider>
	);
};

export default App;
