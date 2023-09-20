import {
	Step,
	StepDescription,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useSteps,
	Box,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { saveDataCategoryForm } from "../logic.helper";

type StepArrayProps = {
	stepList: {
		step: number;
		title: string;
		description: string;
		question: string;
		answer: string[];
		url: string;
	}[];
	actualStep?: number;
	setActualStep: any;
	data: any;
};

const StepperList: React.FC<StepArrayProps> = ({ actualStep, stepList, data }: StepArrayProps): JSX.Element => {
	const router = useRouter();
	const { activeStep, setActiveStep } = useSteps({
		index: actualStep,
		count: stepList?.length,
	});

	return (
		<Stepper index={activeStep} gap={"24px"}>
			{stepList?.map((step, index) => (
				<Step
					key={step.title}
					onClick={() => {
						// saveDataCategoryForm(data.category, index, data.categoryDataForm);
						router.push(step.url);
					}}
				>
					<StepIndicator>
						<StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
					</StepIndicator>

					<Box flexShrink="0">
						<StepTitle>{step.title}</StepTitle>
						<StepDescription>{step.description}</StepDescription>
					</Box>

					<StepSeparator />
				</Step>
			))}
		</Stepper>
	);
};

export default StepperList;
