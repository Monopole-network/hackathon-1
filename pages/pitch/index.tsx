import { Card, CardHeader, VStack, Heading, HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { RiGovernmentFill } from "react-icons/ri";
import { BsFillPeopleFill } from "react-icons/bs";
import { BiBody } from "react-icons/bi";

const categoryPitchArray = [
	{ heading: "Company", icon: BsFillPeopleFill },
	{ heading: "Government", icon: RiGovernmentFill },
	{ heading: "Individual", icon: BiBody },
] as const;

const Pitch = () => {
	const router = useRouter();
	const handleCategoryClick = (category: string) => {
		const route = `/pitch/${category}/step-1`;
		return router.push(route);
	};

	return (
		<VStack spacing="24px">
			<Heading>You are : </Heading>
			<HStack spacing="24px">
				{categoryPitchArray.map((category) => (
					<Card
						key={category.heading}
						onClick={() => {
							handleCategoryClick(category.heading.toLowerCase());
						}}
					>
						<CardHeader
							display={"flex"}
							flexDirection={"column"}
							alignItems={"center"}
							justifyContent="center"
							height={"300px"}
							gap={"16px"}
						>
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
