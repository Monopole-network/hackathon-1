import React from "react";
import { Button, Card, CardBody, CardHeader, Checkbox, Collapse, Stack } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon, RepeatIcon, SearchIcon } from "@chakra-ui/icons";

type SubFilterProps = {
	subfiltersArray: string[];
};

const SubFilter: React.FC<SubFilterProps> = ({ subfiltersArray }) => {
	const [isDisplayed, setIsDisplayed] = React.useState(false);

	const handleSubFilters: any = () => {
		setIsDisplayed(!isDisplayed);
	};

	return (
		<>
			<Stack direction="row" align="center">
				<Button
					colorScheme="blue"
					onClick={handleSubFilters}
					rightIcon={isDisplayed ? <ChevronUpIcon /> : <ChevronDownIcon />}
				>
					Filters
				</Button>
			</Stack>
			<Collapse in={isDisplayed}>
				<Card colorScheme="blue" style={{ marginTop: 20 }}>
					<CardBody>
						<Stack direction="column" align="left">
							{subfiltersArray.map((subfilter: any) => (
								<Checkbox key={subfilter}>{subfilter}</Checkbox>
							))}
						</Stack>
						<Stack style={{ marginTop: 20 }} direction="row" align="left">
							<Button variant="outline" onClick={handleSubFilters}>
								<SearchIcon />
							</Button>
							<Button variant="outline" onClick={handleSubFilters}>
								<RepeatIcon />
							</Button>
						</Stack>
					</CardBody>
				</Card>
			</Collapse>
		</>
	);
};

export default SubFilter;
