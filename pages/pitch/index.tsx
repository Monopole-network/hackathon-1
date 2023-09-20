import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	VStack,
	Heading,
	SimpleGrid,
	Text,
	HStack,
} from "@chakra-ui/react";
import React, { FC, useEffect } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

interface PitchProps {}

const categoryTab = [
	{ heading: "company", description: "tata toto" },
	{ heading: "government", description: "tata titi" },
	{ heading: "individual", description: "tata tutu" },
];

const Pitch: FC<PitchProps> = ({}) => {
	const router = useRouter();
	const handleCategoryClick = (category: string) => {
		const route = `/pitch/${category}/step-1`;
		return router.push(route);
	};

	return (
		<VStack spacing="24px">
			<Heading>You are : </Heading>
			<HStack spacing="24px">
				{categoryTab.map((category) => (
					<Card
						key={category.heading}
						onClick={() => {
							handleCategoryClick(category.heading);
						}}
					>
						<CardHeader>
							<Heading size="md">{category.heading}</Heading>
						</CardHeader>
						<CardBody>
							<Text>{category.description}</Text>
						</CardBody>
					</Card>
				))}
			</HStack>
		</VStack>
	);
};

export default Pitch;
