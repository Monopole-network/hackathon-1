import {
	Box,
	Button,
	ButtonGroup,
	Flex,
	Icon,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Portal,
	useColorMode,
} from "@chakra-ui/react";
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
import HomeBtn from "./Menu/HomeBtn";
import ProjectsBtn from "./Menu/ProjectsBtn";
import PitchBtn from "./Menu/PitchButton";
import { FiMenu } from "react-icons/fi";

import DashboardBtn from "./Menu/DashboardBtn";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	const { colorMode, toggleColorMode } = useColorMode();
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
					alignItems="center"
				>
					<Box mt="95px">{children}</Box>
					{isMobileView && (
						<Box
							position="fixed"
							display="flex"
							alignItems="center"
							justifyContent="center"
							bottom="20px"
							right="20px"
							height="100px"
							width="100px"
							bg={colorMode === "light" ? "white" : "#101138"}
							borderRadius="50%"
							padding="16px"
							border="1px solid"
							borderColor={colorMode === "light" ? "#101138" : "white"}
							// width="80%"
						>
							{/* {isMobileView && <MainMenu />} */}
							<Menu>
								<MenuButton>
									<Icon as={FiMenu} boxSize={8} />
								</MenuButton>
								<Portal>
									<MenuList padding="16px">
										<ButtonGroup gap="8px">
											<HomeBtn />
											<ProjectsBtn />
											<PitchBtn />
											<DashboardBtn />
											<Button
												onClick={toggleColorMode}
												borderRadius="16px"
												height="48px"
												width="48px"
												background="transparent"
												border="2px solid #3A1888"
												aria-label="Light or Dark mode button"
											>
												{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
											</Button>
										</ButtonGroup>
									</MenuList>
								</Portal>
							</Menu>
						</Box>
					)}
					<Footer />
				</Flex>
			</Box>
		</>
	);
};

export default Layout;
