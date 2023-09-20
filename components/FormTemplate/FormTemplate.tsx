import { useEffect, useState } from "react";
import StepperList from "./StepperList/StepperList";
import StepNavigationButton from "./StepNavigationButton";
import { FormTemplateProps } from "./types";
import { Container, Heading, Spinner } from "@chakra-ui/react";
import { getDataCategoryForm, individualMockedFormData, categoryDataForm } from "./logic.helper";

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
		<Spinner />
	) : (
		<Container maxW="md" bg="none" color="white" gap="16px">
			<Heading />
			<StepperList stepList={data?.categoryForm} actualStep={actualStep} setActualStep={setActualStep} data={data} />
			{children}
			<StepNavigationButton
				actualStep={actualStep}
				previousPageUrl={previousPageUrl}
				nextPageUrl={nextPageUrl}
				data={data}
			/>
		</Container>
	);
};

export default FormTemplate;
