import { ChakraProvider } from "@chakra-ui/react";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

import States from "./components/States";
import Navbar from "./components/Navbar";
import ChartContainer from "./components/ChartContainer";
import Footer from "./components/Footer";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const App = () => {
	return (
		<ChakraProvider>
			<div className="App">
				<Navbar />
				<States />
				<ChartContainer />
				<Footer />
			</div>
		</ChakraProvider>
	);
};

export default App;
