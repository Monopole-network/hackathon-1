import { Box, Flex, Menu, useColorMode } from "@chakra-ui/react";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/montserrat/100.css";
import "@fontsource/montserrat/200.css";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/600.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/800.css";
import "@fontsource/montserrat/900.css";
import Head from "next/head";
import type { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useIsMobile } from "../hooks/useIsMobile";
import MainMenu from "./Menu/Menu";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const { colorMode } = useColorMode();
	const isMobileView = useIsMobile();

	return (
		<>
			<Head>
				<title>Monopole App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Box>
				<Box
					position="absolute"
					top={0}
					left={0}
					zIndex={-1}
					w="100vw"
					h="100vh"
					background={
						colorMode === "dark"
							? "radial-gradient(circle, rgba(229,70,252,0.30) 0%, rgba(63,94,251,0) 80%)"
							: "radial-gradient(circle, rgba(107,70,193,0.30) 0%, rgba(63,94,251,0) 0%)"
					}
				/>
				<Navbar />
				<Flex
					position="absolute"
					top="0"
					left="0"
					width="100%"
					bottom="0"
					overflow="auto"
					direction="column"
					justify="space-between"
				>
					<Box mt="95px">{children}</Box>
					<Box
						position="fixed"
						bottom="10px"
						left="20px"
						translateX={"50%"}
						bg={colorMode === "light" ? "transparent" : "#101138"}
						borderRadius="16px"
						padding="16px"
						display="flex"
						overflowX={isMobileView ? "scroll" : "hidden"}
						overflowY="hidden"
						flexWrap={"nowrap"}
						width="80%"
					>
						{isMobileView && <MainMenu />}
						{isMobileView && <Footer />}
					</Box>
					{!isMobileView && <Footer />}
				</Flex>
			</Box>
		</>
	);
};

export default Layout;
