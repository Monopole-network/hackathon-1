import { useEffect, useState } from "react";
import StepperList from "./StepperList/StepperList";
import StepNavigationButton from "./StepNavigationButton";
import { FormTemplateProps } from "./types";
import { Container, Spinner } from "@chakra-ui/react";
import { getDataCategoryForm } from "./logic.helper";

const FormTemplate = ({ previousPageUrl, nextPageUrl, children }: FormTemplateProps) => {
	const [actualStep, setActualStep] = useState<number>(0);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [data, setData] = useState<any>();

	useEffect(() => {
		if (window) {
			setIsLoading(true);
			const savedDataFromPath = getDataCategoryForm(window?.location.pathname);

			if (savedDataFromPath) {
				const parsedData = JSON.parse(savedDataFromPath);
				setData(parsedData);
				if (parsedData) {
					setActualStep(parsedData.step);
				}
				return setIsLoading(false);
			}
		}
	}, [actualStep]);
	return isLoading ? (
		<Container maxW="90%" bg="none" marginBottom={"16px"}>
			<Spinner colorScheme={"green"} display={"flex"} justifyContent={"center"} alignItems={"center"} />
		</Container>
	) : (
		<>
			<Container maxW="90%" bg="none" marginBottom={"16px"}>
				<StepperList stepList={data?.categoryForm} actualStep={actualStep} setActualStep={setActualStep} data={data} />
			</Container>
			<Container
				maxW="70%"
				bg="none"
				gap="16px"
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				marginBottom={"16px"}
			>
				{children}

				<StepNavigationButton
					actualStep={actualStep}
					previousPageUrl={previousPageUrl}
					nextPageUrl={nextPageUrl}
					data={data}
				/>
			</Container>
		</>
	);
};

export default FormTemplate;
