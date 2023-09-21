import { Box, Flex } from "@chakra-ui/react";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";

const Home: NextPage = () => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<Flex w="100%" backgroundRepeat="no-repeat" backgroundSize="100%" flexDirection="column">
			<Box w="90%" maxW="1200px" mx="auto" pt="20px">
				<h1>Home</h1>
			</Box>
		</Flex>
	);
};

export default Home;
