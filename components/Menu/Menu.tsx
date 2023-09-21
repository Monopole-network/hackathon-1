import { ButtonGroup, Container, Flex, useColorModeValue } from "@chakra-ui/react";
import { useIsMobile } from "../../hooks/useIsMobile";
import DashboardBtn from "./DashboardBtn";
import HomeBtn from "./HomeBtn";
import ProjectsBtn from "./ProjectsBtn";
import WorldBtn from "./WorldBtn";
import PitchBtn from "./PitchButton";

export default function MainMenu() {
	const backgroundColor = useColorModeValue("#f7fafc", "#000123");
	const isMobileView = useIsMobile();

	return (
		<Container>
			<Flex justifyContent="center" alignItems="center" w="100%" h="100%" minW={isMobileView ? "100%" : "50%"}>
				<ButtonGroup gap="8px">
					<HomeBtn />
					<ProjectsBtn />
					<WorldBtn />
					<PitchBtn />
					<DashboardBtn />
				</ButtonGroup>
			</Flex>
		</Container>
	);
}
