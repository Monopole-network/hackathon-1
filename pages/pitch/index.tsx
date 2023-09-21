import { Card, CardHeader, VStack, Heading, HStack, Icon, ColorMode, useColorMode } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { RiGovernmentFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiBody } from "react-icons/bi";
import { useIsMobile } from "../../hooks/useIsMobile";

const categoryPitchArray = [
	{ heading: "Company", icon: BsFillPeopleFill },
	{ heading: "Government", icon: RiGovernmentFill },
	{ heading: "Individual", icon: BiBody },
] as const;

const Pitch = () => {
	const router = useRouter();
	const isMobile = useIsMobile();
	const { colorMode, toggleColorMode } = useColorMode();

	const handleCategoryClick = (category: string) => {
		const route = `/pitch/${category}/step-1`;
		return router.push(route);
	};

	return (
		<VStack spacing="24px">
			<Heading>You are : </Heading>
			<HStack spacing="24px" flexDirection={isMobile ? "column" : "row"}>
				{categoryPitchArray.map((category) => (
					<Card
						key={category.heading}
						onClick={() => {
							handleCategoryClick(category.heading.toLowerCase());
						}}
						width={isMobile ? "300px" : "200px"}
						height={isMobile ? "150px" : "300px"}
						borderRadius="16px"
						cursor={"pointer"}
						bg={colorMode === "light" ? "transparent" : "#101138"}
						boxShadow=" 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
						gap={"16px"}
						display={"flex"}
						alignItems={"center"}
						justifyContent="center"
					>
						<CardHeader display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap="16px">
							<Icon as={category.icon} />
							<Heading size="md">{category.heading}</Heading>
						</CardHeader>
					</Card>
				))}
			</HStack>
		</VStack>
	);
};

export default Pitch;
